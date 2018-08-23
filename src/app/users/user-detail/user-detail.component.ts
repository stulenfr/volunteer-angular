import { Component, OnInit } from '@angular/core';
import { UsersvcService } from '../usersvc.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;


  constructor(private Usesvc: UsersvcService, private Router: Router, private Routed: ActivatedRoute) { }

  ngOnInit() {
    let id= this.Routed.snapshot.params.id;
    this.Usesvc.get(id)
    .subscribe(resp=>{
      this.user=resp.Data;
    })
  }

}
