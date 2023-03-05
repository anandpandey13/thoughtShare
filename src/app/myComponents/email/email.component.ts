import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyBackendService } from 'src/app/service/my-backend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  displayedColumns: string[] = ['name', 'proff', 'comment'];
  newArray=[
      { "name": "", "proff": "", "comment": "" }
  ]

flag:boolean=false;

  constructor(
    private backendServVar : MyBackendService ,
    private snackVar : MatSnackBar,
    ) {}

  data={
    name: "",
    proff : "",
    comment: ''
  }

  doSubmitForm()
  {
    console.log('try to submit form');
    console.log('The Entered Data is :',this.data);

    if(this.data.name=='' || this.data.name== null ||
    this.data.proff=='' ||  this.data.proff==null ||
    this.data.comment=='' || this.data.comment==null  )
  {
this.snackVar.open("Fields can not be empty","Ok");
return;
  }

    this.flag=true;

    this.backendServVar.sendData(this.data).subscribe(
      respose=>{
        console.log(respose);
        console.log("Data saved successfully");
        this.flag=false;
        this.snackVar.open("Data saved successfully","Okay")
      },
      error=>{
        console.log(error);      
        this.flag=false;  
        this.snackVar.open("Error Occurred","Okay")
      }
    )

    // this.doFetchAllData();

  }

  doFetchAllData(){
   //   getData();
   this.backendServVar.getData().subscribe(
    response=>{
      console.log(response);
      //let myString = JSON.stringify(response);
      //var formattedData = JSON.parse(myString);
      //console.log(formattedData);
      //let list: string[] = [];
      
      // this.friends.forEach((result, idx) => {

      //   //console.log(JSON.stringify(result));
      this.newArray=response;
      // })

      //Below line runs fine
      //response.forEach((e: any) => console.log(e["name"] + "is "+e["proff"] + "and says "+e["comment"]));
    },
    error=>{
      console.log(error)
    }
  )
  }

}
