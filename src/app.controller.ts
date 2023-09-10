import { FastifyInstance } from 'fastify';

export function home(app: FastifyInstance) {
  app.get('/', (_, reply) => {
    reply.redirect(303, 'api/v1/characters');
  });
}
