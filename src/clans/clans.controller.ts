// import { serializeStringToInteger } from 'src/shared/helper/serialize-string-numeric';
// import { ClansService } from './clans.service';

// @Controller('/api/v1/clans')
// export class ClansController {
//   constructor(private readonly clansService: ClansService) {}

//   @Get()
//   async findAll(
//     @Query('name') name: string,
//     @Query('offset') offset: string,
//     @Query('limit') limit: string,
//   ) {
//     if (name) {
//       return await this.clansService.findByName(name);
//     }

//     const offsetSerialized = serializeStringToInteger(offset);
//     const limitSerialized = serializeStringToInteger(limit);

//     const clans = await this.clansService.findAll({
//       offset: offsetSerialized,
//       limit: limitSerialized,
//     });

//     return clans;
//   }

//   @Get(':id')
//   findOne(@Param('id', ParseIntPipe) id: number) {
//     return this.clansService.findOneById(id);
//   }
// }
