import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-funcionario-card',
    templateUrl: './funcionario-card.component.html',
    styleUrls:['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {
        @Input('funcionario') funcionario: any;

        isAdmin(){
            return this.funcionario.nome.startsWith('P');
        }

        getEstilosCartao(){
            return {
                backgroundColor: 'lightblue',
                borderWidth: '2' + 'px'
            };
        }
}