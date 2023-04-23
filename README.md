# demo-site-api

![GitHub last commit](https://img.shields.io/github/last-commit/fwRelik/demo-site-api) [![demo-site-api-publish](https://github.com/fwRelik/demo-site-api/actions/workflows/publish.yml/badge.svg)](https://github.com/fwRelik/demo-site-api/actions/workflows/publish.yml)

The development and production version runs on port `4006`. If desired, you can change it in the `.env` file.

For the api to work, the `.env.local` file is required to connect to the database.

Implemented aspects such as:

-   Strict typing.
-   Working with the `MongoDB` database.
-   Creating a main page and editing text content
-   Ability to create side pages.
-   Validating incoming requests with `ValidationPipe`.
-   Protecting methods with `Guards decorators`.
-   User registration and authorization.

## Launching a project for production

Сlone this repository to yourself.

```sh
> npm install

> npm run build

> npm run start:prod
```

### Docker

```sh
> docker-compose up -d
```

## Launching a project for develepment

```sh
> npm install

> npm run start:dev
```

## Table of Contents

-   [Auth Requests](#auth-queries)
-   [Main Page Requests](#main-page-queries)
-   [Room Page Requests](#room-page-queries)

---

## Auth Queries

| Method | Path                 | Headers |
| ------ | -------------------- | ------- |
| POST   | `/api/auth/login`    | null    |
| POST   | `/api/auth/register` | null    |

### Auth Interface

```ts
{
	email: string;
	passwordHash: string;
}
```

### Atuh Response

```ts
{
	access_token: string;
}
```

---

## Main Page Queries

| Method | Path             | Headers                       |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/page/main` | null                          |
| POST   | `/api/page/main` | `Authorization: Bearer [JWT]` |
| PATCH  | `/api/page/main` | `Authorization: Bearer [JWT]` |

### Main Page Interface

```ts
{
	title: string;
	description: string;
	removable: boolean;
	languagePack: LanguagePack;
}
```

---

## Room Page Queries

| Method | Path                 | Headers                       |
| ------ | -------------------- | ----------------------------- |
| GET    | `/api/page/room`     | null                          |
| GET    | `/api/page/room/:id` | null                          |
| POST   | `/api/page/room`     | `Authorization: Bearer [JWT]` |
| PATCH  | `/api/page/room/:id` | `Authorization: Bearer [JWT]` |
| DELETE | `/api/page/room/:id` | `Authorization: Bearer [JWT]` |

### Room Page Interface

```ts
{
	title: string;
	description: string;
	removable: boolean;
	languagePack: LanguagePack;
	roomName: string;
	roomType: string;
	roomDescription: string;
	roomImagePath: string;
}
```
