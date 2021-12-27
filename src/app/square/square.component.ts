import { Component, Input } from '@angular/core';

/**
 * This is a Dumb Component
 *
 * In the real world, We often consider people Dumb as thos who don’t have a sense of
 * purpose or are dependent on others to move forward or getting things then.
 *
 * That is exactly what a Dumb Component is in the programming world as well.
 *
 * A Component that does absolutely nothing on its own and is dependent on
 * Smarter Components. All Dumb Components do is present themselves to the
 * DOM. Hence they are also referred to as “Presentational Components”
 * or something called “Isolated Components”.
 */

@Component({
  selector: 'app-square',
  // templateUrl: './square.component.html',
  // Below is an inline template within the component decorator instead of pointing to the .html template
  template: `
    <p>
      <button>{{ value }}</button>
      <!-- Demonstrating passing property value from constructor -->
      <!-- {{ rando }} -->
    </p>
  `,
  styles: [],
})
export class SquareComponent {
  // Indicate that properties are passed to this component via Input
  @Input() value: 'X' | 'O'; // here we're limiting the value to being either X or O

  /**
   * In order to declare variables in component without
   * initilaizing, go to tsconfig.json and set
   * "strict": false
   */
  // rando: number; demonstrating

  /** To demonstrate change detection and property binding:
  constructor() {

     * Demonstraitng passing data from a constructor to
     * initialize a property every .5 seconds
     *
     * setInterval(() => this.rando = Math.random(), 500);
  }
   * */
}
