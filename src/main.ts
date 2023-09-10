import cors from '@fastify/cors';
import fastify from 'fastify';
import { charactersController } from './characters/characters.controller';
import { clansController } from './clans/clans.controller';
import { homeController } from './home.controller';

async function bootstrap() {
  const app = fastify({ logger: true });
  app.register(cors);
  app.register(homeController);
  app.register(charactersController, { prefix: '/api/v1/characters' });
  app.register(clansController, { prefix: '/api/v1/clans' });

  await app.listen({ port: +process.env.PORT || 3000 });
}
bootstrap();
