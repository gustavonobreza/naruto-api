import cors from '@fastify/cors';
import fastify from 'fastify';
import { charactersController } from './api/characters/characters.controller.ts';
import { clansController } from './api/clans/clans.controller.ts';
import { homeController } from './api/home.controller.ts';

async function bootstrap() {
  const app = fastify({ logger: true });
  app.register(cors);
  app.register(homeController);
  app.register(charactersController, { prefix: '/api/v1/characters' });
  app.register(clansController, { prefix: '/api/v1/clans' });

  await app.listen({ port: parseInt(Deno.env.get("PORT") as string) || 3000 });
}
bootstrap();
