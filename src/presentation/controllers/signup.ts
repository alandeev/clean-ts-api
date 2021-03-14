import { InvalidParamError } from '../errors/invalid-param-error'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, ok } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: any) {}

  handle (httpRequest: HttpRequest): HttpResponse<any> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (httpRequest.body[field] === undefined) {
        return badRequest(new MissingParamError(field))
      }
    }

    const { email } = httpRequest.body

    if (this.emailValidator.isValid(email) === false) {
      return badRequest(new InvalidParamError('email'))
    }

    return ok('Bearer adkwda')
  }
}
