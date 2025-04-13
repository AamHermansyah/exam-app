import { clsx, type ClassValue } from "clsx"
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export function formatDate(date: Date, config?: { withTime?: boolean }): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  if (config?.withTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.hour12 = false; // pakai format 24 jam, misal: 13:45
  }

  return new Intl.DateTimeFormat('id-ID', options).format(date);
}

export function isSubmissionExpired(expireAt?: Date | string): boolean {
  if (!expireAt) return false;

  const now = new Date();
  const expireDate = new Date(expireAt);
  return expireDate.getTime() < now.getTime();
}

export type ReturnError = { status: string; message: string };

// Overload signatures
export function handleCatchError(error: unknown, type: 'return'): ReturnError;
export function handleCatchError(error: unknown, type: 'throw'): string;

// Implementation
export function handleCatchError(error: unknown, type: 'return' | 'throw' = 'return'): ReturnError | string {
  if (error instanceof TokenExpiredError) {
    if (type === 'return') {
      return {
        status: 'error',
        message: 'Token kadaluarsa, silahkan login lagi'
      };
    } else {
      return 'Token has expired. Please login again.';
    }
  }

  if (error instanceof JsonWebTokenError) {
    if (type === 'return') {
      return {
        status: 'error',
        message: 'Invalid token'
      };
    } else {
      return 'Invalid token. Authorization failed.';
    }
  }

  const message = (error as Error).message;

  if (type === 'return') {
    return {
      status: 'error',
      message
    };
  } else {
    return `Failed to fetch data: ${message}`;
  }
}

