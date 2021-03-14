export interface HttpResponse<T extends any> {
  statusCode: number
  body: T | any
}

export interface HttpRequest {
  body?: any
}
