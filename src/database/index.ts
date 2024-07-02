import * as mongoose from "mongoose";

export default (uri: string) => {
  try {
    mongoose.connect(uri);
  } catch (e: any) {
    console.log("Error connecting to mongo db", e.message);
  }
};
