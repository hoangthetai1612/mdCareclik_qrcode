import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  model = {
    status: true,
    fullName: 'Hoa Van Nguyen',
    dob: '06/20/1961',
    firstDose: '12/17/2020',
    secondDose: '01/07/2021',
    manufacture: 'Pfizer-BioNTech'
  }
  id: any;
  model$: any;
  constructor(
    private infoService: InfoService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;
    this.model$ = this.infoService.getInfo(this.id);
  }


}
