import { Module } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { IntegrationsController } from './integrations.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [IntegrationsService, PrismaService],
  controllers: [IntegrationsController]
})
export class IntegrationsModule { }
