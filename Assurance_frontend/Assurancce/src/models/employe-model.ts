
export class Employe {
    Nom: string;
    Prenom: string
    Age: number;
    Date: Date;

    constructor(
        Nom: string ="Alpha",
        Prenom: string ="Brice",
        Age: number = 24,
        Date: Date
    ){
        this.Nom = Nom;
        this.Prenom = Prenom
        this.Age = Age;
        this.Date = Date; 
    }
}