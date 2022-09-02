import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";

  clientes: any[] = [];

  constructor(private service:ClientesService) { }

  /*
  addCliente()
  {
    this.clientes.push({tipo:"PERSONA",numero_documento:"12587458",nombre:"Luis"});
    //this.clientes-this.clientes;

    console.log(this.clientes)
  }

  removeCliente()
{
  this.clientes.splice(this.clientes.lenght-1,1);
}
*/
  ngOnInit(): void {

    console.log("hola mundo de m");

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


    this.service.getClientes().subscribe((response:any)=>{

      console.log(response);
      this.clientes=response.data;

      this.dtTrigger.next(null);

    });

  }

}
