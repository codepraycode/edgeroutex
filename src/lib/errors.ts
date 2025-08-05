export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export class PermissionError extends AuthError {
  constructor(message = "Insufficient permissions") {
    super(message);
    this.name = "PermissionError";
  }
}