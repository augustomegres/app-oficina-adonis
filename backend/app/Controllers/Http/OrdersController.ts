import Order from "App/Models/Order";

export default class OrdersController {
  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE LISTAGEM                             */
  /* -------------------------------------------------------------------------- */

  public async index({ request, response }) {
    const data = request.only([
      "sellerId", //
      "customerId", //
      "description", //
      "initialDate",
      "prevision", //
      "completionDate",
      "amountSpent",
      "minimumPrice",
      "maximumPrice",
    ]);

    /* --------------- NECESSÁRIO, CASO O CAMPO NÃO SEJA INFORMADO -------------- */

    if (!data.sellerId) data.sellerId = "";
    if (!data.customerId) data.customerId = "";
    if (!data.description) data.description = "";
    if (!data.prevision) data.prevision = "";
    if (!data.initialDate) data.initialDate = "1970-1-1";
    if (!data.completionDate) data.completionDate = "2999-1-1";
    if (!data.minimumPrice) data.minimumPrice = 0;
    if (!data.maximumPrice) data.maximumPrice = 99999999999;
    if (!data.page) data.page = 1; //NÃO NECESSÁRIO, MAS REMOVE O AVISO.

    /* --------------------------- CONSTRUINDO A QUERY -------------------------- */

    try {
      const orders = await Order.query()
        .where("sellerId", "LIKE", "%" + data.sellerId + "%")
        .where("customerId", "LIKE", "%" + data.customerId + "%")
        .where("description", "LIKE", "%" + data.description + "%")
        .where("prevision", "LIKE", "%" + data.prevision + "%")
        .where("initialDate", ">=", data.initialDate)
        .where("completionDate", "<=", data.completionDate)
        .whereBetween("price", [data.minimumPrice, data.maximumPrice])
        .paginate(data.page, 15);
      return response.status(200).json(orders);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Houve um erro inesperado.", info: error });
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                           MÉTODO DE ARMAZENAMENTO                          */
  /* -------------------------------------------------------------------------- */

  public async store({ request, response }) {
    const data = request.only([
      "sellerId",
      "customerId",
      "description",
      "initialDate",
      "prevision",
      "completionDate",
      "amountSpent",
      "price",
    ]);

    let errors = Array();

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    const order = await Order.create(data);

    return order;
  }

  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE EXIBIÇÃO                             */
  /* -------------------------------------------------------------------------- */

  public async show({ response, params }) {
    const data = params;

    const order = await Order.query()
      .where("id", data.id)
      .preload("customer")
      .preload("seller");

    return response.status(200).json(order);
  }
}
