import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from 'src/services/patient.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  id: any;
  model$: Observable<Patient>;
  constructor(
    private patientService: PatientService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;
    this.model$ = this.patientService.getInfo(this.id);
  }
}
