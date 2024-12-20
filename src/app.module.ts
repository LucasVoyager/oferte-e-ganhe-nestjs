import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsuariosModule } from './core/usuarios.module'
import { databaseProviders } from 'sequelize.config'

@Module({
    imports: [UsuariosModule],
    controllers: [AppController],
    providers: [AppService, ...databaseProviders],
})
export class AppModule {}
