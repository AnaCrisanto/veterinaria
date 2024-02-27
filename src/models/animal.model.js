import mongoose from 'mongoose';

const { Schema } = mongoose;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerContact: {
        type: Number,
        required: true
    }
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
