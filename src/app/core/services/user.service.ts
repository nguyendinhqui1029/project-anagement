import { Injectable } from '@angular/core';
import { UserModel } from '@core/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userLogin = new BehaviorSubject<UserModel|null>(null);
    userModel$ = this.userLogin.asObservable();
  
    setUserModelStatus(value: UserModel | null) {
      this.userLogin.next(value);
    }

    getUserLoginValue() {
      return this.userLogin.getValue();
    }
}
