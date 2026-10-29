# Product & Employee Management API

Course: Advanced Webtech, Department of CSE, American International University - Bangladesh (AIUB)
Assignment: Mid - Lab Task 1

## Student details

| SL  | Name              | ID         | Section |
| --- | ----------------- | ---------- | ------- |
|  12 | Sifat Al Muqtadir | 23-50146-1 | B       |

## Tech stack

NestJS 11, TypeScript, TypeORM, PostgreSQL, class-validator, Swagger, pnpm.

## Prerequisites

- Node.js 22 or newer (tested with Node 22)
- pnpm (`npm install -g pnpm`)
- PostgreSQL 14 or newer, running on `localhost:5432`

## Database setup

1. Create an empty database (using pgAdmin, or `psql`):

   ```sql
   CREATE DATABASE product_management;
   ```

2. Copy the sample environment file and put in your own PostgreSQL password:

   ```powershell
   copy .env.example .env
   ```

   Then edit `.env` and set `DB_PASSWORD` (and `DB_USER` / `DB_PORT` if yours are different).
   The real `.env` file is git-ignored and must never be committed.

3. Create the tables by running the migration:

   ```powershell
   pnpm run migration:run
   ```


The server starts on `http://localhost:5001`.
Interactive Swagger documentation is available at `http://localhost:5001/api`.

## Endpoints

### Products

| Method | Endpoint        | Description                       |
| ------ | --------------- | --------------------------------- |
| POST   | `/products`     | Create and save a product         |
| GET    | `/products`     | Return all products               |
| GET    | `/products/:id` | Return one product                |
| PATCH  | `/products/:id` | Update a product                  |
| DELETE | `/products/:id` | Delete a product                  |

Create body:

```json
{ "name": "biriani Rice 1kg", "category": "Grocery", "price": 150.5, "quantity": 20 }
```

### Employees

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| POST   | `/employees`     | Create and save an employee         |
| GET    | `/employees`     | Return all employees                |
| GET    | `/employees/:id` | Return one employee                 |
| PATCH  | `/employees/:id` | Update an employee                  |
| DELETE | `/employees/:id` | Delete an employee                  |

Create body:

```json
{
  "name": "Sifat Al Muqtadir",
  "email": "sifat@example.com",
  "phone": "01708878128",
  "password": "sifat113",
  "age": 25,
  "yearsOfWorking": 4
}
```

## Design notes

- Each feature is a NestJS module (`module`, `controller`, `service`, `entity`, `dto`).
  All database operations live in the service, through the TypeORM repository.
- Request bodies are validated with DTOs and a global `ValidationPipe` (unknown fields are rejected).
- A missing record returns `404`, invalid input returns `400`, a duplicate employee email returns `409`.
- Employee passwords are hashed (argon2) before saving and are never returned in responses.
