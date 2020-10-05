import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import Customer from "./Customer";
import Seller from "./Seller";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public sellerId: number;

  @column()
  public customerId: number;

  @column()
  public description: string;

  @column.date()
  public initialDate: DateTime;

  @column()
  public prevision: number;

  @column()
  public completionDate: DateTime;

  @column()
  public amountSpent: number;

  @column()
  public price: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>;

  @belongsTo(() => Seller)
  public seller: BelongsTo<typeof Seller>;
}
