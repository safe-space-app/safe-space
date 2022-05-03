import mongoose from 'mongoose';
const { Schema , model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  favorites: { type: [Number], required: false},
  defaultLocation: { type: Number, required: false}
});

const User = model('User', userSchema);

export default User;