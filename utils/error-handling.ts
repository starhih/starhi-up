'use client';

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/**
 * Custom error class for validation errors
 */
export class ValidationError extends Error {
  fields: Record<string, string>;

  constructor(message: string, fields: Record<string, string> = {}) {
    super(message);
    this.name = 'ValidationError';
    this.fields = fields;
  }
}

/**
 * Handle errors in a consistent way
 * @param error The error to handle
 * @param fallbackMessage A fallback message if the error doesn't have one
 * @returns A user-friendly error message
 */
export function handleError(error: unknown, fallbackMessage = 'An unexpected error occurred'): string {
  if (error instanceof ApiError) {
    return `API Error (${error.status}): ${error.message}`;
  }

  if (error instanceof ValidationError) {
    return `Validation Error: ${error.message}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
}

/**
 * Log errors to the console in development mode
 * @param error The error to log
 * @param context Additional context for the error
 */
export function logError(error: unknown, context?: string): void {
  // Safe to use in both client and server components
  if (typeof window !== 'undefined') {
    // Client-side
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error${context ? ` in ${context}` : ''}:`, error);
    }
  } else {
    // Server-side
    console.error(`Server Error${context ? ` in ${context}` : ''}:`, error);
  }
}

/**
 * Safely execute a function and handle any errors
 * @param fn The function to execute
 * @param errorHandler A function to handle any errors
 * @returns The result of the function or undefined if an error occurred
 */
export async function tryCatch<T>(
  fn: () => Promise<T>,
  errorHandler?: (error: unknown) => void
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    if (errorHandler) {
      errorHandler(error);
    } else {
      logError(error);
    }
    return undefined;
  }
}
