import mongoose from "mongoose";

const autor = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  personalCode: {
    required: true,
    type: String
  },
  contactData: {
    required: true,
    type: mongoose.Schema.Types.ObjectId, ref: 'ContactData'
  }
})

export default mongoose.model("Autor", autor);