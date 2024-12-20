import { EstoqueModel } from './estoque.model'
import { LojaModel } from './loja.model'
import { PerfilModel } from './perfil.model'
import { PermissaoPerfilModel } from './permissaoPerfil.model'
import { PermissoesModel } from './permissoes.model'
import { TransacaoModel } from './transacao.model'
import { UsuarioModel } from './usuario.model'

export const coreModels = [
    PerfilModel,
    LojaModel,
    UsuarioModel,
    PermissaoPerfilModel,
    PermissoesModel,
    EstoqueModel,
    TransacaoModel,
]
