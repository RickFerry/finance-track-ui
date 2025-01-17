import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {DropdownModule} from 'primeng/primeng';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
