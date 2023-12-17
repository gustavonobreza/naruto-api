import { FastifyInstance } from 'fastify';
import { serializeStringToInteger } from '../shared/helper/serialize-string-numeric';
import { ClansService } from './clans.service';

interface IQuerystring {
  name?: string;
  offset?: string;
  limit?: string;
}

export class ClansController {
  constructor(private readonly clansService: ClansService) {}

  async findAll({ limit, name, offset }: IQuerystring) {
    if (name) {
      return await this.clansService.findByName(name);
    }

    const offsetSerialized = serializeStringToInteger(offset);
    const limitSerialized = serializeStringToInteger(limit);

    const clans = await this.clansService.findAll({
      offset: offsetSerialized,
      limit: limitSerialized,
    });

    return clans;
  }

  findOne(id: number) {
    return this.clansService.findOneById(id);
  }
}

export function clansController(
  app: FastifyInstance,
  _: any,
  done: () => void,
) {
  const clans = new ClansController(new ClansService());
  app.get<{ Querystring: IQuerystring }>('/', async (req, reply) => {
    const { name, offset, limit } = req.query;
    const all = await clans.findAll({ limit, name, offset });

    reply.code(200).send(all);
  });
  app.get('/:id', async (req, reply) => {
    // id = index
    const { id } = req.params as { id?: string };
    if (!id) return reply.code(300).send('BadRequest');

    const isValidIndex = isNaN(parseInt(id));
    if (!isValidIndex) return reply.code(300).send('BadRequest');
    return clans.findOne(+id);
  });
  done();
}
