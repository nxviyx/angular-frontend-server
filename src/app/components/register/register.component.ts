import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'; 
// import { CustomValidators } from 'ng2-validation';
// services
import { RegisterService } from 'src/app/services/register.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  // image_url:any = '';
  image_url: string; 
  loading = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService : RegisterService,
    private alertService : AlertService

  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      // designation:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirm_password:['',[Validators.required,Validators.minLength(5)]],
      avatar:[null],
      // address:['',Validators.required],
      // gender:['',Validators.required]
    })
  }

  get f() { return this.registerForm.controls; }



showPreview(event) {
  const file = (event.target as HTMLInputElement).files[0];

  // File Preview
  const reader = new FileReader();
  reader.onload = () => {
    this.image_url = reader.result as string;

    this.registerForm.patchValue({
      avatar: reader.result as string
    });
    this.registerForm.get('avatar').updateValueAndValidity()

  }
  reader.readAsDataURL(file)
}


  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true

    // print register data
    console.log('Your form data : ', this.registerForm.value );

    this.registerService.registerUser(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data['response']){
            this.alertService.success(data['message'], true);
            this.loading = false
            this.router.navigate(['/login']);
          }else{
            this.alertService.error(data['message'], true);
          }
        },
        error => {
          this.router.navigate(['']);
        });
  }
}
