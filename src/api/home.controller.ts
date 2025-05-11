import type { FastifyInstance } from "fastify";

export function homeController(app: FastifyInstance, _: any, done: any) {
	app.get("/", (_, reply) => {
		reply.redirect("api/v1/characters", 303);
	});
	done();
}
