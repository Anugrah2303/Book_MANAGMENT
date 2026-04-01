import express from "express";
import { AddBook, DeleteBook, FindBook, ShowBooks, UpdateBook } from "../controller/Book.controller.js";
import { bookImage } from "../middleware/BookImage.js";

const router = express.Router()

router.get('/all-books', ShowBooks)

router.post('/add-book', bookImage.single('bookImage'),AddBook)

router.get('/:id', FindBook)

router.put('/update-book/:id',bookImage.single('bookImage'), UpdateBook)

router.delete('/delete-book/:id', DeleteBook)

export default router