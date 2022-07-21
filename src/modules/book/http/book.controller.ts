import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BookService } from '../services/book.service';
import { BookDTO } from '../dto/book.dto';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.bookService.findById(id);
  }

  @Post()
  async create(@Body() body: BookDTO) {
    return this.bookService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: BookDTO) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
