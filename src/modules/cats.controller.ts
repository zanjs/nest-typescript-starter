import { Controller, Get, Param } from '@nestjs/common'

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
}