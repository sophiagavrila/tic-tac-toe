import { Component, OnInit } from '@angular/core';
/**
 * Board is a Smart Component meaning it has an internal
 * state which can change.
 */

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[]; // represents 9 moves on game board ( arr of strings)
  xIsNext: boolean // boolean to determine current player
  winner: string; // determines winner

  /**
   * Constructor runs immediately when your class is created
   * You don't typically do anything inside your constructor
   * except inject any dependencies that this component needs.
   * */
  constructor() { }

  // Initial set up happens here
  ngOnInit(): void {
    this.newGame() // sets up a new game by populating squares property
  }

  // Creates an array with 9 elements that are initially null.
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
    // if xIsNext is = to true, the next player is 'X'; if it's false, returns 'O'
  }

  /**
   * This method serves as an event handler which is what will
   * fire when the user clicks on one of the buttons to make a move.
   */
  makeMove(idx: number) {

    /** When the index in the array that they click on
    * Ask: is it null?
    */
    if (!this.squares[idx]) {
      /**
       * If the element at that index of the squares array is
       * null, insert the player (either X or O at that index)
       * by invoking the getter.
       */
      this.squares.splice(idx, 1, this.player) // splice(start, deleteCount, item1)
      // start: The index at which to start changing the array.
      // deleteCount: An integer indicating the number of elements in the array to remove from start
      // item1: The elements to add to the array, beginning from start.
      this.xIsNext = !this.xIsNext;
    }
    // don't do anything if it's not null (already been clicked)
  }

}
