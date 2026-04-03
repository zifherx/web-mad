import {
  ITestimonialRepository,
  testimonialRepository,
} from "@/repositories/testimonial.repository";
import {
  CreateTestimonialDTO,
  TestimonialFilterDTO,
  TestimonialResponseDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";
import { TestimonialMapper } from "@/lib/utils/mapper.util";

export interface ITestimonialService {
  getAllTestimonials(
    filters: TestimonialFilterDTO
  ): Promise<{ testimonials: TestimonialResponseDTO[]; total: number }>;
  getTestimonialById(id: string): Promise<TestimonialResponseDTO>;
  createTestimonial(
    data: CreateTestimonialDTO
  ): Promise<TestimonialResponseDTO>;
  updateTestimonial(
    id: string,
    data: UpdateTestimonialDTO
  ): Promise<TestimonialResponseDTO>;
  deleteTestimonial(id: string): Promise<void>;
  getPublishedTestimonials(limit?: number): Promise<TestimonialResponseDTO[]>;
  toggleFeatured(id: string): Promise<TestimonialResponseDTO>;
}

export class TestimonialService implements ITestimonialService {
  constructor(private repository: ITestimonialRepository) {}

  async getAllTestimonials(
    filters: TestimonialFilterDTO
  ): Promise<{ testimonials: TestimonialResponseDTO[]; total: number }> {
    try {
      const { data, total } = await this.repository.findAll(filters);
      const testimonials = TestimonialMapper.toDTOArray(data);

      return { testimonials, total };
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      throw new Error("No se pudieron obtener los testimonios");
    }
  }

  async getTestimonialById(id: string): Promise<TestimonialResponseDTO> {
    try {
      const testimonial = await this.repository.findById(id);
      if (!testimonial) {
        throw new Error("Testimonio no encontrado");
      }
      return TestimonialMapper.toDTO(testimonial);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      throw err;
    }
  }

  async createTestimonial(
    data: CreateTestimonialDTO
  ): Promise<TestimonialResponseDTO> {
    try {
      const testimonial = await this.repository.create(data);
      return TestimonialMapper.toDTO(testimonial);
    } catch (err) {
      console.error("Error creating testimonial:", err);
      throw new Error("No se pudo crear el testimonio");
    }
  }

  async updateTestimonial(
    id: string,
    data: UpdateTestimonialDTO
  ): Promise<TestimonialResponseDTO> {
    try {
      const testimonial = await this.repository.update(id, data);

      if (!testimonial) {
        throw new Error("Testimonio no encontrado");
      }

      return TestimonialMapper.toDTO(testimonial);
    } catch (err) {
      console.error("Error updating testimonial:", err);
      throw new Error("No se pudo actualizar el testimonio");
    }
  }

  async deleteTestimonial(id: string): Promise<void> {
    try {
      const testimonial = await this.repository.delete(id);

      if (!testimonial) {
        throw new Error("Testimonio no encontrado");
      }
    } catch (err) {
      console.error("Error deleting testimonial:", err);
      throw new Error("No se pudo eliminar el testimonio");
    }
  }

  async getPublishedTestimonials(
    limit?: number
  ): Promise<TestimonialResponseDTO[]> {
    try {
      const testimonials = await this.repository.findPublished(limit);
      return TestimonialMapper.toDTOArray(testimonials);
    } catch (err) {
      console.error("Error fetching published testimonial:", err);
      throw new Error("No se pudieron obtener los testimonios publicados");
    }
  }

  async toggleFeatured(id: string): Promise<TestimonialResponseDTO> {
    try {
      const testimonial = await this.repository.toggleFeatured(id);
      return TestimonialMapper.toDTO(testimonial);
    } catch (err) {
      console.error("Error toggling featured:", err);
      throw new Error("No se pudo cambiar el estado destacado");
    }
  }
}

export const testimonialService = new TestimonialService(testimonialRepository);
