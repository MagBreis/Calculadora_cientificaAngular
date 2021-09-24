import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificaService {
  static readonly Soma: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly MULTIPLICACAO: string = '*'
  static readonly DIVISAO: string = '/'
  


  constructor() { }

  calcular(num1: number, num2: number, operacao: string) {
    let resultado: number

    switch (operacao) {
      case CientificaService.Soma:
        resultado = num1 + num2;
        break
      case CientificaService.SUBTRACAO:
        resultado = num1 - num2;
        break
      case CientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
        break
      case CientificaService.DIVISAO:
        resultado = num1 / num2;
        break
     
      default:
        resultado = 0;
    }
    return resultado

  };
   
  
}
