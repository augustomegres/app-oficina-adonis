import Customer from "App/Models/Customer";
import { DateTime } from "luxon";

export default class CustomersController {
  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE LISTAGEM                             */
  /* -------------------------------------------------------------------------- */

  public async index({ request, response }) {
    const data = request.only(["name", "cpf", "page"]);

    /* --------------- NECESSÁRIO, CASO O CAMPO NÃO SEJA INFORMADO -------------- */

    if (!data.name) data.name = "";
    if (!data.cpf) data.cpf = "";
    if (!data.page) data.page = 1; //NÃO NECESSÁRIO, MAS REMOVE O AVISO.

    /* --------------------------- CONSTRUINDO A QUERY -------------------------- */

    try {
      const customers = await Customer.query()
        .where("name", "LIKE", "%" + data.name + "%")
        .where("cpf", "LIKE", "%" + data.cpf + "%")
        .paginate(data.page, 15);
      return response.status(200).json(customers);
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
    const data = request.only(["name", "cpf", "bornDate", "phone"]);

    /* -------------------------------------------------------------------------- */
    /*                               COLETANDO ERROS                              */
    /* -------------------------------------------------------------------------- */

    let errors = Array();

    if (data.name.length > 80) {
      errors.push({ error: "O nome deve conter no máximo 80 caracteres." });
    }

    if (data.cpf.length > 11) {
      errors.push({ error: "O cpf deve conter 11 dígitos." });
    }

    if (data.phone.length > 20) {
      errors.push({ error: "O numero de telefone é muito longo." });
    }

    data.bornDate = DateTime.fromISO(data.bornDate);

    /* ----------------------------- CONTANTO ERROS ----------------------------- */

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    const customer = await Customer.create(data);

    return customer;
  }

  /* -------------------------------------------------------------------------- */
  /*                             MÉTODO DE EXIBIÇÃO                             */
  /* -------------------------------------------------------------------------- */

  public async show({ response, params }) {
    const data = params;

    const customer = await Customer.find(data.id);

    return response.status(200).json(customer);
  }
}
