import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TokenManagerService} from '../../services/token-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  tokenManagerService = inject(TokenManagerService);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  newToken : any = '';

  setToken() {
    this.tokenManagerService.setToken('access_token', this.newToken);
    console.log('Token set: ', this.newToken);
    console.log(this.activatedRoute.url)
    this.router.navigateByUrl("/dashboard");

  }

  form = new FormGroup({
        name : new FormControl('', [Validators.required, Validators.maxLength(20)]),
        address : new FormControl('', [Validators.required, Validators.maxLength(20)]),
        salary : new FormControl('', [Validators.required, Validators.maxLength(20)]),
        age : new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
  })

  submitData() {
      console.log();
  }

}
