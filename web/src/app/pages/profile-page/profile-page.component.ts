import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { ApiService } from 'src/app/modules/api/api.service';
import { AuthService } from 'src/app/modules/firebase/auth.service';

type UserInfo = {
  email: string;
  firstName: string;
  lastName: string;
} | null;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  userInfo$: BehaviorSubject<UserInfo>;
  userSub: Subscription | null;
  userPollSub: Subscription | null;

  constructor(private api: ApiService, private auth: AuthService) {
    this.userInfo$ = new BehaviorSubject<UserInfo>(null);

    this.userSub = null;
    this.userPollSub = null;
  }

  ngOnInit(): void {
    this.userSub?.unsubscribe();

    this.userSub = this.auth.user$.subscribe((user) => {
      if (!user) {
        return;
      }

      this.api.get<any>(`/users/read`).then((res: any) => {
        const {
          data: {
            user: { email, firstName, lastName },
          },
        } = res;

        this.userInfo$.next({
          email,
          firstName,
          lastName,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
