import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ChatModule, DbModule],
})
export class AppModule {}
