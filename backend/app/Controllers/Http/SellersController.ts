import Seller from "App/Models/Seller";

export default class SellersController {
  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE LISTAGEM                             */
  /* -------------------------------------------------------------------------- */

  public async index({ request, response }) {
    const data = request.only(["name", "page"]);

    /* --------------- NECESSÁRIO, CASO O CAMPO NÃO SEJA INFORMADO -------------- */

    if (!data.name) data.name = "";
    if (!data.page) data.page = 1; //NÃO NECESSÁRIO, MAS REMOVE O AVISO.

    /* --------------------------- CONSTRUINDO A QUERY -------------------------- */

    try {
      const orders = await Seller.query()
        .where("name", "LIKE", "%" + data.name + "%")
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
    const data = request.only(["name"]);

    let errors = Array();

    if (data.name.length > 80) {
      errors.push({ error: "O nome pode ter no máximo 80 caracteres." });
    }

    if (errors.length > 1) {
      return response.status(400).json(errors);
    }

    const seller = await Seller.create(data);

    return seller;
  }

  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE EXIBIÇÃO                             */
  /* -------------------------------------------------------------------------- */

  public async show({ response, params }) {
    const data = params;

    const seller = await Seller.find(data.id);

    return response.status(200).json(seller);
  }
}
