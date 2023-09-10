import { FastifyInstance } from 'fastify';

export function homeController(app: FastifyInstance, opts, done) {
  app.get('/', (_, reply) => {
    reply.redirect(303, 'api/v1/characters');
  });
  done();
}
