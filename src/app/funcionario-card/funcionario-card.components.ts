import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-funcionario-card',
    templateUrl: './funcionario-card.components.html',
    styleUrls:['./funcionario-card.components.css']
})
export class FuncionarioCardComponent {
        @Input('obj') funcionario: any;

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