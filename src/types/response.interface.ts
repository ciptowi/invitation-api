export interface Response<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}