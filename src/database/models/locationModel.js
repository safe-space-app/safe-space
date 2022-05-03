import mongoose from 'mongoose';
const { Schema , model } = mongoose;

const locationSchema = new Schema ({
  locationId: {type: String, required: true},
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0},
});

const Location = model('Location', locationSchema);

export default Location;