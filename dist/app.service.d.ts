import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
export declare class AppService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getHello(): string;
    createUserField(userData: any): Promise<User>;
}
