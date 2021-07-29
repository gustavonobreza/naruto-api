import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class Character {
  id: number;
  name: string;
  info?: Info;
  about: string[];
  images: string[];
}

type Info = { [key: string]: string };

export class IQueryString {
  @IsString({ message: 'Name is invalid in query' })
  @IsNotEmpty()
  @Optional()
  name?: string;
}
