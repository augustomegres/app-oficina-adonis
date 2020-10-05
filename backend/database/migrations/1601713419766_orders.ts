import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Orders extends BaseSchema {
  protected tableName = "orders";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table
        .integer("sellerId")
        .unsigned()
        .references("sellers.id")
        .onDelete("cascade")
        .notNullable();

      table
        .integer("customerId")
        .unsigned()
        .references("customers.id")
        .onDelete("cascade")
        .notNullable();

      table.text("description").notNullable();
      table.dateTime("initialDate").notNullable();
      table.integer("prevision");
      table.dateTime("completionDate");
      table.decimal("price", 10, 2);
      table.decimal("amountSpent", 10, 2);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
