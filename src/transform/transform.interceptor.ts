import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponse } from '../http/base.response';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, BaseResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<BaseResponse<T>> {
    const res = context.switchToHttp().getResponse();
    const status = res.statusCode;

    return next.handle().pipe(
      map((data) => ({
        statusCode: status,
        success: true,
        message: '',
        data,
      })),
    );
  }
}
