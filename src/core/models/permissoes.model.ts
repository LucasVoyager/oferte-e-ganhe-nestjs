import {
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { PermissaoPerfilModel } from './permissaoPerfil.model'

@Table({
    tableName: 'permissoes',
    timestamps: true,
})
export class PermissoesModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'id_permissao',
    })
    id_permissao: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'nome_permissao',
    })
    nome_permissao: string
    @Column({
        type: DataType.STRING(105),
        allowNull: false,
        field: 'descricao',
    })
    descricao: string

    @HasMany(() => PermissaoPerfilModel)
    permissoesPerfil: PermissaoPerfilModel[]
}
