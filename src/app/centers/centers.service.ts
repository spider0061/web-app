/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Centers service.
 */
@Injectable({
    providedIn: 'root'
  })


export class CentersService {
    constructor(private http: HttpClient) { }

    getCenters(): Observable<any> {
      return  this.http.get('/centers');
    }

    getCenterData(centerId: string) {
      const httpParams = new HttpParams().set('associations', 'groupMembers');
      return this.http.get(`/centers/${centerId}`, { params: httpParams });
    }

    getCenterSummary(centerId: string) {
      const httpParams = new HttpParams().set('R_groupId', centerId)
        .set('genericResultSet', 'false');
      return this.http.get(`/runreports/GroupSummaryCounts`, { params: httpParams });
    }

    getCenterAccountData(centerId: string) {
      return this.http.get(`/centers/${centerId}/accounts`);
    }

}
