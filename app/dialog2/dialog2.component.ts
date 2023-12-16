import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Api2Service } from '../services/api2.service';
import{MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {

 

  freshnesslist =["Brand New","Second Hand","Refurbished"]
  productForm !:FormGroup;
  constructor(private formBuilder : FormBuilder,
    private api1 : Api2Service, 
    private dialogRef : MatDialogRef<Dialog2Component>) { }
  
    ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : ['',Validators.required],
      category : ['',Validators.required],
      freshness : ['',Validators.required],
      price:['',Validators.required],
      comment:['',Validators.required],
      date : ['',Validators.required]
    })
  }
  addElectronic(){
    if(this.productForm.valid){
      this.api1.postElectronic(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Electronic added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding ")
        }
      })
    }
  }
  }
  
 


