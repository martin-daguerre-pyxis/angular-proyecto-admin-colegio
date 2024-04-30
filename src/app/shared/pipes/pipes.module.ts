import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ValueArrayPipe } from './array.pipe';
import { CurrencyPipe } from './currency.pipe';
import { OrderByPipe } from './orderBy.pipe';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [SafePipe, ValueArrayPipe, CurrencyPipe, PrettyJsonPipe, OrderByPipe],
  imports: [CommonModule],
  exports: [SafePipe, ValueArrayPipe, CurrencyPipe, PrettyJsonPipe, OrderByPipe],
})
export class PipesModule {}
