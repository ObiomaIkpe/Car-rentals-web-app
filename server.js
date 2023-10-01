const app = require('./app');
const connectDB = require('./databases/connectDB');
const port = process.env.PORT || 4500;


const start = async (URL) => {
    try{await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {console.log(`listening on port ${port}`)
});
} catch (err){
    console.log(err)
}
}

start();