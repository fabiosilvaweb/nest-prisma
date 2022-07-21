import { Module } from '@nestjs/common';

import { BookService } from './services/book.service';

import { BookController } from './http/book.controller';
import { PrismaService } from 'src/database/prisma-service';

@Module({
  controllers: [BookController],

  providers: [BookService, PrismaService],
})
export class BookModule {}
