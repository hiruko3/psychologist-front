import {Component, effect, inject, Input, signal} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  readonly user = signal<User | null>(null);

  @Input({ required: true }) id!: string; // bound from :id automatically

  /**
   * UserService
   * @private
   */
  private readonly userService = inject(UserService);


  constructor() {
    effect(() => {
      const currentId = this.id;        // reacts to route param changes
      if (currentId) {
        this.userService.getUser(currentId).subscribe(u => this.user.set(u));
      }
    });
  }



}
