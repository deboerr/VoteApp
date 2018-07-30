// roles.component.ts

import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Role } from './Role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService
      .getRoles()
      .subscribe((data: Role[]) => {
          this.roles = data;
        });    
  }

}
