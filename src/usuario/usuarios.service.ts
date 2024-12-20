import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UsuarioModel } from 'src/core/models/usuario.model'
import { CreateUsuarioDto } from './dto/create-usuario.dto'
import { UpdateUsuarioDto } from './dto/update-usuario.dto'

@Injectable()
export class UsuariosService {
    constructor(
        @InjectModel(UsuarioModel)
        private readonly usuarioModel: typeof UsuarioModel,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioModel> {
        return this.usuarioModel.create({ ...createUsuarioDto })
    }

    async findAll(): Promise<UsuarioModel[]> {
        return this.usuarioModel.findAll({ include: { all: true } })
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
