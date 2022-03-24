import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING), UserModule, CardModule, AuthModule],
})
export class AppModule {}
