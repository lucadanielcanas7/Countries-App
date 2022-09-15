import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styles: [
  ]
})
export class GenericErrorComponent {

  @Input() isError : boolean = false;
  @Input() termino : string = '';
}
