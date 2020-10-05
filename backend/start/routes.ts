/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

/* -------------------------------------------------------------------------- */
/*                                  CLIENTES                                  */
/* -------------------------------------------------------------------------- */

Route.get("/customers/:id", "CustomersController.show");
Route.get("/customers", "CustomersController.index");
Route.post("/customers", "CustomersController.store");

/* -------------------------------------------------------------------------- */
/*                                 VENDEDORES                                 */
/* -------------------------------------------------------------------------- */

Route.get("/sellers/:id", "SellersController.show");
Route.get("/sellers", "SellersController.index");
Route.post("/sellers", "SellersController.store");

/* -------------------------------------------------------------------------- */
/*                                   PEDIDOS                                  */
/* -------------------------------------------------------------------------- */

Route.get("/orders/:id", "OrdersController.show");
Route.get("/orders", "OrdersController.index");
Route.post("/orders", "OrdersController.store");
