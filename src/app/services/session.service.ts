import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

import { environment } from 'environments/environment'

import { PermissionService } from 'angular2-permission'

import { AuthService as Auth } from 'ng2-ui-auth'
import { AuthService } from 'app/services/auth.service'

import { IUser } from 'app/models'

@Injectable()
export class SessionService {

  public me: IUser = <IUser>{}

  constructor(private authService: AuthService,
              public auth: Auth,
              private permissionService: PermissionService) {
  }

  start(): Promise<boolean> {
    return new Promise((resolve) => {
      this.permissionService.clearStore()
      if (this.isAuthenticated) {
        this.authService.getMe().subscribe(
          data => {
            this.me = data
            this.permissionService.define([this.me.role || 'member'])
            resolve(true)
          },
          error => {
            resolve(false)
          }
        )        
      } else {
        resolve(true)
      }      
    })
  }

  login(input): Promise<boolean> {
    return new Promise((resolve) => {
    this.authService.auth(input).subscribe(
      data => {
        this.auth.setToken(data['token'])
        this.onLogin().then(
          data => {
            resolve(data)
          }
        )        
      },
      error => {
        resolve(false)
      })
    })
  }

  logout(): Promise<boolean> {
    return new Promise((resolve) => {
    this.auth.logout().subscribe(
      data => {
        this.onLogout()
        resolve(true)
      },
      error => {
        resolve(false)
      })
    })
  }

  onLogin(): Promise<boolean> {
    return this.start()
  }

  onLogout() {
    this.permissionService.clearStore()
    this.me = null
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated()
  }

  get token() {
    return this.auth.getToken()
  }
}
