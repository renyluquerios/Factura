import { Component } from '@angular/core';
import { Factura } from './factura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public factura: Factura =this.facturaEmpty(); 
  public facturas: Factura []= []; 

  onDatos(): void {
    console.log(this.factura);
    this.facturas.push(this.factura);
    this.factura = this.facturaEmpty();
  }

  facturaEmpty(): Factura {
    return{
    codigo: "",
    DNI: "",
    formaPay: "",
    fecha: "",
    descripcion: "",
    importe:"$ ",

    };
  }

  onDelete(i: number): void{
    this.facturas.splice(i, 1);
  }

}