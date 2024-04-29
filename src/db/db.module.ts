import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from '../chat/entities/chat.entity';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  isGlobal: true,
});
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST || 'localhost',
      port: parseInt(process.env.PORT) || 5432,
      password: process.env.PASSWORD,
      username: process.env.USERNAME || 'postgres',
      entities: [Chat],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DbModule {}
