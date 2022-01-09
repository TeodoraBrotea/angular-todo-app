import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { HttpClient, HttpResponse, HttpHeaderResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';
  errorMessage: any;
  id: any;
  name: any;
  address: any;
  description: any;

  constructor(private newService: CommonService,){ }
     Repdata: any;
     valButton = "Save";

  ngOnInit(){
    this.newService.GetUser().subscribe(data => this.Repdata = data)
  }

  onSave = (user: any, isValid: boolean) =>{
    user.mode = this.valButton;
    this.newService.saveUser(user).subscribe(data => {alert(data);
    this.ngOnInit();
  }, error => this.errorMessage = error);
  }

  edit = (kk: any) =>{
    this.id = kk._id;
    this.description = kk.description;
    this.valButton = "Update";
  }

  delete = (id: any)=>{
    this.newService.deleteUser(id).subscribe(data => {alert(data); this.ngOnInit();}, error => this.errorMessage = error)
  }
}
