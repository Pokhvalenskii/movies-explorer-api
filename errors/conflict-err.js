class ConflictError extends Error {
  constructor(name, statusCode) {
    // super('Пользователь с таким email уже существует');
    // this.statusCode = 409;
    super(name);
    this.statusCode = statusCode;
  }
}

module.exports = ConflictError;
