import {
  ITestimonialDocument,
  TestimonialResponseDTO,
} from "@/types/models/testimonial.types";

export class TestimonialMapper {
  static toDTO(item: ITestimonialDocument): TestimonialResponseDTO {
    return {
      id: item._id.toString(),
      title: item.title,
      quote: item.quote,
      position: item.position,
      company: item.company,
      imageSource: item.imageSource,
      rating: item.rating || 5,
      featured: item.featured || false,
      status: item.status,
      order: item.order || 0,
      videoUrl: item.videoUrl,
      socialMedia: item.socialMedia,
      tags: item.tags || [],
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  }

  static toDTOArray(items: ITestimonialDocument[]): TestimonialResponseDTO[] {
    return items.map((doc) => this.toDTO(doc));
  }
}
