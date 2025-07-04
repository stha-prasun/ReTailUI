import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Buttons",
        "Forms",
        "Modals",
        "Navigation",
        "Cards",
        "Alerts",
        "Other",
      ],
    },
    tags: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Component = mongoose.model("Component", componentSchema);
