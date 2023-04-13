export class AppError extends Error {
  readonly status: number
  readonly code: string
  readonly isOperational: boolean

  constructor(
    status: number,
    code: string,
    message: string,
    isOperational = true
  ) {
    super(message)
    this.status = status
    this.code = code
    this.isOperational = isOperational

    Object.setPrototypeOf(this, new.target.prototype)
  }

  toJSON() {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
    }
  }
}
