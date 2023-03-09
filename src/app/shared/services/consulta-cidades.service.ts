import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCidadesService {

  constructor(private http: HttpClient) { }

  getCidades(siglaEstado: string){
    return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios`);
  }

}
