export class Hotel {
    static estrella: any;
  

    constructor(public id: number, public  nombre: string, public ubicacion: string, 
                public estrellas: number, public precio: number, public variantes: any [typeof nombre], public servicios: any [], public imagen: string) {}

    //Sintaxis simplificada para declarar e inicializar atributos
    //A este constructor le vamos a pasar info
}









