import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pessoas-pesquisa",
  templateUrl: "./pessoas-pesquisa.component.html",
  styleUrls: ["./pessoas-pesquisa.component.css"],
})
export class PessoasPesquisaComponent {
  pessoas = [
    { nome: "João", cidade: "São Paulo", estado: "SP", ativo: true },
    { nome: "Maria", cidade: "Curitiba", estado: "PR", ativo: false },
    { nome: "Pedro", cidade: "Rio de Janeiro", estado: "RJ", ativo: true },
    { nome: "José", cidade: "Florianópolis", estado: "SC", ativo: false },
    { nome: "Ana", cidade: "Salvador", estado: "BA", ativo: true },
    { nome: "Carlos", cidade: "Porto Alegre", estado: "RS", ativo: true },
    { nome: "Mariana", cidade: "Belo Horizonte", estado: "MG", ativo: false },
    { nome: "Ricardo", cidade: "Recife", estado: "PE", ativo: true },
    { nome: "Fernanda", cidade: "Fortaleza", estado: "CE", ativo: false },
    { nome: "Lucas", cidade: "Brasília", estado: "DF", ativo: true },
    { nome: "Juliana", cidade: "Vitória", estado: "ES", ativo: false },
    { nome: "Paulo", cidade: "Manaus", estado: "AM", ativo: true },
    { nome: "Camila", cidade: "Belém", estado: "PA", ativo: false },
    { nome: "Gustavo", cidade: "Goiânia", estado: "GO", ativo: true },
    { nome: "Aline", cidade: "Cuiabá", estado: "MT", ativo: false },
  ];
}
