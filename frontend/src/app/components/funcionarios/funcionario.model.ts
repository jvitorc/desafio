export interface Funcionario {
    id?: number
    nome?: string
    login?: string 
    senha?:string
    cpf?:string
    email?: string
    endereco?: string
    created_at?: string
    updated_at?: string
    empresas?: any
    pivot?:any
}