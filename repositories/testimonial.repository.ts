import { FilterQuery, UpdateQuery } from "mongoose";
import {
  CreateTestimonialDTO,
  ITestimonial,
  ITestimonialDocument,
  TestimonialFilterDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";
import { Testimonial } from "@/models/Testimonial";

export interface ITestimonialRepository {
  findAll(
    filters: TestimonialFilterDTO
  ): Promise<{ data: ITestimonialDocument[]; total: number }>;
  findById(id: string): Promise<ITestimonialDocument | null>;
  create(data: CreateTestimonialDTO): Promise<ITestimonialDocument>;
  update(
    id: string,
    data: UpdateTestimonialDTO
  ): Promise<ITestimonialDocument | null>;
  delete(id: string): Promise<ITestimonialDocument | null>;
  findPublished(limit?: number): Promise<ITestimonialDocument[]>;
  toggleFeatured(id: string): Promise<ITestimonialDocument>;
  count(filters?: FilterQuery<ITestimonialDocument>): Promise<number>;
}

export class TestimonialRepository implements ITestimonialRepository {
  async findAll(
    filters: TestimonialFilterDTO
  ): Promise<{ data: ITestimonialDocument[]; total: number }> {
    const {
      featured,
      limit = 10,
      page = 1,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
      status,
      tags,
    } = filters;

    const query: FilterQuery<ITestimonialDocument> = {};

    if (status) query.status = status;
    if (featured !== undefined) query.featured = featured;
    if (tags && tags.length > 0) query.tags = { $in: tags };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { quote: { $regex: search, $options: "i" } },
        { position: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const sort: Record<string, 1 | -1> = {
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    };

    const [data, total] = await Promise.all([
      Testimonial.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean<ITestimonialDocument[]>()
        .exec(),
      Testimonial.countDocuments(query).exec(),
    ]);

    return { data, total };
  }

  async findById(id: string): Promise<ITestimonialDocument | null> {
    return await Testimonial.findById(id).lean<ITestimonialDocument>().exec();
  }

  async create(data: CreateTestimonialDTO): Promise<ITestimonialDocument> {
    const testimonial = new Testimonial(data);
    return await testimonial.save();
  }

  async update(
    id: string,
    data: UpdateTestimonialDTO
  ): Promise<ITestimonialDocument | null> {
    const updateData: UpdateQuery<ITestimonialDocument> = { $set: data };

    return await Testimonial.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    })
      .lean<ITestimonialDocument>()
      .exec();
  }

  async delete(id: string): Promise<ITestimonialDocument | null> {
    return await Testimonial.findByIdAndDelete(id)
      .lean<ITestimonialDocument>()
      .exec();
  }

  async findPublished(limit: number = 10): Promise<ITestimonialDocument[]> {
    return await Testimonial.find({ status: "published" })
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .limit(limit)
      .lean<ITestimonialDocument[]>()
      .exec();
  }

  async toggleFeatured(id: string): Promise<ITestimonialDocument> {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      throw new Error("Testimonio no existe");
    }
    return await testimonial.toggleFeatured();
  }

  async count(
    filters: FilterQuery<ITestimonialDocument> = {}
  ): Promise<number> {
    return await Testimonial.countDocuments(filters).exec();
  }
}

export const testimonialRepository = new TestimonialRepository();
