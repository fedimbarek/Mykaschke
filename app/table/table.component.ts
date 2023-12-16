import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
    displayedColumns: string[] = [ 'productName', 'category', 'date', 'freshness', 'price', 'comment'];
    data!:MatTableDataSource<any>;

  
  constructor(private dialog:MatDialog, private api : ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
    this.data = new MatTableDataSource(res);
    
    
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
      }
  editProduct(row :any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    })
  }
  deleteProduct(id:number){
this.api.deleteProduct(id)
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
