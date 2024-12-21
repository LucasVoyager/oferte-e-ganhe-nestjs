import { Module } from '@nestjs/common'
import { PerfilController } from './perfil.controller'
import { PerfisService } from './perfil.service'
import { PerfilModel } from 'src/core/models/perfil.model'

@Module({
    imports: [],
    controllers: [PerfilController],
    providers: [
        PerfisService,
        {
            provide: 'PerfilModel',
            useValue: PerfilModel,
        },
    ],
})
export class perfilModule {}
