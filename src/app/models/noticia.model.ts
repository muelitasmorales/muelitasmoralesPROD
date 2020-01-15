enum TipoNoticia { Imagenes = 1, Video = 2 }

export class NoticiaModel {
    public Id: number;
    public Fecha: Date;
    public Tema: string;
    public Descripcion: string;
    public Imagenes: string[] = [];
    public Video: string;
    public TiposNoticias = TipoNoticia;
    public Tipo: number = this.TiposNoticias.Imagenes;
}