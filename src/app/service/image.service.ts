import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageName ="" //image yalli yo5rej par defaut
  baseurl1='http://localhost:1000'
  img:any[]=[]
  constructor(private http:HttpClient) { }
registreImage(file:any){
  
  var fd=new FormData//gere tou ce que file
  fd.append('image',file,file.name)//methode tab3a data
  this.http.post(this.baseurl1+'/upload/',fd).subscribe(res=>{
    var image :any
    image=res.valueOf()
    console.log(image)
    this.imageName=image.source //source mawjouda f  backend
  
      })
}
registreImageMuliple(file:any){
  
  var fd=new FormData//gere tou ce que file
  fd.append('image',file,file.name)//methode tab3a data
  this.http.post(this.baseurl1+'/upload/',fd).subscribe(res=>{
    var image :any
    image=res.valueOf()
    console.log(image)
    this.imageName=image.source //source mawjouda f  backend
    
    this.img.push(this.imageName)
  console.log(this.img)
      })
}
}
