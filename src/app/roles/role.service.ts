// role.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoleService {
  
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';

  getRoles() {
    console.log('${this.url}/roles');
    return this
            .http
            .get(`${this.url}/roles`);
        }
}