import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { PermissoesModel } from './permissoes.model'
import { PerfilModel } from './perfil.model'

@Table({
    tableName: 'permissoes_perfil',
    timestamps: true,
})
export class PermissaoPerfilModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'id_permissao_perfil',
    })
    id_permissao_perfil: number
    @ForeignKey(() => PermissoesModel)
    @Column({
        field: 'id_permissao',
        allowNull: false,
    })
    id_permissao: number
    @ForeignKey(() => PerfilModel)
    @Column({
        field: 'id_perfil',
        allowNull: false,
    })
    id_perfil: number
    @BelongsTo(() => PermissoesModel)
    permissoes: PermissoesModel
    @BelongsTo(() => PerfilModel)
    perfis: PerfilModel
}
