# tic_tac_toe
Remote respository for tic tac toe project

Tic tac toe game, where the user/user's firstly choose which way of playing they want to go with.
The options are: (1) Play against the computer, or (2) have two users play against eachother.

From here the game board will be displayed, and players can insert symbols onto the board.

Two users playing against eachother:

Genral:
The code all sits within event listeners which are listening for when the "Two Player" button is pressed at the beginning screen.
From there, other event listeners are instantiated, and objects are declared and instantiated. 
The methods and variables within the objects result in the game board and other functionality being produced. It allows for users to play, and allows for the game to be reset. 

In depth: 

#1: 
- When the "Two Players" button is pressed down with the mouse, the event listner in place does the following:
  1) Sets a new class for the button to give it a darker shade for its border and font, to visually depict the button being pressed.
  2) Declares an event listner to listen for when the mouse rises from the button. When this event listner is fired, it results in the following (which will be each explored in-depth):
  - Declares and instantiates the two different object modules, one called gameObject and the other gameBoardObject.
  - Declares the factory function for creating players, and instantiates two player objects from the function.
  - Declares an event listener which listens out for when a block on the game board is pressed by a player
  - Declares an event listener which fires when the reset button is pressed.

#2:
- The loadGameScreen method is called from gameObject. The method's code removes the DOM elements making up the start screen, creates the DOM elements for the game screen, and places these elements onto the screen.
- Two instances of the player object are instantiated, by calling the factory function playerObject. 

#2.1:
Calling the playerObject factory function returns an object with the appropriate player symbol. Player one is assigned "X" and player two is assigned "O".

- The first event listner is a window event listener, listening out for a click of the mouse event. The idea of this event listener is that it captures a user pressing the game board to insert one of their symbols.
- Firstly we will look the "else" within the event listener.
- The following method is called: gameBoardObject.moveUpdate. We will look at the 2nd argument passed in first, as this is also a method call.
- The method call is gameObject.playerTurn:

#2.2: 
- The following is passed into the playerTurn method:
  1) gameBoardObject.boardarray -> An array, declared and updated in the gameBoardObject object, holding in-order the current(before any new symbol is inserted) the contents of the gameboard. It is initially declared as an array of nine empty strings, resembling a blank game board.
  2) playerOne, and playerTwo objects: remember all this object stores is a variable storing what the player symbol is.
  3) the event-itself, from which details of what is 'clicked' are used in the code logic.

Looking at the playerTurn defined in the gameObject object:

#2.2.1: 
- countArray is instantiated by calling _countGenerator.
- _countGenerator is a private method in this same object.
- It takes in the same boardArray that is described above.
- the method counts how many crosses are currently in boardArray, how many naughts are currently in boardArray, and returns these values to playerTurn.

- symbolInsert is then declared, this is returned from the function, and it will be consisting of the appropriate player symbol to insert into the board.

- if the element clicked on has an id 'column', then symbolInsert is assigned the value returned from _symbolUpdate method call(discussed below).
- The elements which have the id of 'column' are the 9 blocks making up the gameBoard. This means the _symbolUpdate method is only called if one of these blocks is pressed.

#2.2.2:
- _symbolUpdate is a private method which determines who has pressed the board based on the current contents of the boardArray. It then determines which symbol is appropriate to insert.

- if the number of naughts and crosses on the board are equal, then we know it is the player who is playing with X's that must play.
- within this is the following: if playerOne's symbol is X, and X is the symbol we know needs to be input, then symbolInsert is set to playerOne's symbol. else playerTwo's symbol is X and symbolInsert must be set to playerTwo.
- The reason for this code is to anticipate for when a user can play against the computer. In that code the user will be able to choose whether to play with O's or X's.
- further, if the block pressed is currenty an empty string("" - has no content, is empty) an update is made to the statusInfo to update who's turn it is.
- if the block is empty, then the press the user has made is a valid selection(has not pressed on a block already occupied). Therefore the board is going to be updated with the current player's turn, and the statusInfo needs to be updated to say it's the other player's turn.

- else if the number of naughts and crosses are not equal, then we know there are "n" naughts and "n+1" crosses, and the next symbol to be inserted will be a "O".
- similar code to above is performed, whereby the approriate player symbol is inserted into symbolInsert, and a determination is made on whether to update the statusInfo or not.

- symbolInsert is then returned to playerTurn

xxx

- playerTurn then returns symbolInsert to the calling of moveUpdate in the window event listener.

xxx


#2.3: moveUpdate

- public function defined in gameBoardObject, which takes in the class of the DOM element pressed(moveClass), and playerSymbol, which is the value of symbolInsert returned from playerTurn, as discussed above.
- This method's role is to take in which block has been pressed, determine whether the block is blank, and update the boardArray and the gameBoard with the approriate symbol.
- firstly the moveClass is used set currentMove with an index number of which block has been pressed, e.g. if "blockOne" is the class name, then currentMove is set to index position "0".
- then _arrayUpdate is called, with currentMove and playerSymbol being passed as arguements.

#2.3.1: _arrayUpdate method

- private method which updates boardArray.
- if the boardArray is blank in the the currentMove index position, e.g. if currentMove is "0" and boardArray[0] is "", then playerSymbol is inserted into the boardArray at currentMove index position.

xxx

#2.3.2: boardUpdate method

- public function (as it is called directly within "RESET" button).
- simply takes the blocks of the board from the DOM and inserts the applicable boardArray values.

xxx

- Therefore the result is that the empty block is filled and the boardArray is updated.

xxx


#2.4
- gameObject.winnerCheck method is called, and the boardArray is passed in as an argument.
- winnerCheck is a public method, as its role is to determine whether one of the users has won.
- Firstly the number of naughts and crosses on the board is determined using _countGenerator(#2.2.1).
- Secondly the positions of naughts and crosses is determined using _positionGenerator.

#2.4.1: _positionGenerator

- Private function within gameObject, role is store where naughts/crosses are on the board.
- The method runs through the elements of the boardArray, and when a naught or cross is run through: a position array is updated with the index position of where this symbol is located in boardArray.
- Therefore it updates a seperate position array for both naughts and crosses, and the end result will be 2 arrays holding the index positions from within boardArray, of where the symbols currently populate.
- These arrays are then returned to winnerCheck

xxx

- If crossCount is equal to or greater than 3, further determination can be made into whether someone has won. We know at the point where the number of crosses on the board is at least 3, is the first possible point in the game where someone can win. 
- If crossCount equals naughtCount, i.e. a naught has just been played by the applicable user, winnerNaughts method is run.

#2.4.2: _winnerNaughts

- Takes in the naughtPositions array, i.e. where the naughts are on the board. The _winnerCrosses method is identical to this method, except it is called when a cross move has just been played, and it passes in the cross positions array.
- This method calls two other methods, being _resultStatement and _winnerCompare.

#2.4.3: _resultsStatement

- Is a private function, which has the role of generating the different possible combinations of 3 digits that can be produced out of the current positions of symbols. If there is a winning sequence of symbols of the board, it will be made up of 3 of the symbols. This function determines what all the 3 digit sequences are.
- It takes in the symbol positions array as an argument. In this case, we are describing winnerNaughts function, and the naughtPostions array has been passed into it.
- The simplest example of how this method works is when there are 3 naughts on the board, so lets say occupying index positions 0,1,2.
- resultsStatement then outputs a string of all the possible 3 digit combinations, in this case there is one being 0,1,2.
- if lets say the naught positions were 0,3,4,6: The possible combinations produced would be 034, 036, 046, 346.
- the combinations are stored in statementArray, which is returned to _winnerNaughts.

xxx

#2.4.4: _winnerCompare

- private function, takes in the statementArray described above, and its role is to comepare the 3 digit sequences in statementArray to the possible 3 digit sequences that can win the game.
- Firstly the winning seqences are defined in an array called winningStatements.
- Then for each element in winningStatements(using a for loop) the following is performed:
  - Each element of statementArray is run through. 
  - the 3 digit sequence of statementArray is compared to the 3 digit winning sequence of winningStatements.
  - if there is a match, i.e. one of statementArray's 3 digit sequences matches a winning sequence, true is returned.
- if no match is found then false is returned.

xxx

- This true/false value is then the return value for winnerNaughts.

- winnerCrosses functions in this exact same way.

xxx

- back to winnerCheck
- If: either winnerNaughts returns true or winnerCrosses returns true, then the following code is run:
  - If: winnerNaughts is the true, then statusInfo is updated to say "Player two wins".
  - Else: winnerCrosses must equal true, and statusInfo is updated to say "Player one wins".

- If neither are true then neither user has won yet.
- If this is the case, then the statusInfo update described above does not occur.
- Then _drawTest module is run, and is done so despite if there is a winner or not.

#2.4.5: _drawTest

- private function of gameObject, and takes in winnerCrosses, winnerNaughts, naughtCount and crossCount as arguments.
- role is to determine whether a draw has occurred or not.
- If: neither winnerNaughts nor winnerCrosses are true(both a false) and if the board is full(crossCount = 5, naughtCount = 4), then:
  - StatusInfo is set to "TIE"
  - the text on the resetButton is updated to say "PLAY AGAIN?".
- The if condition describes a draw.
- The reset button event listner functionality is not altered in any way by this module, only the text of the button.

xxx

xxx

#2.5 - "playButton" in the event listener
 - Look at update below

xxxxxxxxxxxxxxxxxxxx

Update: will build a new variable into gameObject. When a win takes place it will be updated to indicate this. Then, if a user looks to play another turn by pressing on the board, this variable will be used to assess whether this is allowed, and if the variable indicates a win has already taken place, no further turn will be allowed.