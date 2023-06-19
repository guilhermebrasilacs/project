import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent{
  id = 0;
  nome;
  adicionado=false;
  
  constructor(private funcionarioService: FuncionarioService){
  }

  adicionar(nome: string){
    this.funcionarioService.adicionar(nome);
  }
}