import { Directive, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnChanges {
  @Input() appBackgroundColor: number = 0;
  constructor(private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges) {
    this.updateBackgroundColor();
  }
  private updateBackgroundColor() {
    let color: string = 'white'; 
    switch (this.appBackgroundColor) {
      case 1:
        color = 'red';
        break;
      case 2:
        color = 'green';
        break;
      case 3:
        color = 'yellow';
        break;
      default:
        color = 'white';
        break;
    }
    this.renderer.setStyle(document.body, 'backgroundColor', color);
  }
}

