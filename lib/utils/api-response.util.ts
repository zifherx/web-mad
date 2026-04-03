import { NextResponse } from "next/server";

import {
  APIError,
  APIMetadata,
  APIResponse,
  PaginatedResponse,
} from "@/types/api/response.types";
import { HTTP_RESPONSE } from "@/utils/Constants";

export class APIResponseUtil {
  static success<T>(
    data: T,
    metadata?: Partial<APIMetadata>,
    status: number = 200
  ): NextResponse<APIResponse<T>> {
    const response: APIResponse<T> = {
      success: true,
      data,
      metadata: metadata
        ? {
            timestamp: new Date().toISOString(),
            ...metadata,
          }
        : undefined,
    };
    return NextResponse.json(response, { status });
  }

  static paginated<T>(
    data: T[],
    page: number,
    limit: number,
    total: number
  ): NextResponse<PaginatedResponse<T>> {
    const response: PaginatedResponse<T> = {
      success: true,
      data,
      metadata: {
        timestamp: new Date().toISOString(),
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
    return NextResponse.json(response, { status: 200 });
  }

  static error<T>(
    message: string,
    status: number = 500,
    code?: string,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    const error: APIError = {
      message,
      code,
      details,
      stack:
        process.env.NODE_ENV === "development" ? new Error().stack : undefined,
    };

    const response: APIResponse = {
      success: false,
      error,
      metadata: {
        timestamp: new Date().toISOString(),
      },
    };
    return NextResponse.json(response, { status });
  }

  static badRequest(
    message: string = HTTP_RESPONSE.BAD_REQUEST.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.BAD_REQUEST.code,
      HTTP_RESPONSE.BAD_REQUEST.value,
      details
    );
  }

  static unauthorized(
    message: string = HTTP_RESPONSE.UNAUTHORIZED.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.UNAUTHORIZED.code,
      HTTP_RESPONSE.UNAUTHORIZED.value,
      details
    );
  }

  static forbidden(
    message: string = HTTP_RESPONSE.FORBIDDEN.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.FORBIDDEN.code,
      HTTP_RESPONSE.FORBIDDEN.value,
      details
    );
  }

  static notFound(
    message: string = HTTP_RESPONSE.NOT_FOUND.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.NOT_FOUND.code,
      HTTP_RESPONSE.NOT_FOUND.value,
      details
    );
  }

  static conflict(
    message: string = HTTP_RESPONSE.CONFLICT.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.CONFLICT.code,
      HTTP_RESPONSE.CONFLICT.value,
      details
    );
  }

  static internalError(
    message: string = HTTP_RESPONSE.INTERNAL_ERROR.message,
    details?: Record<string, any>
  ): NextResponse<APIResponse> {
    return this.error(
      message,
      HTTP_RESPONSE.INTERNAL_ERROR.code,
      HTTP_RESPONSE.INTERNAL_ERROR.value,
      details
    );
  }
}
