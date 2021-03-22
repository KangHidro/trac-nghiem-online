
import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';

// third library

// #1 https://github.com/danrevah/ngx-pipes#installation
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    CurrencyPipe,
    SafeHtmlPipe,
    SafeHtmlPipe,
  ],
  imports: [
  ],
  exports: [
    CurrencyPipe,
    SafeHtmlPipe,
  ],
  providers: []
})
export class PipeUserModule { }
