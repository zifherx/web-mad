import {
  ITestimonialDocument,
  ITestimonialMethods,
} from "@/types/models/testimonial.types";
import { Model, Schema, models, model } from "mongoose";

const testimonialSchema = new Schema<
  ITestimonialDocument,
  Model<ITestimonialDocument>,
  ITestimonialMethods
>(
  {
    title: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      maxlength: [100, "El nombre no puede exceder 100 caracteres"],
    },
    quote: {
      type: String,
      required: [true, "El testimonio es requerido"],
      trim: true,
      maxlength: [1000, "El testimonio no puede exceder 1000 caracteres"],
    },
    position: {
      type: String,
      required: [true, "El cargo es requerido"],
      trim: true,
      maxlength: [150, "El cargo no puede exceder 150 caracteres"],
    },
    company: {
      type: String,
      trim: true,
    },
    imageSource: {
      type: String,
      required: [true, "La imagen es requerida"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["published", "draft", "archived"],
      default: "draft",
    },
    order: {
      type: Number,
      default: 0,
    },
    videoUrl: String,
    socialMedia: {
      linkedin: String,
      twitter: String,
      facebook: String,
    },
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

testimonialSchema.methods.publish = async function () {
  this.status = "publish";
  return await this.save();
};

testimonialSchema.methods.archive = async function () {
  this.status = "archived";
  return await this.save();
};

testimonialSchema.methods.toggleFeatured = async function () {
  this.featured = !this.featured;
  return await this.save();
};

testimonialSchema.statics.getFeatured = async function () {
  return this.find({ status: "published", featured: true })
    .sort({ order: 1, createdAt: -1 })
    .limit(6);
};

testimonialSchema.pre("save", function (next) {
  if (this.isModified("featured") && this.featured) {
  }
  next();
});

testimonialSchema.virtual("fullPosition").get(function () {
  return this.company ? `${this.position} en ${this.company}` : this.position;
});

export const Testimonial =
  models.Testimonial ||
  model<ITestimonialDocument>("Testimonial", testimonialSchema);
