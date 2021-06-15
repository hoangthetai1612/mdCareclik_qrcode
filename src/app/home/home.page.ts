import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  model = {
    status: false,
    fullName: 'Hoa Van Nguyen',
    dob: '06/20/1961',
    firstDose: '12/17/2020',
    secondDose: '01/07/2021',
    manufacture: 'Pfizer-BioNTech'

  }
  constructor() { }

  ngOnInit() {
  }

}
