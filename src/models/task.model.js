import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
      type: String,
      required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Al crear el esquema Task, para referenciar al usuario en mongoDB
    ref: "User",
  }
},
{
  timestamps: true
});

export default mongoose.model("Task", taskSchema); // Task es un modelo de datos que se va a guardar en la base de datos mongoDB
