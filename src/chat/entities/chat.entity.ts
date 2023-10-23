import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chat {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'boolean' })
  present: boolean;

  @Column({ type: 'varchar' })
  message: string;

  @Column({ type: 'varchar' })
  info: string;

  @Column({ type: 'varchar' })
  user: string;
}
