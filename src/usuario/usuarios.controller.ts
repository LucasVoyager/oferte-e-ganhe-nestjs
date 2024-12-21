import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { UsuariosService } from './usuarios.service'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuariosService.create(createUsuarioDto)
    }

    @Get()
    findAll() {
        return this.usuariosService.findAll()
    }

    @Get(':matricula_usuario')
    findOne(@Param('matricula_usuario') matricula_usuario: number) {
        return this.usuariosService.findOne(+matricula_usuario)
    }

    @Patch(':matricula_usuario')
    update(
        @Param('matricula_usuario') matricula_usuario: number,
        @Body() updateUsuarioDto: UpdateUsuarioDto,
    ) {
        this.usuariosService.update(+matricula_usuario, updateUsuarioDto)
        return this.usuariosService.findOne(+matricula_usuario)
    }

    @Delete(':matricula_usuario')
    remove(@Param('matricula_usuario') matricula_usuario: number) {
        this.usuariosService.remove(+matricula_usuario)
        return `Usuario com matricula ${matricula_usuario} foi deletado!`
    }
}
