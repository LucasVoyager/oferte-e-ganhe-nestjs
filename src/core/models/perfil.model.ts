import {
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'

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
}
