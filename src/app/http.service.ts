import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Accept:  'application/json',
    Authorization: 'Bearer ya29.a0AfH6SMD_k5AXbcK-T2JUlcflSKVK8LH6BuYlfpNIZtSpGFDrvJkUZuWqSt9fML7smoemULl8C7EEs2-YYLdevWVDKXTEiK56a3uP0jGlEZBwZ9g8RQvcGvsMoDHLutcTIzgYaxtarjs17Ot3Oy7pV1uZAG2zM6kiXPdD'
  }),
  params: new HttpParams().set('key', 'AIzaSyCjj0oSmdH_SrLbB1qCj3ZRey81_dPRzfY'),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getPicture() {
    return this.http.get('https://www.googleapis.com/drive/v2/files/1mrnolz-4mRWrHXQoT5l9sTlLGWru7m8Y/children',
      {
        params: httpOptions.params,
        headers: httpOptions.headers
      }
    );
  }
}
