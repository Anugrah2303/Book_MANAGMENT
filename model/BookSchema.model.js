import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    bookImage:{
        type: String,
    },
})

export const BookSchema = mongoose.model('Book', bookSchema)

