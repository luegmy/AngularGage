import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent {
  @Input() page = 0;
  @Input() totalPages: number[];
  @Input() size = 0;

  @Input() order = '';
  @Input() asc = true;
  @Input() isFirst = false;
  @Input() isLast = false;

  @Output() paginaEmitter: EventEmitter<number> = new EventEmitter

  constructor() { }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.pasarPagina()
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.pasarPagina()
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.pasarPagina()
  }

  pasarPagina() {
    this.paginaEmitter.emit(this.page);
  }

}
