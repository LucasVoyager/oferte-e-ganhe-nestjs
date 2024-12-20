import {
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'

@Table({
    tableName: 'loja',
    timestamps: true,
})
export class LojaModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        field: 'id_loja',
    })
    id_loja: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'nome_loja',
    })
    nome_loja: string
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'cep_loja',
    })
    cep_loja: string
}
