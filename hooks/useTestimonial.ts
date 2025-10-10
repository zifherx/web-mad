"use client";

import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { toast } from "sonner";

import { apiClient } from "@/lib/api-client";
import { queryKeys } from "@/lib/query-keys";

import {
  CreateTestimonialDTO,
  TestimonialFilterDTO,
  TestimonialResponseDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";
import { PaginatedResponse } from "@/types/api/response.types";

// GET ALL
export function useTestimonials(
  filters?: TestimonialFilterDTO
): UseQueryResult<PaginatedResponse<TestimonialResponseDTO>, Error> {
  return useQuery({
    queryKey: queryKeys.testimonials.list(filters || {}),
    queryFn: () => apiClient.testimonials.getAll(filters),
    staleTime: 30000, // 30 seconds,
  });
}

// GET BY ID
export function useTestimonial(
  id: string
): UseQueryResult<TestimonialResponseDTO, Error> {
  return useQuery({
    queryKey: queryKeys.testimonials.detail(id),
    queryFn: () => apiClient.testimonials.getById(id),
    enabled: !!id,
    staleTime: 60000, // 1 minute
  });
}

// CREATE
export function useCreateTestimonial(): UseMutationResult<
  TestimonialResponseDTO,
  Error,
  CreateTestimonialDTO,
  unknown
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTestimonialDTO) =>
      apiClient.testimonials.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.testimonials.all,
      });
    },
  });
}

interface UpdateTestimonialVariables {
  id: string;
  data: UpdateTestimonialDTO;
}

// UPDATE
export function useUpdateTestiimonial(): UseMutationResult<
  TestimonialResponseDTO,
  Error,
  UpdateTestimonialVariables,
  unknown
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateTestimonialVariables) =>
      apiClient.testimonials.update(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.testimonials.detail(variables.id),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.testimonials.lists(),
      });
    },
  });
}

// DELETE
export function useDeleteTestimonial(): UseMutationResult<
  void,
  Error,
  string,
  unknown
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.testimonials.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.testimonials.all,
      });
    },
  });
}
