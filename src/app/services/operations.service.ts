import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OperationsResponse } from "../types/Operations-response.type";
import { operations } from "../mock/Operations";

@Injectable({
  providedIn: 'root',
})

export class operationsServices {


  getUsers(): Observable<OperationsResponse> {
    return of(operations)
  }
}
