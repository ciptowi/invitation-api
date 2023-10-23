import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateChatDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  @IsNotEmpty()
  present: boolean;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  info: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  user: string;
}
