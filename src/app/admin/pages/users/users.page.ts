import { Component, OnInit } from '@angular/core'

import { UserService, SessionService, ModalsService } from 'app/services'

import { UserPopupPage } from 'app/modals'

import { IUser, IUserCreate, IUserUpdate } from 'app/models'

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html'
})
export class UsersPageComponent implements OnInit {

  public users: Array<IUser> = []

  public order: string = 'date'
  public reverse: boolean = false
  public loading: boolean = false

  constructor(private userService: UserService,
              public sessionService: SessionService,
              private modalsService: ModalsService) {
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.userService.getAll().subscribe(
      data => {
        this.users = data.users
      },
      error => {

      }
    )
  }

  create() {
    this.loading = true
    this.modalsService.openForm(
      UserPopupPage,
      {
        user: <IUserCreate>{},
        type: 'create' 
      },
      (result) => {
        if (result) {
          this.userService.create(result).subscribe(
            data => {
              this.loading = false
              this.users.push(data.user)
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      }
    )
  }

  edit(user) {
    this.loading = true
    this.modalsService.openForm(
      UserPopupPage,
      {
        user: JSON.parse(JSON.stringify( user )),
        type: 'edit' 
      },
      (result) => {
        if (result) {
          this.userService.edit(result._id,result).subscribe(
            data => {
              this.loading = false
              this.users[this.users.indexOf(user)] = data
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      }
    )
  }

  delete(user) {
    this.loading = true
    const resolve = {
      title: 'User delete',
      message: 'Are you sure?',
      submit: (result) => {
        if (result) {
          this.userService.delete(user._id).subscribe(
            data => {
              this.loading = false
              this.users = this.users.filter(u => u !== user)
            },
            error => {
              this.loading = false
            }
          )
        } else {
          this.loading = false
        }
      }
    }
    this.modalsService.openMessage(resolve)
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse
    } else {
      this.reverse = false
      this.order = value
    }    
  }
}
