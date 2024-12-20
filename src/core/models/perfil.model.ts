import {
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { UsuarioModel } from './usuario.model'
import { PermissaoPerfilModel } from './permissaoPerfil.model'

@Table({
    tableName: 'perfil',
    timestamps: true,
})
export class PerfilModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'id_perfil',
    })
    id_perfil: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'nome_perfil',
    })
    nome_perfil: string
    @HasMany(() => UsuarioModel)
    usuarios: UsuarioModel[]
    @HasMany(() => PermissaoPerfilModel)
    perfilPermissoes: PermissaoPerfilModel[]
}
