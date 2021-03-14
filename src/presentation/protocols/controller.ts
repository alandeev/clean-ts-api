import { HttpRequest, HttpResponse } from './http'

export interface Controller{
  handle: <T>(httpRequest: HttpRequest) => HttpResponse<T>
}
