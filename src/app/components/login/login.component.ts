import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TokenManagerService} from '../../services/token-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  tokenManagerService = inject(TokenManagerService);
  router = inject(Router)
  newToken : any = '';

  setToken() {
    this.tokenManagerService.setToken('access_token',this.newToken);
    console.log('Token set: ', this.newToken);
    this.router.navigateByUrl("/dashboard");
  }

}
