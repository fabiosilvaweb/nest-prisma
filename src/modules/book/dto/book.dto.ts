import { ApiProperty } from '@nestjs/swagger';

export class BookDTO {
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  qr_code: string;
}
