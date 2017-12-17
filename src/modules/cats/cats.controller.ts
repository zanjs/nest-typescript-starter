import { Controller, Get, Param, Body, Post, Res, HttpStatus } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cats.dto'

@Controller('cats')
export class CatsController {
  
  @Get(':id')
  findOne(@Param() param){
    console.log(param.id)
    return param
  }

  @Get()
  findAll(){
    return [];
  }

  @Post()
  async create(@Res() res) {
    // res.status(HttpStatus.CREATED).send()
    console.log(res)
    return []
  }
}