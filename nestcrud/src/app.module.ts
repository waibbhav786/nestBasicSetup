import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { user } from './user/user.module';
import { MongooseModule} from '@nestjs/mongoose';
import{ConfigModule} from '@nestjs/config'
import { ProductModule } from './product/product.module';
@Module({
  imports: [  

    // configure for the .env file
    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  
  /* conect database  
  we can conect this db in both the kind of modules the root module which is the app module and the child module */

  // MongooseModule.forRoot("mongodb+srv://singhwaibbhav:00012389@cluster0.esrmjar.mongodb.net/"),
   

  // other modules
   AuthModule,
   user,
   ProductModule
  ],

})
export class AppModule {}
