class ConflictError extends Error {
  constructor(name, statusCode) {
    super(name);
    this.statusCode = statusCode;
  }
}

module.exports = ConflictError;
