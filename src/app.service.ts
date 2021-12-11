import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getHello(): string {
    return '';
  }

  async createUserField(userData: any): Promise<User> {
    const createUser = new this.userModel(userData);
    return createUser.save();
  }
}
