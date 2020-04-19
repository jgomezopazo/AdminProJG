import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input("nombre") leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output() nuevoValor: EventEmitter<number> = new EventEmitter();

  @ViewChild("txtProgress") txtProgress: ElementRef;

  constructor() { }

  ngOnInit() { }

  cambiarValor(valor) {
    this.progreso = this.progreso + valor;

    if (this.progreso < 0) {
      this.progreso = 0;
    }
    if (this.progreso > 100) {
      this.progreso = 100;
    }

    this.nuevoValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onchanges(newValue: number) {
    console.log(newValue);

    //let elemtHtml: any = document.getElementsByName("progreso")[0];

    if (newValue) {
      if (newValue >= 100) {
        this.progreso = 100;
      } else if (newValue <= 0) {
        this.progreso = 0;
      } else {
        this.progreso = newValue;
      }

      //elemtHtml.value = this.progreso;
      this.txtProgress.nativeElement.value = this.progreso;
      console.log("txtProgress: ", this.txtProgress.nativeElement.value);

      this.nuevoValor.emit(this.progreso);
    }
  }
}
