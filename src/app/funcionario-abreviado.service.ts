import { FuncionarioService } from "./funcionario.service";

export class FuncionarioAbreviadoService extends FuncionarioService{
    adicionar(nome: string){
        super.adicionar(nome.substr(0,3));
    }
}