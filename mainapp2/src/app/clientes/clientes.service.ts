import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  getClientes()
  {
    return this.http.get("http://lavanderiasos.com/api/v1/clientes");
  }

  postClientes()
  {
    ///return this.http.post("http://lavanderiasos.com/api/v1/clientes");
  }
}
