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

  public order: string = 'date';
  public reverse: boolean = false;

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
    this.modalsService.openForm(
      UserPopupPage,
      {
        user: <IUserCreate>{},
        type: 'create' 
      },
      (result) => {
        this.userService.create(result).subscribe(
          data => {
            this.users.push(data.user)
          },
          error => {

          }
        )
      }
    )
  }

  edit(user) {
    this.modalsService.openForm(
      UserPopupPage,
      {
        user: JSON.parse(JSON.stringify( user )),
        type: 'edit' 
      },
      (result) => {
        this.userService.edit(result._id,result).subscribe(
          data => {
            this.users[this.users.indexOf(user)] = data
          },
          error => {

          }
        )
      }
    )
  }

  delete(user) {
    const resolve = {
      title: 'User delete',
      message: 'Are you sure?',
      submit: () => {
        this.userService.delete(user._id).subscribe(
          data => {
            this.users = this.users.filter(u => u !== user)
          },
          error => {

          }
        )
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
