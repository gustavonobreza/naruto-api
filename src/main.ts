import cors from '@fastify/cors';
import fastify from 'fastify';
import { charactersController } from './api/characters/characters.controller';
import { clansController } from './api/clans/clans.controller';
import { homeController } from './api/home.controller';

async function bootstrap() {
  const app = fastify({ logger: true });
  app.register(cors);
  app.register(homeController);
  app.register(charactersController, { prefix: '/api/v1/characters' });
  app.register(clansController, { prefix: '/api/v1/clans' });

  await app.listen({ port: parseInt(process.env.PORT as string) || 3000 });
}
bootstrap();
