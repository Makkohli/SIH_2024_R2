import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({

    userId: {
      type: String,
      required: true,
      unique: true,
    },
  
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
  
    lastName: {
      type: String,
      required: false,
      trim: true,
    },
  
    email: {
      type: String,
      required: true,
      unique: true,
    },
  
    password: {
      type: String,
      required: true,
    },

    districtId: {
        type: String,
        required: true,
    },

    subDistrictId: {
        type: String,
        required: true,
    },

    facilityId: {
        type: String,
        required: true,
    },

    otp: {
      type: String,
      required: false,
    },

    otpExpiry: {
      type: Date,
      required: false,
    }
  });
  
  const User = mongoose.model("User", userSchema);

  export default User;
