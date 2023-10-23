export interface BaseResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}