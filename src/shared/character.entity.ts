export type Info = {
  sexo?: string;
  afiliação?: string;
  aniversário?: string;
  idade?: string;
  altura?: string;
  peso?: string;
  clã?: string;
  times: string;
  [key: string]: any;
};

export class Character {
  id: number;
  name: string;
  info: Info;
  about: string[];
  images: string[] | string;
}
