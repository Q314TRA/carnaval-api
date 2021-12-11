import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({collection:'users'})
export class User {

  @Prop()
  name: String;
  @Prop()
  phone: String;
  @Prop()
  genere: String;
  @Prop()
  age: String;
  @Prop()
  city: String;
  @Prop()
  sectionCity: String;
  @Prop()
  ocupation: [String];
  @Prop()
  use: [String];
  @Prop()
  patology: [String];
  @Prop()
  isAttendign: String;
  @Prop()
  productUsed: [String];
  @Prop()
  refillInterval: [String];
  @Prop()
  providerLocation: [String];
  @Prop()
  heltProfit: [String];
  @Prop()
  useLocation: [String];
  @Prop()
  familyAllow: String;
  @Prop()
  hasNegativeExperience: String;
  @Prop()
  hasPoliticAttack: String;
  @Prop()
  knowPolicis: String;


}

export const UserSchema = SchemaFactory.createForClass(User);