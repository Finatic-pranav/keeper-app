const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/keeperDB", {useNewUrlParser: true});

const keeperSchema = new mongoose.Schema({
    title:String,
    content:String
});

const Keeper = mongoose.model("Keeper", keeperSchema);

// const data = new Keeper({
//     title:asds,
//     content:sasaf
// });

// data.save();