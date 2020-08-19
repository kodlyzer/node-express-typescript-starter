import { Response } from 'express';
import { ResponseStatusCodes } from './model';

export function successResponse(message: string, data: any, res: Response) {
  res.status(ResponseStatusCodes.Success).json({
    status: 'SUCCESS',
    message: message,
    data: data
  })
}

export function failureResponse(message: string, data: any, res: Response) {
  res.status(ResponseStatusCodes.Success).json({
    status: 'FAILURE',
    message: message,
    data: data
  })
}

export function insufficientParameters(res: Response) {
  res.status(ResponseStatusCodes.BadRequest).json({
    status: 'FAILURE',
    message: 'Insufficient Parameters',
    data: {}
  })
}

export function mongoError(error: any, res: Response) {
  res.status(ResponseStatusCodes.InternalServerError).json({
    status: 'FAILURE',
    message: 'MongoDB Error',
    data: error
  })
}