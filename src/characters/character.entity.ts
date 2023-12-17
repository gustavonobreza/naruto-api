export interface Character {
  id: number;
  name: string;
  info?: Info;
  about: string[];
  images: string[];
  page?: string;
}

type Info = { [key: string]: string };
