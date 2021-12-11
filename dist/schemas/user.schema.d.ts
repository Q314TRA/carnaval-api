import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: String;
    phone: String;
    genere: String;
    age: String;
    city: String;
    sectionCity: String;
    ocupation: [String];
    use: [String];
    patology: [String];
    isAttendign: String;
    productUsed: [String];
    refillInterval: [String];
    providerLocation: [String];
    heltProfit: [String];
    useLocation: [String];
    familyAllow: String;
    hasNegativeExperience: String;
    hasPoliticAttack: String;
    knowPolicis: String;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, any>;
