import { BadRequestException, Body, Injectable, ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { USER_MODEL, UserDocument } from "../schemas/user.scema";
import { Model } from 'mongoose';
import { CreateUserDTO } from "./dto";
import * as bcrypt from  'bcrypt';
import { LoginDto } from "./dto/login.dto";
import * as jwt from "jsonwebtoken"
const mongoose = require('mongoose');

@Injectable({})
export class UserService {
   constructor(@InjectModel('USER_MODEL') private UserModel:Model<UserDocument>){
   } 



   //login function 
   async login(@Body() loginDto:LoginDto){
     const data = loginDto
     const userEmail = data.email.toLowerCase()
    const userData:any = await this.UserModel.aggregate([
    {
      $match:{
         email:userEmail
      }
    },
    {
      $project:{
        "name":"$name",
        "email":"$email",
        "phone":"$phone",
        "isEmailVerified":"$isEmailVerified",
        "createdAt":"$createdAt",
        "updatedAt":"$updatedAt",
        "password":"$password"
      },
    }
    ])
     if(userData){
      const match = await bcrypt.compare(data?.password , userData[0]?.password);
      if(match) {
        const token = await jwt.sign({userData},"secret",{expiresIn:"90d"})
        userData[0].token = token
        return  {
          "success": true,
          "message": "Login successful",
          "user": userData[0]
        }
      }else{
       return "wrong password"
      }
     }else{
       return "email not found"
     }
    }



  // register 
    async register(createUserDto: CreateUserDTO) {
      const salt = await bcrypt.genSalt();
      createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
        try {
          const createdUser = await this.UserModel.create(createUserDto);
          return createdUser;
        } catch (error) {
          if (error.name === "ValidationError") {
            throw new BadRequestException(error.errors);
          }
          throw new ServiceUnavailableException();
        }
      }


    // authentication 
    async authentication(id:any): Promise<any> {
      try {
        let user = await this.UserModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id), isDeleted: false } },
            // {
            //     $lookup: {
            //         from: 'roles',
            //         let: { role: '$role' },
            //         pipeline: [
            //             {
            //                 $match: {
            //                     $expr: {
            //                         $and: [
            //                             { $eq: ["$_id", "$$role"] }
            //                         ]
            //                     }
            //                 }
            //             },
            //             {
            //                 $project: {
            //                     isDeleted: 0
            //                 }
            //             }
            //         ],
            //         as: 'role'
            //     }
            // },
            // { $unwind: "$role" }
        ]);
        if (user && user.length) return user[0];
        return null;
    } catch (error) {
        return error;
    }
        }
        
}




/*@InjectModel('USER_MODEL'):

Explanation: The @InjectModel() decorator is provided by the @nestjs/mongoose package. It is used for dependency injection in NestJS when working with Mongoose models. In this case, it tells NestJS to inject the Mongoose model associated with the 'USER_MODEL' token.
Purpose: When you use @InjectModel('USER_MODEL'), you are injecting the Mongoose model that you likely registered with MongooseModule using MongooseModule.forFeature([{ name: 'USER_MODEL', schema: UserSchema }]). This allows you to use the UserModel in your service or controller for database operations.
private UserModel: Model<UserDocument>:

Explanation: This declares a private property named UserModel of type Model<UserDocument>. The Model type is a generic type provided by Mongoose, and UserDocument is a type that combines the user data structure (User) with the Document type.
Purpose: The injected UserModel can be used to interact with the MongoDB database. It provides methods for performing CRUD operations (create, read, update, delete) on documents in the 'USER_MODEL' collection.

*/