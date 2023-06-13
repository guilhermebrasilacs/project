import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
    id = 0;
    nome = '';
    adicionado = false;
    @Output() funcionarioAdicionado = new EventEmitter(); 
    
    adicionar(){
      this.nome = this.nome;
      this.adicionado = true;
      
      const funcionario  =({
        nome: this.nome,
        id: ++this.id,
      });

      this.funcionarioAdicionado.emit(funcionario);
    }
}