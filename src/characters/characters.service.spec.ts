import { Test, TestingModule } from '@nestjs/testing';
import { Character } from '../shared/character.entity';
import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersService],
    }).compile();

    service = module.get<CharactersService>(CharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of characters', () => {
    const getAll = service.findAll();

    expect(getAll).toHaveProperty([{}] as Character[]);
  });
});
