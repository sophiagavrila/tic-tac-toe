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

  // TS getter (can invoke by this.player)
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
      this.xIsNext = !this.xIsNext; // toggle xIsNext value to its opposite value
    }
    // don't do anything if it's not null (already been clicked)

    // Lastly call the calculateWinner() method incase someone has one...
    this.winner = this.calculateWinner();
  }

  /**
   * This method is an algorithm adopted from React's tic-tac-toe tutorial:
   * https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
   *
   * Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null.
   */

   calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  // After completeing this, begin th  board.component.html template for design
}
