import { Response } from 'express';
import { ResponseStatusCodes } from './model';

export function successResponse(message: string, data: any, res: Response) {
  res.status(ResponseStatusCodes.Success).json({
    STATUS: 'SUCCESS',
    MESSAGE: message,
    DATA: data
  })
}

export function failureResponse(message: string, data: any, res: Response) {
  res.status(ResponseStatusCodes.Success).json({
    STATUS: 'FAILURE',
    MESSAGE: message,
    DATA: data
  })
}

export function insufficientParameters(res: Response) {
  res.status(ResponseStatusCodes.BadRequest).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Insufficient Parameters',
    DATA: {}
  })
}

export function mongoError(error: any, res: Response) {
  res.status(ResponseStatusCodes.InternalServerError).json({
    STATUS: 'FAILURE',
    MESSAGE: 'MongoDB Error',
    DATA: error
  })
}