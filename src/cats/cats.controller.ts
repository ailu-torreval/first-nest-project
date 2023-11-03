import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {


    constructor(private readonly catsService: CatsService ) {

    }

    @Get()

    getCats(): string {
        return 'cats'
    }

    @Post()
    addCat(@Body() createCatDto: CreateCatDto) {
       console.log(createCatDto)
       return this.catsService.getCats()

    }

}
