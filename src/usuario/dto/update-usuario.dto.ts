export class UpdateUsuarioDto {
    readonly matricula_usuario?: number
    readonly nome?: string
    readonly email?: string
    readonly senha?: string
    readonly id_perfil?: number
    readonly id_loja?: number
    readonly criado_por?: string
}
