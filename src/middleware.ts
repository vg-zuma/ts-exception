import { Request, Response, NextFunction } from 'express';
import { TsException } from './exception';
import { HttpStatusCode } from './statusCodes';

export type Retry = (err: TsException, req: Request, res: Response, next: NextFunction) => void;

export function TsExceptionHandler(retryCallback: Retry) {
  return (err: TsException, req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("this is the middleware handler");
      if (err.errorCode === HttpStatusCode.InternalServerError) {
        retryCallback(err, req, res, next);
      } else {
        res.status(err.errorCode).send(err.toString());
      }
    } catch (error) {
      console.log("exception caugth");
      next(error);
    }
  }
}