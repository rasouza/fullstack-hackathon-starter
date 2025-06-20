import { Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from './generated/client/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
