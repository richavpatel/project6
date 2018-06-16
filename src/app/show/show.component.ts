import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  user: any;
  constructor(private data: DataService, private activedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const a = this.activedroute.snapshot.params['id'];
    this.data.getOne(a).subscribe((data: any) => {
      console.log(data);
      this.user = data;
    });
}

deleteThisUser() {
  const id = this.user.userId;
  this.data.deleteOne(id).subscribe(data => {
    this.router.navigate(['']);
  });
}

}
