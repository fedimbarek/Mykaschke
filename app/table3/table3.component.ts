import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Api2Service  } from '../services/api2.service';
@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {

  displayedColumns: string[] = [ 'productName', 'category', 'date', 'freshness', 'price', 'comment','action'];
  data!:MatTableDataSource<any>;


constructor(private dialog:MatDialog, private api2 : Api2Service) { }

ngOnInit(): void {
  this.getAllElectronic();
}
getAllElectronic(){
  this.api2.getElectronic()
  .subscribe({
    next:(res)=>{
  this.data = new MatTableDataSource(res);
  
  
    },
    error:(err)=>{
      alert("Error while fetching the Records!!")
    }
  })
    }
editElectronic(row :any){
  this.dialog.open(Dialog2Component,{
    width:'30%',
    data:row
  })
}
deleteElectronic(id:number){
this.api2.deleteElectronic(id)
.subscribe({
next:(res)=>{
  alert("Product Deleted Successfully")
},
error:()=>{
  alert("Error while deleting the product!!")
}
})
}    
}


 
 


