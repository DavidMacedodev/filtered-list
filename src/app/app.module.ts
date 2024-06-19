import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { UserStatusImagePipe } from './pipes/user-status-image.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/YYYY',
  timezone: '+0000'
}

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    UserStatusImagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: datePipeConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
