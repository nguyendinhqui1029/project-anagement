import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@core/models/common.model';
import { ProjectRequestBody } from '@core/models/project.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http:HttpClient = inject(HttpClient);

  createProject(body:ProjectRequestBody) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/project`,body)
  }
}
