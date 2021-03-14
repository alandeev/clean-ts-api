export interface HttpResponse<T> {
  statusCode: number
  body: T | any
}

export interface HttpRequest {
  body?: any
}
