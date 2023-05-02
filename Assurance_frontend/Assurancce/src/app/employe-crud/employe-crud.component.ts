import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, count, tap } from 'rxjs';
import { Employe } from 'src/models/employe-model';

@Component({
  selector: 'app-employe-crud',
  templateUrl: './employe-crud.component.html',
  styleUrls: ['./employe-crud.component.scss']
})

export class EmployeCrudComponent implements OnInit {

  EmployeList: Employe[];
  EmployeId = "";
  Nom: string = "Alpha";
  Prenom: string="";
  Age!: number;
  Date!: Date;

  constructor(private http: HttpClient){
    this.ShowEmploye();
    this.Register();
    
  }

  Register()
  {
    
    let bodyData ={
      "nom":this.Nom,
      "prenom":this.Prenom,
      "age":this.Age,
      "date":this.Date
    };

    this.http.post("http://localhost:8000/",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert('Employe Enregistree avec succes');
      // this.getAllEmploye();
      this.Nom = '';
      this.Prenom = '';
      this.Age;
      this.Date.getTime
      this.ShowEmploye();
      // this.countEmploye();

    })
    
  }

  ngOnInit() {
    //this.ShowEmploye().subscribe(employees => this.EmployeList = employees);
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEE", this.EmployeList);
  }

  ShowEmploye(): Observable<Employe[]>{ 
    return this.http.get<Employe[]>("http://localhost:8000/").pipe(
      tap((response) => this.EmployeList = response),
      
    );
  }

  /*ShowEmploye(){
    this.http.get<Employe[]>("http://localhost:8000/").subscribe((resultData: Employe[])=>{
      console.log(resultData);
      this.EmployeList = resultData;
    });
  }*/

  EditEmploye(employe: any){
    this.Nom = employe.Nom;
    this.Prenom = employe.Prenom;
    this.Age = employe.Age;
    this.Date = employe.Date
    this.EmployeId = employe._id;
    alert("voici l'employe que vous voulais Modifier:" + this.EmployeId);
  }

  UpdateEmploye(){
    let bodyData = {
      "nom": this.Nom,
      "prenom": this.Prenom,
      "age": this.Age,
      "date":this.Date
    };

    this.http.patch("http://localhost:8000" + "/" + this.EmployeId,bodyData).subscribe((resultData)=>{
      console.log(resultData);
      alert("Mise a jour effectue avec success")
      this.ShowEmploye();
    });
  }


  DeletEmploye(){
    this.http.delete("http;//localhost:8000/"+"/"+this.EmployeId).subscribe((resultData: any)=>{
      console.log(resultData);
      alert("Emplpoye supprime !!");
      this.ShowEmploye();

    }); 
  }
  save(){
    if(this.EmployeId ==' ')
    {
      this.Register();
    }
    else
    {
      this.UpdateEmploye();
    }
  }

  //  countEmploye(){

  //   for (let index = 0; index = this.EmployeList.length; index++) {
  //     let count = 0;
  //     count++;
  //     console.log(count);
  //   }
  //  }



}
