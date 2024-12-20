import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { LojaModel } from './loja.model'

@Table({
    tableName: 'estoque',
    timestamps: true,
})
export class EstoqueModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'id_estoque',
    })
    id_estoque: number
    @Column({
        type: DataType.STRING(55),
        allowNull: false,
        field: 'status',
    })
    status: string
    @ForeignKey(() => LojaModel)
    @Column({
        field: 'id_loja',
        allowNull: false,
    })
    id_loja: number
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'quantidade_atual',
    })
    quantidade_atual: number
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'quantidade_minima',
    })
    quantidade_minima: number
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'quantidade_recomendada',
    })
    quantidade_recomendada: number
    @BelongsTo(() => LojaModel)
    lojas: LojaModel
}
