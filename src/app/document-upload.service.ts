import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentUploadService {
  private apiUrl = 'https://363x6nhop5.execute-api.ap-southeast-2.amazonaws.com/test/documentUpload';

  constructor(private http: HttpClient) { }

  uploadDocument(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, data, { headers });
  }
}
