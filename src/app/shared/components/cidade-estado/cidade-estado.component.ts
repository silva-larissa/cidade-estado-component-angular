import { ConsultaCidadesService } from './../../services/consulta-cidades.service';
import { ConsultaEstadoService } from './../../services/consulta-estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss'],
  providers: [ConsultaEstadoService]
})

export class CidadeEstadoComponent implements OnInit {

  estados: Array<string> = [];
  cidades: any = [];

  constructor(
    private estadoService: ConsultaEstadoService,
    private cidadeService: ConsultaCidadesService){
  }

  ngOnInit(){

    this.estadoService
      .getEstados()
      .subscribe(resultado => {this.estados = resultado});
    }

  listarCidades(ev: any){
    const siglaEstado = ev.selectedItem.sigla;
    return this.cidadeService
      .getCidades(siglaEstado)
      .subscribe(resultado => {console.log(resultado);
      this.cidades = resultado});
  }

}
