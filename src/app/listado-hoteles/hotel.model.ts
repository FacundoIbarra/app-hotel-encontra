export class Hotel {
    static estrella: any;
  

    constructor(public nombre: string, public ubicacion: string, public estrellas: number, public precio: number, 
        public variantes: any [], public servicios: any [], public imagen: string) {}
    //Sintaxis simplificada para declarar e inicializar atributos
    //A este constructor le vamos a pasar info

}
