diploma - api
===============================

#### Сервер работает по адресу: 
`https://api.lenskii.nomoredomains.icu/`

#### возвращает информацию о пользователе (email и имя)
`GET /users/me`

#### обновляет информацию о пользователе (email и имя)
`PATCH /users/me`

#### возвращает все сохранённые пользователем фильмы
`GET /movies`

#### создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId 
`POST /movies`

#### удаляет сохранённый фильм по id
`DELETE /movies/movieId`

#### создаёт пользователя с переданными в теле email, password и name
`POST /signup`

#### проверяет переданные в теле почту и пароль и возвращает JWT
`POST /signin`
