import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/BookStore')
        .then(console.log('DB Connected successfully...'))
        .catch((error) => console.log('Server Error...', error))
}

export default ConnectDB

