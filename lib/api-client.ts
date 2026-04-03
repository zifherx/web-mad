import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { APIResponse, PaginatedResponse } from "@/types/api/response.types";
import {
  CreateTestimonialDTO,
  TestimonialFilterDTO,
  TestimonialResponseDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<APIResponse>) => {
    console.error("API Error:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      //redirect to Login
    }
    return Promise.reject(error);
  }
);

class APIClient {
  private async request<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await axiosInstance.request<APIResponse>({
        url: endpoint,
        ...config,
      });

      const data = response.data;

      if (!data.success) {
        throw new Error(data.error?.message || "Error en la petición");
      }

      return data as T;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const apiError = err.response?.data as APIResponse;
        throw new Error(apiError.error?.message || err.message);
      }
      throw err;
    }
  }

  testimonials = {
    getAll: (
      params?: TestimonialFilterDTO
    ): Promise<PaginatedResponse<TestimonialResponseDTO>> => {
      return this.request<PaginatedResponse<TestimonialResponseDTO>>(
        `/testimonial`,
        {
          method: "GET",
          params,
        }
      );
    },

    getById: (id: string): Promise<TestimonialResponseDTO> => {
      return this.request<TestimonialResponseDTO>(`/testimonial/${id}`, {
        method: "GET",
      });
    },

    create: (data: CreateTestimonialDTO): Promise<TestimonialResponseDTO> => {
      return this.request<TestimonialResponseDTO>("/testimonial", {
        method: "POST",
        data,
      });
    },

    update: (
      id: string,
      data: UpdateTestimonialDTO
    ): Promise<TestimonialResponseDTO> => {
      return this.request<TestimonialResponseDTO>(`/testimonial/${id}`, {
        method: "PATCH",
        data,
      });
    },

    delete: (id: string): Promise<void> => {
      return this.request<void>(`/testimonial/${id}`, {
        method: "DELETE",
      });
    },

    toggleFeatured: (id: string): Promise<TestimonialResponseDTO> => {
      return this.request<TestimonialResponseDTO>(
        `/testimonial/${id}/featured`,
        {
          method: "PATCH",
        }
      );
    },
  };
}

export const apiClient = new APIClient();
