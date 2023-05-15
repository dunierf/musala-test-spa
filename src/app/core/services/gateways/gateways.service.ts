import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Env
import { environment } from '../../../environments/environment';

// Modules
import { CoreModule } from '../../core.module';

// Models
import { Gateway } from 'src/app/shared/models/data/gateway/gateway.model';



@Injectable({
  providedIn: CoreModule
})
export class GatewaysService {

  constructor(private http: HttpClient) { 

  }

  getAll() : Observable<Gateway[]> {
    const url = environment.apiUrl + 'gateways';
    return this.http.get<Gateway[]>(url);
  }

  getById(id: number) : Observable<Gateway> {
    const url = environment.apiUrl + 'gateways/' + id;
    return this.http.get<Gateway>(url);
  }

  postGateway(body: Gateway) : Observable<Gateway> {
    const url = environment.apiUrl + 'gateways';
    return this.http.post<Gateway>(url, body);
  }

  putGateway(id: number, body: Gateway) : Observable<Gateway> {
    const url = environment.apiUrl + 'gateways/' + id;
    return this.http.put<Gateway>(url, body);
  }

}
