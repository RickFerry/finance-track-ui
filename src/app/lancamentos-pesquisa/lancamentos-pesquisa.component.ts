import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
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
    {
      tipo: "DESPESA",
      descricao: "Aluguel",
      dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 6, 9),
      valor: 1750,
      pessoa: "Casa Nova Imóveis",
    },
    {
      tipo: "DESPESA",
      descricao: "Mensalidade de academia",
      dataVencimento: new Date(2017, 6, 13),
      dataPagamento: null,
      valor: 180,
      pessoa: "Academia Top",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de bicicleta",
      dataVencimento: new Date(2017, 6, 23),
      dataPagamento: new Date(2017, 6, 25),
      valor: 1100,
      pessoa: "Sebastião Souza",
    },
    {
      tipo: "DESPESA",
      descricao: "Conta de luz",
      dataVencimento: new Date(2017, 5, 3),
      dataPagamento: new Date(2017, 5, 2),
      valor: 125,
      pessoa: "Light",
    },
    {
      tipo: "DESPESA",
      descricao: "Mensalidade de plano de saúde",
      dataVencimento: new Date(2017, 6, 9),
      dataPagamento: null,
      valor: 215,
      pessoa: "Unimed",
    },
    {
      tipo: "DESPESA",
      descricao: "Gasolina",
      dataVencimento: new Date(2017, 6, 9),
      dataPagamento: new Date(2017, 6, 8),
      valor: 150,
      pessoa: "Posto Ipiranga",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de videogame",
      dataVencimento: new Date(2017, 6, 30),
      dataPagamento: new Date(2017, 6, 30),
      valor: 500,
      pessoa: "João da Silva",
    },
  ];
}
