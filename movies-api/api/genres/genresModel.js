import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const GenresSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String }
});

GenresSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Genres', GenresSchema);