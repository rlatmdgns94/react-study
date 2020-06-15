const mongoose = require("mongoose");
const subscriberSchema = mongoose.Schema(
  {
    userTo: {
      type: Schema.Tyoes.ObjectId,
      ref: "User",
    },
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subscriber = mongoose.model("Subscriber", videoSchema);

module.exports = { Subscriber };
