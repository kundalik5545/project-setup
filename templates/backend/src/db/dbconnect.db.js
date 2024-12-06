import mongoose from "mongoose";

const connectdb = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // THis is for localhost
    const mongoDBInstance = await mongoose.connect(
      `${process.env.MongoDB_URI}/${process.env.DB_NAME}`
    );

    console.log("🚀MongoDB connected successfully !!!");
  } catch (err) {
    console.error("Mongodb connection failed!!!", err);
    process.exit(1);
  }
};

export default connectdb;
