import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationsResponse } from './types/Operations-response.type';
import { operationsServices } from './services/operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users$: Observable<OperationsResponse> | undefined;

  searchTerm: string = '';
  constructor(
    private readonly _operationService: operationsServices
  ){}


 ngOnInit() {
    this.users$ = this._operationService.getUsers()
 }

}
