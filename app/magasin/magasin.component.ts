import { Component, OnInit,ViewChild } from '@angular/core';
import{MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import{MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog1Component } from '../dialog1/dialog1.component';
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {

 
   displayedColumns: string[]= ['productName','category','data','fershness','price','comment'];
  dataSource!:MatTableDataSource<any>;
   
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
  
  constructor(private dialog1:MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
      this.getAllMagasin();
  }
  openDialog1(){
    this.dialog1.open(Dialog1Component, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllMagasin();
      }
    })
  }
  getAllMagasin(){
this.api.getProduct()
.subscribe({
  next:(res)=>{
this.dataSource = new MatTableDataSource(res);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort
  },
  error:(err)=>{
    alert("Error while fetching the Records!!")
  }
})
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}

