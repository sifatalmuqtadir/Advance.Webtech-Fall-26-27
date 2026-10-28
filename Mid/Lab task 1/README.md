# Product & Employee Management API

Course: Advanced Webtech
Task: Mid - Lab Task 1

## Student details

| SL  | Name              | ID         | Section |
| --- | ----------------- | ---------- | ------- |
| ___ | Sifat Al Muqtadir | 23-50146-1 | B       |






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

   This creates the `products` and `employees` tables. Automatic schema sync is disabled on
   purpose, so the schema only changes through migrations.
   
### Products

| Method | Endpoint        | Description                       |
| ------ | --------------- | --------------------------------- |
| POST   | `/products`     | Create and save a product         |
| GET    | `/products`     | Return all products               |
| GET    | `/products/:id` | Return one product                |
| PATCH  | `/products/:id` | Update a product (partial update) |
| DELETE | `/products/:id` | Delete a product                  |
Create body:

```json
{ "name": "Basmati Rice 5kg", "category": "Grocery", "price": 750.5, "quantity": 40 }
```
## Project structure

```
src/
  modules/
    product/                 entity, dto, service, controller, module
    employee/                entity, dto, service, controller, module
  database/migrations/       schema migration
  common/transformers/       decimal -> number transformer
screenshots/                 Postman evidence (01-create.png ... 07-confirm-delete.png)
```