import {
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { PerfilModel } from './perfil.model'
import { LojaModel } from './loja.model'

@Table({
    tableName: 'usuario',
    timestamps: true,
})
export class UsuarioModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        field: 'matricula_usuario',
    })
    matricula_usuario: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'nome',
    })
    nome: string
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        field: 'email',
    })
    email: string
    @Column({
        type: DataType.STRING(65),
        allowNull: false,
        field: 'senha',
    })
    senha: string
    @ForeignKey(() => PerfilModel)
    @Column({
        field: 'id_perfil',
        allowNull: false,
    })
    id_perfil: number
    @ForeignKey(() => LojaModel)
    @Column({
        field: 'id_loja',
        allowNull: false,
    })
    id_loja: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'criado_por',
    })
    criado_por: string
}