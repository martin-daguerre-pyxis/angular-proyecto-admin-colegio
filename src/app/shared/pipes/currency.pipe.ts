import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode = 'USD',
    display:
        | 'code'
        | 'symbol'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',
    digitsInfo = '3.2-2',
    locale = 'en',
): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
}

}
