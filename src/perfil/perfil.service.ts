import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PerfilModel } from 'src/core/models/perfil.model'
import { CreatePerfilDto } from './dto/create-perfil.dto'
import { UpdatePerfilDto } from './dto/update-perfil-dto'

@Injectable()
export class PerfisService {
    constructor(
        @Inject('PerfilModel')
        private readonly perfilModel: typeof PerfilModel,
    ) {}

    async create(createPerfilDto: CreatePerfilDto): Promise<PerfilModel> {
        const perfil = await this.perfilModel.create({ ...createPerfilDto })
        return perfil
    }

    async findAll(): Promise<PerfilModel[]> {
        const perfis = await this.perfilModel.findAll({
            include: { all: true },
        })
        if (perfis.length === 0) {
            throw new NotFoundException('Nenhum perfil encontrado')
        }
        return perfis
    }

    async findOne(id_perfil: number) {
        const perfil = await this.perfilModel.findByPk(id_perfil, {
            include: { all: true },
        })
        if (!perfil) {
            throw new NotFoundException(`
                Perfil com o id ${id_perfil} nao foi encontrado`)
        }
        return perfil
    }

    async update(
        id_perfil: number,
        updatePerfilDto: UpdatePerfilDto,
    ): Promise<void> {
        const perfil = await this.findOne(id_perfil)
        if (!perfil) {
            throw new NotFoundException(`
                Perfil nao encontrado, favor verificar id informado: ${id_perfil}`)
        }
        await perfil.update({
            ...updatePerfilDto,
        })
    }

    async remove(id_perfil: number): Promise<void> {
        const perfil = await this.findOne(id_perfil)
        if (!perfil) {
            throw new NotFoundException(`
                Perfil nao encontrado, favor verificar id_perfil digitado: ${id_perfil}`)
        }
        await perfil.destroy()
    }
}
