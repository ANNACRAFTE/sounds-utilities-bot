const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://Daniel:Daniel1111@danieldb.iusj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}
