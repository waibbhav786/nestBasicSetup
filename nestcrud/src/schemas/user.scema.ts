import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";


@Schema({
  timestamps:true,
})

export class User {

  @Prop({required:true})
  name:string;

  @Prop({required:true , unique:true , lowercase:true })
  email:string

  @Prop({required:true })
  phone:string;

  @Prop({required:true})
  password:string

  @Prop({ default: false })
  isEmailVerified?: boolean;

  @Prop({ default: false })
  isDeleted?: boolean;

}


export type UserDocument = User & Document; // 

export const USER_MODEL = User  

export const UserSchema = SchemaFactory.createForClass(User)


/* export type UserDocument = User & Document;

Explanation: This line defines a type alias in TypeScript. It's creating a new type named UserDocument. This type is a combination (&) of the User type and the Document type.

Purpose: In Mongoose, a Document represents a MongoDB document. By combining the User type (which likely represents the structure of your user data) with Document, you create a type that encompasses both the properties of your user data and the additional methods and properties provided by Mongoose for working with MongoDB.

export const USER_MODEL = User;

Explanation: This line exports a constant named USER_MODEL and assigns it the value of the User type.

Purpose: This is likely used for dependency injection in NestJS. When you create a Mongoose model for your user data using SchemaFactory.createForClass(User), you can inject this model into services or controllers. By exporting USER_MODEL, you have a reference to the User model that can be easily imported elsewhere in your application.

export const UserSchema = SchemaFactory.createForClass(User);

Explanation: This line creates a Mongoose schema for the User class using SchemaFactory.createForClass(User).

Purpose: In Mongoose, a schema defines the structure of a document, including the fields and their types. The createForClass method is a utility provided by @nestjs/mongoose that generates a Mongoose schema based on the TypeScript class (User in this case). This schema can then be used to create, update, and query documents in the MongoDB database.

*/