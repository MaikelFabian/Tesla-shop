import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('numeric',{
    default: 0
  })
  description: string;

  @Column('text',{
    unique: true,
  })
  slug: string;

  @Column('int',{
    default: 0
  })
  stock: number;

  @Column('text',{
    array: true,
  })
  sizes: string[];

  @Column('text')
  gender: string;
}