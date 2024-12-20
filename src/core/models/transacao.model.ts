import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { UsuarioModel } from './usuario.model'
import { LojaModel } from './loja.model'

@Table({
    tableName: 'transacao',
    timestamps: true,
})
export class TransacaoModel extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        field: 'id_talao',
    })
    id_talao: number
    @Column({
        type: DataType.INTEGER,
        field: 'quantidade_solicitada',
        allowNull: false,
    })
    quantidade_solicitada: number
    @Column({
        type: DataType.INTEGER,
        field: 'quantidade_enviada',
        allowNull: true,
    })
    quantidade_enviada: number
    @Column({
        type: DataType.INTEGER,
        field: 'quantidade_entregue',
        allowNull: true,
    })
    quantidade_entregue: number
    @Column({
        type: DataType.STRING(55),
        field: 'status',
        allowNull: false,
    })
    status: string
    @Column({
        type: DataType.DATE,
        field: 'data_envio',
        allowNull: true,
    })
    data_envio: string
    @Column({
        type: DataType.DATE,
        field: 'data_entrega_prevista',
        allowNull: true,
    })
    data_entrega_prevista: string
    @Column({
        type: DataType.DATE,
        field: 'data_entregue',
        allowNull: true,
    })
    data_entregue: string
    @Column({
        type: DataType.INTEGER,
        field: 'numero_remessa',
        allowNull: true,
    })
    numero_remessa: number
    @ForeignKey(() => UsuarioModel)
    @Column({
        field: 'matricula_usuario',
        allowNull: false,
    })
    matricula_usuario: number
    @ForeignKey(() => LojaModel)
    @Column({
        field: 'id_loja',
        allowNull: false,
    })
    id_loja: number

    @BelongsTo(() => UsuarioModel)
    usuarios: UsuarioModel
    @BelongsTo(() => LojaModel)
    lojas: LojaModel
}
