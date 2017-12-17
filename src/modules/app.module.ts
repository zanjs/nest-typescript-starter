import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller'

@Module({
  modules: [],
  controllers: [AppController, CatsController],
  components: [],
})
export class ApplicationModule {}
