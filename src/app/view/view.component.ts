import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  post: any;
  constructor(private data: DataService, private actiRouter: ActivatedRoute) { }

  ngOnInit() {
    const b = this.actiRouter.snapshot.params[ 'id' ];
    this.data.getOnePost(b).subscribe((data: any) => {
      console.log(data);
      this.post = data;
    });

  }

}
