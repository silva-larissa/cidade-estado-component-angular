import { Component, OnInit } from '@angular/core';
import { Estado } from './estado';
import { Cidade } from './cidade';
import { ConsultaCidadesService } from './../../services/consulta-cidades.service';
import { ConsultaEstadoService } from './../../services/consulta-estado.service';

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss'],
  providers: [ConsultaEstadoService]
})

export class CidadeEstadoComponent implements OnInit {

  estados: Array<Estado> = [];
  cidades: Array<Cidade> = [];

  constructor(
    private estadoService: ConsultaEstadoService,
    private cidadeService: ConsultaCidadesService){
  }

  ngOnInit(){

    this.estadoService.getEstados().subscribe(uf => {
      this.estados = uf;
    })
  }

  listarCidades(ev: any) {
    const uf = ev.selectedItem.sigla;
    return this.cidadeService
      .getCidades(uf)
      .subscribe(resultado => {this.cidades = resultado});
    }

}
