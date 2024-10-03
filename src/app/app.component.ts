import {Component}from'@angular/core';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  inputValue: number | undefined = undefined;
  isValid: boolean = false;
  validateInput() {
    let value = String(this.inputValue || '');  
    if (value.startsWith('-')) {
      value = value.replace('-', '');  
    }
    const numValue = Number(value);
    const validNumbers = [1, 2, 3];
    this.isValid = validNumbers.includes(numValue);
    this.inputValue = !isNaN(numValue) && value !== '' ? numValue : undefined;
  }
}
