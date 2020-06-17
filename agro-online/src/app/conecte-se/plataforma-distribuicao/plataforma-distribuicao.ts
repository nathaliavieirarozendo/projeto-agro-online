export class plataforma_distribuicao{
    constructor(
        public nome: string,
        public cpfCnpj: string,
        public representante: string,
        public conectaConsumidorComercio: string,
        public conectafeiranteCOnsumidores: string,
        public solucoesLogisticaGrandesCargas: string,
        public solucoesLogisticaPequenasCargas: string,
        public solucaoIntegracao: string,
        public vendoProducaoAssociacao: string,
        public solucoesAssociacoes: string,
        public outroTipoSolucao: string,
        public ondeAtua: string,
        public whatsapp: string,
        public localizacao: string,
        public website: string,
        public credenciaisEspeciais: string,
        public vinculoAssociacao,
        public nomeAssociacao: string
    ){}
}