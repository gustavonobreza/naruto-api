import cors from '@fastify/cors';
import fastify from 'fastify';
import { home } from './app.controller';
import { charactersController } from './characters/characters.controller';

async function bootstrap() {
  const app = fastify({ logger: true });
  app.register(cors);
  home(app);
  app.register(charactersController, { prefix: '/api/v1/characters' });

  await app.listen({ port: +process.env.PORT || 3000 });
}
bootstrap();
