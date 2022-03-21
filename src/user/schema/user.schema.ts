import { Schema } from "mongoose";
import { hash } from "bcrypt";
import isEmail from "validator/lib/isEmail";

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: isEmail
    },
    password: {
        type: String,
        required: true,
    },
    ownedCard: [{
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
    }]
});

UserSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      // tslint:disable-next-line:no-string-literal
      const hashed = await hash(this['password'], 10);
      // tslint:disable-next-line:no-string-literal
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });