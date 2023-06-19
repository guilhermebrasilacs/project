import { FuncionarioService } from "./funcionario.service";

export class FuncionarioAbreviadoService extends FuncionarioService{
    constructor(private numeroCaracteres: number){
        super();
    }
    
    adicionar(nome: string){
        super.adicionar(nome.substr(0, this.numeroCaracteres));
    }
}