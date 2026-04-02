import mongoose from "mongoose";

const ConnectDB = async () => {
    // await mongoose.connect('mongodb://localhost:27017/BookStore')
    // await mongoose.connect('mongodb+srv://Anugrah:Anugrah1234@cluster0.ziabxxx.mongodb.net/BookStore')
    await mongoose.connect('mongodb://Anugrah:Anugrah1234@ac-8sqooqg-shard-00-00.ziabxxx.mongodb.net:27017,ac-8sqooqg-shard-00-01.ziabxxx.mongodb.net:27017,ac-8sqooqg-shard-00-02.ziabxxx.mongodb.net:27017/?ssl=true&replicaSet=atlas-fxrg5h-shard-0&authSource=admin&appName=Cluster0/BookStore')
        .then(console.log('DB Connected successfully...'))
        .catch((error) => console.log('Server Error...', error))
}

export default ConnectDB

