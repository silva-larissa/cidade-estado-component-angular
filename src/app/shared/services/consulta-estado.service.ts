import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEstadoService {

  private readonly url_API_estados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
  constructor(private http: HttpClient) { }

  getEstados(){
    return this.http.get<string[]>(this.url_API_estados);
  }

}
