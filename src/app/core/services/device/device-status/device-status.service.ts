import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Env
import { environment } from '../../../../environments/environment';

// Modules
import { CoreModule } from '../../../core.module';

// Models
import { DeviceStatus } from '../../../../shared/models/data/device/device-status.model';

@Injectable()
export class DeviceStatusService {

  constructor(private http: HttpClient) { 
    
  }

  getAll() : Observable<DeviceStatus[]> {
    const url = environment.apiUrl + 'devicestatus';
    return this.http.get<DeviceStatus[]>(url);
  }

  getById(id: number) : Observable<DeviceStatus> {
    const url = environment.apiUrl + 'devicestatus/' + id;
    return this.http.get<DeviceStatus>(url);
  }

  postDeviceStatus(body: DeviceStatus) : Observable<DeviceStatus> {
    const url = environment.apiUrl + 'devicestatus';
    return this.http.post<DeviceStatus>(url, body);
  }

  putDeviceStatus(id: number, body: DeviceStatus) : Observable<DeviceStatus> {
    const url = environment.apiUrl + 'devicestatus/' + id;
    return this.http.put<DeviceStatus>(url, body);
  }
}
