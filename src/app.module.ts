import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { usuarioModule } from './usuario/usuario.module'
import { databaseProviders } from 'sequelize.config'
import { CoreModule } from './core/core.module'
import { perfilModule } from './perfil/perfil.module'

@Module({
    imports: [usuarioModule, CoreModule, perfilModule],
    controllers: [AppController],
    providers: [AppService, ...databaseProviders],
})
export class AppModule {}
