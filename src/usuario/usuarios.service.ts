import {
    ConflictException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { UsuarioModel } from 'src/core/models/usuario.model'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'

@Injectable()
export class UsuariosService {
    constructor(
        @Inject('UsuarioModel')
        private readonly usuarioModel: typeof UsuarioModel,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioModel> {
        const verificaUsuario = await this.usuarioModel.findByPk(
            +createUsuarioDto.matricula_usuario,
        )
        if (!verificaUsuario) {
            return this.usuarioModel.create({ ...createUsuarioDto })
        } else {
            throw new ConflictException(
                `Usuario ja cadastrado: matricula existente: ${createUsuarioDto.matricula_usuario}`,
            )
        }
    }

    async findAll(): Promise<UsuarioModel[]> {
        const usuarios = await this.usuarioModel.findAll({
            include: { all: true },
        })
        if (usuarios.length === 0) {
            throw new NotFoundException('Nenhum usuario encontrado')
        }
        return usuarios
    }

    async findOne(matricula_usuario: number) {
        const usuario = await this.usuarioModel.findByPk(matricula_usuario, {
            include: { all: true },
        })
        if (!usuario) {
            throw new NotFoundException(
                `Usuario com a matricula ${matricula_usuario} nao foi encontrado`,
            )
        }
        return usuario
    }

    async update(
        matricula_usuario: number,
        updateUsuarioDto: UpdateUsuarioDto,
    ): Promise<void> {
        const usuario = await this.findOne(matricula_usuario)
        if (!usuario) {
            throw new NotFoundException(
                `Usuario nao encontrado, verificar matricula informada ${matricula_usuario}`,
            )
        }
        await usuario.update({ ...updateUsuarioDto })
    }

    async remove(matricula_usuario: number): Promise<void> {
        const usuario = await this.findOne(matricula_usuario)
        if (!usuario) {
            throw new NotFoundException(
                `Usuario nao encontrado, verificar matricula informada ${matricula_usuario}`,
            )
        }
        await usuario.destroy()
    }
}
