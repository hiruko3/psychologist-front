import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  // private req = inject(REQUEST, { optional: true }); // null in browser; defined during SSR

  getUser(id: string): Observable<User> {
    // Relative URL so it works on both SSR and the browser via the same origin
    return this.http.get<User>(`/api/user/${encodeURIComponent(id)}`).pipe(
      map(u => u) // add mapping/normalization as needed
    );
  }

}
