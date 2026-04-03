import { Document, Types } from "mongoose";
import { FILTER_DTO_TYPE, STATUS_TYPE_ENTRY_CMS } from "../Props.types";

export interface ISocialMedia {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface ITestimonial {
  title: string;
  quote: string;
  position: string;
  imageSource: string;
  company?: string;
  rating?: number;
  featured?: boolean;
  status: STATUS_TYPE_ENTRY_CMS;
  order?: number;
  videoUrl?: string;
  socialMedia?: ISocialMedia;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITestimonialDocument extends ITestimonial, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITestimonialMethods {
  publish(): Promise<ITestimonialDocument>;
  archive(): Promise<ITestimonialDocument>;
  toggleFeatured(): Promise<ITestimonialDocument>;
}

export type TestimonialModel = ITestimonialDocument & ITestimonialMethods;

export interface CreateTestimonialDTO {
  title: string;
  quote: string;
  position: string;
  imageSource: string;
  company?: string;
  rating?: number;
  featured?: boolean;
  status: STATUS_TYPE_ENTRY_CMS;
  order?: number;
  videoUrl?: string;
  socialMedia?: ISocialMedia;
  tags?: string[];
}

export interface UpdateTestimonialDTO extends Partial<CreateTestimonialDTO> {}

export interface TestimonialFilterDTO {
  status?: STATUS_TYPE_ENTRY_CMS;
  featured?: boolean;
  tags?: string[];
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: FILTER_DTO_TYPE;
  sortOrder?: "asc" | "desc";
}

export interface TestimonialResponseDTO {
  id: string;
  title: string;
  quote: string;
  position: string;
  imageSource: string;
  company?: string;
  rating: number;
  featured: boolean;
  status: STATUS_TYPE_ENTRY_CMS;
  order: number;
  videoUrl?: string;
  socialMedia?: ISocialMedia;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
