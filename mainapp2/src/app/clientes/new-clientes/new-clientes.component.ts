import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-clientes',
  templateUrl: './new-clientes.component.html',
  styleUrls: ['./new-clientes.component.css']
})
export class NewClientesComponent implements OnInit {

  tipoDocumento: string="";
  tipos_documentos: any[] = [
    {valor: 'DNI', texto: 'DNI'},
    {valor: 'PASAPORTE', texto: 'PASAPORTE'},
    {valor: 'CE', texto: 'CARNET DE EXTRANGERIA'}
  ];
/*
  tipoCliente: string="";
  tipos_clientes: any[] = [
    {valor: 'PERSONA', texto: 'PERSONA'},
    {valor: 'EMPRESA', texto: 'EMPRESA'}
  ];
*/
  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
  }

}
