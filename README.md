# Rest server - userlist

## Jak začít

1. Stáhněte si tento balík (git nebo zip)
2. Nainstalujte si node: [https://nodejs.org/en/](https://nodejs.org/en/)
3. Nainstalujte si závislosti

```
$ npm install
```

3. Nastartujte server

```
$ npm start
```

## API

| Endpoint  | HTTP metoda | Popis                      |
| :-------- | :---------- | :------------------------- |
| /user     | get         | Seznam uživatelů           |
| /user     | post        | Vytvoření nového uživatele |
| /user/:id | get         | Jeden uživatel             |
| /user/:id | delete      | Smazání uživatele          |
| /user/:id | post        | Úprava uživatele           |

## Autor

- **Jan Pospíšil** - _programátor a školitel_ - [www.jan-pospisil.cz](https://www.jan-pospisil.cz)
