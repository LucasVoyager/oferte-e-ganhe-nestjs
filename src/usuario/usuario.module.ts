import { Module } from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { UsuariosController } from './usuarios.controller'
import { UsuarioModel } from 'src/core/models/usuario.model'

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [
        UsuariosService,
        {
            provide: 'UsuarioModel',
            useValue: UsuarioModel,
        },
    ],
})
export class usuarioModule {}
