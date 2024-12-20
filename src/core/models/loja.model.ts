import {
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import { UsuarioModel } from './usuario.model'
import { EstoqueModel } from './estoque.model'
import { TransacaoModel } from './transacao.model'

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

    @HasMany(() => UsuarioModel)
    usuarios: UsuarioModel[]
    @HasMany(() => EstoqueModel)
    estoques: EstoqueModel[]
    @HasMany(() => TransacaoModel)
    transacoes: TransacaoModel[]
}
