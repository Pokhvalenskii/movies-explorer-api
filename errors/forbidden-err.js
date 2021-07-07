class Forbidden extends Error {
  constructor() {
    super('Вы не можете удалить фильм');
    this.statusCode = 403;
  }
}

module.exports = Forbidden;
