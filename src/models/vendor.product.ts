/** @format */

import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Unique,
  Default,
  AutoIncrement,
  AllowNull
} from 'sequelize-typescript';

@Table({ schema: 'vendor', tableName: 'products' })
export class Product extends Model {
  @Unique
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUIDV4 })
  product_id!: string;

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUIDV4 })
  variant_id!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING, allowNull: true })
  product_name!: string;

  @Column({ type: DataType.STRING })
  image_url?: string;

  @Column({ type: DataType.STRING })
  description?: string;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(10, 2) })
  price!: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  stock_quantity!: number;

  @Column({ type: DataType.STRING })
  category?: string;

  @Column({ type: DataType.JSON })
  custom_props?: string;

  @Default(DataType.NOW)
  @Column({ type: DataType.TIME })
  updated_at!: Date;

  @Default(DataType.NOW)
  @Column({ type: DataType.TIME })
  created_at!: Date;
}
