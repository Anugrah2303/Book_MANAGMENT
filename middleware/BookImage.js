import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, 'upload' );
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const bookImage = multer({storage})

export {bookImage}