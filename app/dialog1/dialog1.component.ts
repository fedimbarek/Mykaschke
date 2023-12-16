import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api1.service';
import{MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  freshnesslist =["Brand New","Second Hand","Refurbished"]
productForm !:FormGroup;
btn:string = "Save"
constructor(private formBuilder : FormBuilder,
  private api1 : ApiService, 
  @Inject(MAT_DIALOG_DATA) public editData:any,
  private dialogRef : MatDialogRef<Dialog1Component>) { }

  ngOnInit(): void {
  this.productForm = this.formBuilder.group({
    productName : ['',Validators.required],
    category : ['',Validators.required],
    freshness : ['',Validators.required],
    price:['',Validators.required],
    comment:['',Validators.required],
    date : ['',Validators.required]
  });
  if(this.editData){
    this.btn="Update"
    this.productForm.controls['productName'].setValue(this.editData.productName);
    this.productForm.controls['category'].setValue(this.editData.category);
    this.productForm.controls['freshness'].setValue(this.editData.freshness);
    this.productForm.controls['price'].setValue(this.editData.price);
    this.productForm.controls['comment'].setValue(this.editData.comment);
    this.productForm.controls['date'].setValue(this.editData.datedate);

  }
}
addMagasin(){
  if(!this.editData){
  if(this.productForm.valid){
    this.api1.postMagasin(this.productForm.value)
    .subscribe({
      next:(res)=>{
        alert("Magasin added successfully");
        this.productForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert("Error while adding ")
      }
    })
  }
}else{
  this.updateMagqsin()
}
}
updateMagqsin(){
  this.api1.putMagasin(this.productForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Product updated Successfully");
      this.productForm.reset();
      this.dialogRef.close('Update');
    }
  })
}
}