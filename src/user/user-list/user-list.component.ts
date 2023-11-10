import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  Subject,
  takeUntil,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  private criteriaSubject = new BehaviorSubject<string>('');
  criteria$ = this.criteriaSubject.asObservable();
  destroy$: Subject<void> = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = combineLatest([
      this.userService.getList(),
      this.criteria$,
    ]).pipe(
      map(([users, criteria]) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(criteria.toLowerCase())
        )
      ),
      takeUntil(this.destroy$)
    );
  }

  trackById(index: number, user: User) {
    return user.id;
  }

  onCriteriaChange(criteria: string) {
    this.criteriaSubject.next(criteria);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
