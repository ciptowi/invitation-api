import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from '../chat/entities/chat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.hbpovknvngsvxififmse.supabase.co',
      port: 5432,
      password: '1bzJQt6hrST9Qj9o',
      username: 'postgres',
      entities: [Chat],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DbModule {}
