enum TiposAlertas { Exito = 'success', Info = 'info', Error = 'danger'}

export class AlertaModel {
    public Tipo: string;
    public Mensaje: string;
    public Mostrar: boolean;
    public Alertas = TiposAlertas
}