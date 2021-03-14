import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse<Error> => {
  return {
    statusCode: 400,
    body: error
  }
}

export const ok = (body: any): HttpResponse<any> => {
  return {
    statusCode: 200,
    body: body
  }
}
