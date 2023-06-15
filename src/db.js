import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://timburtonmarco:cluster0@cluster0.4tc6w6i.mongodb.net/", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true});
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
