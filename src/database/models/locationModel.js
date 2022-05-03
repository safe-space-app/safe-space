import mongoose from 'mongoose';
const { Schema , model } = mongoose;

const locationSchema = new Schema ({
  locationId: Number,
  upvotes: Number,
  downvotes: Number,
});

const Location = model('Location', locationSchema);

export default Location;