export interface BaseResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

export function paginateResponse(data: any, page: number, size: number) {
  const [result, total] = data;
  const lastPage = Math.ceil(total / size);
  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    data: [...result],
    count: total,
    currentPage: page,
    nextPage: nextPage,
    prevPage: prevPage,
    lastPage: lastPage,
  };
}
