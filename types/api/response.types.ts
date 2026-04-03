export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  metadata?: APIMetadata;
  error?: APIError;
}

export interface APIError {
  message: string;
  code?: string;
  details?: Record<string, any>;
  stack?: string;
}

export interface APIMetadata {
  timestamp: string;
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[]; // ✅ DEBE SER UN ARRAY
  metadata: {
    timestamp: string;
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: APIError;
}

export interface PaginatedResponseFlat<T> {
  success: boolean;
  items: T[];
  metadata: {
    timestamp: string;
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: APIError;
}
