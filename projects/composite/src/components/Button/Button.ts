import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-button',
  templateUrl: './button.html',
  styles: ``,
})
export class Button {
  @Input() color: string = 'success';
  @Input() variant: string = 'fill';

  theme: any = {
    colors: {
      primary: {
        active: 'blue-500',
        hover: 'blue-400',
      },
      danger: {
        active: 'red-500',
        hover: 'red-400',
      },
      success: {
        active: 'green-500',
        hover: 'green-400',
      },
    },
    instance(color: string, variant: string) {
      let css = '';
      switch (variant) {
        case 'border':
          css = `border border-2 border-${this.colors[color].active} text-${this.colors[color].active} hover:border-${this.colors[color].hover} hover:text-${this.colors[color].hover}`;
          break;
        case 'fill':
          css = `bg-${this.colors[color].active} text-white hover:bg-${this.colors[color].hover}`;
          break;
        case 'no-fill':
          css = `text-${this.colors[color].active} hover:text-${this.colors[color].hover} hover:border hover:border-${this.colors[color].active} hover:border-2`;
          break;
        default:
          break;
      }

      console.log(css);
      return css;
    },
  };
}
