import { Inject, Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class FuncionarioService{
    ultimoId = 1;
    funcionarios=[
        {id: 1, nome: 'João'}
    ];
    
    constructor(private logService: LogService){

    }
    adicionar(nome){
        this.logService.log(`Adicionando nome ${nome}...`)
        const funcionario ={
            id:++this.ultimoId,
            nome: nome
        }
        this.funcionarios.push(funcionario);
    }

    consultar(){
        return this.funcionarios;
    }
}