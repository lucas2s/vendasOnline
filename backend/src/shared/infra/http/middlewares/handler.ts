import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import AppError from '@shared/errors/AppError';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, _) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Falha de validação', errors });
  }
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({ message: 'Erro interno do servidor' });
};

export default errorHandler;
