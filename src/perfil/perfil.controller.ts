import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { PerfisService } from './perfil.service'
import { CreatePerfilDto } from './dto/create-perfil.dto'
import { UpdatePerfilDto } from './dto/update-perfil-dto'

@Controller('perfis')
export class PerfilController {
    constructor(private readonly perfisService: PerfisService) {}

    @Post()
    create(@Body() createPerfisDto: CreatePerfilDto) {
        return this.perfisService.create(createPerfisDto)
    }

    @Get()
    findAll() {
        return this.perfisService.findAll()
    }

    @Get(':id_perfil')
    findOne(
        @Param('id_perfil')
        id_perfil: number,
    ) {
        return this.perfisService.findOne(+id_perfil)
    }

    @Patch(':id_perfil')
    update(
        @Param('id_perfil')
        id_perfil: number,
        @Body() updatePerfilDto: UpdatePerfilDto,
    ) {
        this.perfisService.update(+id_perfil, updatePerfilDto)
        return this.perfisService.findOne(+id_perfil)
    }

    @Delete(':id_perfil')
    remove(
        @Param('id_perfil')
        id_perfil: number,
    ) {
        this.perfisService.remove(+id_perfil)
        return `Perfil com id ${id_perfil} foi deletado!`
    }
}
