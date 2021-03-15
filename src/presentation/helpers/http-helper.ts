import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (body: Error): HttpResponse<Error> => {
  return {
    statusCode: 400,
    body: body
  }
}

export const ok = <T = any>(body: T): HttpResponse<T> => {
  return {
    statusCode: 200,
    body: body
  }
}

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}
