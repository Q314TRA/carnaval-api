import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from './schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ap3:dFs5o9vZHtCWQ6Vv@ap3.9xjpr.mongodb.net/carnaval?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
