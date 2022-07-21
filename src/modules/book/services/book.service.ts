import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma-service';
import { BookDTO } from '../dto/book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const books = await this.prisma.book.findMany();

    return books;
  }

  async findById(id: string) {
    const isBookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!isBookExists) throw new Error('Book does not exists');

    return isBookExists;
  }

  async create(data: BookDTO) {
    const isBookExists = await this.prisma.book.findFirst({
      where: {
        qr_code: data.qr_code,
      },
    });

    if (isBookExists) throw new Error('Book already exists');

    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }

  async update(id: string, data: BookDTO) {
    const isBookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!isBookExists) throw new Error('Book does not exists');

    const book = await this.prisma.book.update({
      where: {
        id,
      },
      data,
    });

    return book;
  }

  async delete(id: string) {
    const isBookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!isBookExists) throw new Error('Book does not exists');

    return await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
