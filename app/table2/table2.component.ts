import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { ApiService } from '../services/api1.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

     displayedColumns: string[] = [ 'productName', 'category', 'date', 'freshness', 'price', 'comment','action'];
    data!:MatTableDataSource<any>;

  
  constructor(private dialog:MatDialog, private api1 : ApiService) { }

  ngOnInit(): void {
    this.getAllMagasin();
  }
  getAllMagasin(){
    this.api1.getMagasin()
    .subscribe({
      next:(res)=>{
    this.data = new MatTableDataSource(res);
    
    
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
      }
  editMagasin(row :any){
    this.dialog.open(Dialog1Component,{
      width:'30%',
      data:row
    })
  }
  deleteMagasin(id:number){
this.api1.deleteMagasin(id)
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
