const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true },
    completed: { type:Boolean, default: false },
        user: { type: mongoose.Schema.Types.ObjectID}
});

module.exports = mongoose.model("Task", taskScheme);
