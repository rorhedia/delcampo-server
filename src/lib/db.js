
const mongoose = require ('mongoose')

    module.exports = () => mongoose.connect(
        `mongodb+srv://vicente:kodemia@octava.mirrn.mongodb.net/test`,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        },() => {
            console.log('BD Connected')
        })


