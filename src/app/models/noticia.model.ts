export class NoticiaModel {
    public Id: number;
    public Fecha: Date;
    public Tema: string;
    public Descripcion: string;
    public Imagenes: string[] = [];
    public Video: string;
    public Tipo: number = 1;
}