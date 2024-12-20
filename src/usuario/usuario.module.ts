import { Module } from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { UsuariosController } from './usuarios.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsuarioModel } from 'src/core/models/usuario.model'

@Module({
    imports: [SequelizeModule.forFeature([UsuarioModel])],
    controllers: [UsuariosController],
    providers: [UsuariosService],
})
export class coreModule {}
