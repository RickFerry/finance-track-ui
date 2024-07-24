import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lancamentos = [
    {
      tipo: "DESPESA",
      descricao: "Compra de pão",
      dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null,
      valor: 4.55,
      pessoa: "Padaria do José",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de software",
      dataVencimento: new Date(2017, 5, 10),
      dataPagamento: new Date(2017, 5, 10),
      valor: 80000,
      pessoa: "Atacado Brasil",
    },
    {
      tipo: "DESPESA",
      descricao: "Impostos",
      dataVencimento: new Date(2017, 6, 20),
      dataPagamento: null,
      valor: 14312,
      pessoa: "Ministério da Fazenda",
    },
    {
      tipo: "DESPESA",
      descricao: "Mensalidade de escola",
      dataVencimento: new Date(2017, 5, 5),
      dataPagamento: new Date(2017, 5, 5),
      valor: 900,
      pessoa: "Escola Abelha Rainha",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de carro",
      dataVencimento: new Date(2017, 7, 15),
      dataPagamento: null,
      valor: 55000,
      pessoa: "Sebastião Souza",
    },
  ];
}
