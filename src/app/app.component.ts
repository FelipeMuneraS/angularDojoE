import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'numeros';
  numb = null;
  rom: any;
  numbRuby = null;
  romRuby: any;
  unidad = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  decena = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  constructor() { }

  validate(evt) {
    const theEvent = evt;
    const key = theEvent.keyCode;
    const code = '' + this.numb + theEvent.key;
    let codeNum = 101;
    try {
      codeNum = +code;
    } catch (error) {
    }
    if (key < 47 || key > 58) {
      theEvent.returnValue = false;
      theEvent.preventDefault();
    }
    if (codeNum > 100) {
      theEvent.returnValue = false;
      theEvent.preventDefault();
    }
  }

  convertir() {
    if (this.numb !== null) {
      const num = this.numb;
      const d = (Math.floor(num / 10)) % 10;
      const u = num % 10;
      console.log(num === 100);
      if (num >= 100) {
        this.rom = 'C';
      } else if (num >= 10) {
        this.rom = this.decena[d] + this.unidad[u];
      } else {
        this.rom = this.unidad[num];
      }
    }
  }

  validateRuby(evt) {
    const theEvent = evt;
    const key = theEvent.keyCode;
    const code = '' + this.numbRuby + theEvent.key;
    let codeNum = 101;
    try {
      codeNum = +code;
    } catch (error) {
    }
    if (key < 47 || key > 58) {
      theEvent.returnValue = false;
      theEvent.preventDefault();
    }
    if (codeNum > 100) {
      theEvent.returnValue = false;
      theEvent.preventDefault();
    }
  }

  convertirRuby() {
    if (this.numbRuby !== null) {
      const num = this.numbRuby;
      const d = (Math.floor(num / 10)) % 10;
      const u = num % 10;
      console.log(num === 100);
      if (num >= 100) {
        this.romRuby = 'C';
      } else if (num >= 10) {
        this.romRuby = this.decena[d] + this.unidad[u];
      } else {
        this.romRuby = this.unidad[num];
      }
    }
  }
}
