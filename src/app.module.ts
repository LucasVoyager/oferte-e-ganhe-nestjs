import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { coreModule } from './usuario/usuario.module'
import { databaseProviders } from 'sequelize.config'

@Module({
    imports: [coreModule],
    controllers: [AppController],
    providers: [AppService, ...databaseProviders],
})
export class AppModule {}
