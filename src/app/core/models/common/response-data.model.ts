export class ResponseData {
  statusCode: number;
  errorMessage: string;
  timestamp: Date;
  details: string;
}

export class ResponseItem<T> extends ResponseData {
  content: T;
}

export class ResponseList<T> extends ResponseData {
  content: T[];
}

export class ResponseErrorData {
  timestamp: Date;
  status: number;
  error: string;
  message: string;
  path: string;
  type: string;
}
