import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authChangeSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authChangeSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggle() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    this.authChangeSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
