import { HttpStatusCode } from "./statusCodes";

export interface TsError extends Error {
  errorCode: HttpStatusCode;
  errorParams?: Object;
}

export class TsException extends Error implements TsError {
  errorCode: HttpStatusCode;
  errorParams?: Object;
  isCaptureStackTrace?: boolean;

  constructor(message: string, errorCode: HttpStatusCode, errorParams?: Object, isCaptureStackTrace?: boolean) {
    super(message);
    this.errorCode = errorCode;
    this.errorParams = errorParams;
    this.isCaptureStackTrace = isCaptureStackTrace;
  }

  toString() {
    const info = {
      message: this.message,
      errorCode: this.errorCode,
      errorParams: this.errorParams,
    };

    if (this.isCaptureStackTrace) {
      return JSON.stringify({ ...info, stack: this.stack });
    }
    return JSON.stringify(info);
  }
}
