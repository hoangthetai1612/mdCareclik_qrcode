import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"


@Injectable({providedIn: 'root'})
export class PatientService{
    constructor(
        private http: HttpClient
    ) {

    }
    getInfo(id): Observable<any> {
        return this.http.get(`api/getInfoProfile/${id}`).pipe(map((res: any)=> res))
    }
}