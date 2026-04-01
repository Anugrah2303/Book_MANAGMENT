import { BookSchema } from "../model/BookSchema.model.js"
import fs from 'fs'

export const AddBook = async (req, res) => {
    try {
        let imagePath = '';
        if (req.file) imagePath = `/upload/${req.file.filename}`
        let newBook = await BookSchema.create({
            ...req.body,
            bookImage: imagePath
        })
        return res.json({ 'Message': 'Book Added Successfully...', newBook })
    } catch (error) {
        console.log('Server Error', error)
    }
}

export const FindBook = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.json({ message: `${id} not found!!!` })
        }

        const foundedBook = await BookSchema.findById(id);

        if (!foundedBook) {
            return res.json({ message: 'Not Founded... \n This is is not exist', })
        }
        return res.json({ message: 'Founded...', foundedBook })

    } catch (error) {
        console.log('Server Error', error)
    }
}

export const ShowBooks = async (req, res) => {
         try {
        let { search, sortby, sortorder } = req.query;

        let filter = {};

        if (search) {
            filter = {
                $or: [
                    { title: { $regex: search, $options: "i" } },
                    { price: Number(search) }
                ]
            };
        }
        let sortOrder = {
            [sortby]: sortorder === "asc" ? 1 : -1
        };
        const books = await BookSchema.find(filter).sort(sortOrder);
        return res.json({message: "All Books Fetched",books});
    } catch (error) {
        console.log('Server Error', error)
    }
}

export const UpdateBook = async (req, res) => {
    try {
        let { id } = req.params;
        let Book = await BookSchema.findById(id);
        let imagePath = Book.bookImage;
        if (req.file) {
            imagePath = `/upload/${req.file.filename}`;
        }
        if (!Book) {
            return res.json({ message: 'book not found!!!' })
        }
        Book = await BookSchema.findByIdAndUpdate(id, {
            ...req.body,
            bookImage: imagePath
        }, { new: true })
        return res.json({ 'Message': 'Book Updated Successfully...', Book })
    } catch (error) {
        console.log('Server Error', error)
    }
}

export const DeleteBook = async (req, res) => {
    try {
        let { id } = req.params;
        let Book = await BookSchema.findById(id);
        if (!Book) {
            return res.json({ message: 'book not found!!!' })
        }

        if (Book.bookImage) {
            const imagePath = `.${Book.bookImage}`
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        Book = await BookSchema.findByIdAndDelete(id);

        return res.json({ message: 'Book Deleted successfully...' })
    } catch (error) {
        console.log('Server Error', error)
    }
}