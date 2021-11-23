const vsUserButton = document.querySelector(".vsUserButton"); //#1
vsUserButton.addEventListener('mousedown', () => {

  vsUserButton.setAttribute("class", "vsUserButtonPressed");

  vsUserButton.addEventListener('mouseup', () => {            //#1

    const gameObject = (() => {
    
      const _removeStartScreen = function(){

        const bodyContainer = document.querySelector(".body");

        const newGameMain = document.querySelector(".newGameMain");

        bodyContainer.removeChild(newGameMain);

      };

      const loadGameScreen = function(){

        _removeStartScreen();
    
        const bodyContainer = document.querySelector(".body");
    
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'mainContainer');
    
        const titleBar = document.createElement('div');
        titleBar.setAttribute('class', 'titleBar');
        titleBar.textContent = "TIC-TAC-TOE";
    
        const gameBody = document.createElement('div');
        gameBody.setAttribute('class', 'gameBody');
    
        const actionBar = document.createElement('div');
        actionBar.setAttribute('class', 'actionBar');
    
        const statusHeader = document.createElement('div');
        statusHeader.setAttribute('id', 'statusHeader');
        statusHeader.textContent = "STATUS:";
    
        const statusInfo = document.createElement('div');
        statusInfo.setAttribute('id', 'statusInfo');
        statusInfo.textContent = "PLAYER ONE'S TURN";
    
        const resetButton = document.createElement('button');
        resetButton.setAttribute('class', 'resetButton');
        resetButton.setAttribute('id', 'reset');
        resetButton.textContent = "RESET";
    
        const gameBoard = document.createElement('div');
        gameBoard.setAttribute('class', 'gameBoard');
    
    
        const rowOne = document.createElement('div');
        rowOne.setAttribute('class', 'rowOne');
        rowOne.setAttribute('id', 'row');
    
        const columnOne = document.createElement('div');
        columnOne.setAttribute('class', 'blockOne');
        columnOne.setAttribute('id', 'column');
    
        const colDivideOne = document.createElement('div');
        colDivideOne.setAttribute('id', 'columnDivide');
    
        const columnTwo = document.createElement('div');
        columnTwo.setAttribute('class', 'blockTwo');
        columnTwo.setAttribute('id', 'column');
    
        const colDivideTwo = document.createElement('div');
        colDivideTwo.setAttribute('id', 'columnDivide');
    
        const columnThree = document.createElement('div');
        columnThree.setAttribute('class', 'blockThree');
        columnThree.setAttribute('id', 'column');
    
        rowOne.appendChild(columnOne);
        rowOne.appendChild(colDivideOne);
        rowOne.appendChild(columnTwo);
        rowOne.appendChild(colDivideTwo);
        rowOne.appendChild(columnThree);
    
        const rowDivideOne = document.createElement('div');
        rowDivideOne.setAttribute('id', 'rowDivide');
    
        gameBoard.appendChild(rowOne);
        gameBoard.appendChild(rowDivideOne);
    
    
        const rowTwo = document.createElement('div');
        rowTwo.setAttribute('class', 'rowTwo');
        rowTwo.setAttribute('id', 'row');
    
        const columnFour = document.createElement('div');
        columnFour.setAttribute('class', 'blockFour');
        columnFour.setAttribute('id', 'column');
    
        const colDivideThree = document.createElement('div');
        colDivideThree.setAttribute('id', 'columnDivide');
    
        const columnFive = document.createElement('div');
        columnFive.setAttribute('class', 'blockFive');
        columnFive.setAttribute('id', 'column');
    
        const colDivideFour = document.createElement('div');
        colDivideFour.setAttribute('id', 'columnDivide');
    
        const columnSix = document.createElement('div');
        columnSix.setAttribute('class', 'blockSix');
        columnSix.setAttribute('id', 'column');
    
        rowTwo.appendChild(columnFour);
        rowTwo.appendChild(colDivideThree);
        rowTwo.appendChild(columnFive);
        rowTwo.appendChild(colDivideFour);
        rowTwo.appendChild(columnSix);
    
        const rowDivideTwo = document.createElement('div');
        rowDivideTwo.setAttribute('id', 'rowDivide');
    
        gameBoard.appendChild(rowTwo);
        gameBoard.appendChild(rowDivideTwo);
    
    
        const rowThree = document.createElement('div');
        rowThree.setAttribute('class', 'rowThree');
        rowThree.setAttribute('id', 'row');
    
        const columnSeven = document.createElement('div');
        columnSeven.setAttribute('class', 'blockSeven');
        columnSeven.setAttribute('id', 'column');
    
        const colDivideFive = document.createElement('div');
        colDivideFive.setAttribute('id', 'columnDivide');
    
        const columnEight = document.createElement('div');
        columnEight.setAttribute('class', 'blockEight');
        columnEight.setAttribute('id', 'column');
    
        const colDivideSix = document.createElement('div');
        colDivideSix.setAttribute('id', 'columnDivide');
    
        const columnNine = document.createElement('div');
        columnNine.setAttribute('class', 'blockNine');
        columnNine.setAttribute('id', 'column');
    
        rowThree.appendChild(columnSeven);
        rowThree.appendChild(colDivideFive);
        rowThree.appendChild(columnEight);
        rowThree.appendChild(colDivideSix);
        rowThree.appendChild(columnNine);
    
        gameBoard.appendChild(rowThree);
    
        const emptyDivOne = document.createElement('div');
        const emptyDivTwo = document.createElement('div');
        const emptyDivThree = document.createElement('div');
        const emptyDivFour = document.createElement('div');
        const emptyDivFive = document.createElement('div');
        const emptyDivSix = document.createElement('div');
        const emptyDivSeven = document.createElement('div');
    
        actionBar.appendChild(emptyDivOne);
        actionBar.appendChild(statusHeader);
        actionBar.appendChild(emptyDivTwo);
        actionBar.appendChild(statusInfo);
        actionBar.appendChild(emptyDivThree);
        actionBar.appendChild(resetButton);
    
        gameBody.appendChild(emptyDivFour);
        gameBody.appendChild(actionBar);
        gameBody.appendChild(emptyDivFive);
        gameBody.appendChild(gameBoard);
        gameBody.appendChild(emptyDivSix);
        gameBody.appendChild(emptyDivSeven);
    
        const refreshStatment = document.createElement('div');
        refreshStatment.setAttribute('id', 'refreshStatement');
        refreshStatment.textContent = 'REFRESH PAGE TO RECHOOSE HOW TO PLAY';
    
        mainContainer.appendChild(titleBar);
        mainContainer.appendChild(gameBody);
        mainContainer.appendChild(refreshStatment);
    
        bodyContainer.appendChild(mainContainer);
    
      };
    
      
      //#2.2
      const playerTurn = (boardArray, playerOne, playerTwo, event) => {
    
        //#2.2.1
        let countArray = _countGenerator(boardArray);

        let symbolInsert;
        console.log(event.target);
    
        if(event.target.id == "column"){
    
          //#2.2.2
          symbolInsert = _symbolUpdate(countArray, playerOne, playerTwo, event);
    
        };
    
        return symbolInsert;
    
      };

      //#2.4
      const winnerCheck = (boardArray, winStatus) => {
    
        let crossCount = 0;
        let naughtCount = 0;
        let crossPositions = [];
        let naughtPositions = [];
        let winnerCrosses;
        let winnerNaughts;

        let countArray = _countGenerator(boardArray);

        crossCount = countArray[0];
        naughtCount = countArray[1];

        let positionsArray = _positionGenerator(boardArray);

        crossPositions = positionsArray[0];
        naughtPositions = positionsArray[1];
    
        if(crossCount >= 3){  //If there is a potential winner
    
          if(crossCount == naughtCount){  
      
            winnerNaughts = _winnerNaughts(naughtPositions);
    
          }else{
    
            winnerCrosses = _winnerCrosses(crossPositions);
    
          };
    
          if(winnerNaughts == true || winnerCrosses == true){
          
            if(winnerNaughts == true){
              
              let statusInfo = document.querySelector('#statusInfo');
              statusInfo.textContent = "PLAYER TWO WINS!!!";
    
            }else{
    
              let statusInfo = document.querySelector('#statusInfo');
              statusInfo.textContent = "PLAYER ONE WINS!!!";
    
            };
    
            let playButton = document.querySelector('.resetButton');
            playButton.setAttribute("id", "play");
            playButton.textContent = "PLAY AGAIN?";
    
          };

          _drawTest(winnerNaughts, winnerCrosses, crossCount, naughtCount);
    
        };
    
      };

      //#2.4.1
      const _positionGenerator = (boardArray) => {

        let positionsArray = [];
        let crossPositions = [];
        let naughtPositions = [];

        for(let n = 0; n < 9; n++){
    
          if(boardArray[n] == "X"){
    
            crossPositions.push(n);
    
          };
    
          if(boardArray[n] == "O"){
    
            naughtPositions.push(n);
    
          };
    
        };

        positionsArray.push(crossPositions);
        positionsArray.push(naughtPositions);

        return positionsArray;

      };

      //#2.2.1
      const _countGenerator = (boardArray) => {

        let crossCount = 0;
        let naughtCount = 0;
        let countArray = [];
    
        for(let n = 0; n < 9; n++){
    
          if(boardArray[n] == "X"){
    
            crossCount += 1;
    
          };
    
          if(boardArray[n] == "O"){
    
            naughtCount += 1;
    
          };
    
        };

        countArray.push(crossCount);
        countArray.push(naughtCount);

        return countArray;

      };

      //#2.2.2
      const _symbolUpdate = (countArray, playerOne, playerTwo, event) => {

        let crossCount = countArray[0];
        let naughtCount = countArray[1];
        let symbolInsert;
            
        let statusInfo = document.querySelector('#statusInfo');

        if(crossCount == naughtCount){ //even number of each, therefore player who is using X's turn
    
          if(playerOne.playerSymbol == "X"){
  
            symbolInsert = playerOne.playerSymbol;

            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER TWO'S TURN";

            };
  
          }else{
  
            symbolInsert = playerTwo.playerSymbol;

            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER ONE'S TURN";

            };
  
          };
          
        }else{
  
          if(playerOne.playerSymbol == "O"){
  
            symbolInsert = playerOne.playerSymbol;
            
            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER TWO'S TURN";

            };
  
          }else{
  
            symbolInsert = playerTwo.playerSymbol;
            
            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER ONE'S TURN";

            };
  
          };
  
        };

        return symbolInsert;

      };
    
      //#2.4.2
      const _winnerNaughts = (naughtPositions) => {
    
        let statementArray = _resultStatement(naughtPositions);
        //#2.4.3
        let winnerAsk = _winnerCompare(statementArray);
        //#2.4.4
        return winnerAsk;
    
      };
    
      const _winnerCrosses = (crossPositions) => {
    
        let statementArray = _resultStatement(crossPositions);
        let winnerAsk = _winnerCompare(statementArray);
        return winnerAsk;
    
      };
    
      //#2.4.3
      const _resultStatement = (symbolPositions) => {
    
        let statementArray = [];
      
        if(symbolPositions.length == 5){
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
          let combTwo = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[3]}`;
          let combThree = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[4]}`;
          let combFour = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combFive = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[4]}`;
          let combSix = `${symbolPositions[0]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
          let combSeven = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combEight = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[4]}`;
          let combNine = `${symbolPositions[1]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
          let combTen = `${symbolPositions[2]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
    
          statementArray.push(combOne);
          statementArray.push(combTwo);
          statementArray.push(combThree);
          statementArray.push(combFour);
          statementArray.push(combFive);
          statementArray.push(combSix);
          statementArray.push(combSeven);
          statementArray.push(combEight);
          statementArray.push(combNine);
          statementArray.push(combTen);
    
          
        }else if(symbolPositions.length == 4){
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
          let combTwo = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[3]}`;
          let combThree = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combFour = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
    
          statementArray.push(combOne);
          statementArray.push(combTwo);
          statementArray.push(combThree);
          statementArray.push(combFour);
    
        }else{
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
    
          statementArray.push(combOne);
    
        };
    
        return statementArray;
    
      };
    
      //#2.4.4
      const _winnerCompare = (statementArray) => {
    
        let winningStatements = ["012", "345", "678", "036", "147", "258", "048", "246"];
    
        for(let m = 0; m < winningStatements.length; m++){
    
          for(let n = 0; n < statementArray.length; n++){
    
            if(statementArray[n] == winningStatements[m]){
    
              return true;
    
            };
    
          };
    
        };
    
        return false;
    
      };

      //#2.4.5
      const _drawTest = (winnerNaughts, winnerCrosses, crossCount, naughtCount) => {

        if((winnerNaughts != true && winnerCrosses != true) && (crossCount == 5 && naughtCount == 4)){

          let statusInfo = document.querySelector('#statusInfo');
          statusInfo.textContent = "TIE!";
          let resetButton = document.querySelector('.resetButton');
          resetButton.textContent = "PLAY AGAIN?";

        }; 

      };
      
      return {loadGameScreen, playerTurn, winnerCheck};
    
    })();
    
    //#2.1
    const playerObject = (playerNumber) => {
    
      let playerSymbol;
    
      if(playerNumber == 1){
    
        playerSymbol = "X";
        playerName = "PLAYER ONE";
    
      }else{
    
        playerSymbol = "O";
        playerName = "PLAYER TWO";
    
      };
    
      return {playerSymbol};
    
    };
    //#2.1
    
    // gameboard module
    const gameBoardObject = (() => {
    
      let boardArray = ["","","","","","","","",""];
    
      let currentMove; 
    
      const moveUpdate = (moveClass, playerSymbol) => {
    
        if(moveClass == "blockOne"){
    
          currentMove = 0;
    
        }else if(moveClass == "blockTwo"){
    
          currentMove = 1;
    
        }else if(moveClass == "blockThree"){
    
          currentMove = 2;
    
        }else if(moveClass == "blockFour"){
    
          currentMove = 3;
    
        }else if(moveClass == "blockFive"){
    
          currentMove = 4;
    
        }else if(moveClass == "blockSix"){
    
          currentMove = 5;
    
        }else if(moveClass == "blockSeven"){
    
          currentMove = 6;
    
        }else if(moveClass == "blockEight"){
    
          currentMove = 7;
    
        }else if(moveClass == "blockNine"){
    
          currentMove = 8;
    
        }else{
    
          currentMove = 9;
    
        };
    
        //#2.3.1
        _arrayUpdate(currentMove, playerSymbol);

        //#2.3.2
        boardUpdate(boardArray);
    
      };
    
      //#2.3.1
      const _arrayUpdate = (currentMove, playerSymbol) => {
    
        if(boardArray[currentMove] == ""){
    
          boardArray.splice(currentMove, 1, playerSymbol);
    
        };
    
      };

      //#2.3.2
      const boardUpdate = (boardArray) => {

        let blockOne = document.querySelector(".blockOne");
        let blockTwo = document.querySelector(".blockTwo");
        let blockThree = document.querySelector(".blockThree");
        let blockFour = document.querySelector(".blockFour");
        let blockFive = document.querySelector(".blockFive");
        let blockSix = document.querySelector(".blockSix");
        let blockSeven = document.querySelector(".blockSeven");
        let blockEight = document.querySelector(".blockEight");
        let blockNine = document.querySelector(".blockNine");
    
        blockOne.textContent = boardArray[0];
        blockTwo.textContent = boardArray[1];
        blockThree.textContent = boardArray[2];
        blockFour.textContent = boardArray[3];
        blockFive.textContent = boardArray[4];
        blockSix.textContent = boardArray[5];
        blockSeven.textContent = boardArray[6];
        blockEight.textContent = boardArray[7];
        blockNine.textContent = boardArray[8];

      };
    
      return {moveUpdate, boardUpdate, boardArray};
    
    })();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//#2

    gameObject.loadGameScreen();    
    playerOne = playerObject(1); //#2.1
    playerTwo = playerObject(2);


    window.addEventListener('click', (e) => {

      const playButton = document.querySelector('#play');
      
      if(playButton != null){
      //if(gameObject.winStatus == true){
    
        console.log("Do nothing");
    
      }else{
        //#2.3                                          //#2.2
        gameBoardObject.moveUpdate(e.target.className, gameObject.playerTurn(gameBoardObject.boardArray, playerOne, playerTwo, e));
        //#2.4
        gameObject.winnerCheck(gameBoardObject.boardArray);

      };
    
    });

//#2

    let resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener('mousedown', () => {
        
      resetButton.setAttribute('class', 'resetButtonPressed');
    
      resetButton.addEventListener('mouseup', () => {
    
        for(let m = 0; m < 9; m++){
    
          gameBoardObject.boardArray.pop();
    
        };
    
        for(let a = 0; a < 9; a++){
    
          gameBoardObject.boardArray.push("");
    
        };
    
        gameBoardObject.boardUpdate(gameBoardObject.boardArray);
    
        resetButton.setAttribute('class', 'resetButton');
        resetButton.setAttribute('id', 'reset');
        resetButton.textContent = "RESET";

        let statusInfo = document.querySelector('#statusInfo');
        statusInfo.textContent = "PLAYER ONE'S TURN";
    
      });
    
    });

  });

});

const vsCompButton = document.querySelector(".vsCompButton"); //#1
vsCompButton.addEventListener('mousedown', () => {

  vsCompButton.setAttribute("class", "vsCompButtonPressed");

  /*vsUserButton.addEventListener('mouseup', () => {            //#1

    const gameObject = (() => {
    
      const _removeStartScreen = function(){

        const bodyContainer = document.querySelector(".body");

        const newGameMain = document.querySelector(".newGameMain");

        bodyContainer.removeChild(newGameMain);

      };

      const loadGameScreen = function(){

        _removeStartScreen();
    
        const bodyContainer = document.querySelector(".body");
    
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'mainContainer');
    
        const titleBar = document.createElement('div');
        titleBar.setAttribute('class', 'titleBar');
        titleBar.textContent = "TIC-TAC-TOE";
    
        const gameBody = document.createElement('div');
        gameBody.setAttribute('class', 'gameBody');
    
        const actionBar = document.createElement('div');
        actionBar.setAttribute('class', 'actionBar');
    
        const statusHeader = document.createElement('div');
        statusHeader.setAttribute('id', 'statusHeader');
        statusHeader.textContent = "STATUS:";
    
        const statusInfo = document.createElement('div');
        statusInfo.setAttribute('id', 'statusInfo');
        statusInfo.textContent = "PLAYER ONE'S TURN";
    
        const resetButton = document.createElement('button');
        resetButton.setAttribute('class', 'resetButton');
        resetButton.setAttribute('id', 'reset');
        resetButton.textContent = "RESET";
    
        const gameBoard = document.createElement('div');
        gameBoard.setAttribute('class', 'gameBoard');
    
    
        const rowOne = document.createElement('div');
        rowOne.setAttribute('class', 'rowOne');
        rowOne.setAttribute('id', 'row');
    
        const columnOne = document.createElement('div');
        columnOne.setAttribute('class', 'blockOne');
        columnOne.setAttribute('id', 'column');
    
        const colDivideOne = document.createElement('div');
        colDivideOne.setAttribute('id', 'columnDivide');
    
        const columnTwo = document.createElement('div');
        columnTwo.setAttribute('class', 'blockTwo');
        columnTwo.setAttribute('id', 'column');
    
        const colDivideTwo = document.createElement('div');
        colDivideTwo.setAttribute('id', 'columnDivide');
    
        const columnThree = document.createElement('div');
        columnThree.setAttribute('class', 'blockThree');
        columnThree.setAttribute('id', 'column');
    
        rowOne.appendChild(columnOne);
        rowOne.appendChild(colDivideOne);
        rowOne.appendChild(columnTwo);
        rowOne.appendChild(colDivideTwo);
        rowOne.appendChild(columnThree);
    
        const rowDivideOne = document.createElement('div');
        rowDivideOne.setAttribute('id', 'rowDivide');
    
        gameBoard.appendChild(rowOne);
        gameBoard.appendChild(rowDivideOne);
    
    
        const rowTwo = document.createElement('div');
        rowTwo.setAttribute('class', 'rowTwo');
        rowTwo.setAttribute('id', 'row');
    
        const columnFour = document.createElement('div');
        columnFour.setAttribute('class', 'blockFour');
        columnFour.setAttribute('id', 'column');
    
        const colDivideThree = document.createElement('div');
        colDivideThree.setAttribute('id', 'columnDivide');
    
        const columnFive = document.createElement('div');
        columnFive.setAttribute('class', 'blockFive');
        columnFive.setAttribute('id', 'column');
    
        const colDivideFour = document.createElement('div');
        colDivideFour.setAttribute('id', 'columnDivide');
    
        const columnSix = document.createElement('div');
        columnSix.setAttribute('class', 'blockSix');
        columnSix.setAttribute('id', 'column');
    
        rowTwo.appendChild(columnFour);
        rowTwo.appendChild(colDivideThree);
        rowTwo.appendChild(columnFive);
        rowTwo.appendChild(colDivideFour);
        rowTwo.appendChild(columnSix);
    
        const rowDivideTwo = document.createElement('div');
        rowDivideTwo.setAttribute('id', 'rowDivide');
    
        gameBoard.appendChild(rowTwo);
        gameBoard.appendChild(rowDivideTwo);
    
    
        const rowThree = document.createElement('div');
        rowThree.setAttribute('class', 'rowThree');
        rowThree.setAttribute('id', 'row');
    
        const columnSeven = document.createElement('div');
        columnSeven.setAttribute('class', 'blockSeven');
        columnSeven.setAttribute('id', 'column');
    
        const colDivideFive = document.createElement('div');
        colDivideFive.setAttribute('id', 'columnDivide');
    
        const columnEight = document.createElement('div');
        columnEight.setAttribute('class', 'blockEight');
        columnEight.setAttribute('id', 'column');
    
        const colDivideSix = document.createElement('div');
        colDivideSix.setAttribute('id', 'columnDivide');
    
        const columnNine = document.createElement('div');
        columnNine.setAttribute('class', 'blockNine');
        columnNine.setAttribute('id', 'column');
    
        rowThree.appendChild(columnSeven);
        rowThree.appendChild(colDivideFive);
        rowThree.appendChild(columnEight);
        rowThree.appendChild(colDivideSix);
        rowThree.appendChild(columnNine);
    
        gameBoard.appendChild(rowThree);
    
        const emptyDivOne = document.createElement('div');
        const emptyDivTwo = document.createElement('div');
        const emptyDivThree = document.createElement('div');
        const emptyDivFour = document.createElement('div');
        const emptyDivFive = document.createElement('div');
        const emptyDivSix = document.createElement('div');
        const emptyDivSeven = document.createElement('div');
    
        actionBar.appendChild(emptyDivOne);
        actionBar.appendChild(statusHeader);
        actionBar.appendChild(emptyDivTwo);
        actionBar.appendChild(statusInfo);
        actionBar.appendChild(emptyDivThree);
        actionBar.appendChild(resetButton);
    
        gameBody.appendChild(emptyDivFour);
        gameBody.appendChild(actionBar);
        gameBody.appendChild(emptyDivFive);
        gameBody.appendChild(gameBoard);
        gameBody.appendChild(emptyDivSix);
        gameBody.appendChild(emptyDivSeven);
    
        const refreshStatment = document.createElement('div');
        refreshStatment.setAttribute('id', 'refreshStatement');
        refreshStatment.textContent = 'REFRESH PAGE TO RECHOOSE HOW TO PLAY';
    
        mainContainer.appendChild(titleBar);
        mainContainer.appendChild(gameBody);
        mainContainer.appendChild(refreshStatment);
    
        bodyContainer.appendChild(mainContainer);
    
      };
    
      
      //#2.2
      const playerTurn = (boardArray, playerOne, playerTwo, event) => {
    
        //#2.2.1
        let countArray = _countGenerator(boardArray);

        let symbolInsert;
        console.log(event.target);
    
        if(event.target.id == "column"){
    
          //#2.2.2
          symbolInsert = _symbolUpdate(countArray, playerOne, playerTwo, event);
    
        };
    
        return symbolInsert;
    
      };

      //#2.4
      const winnerCheck = (boardArray, winStatus) => {
    
        let crossCount = 0;
        let naughtCount = 0;
        let crossPositions = [];
        let naughtPositions = [];
        let winnerCrosses;
        let winnerNaughts;

        let countArray = _countGenerator(boardArray);

        crossCount = countArray[0];
        naughtCount = countArray[1];

        let positionsArray = _positionGenerator(boardArray);

        crossPositions = positionsArray[0];
        naughtPositions = positionsArray[1];
    
        if(crossCount >= 3){  //If there is a potential winner
    
          if(crossCount == naughtCount){  
      
            winnerNaughts = _winnerNaughts(naughtPositions);
    
          }else{
    
            winnerCrosses = _winnerCrosses(crossPositions);
    
          };
    
          if(winnerNaughts == true || winnerCrosses == true){
          
            if(winnerNaughts == true){
              
              let statusInfo = document.querySelector('#statusInfo');
              statusInfo.textContent = "PLAYER TWO WINS!!!";
    
            }else{
    
              let statusInfo = document.querySelector('#statusInfo');
              statusInfo.textContent = "PLAYER ONE WINS!!!";
    
            };
    
            let playButton = document.querySelector('.resetButton');
            playButton.setAttribute("id", "play");
            playButton.textContent = "PLAY AGAIN?";
    
          };

          _drawTest(winnerNaughts, winnerCrosses, crossCount, naughtCount);
    
        };
    
      };

      //#2.4.1
      const _positionGenerator = (boardArray) => {

        let positionsArray = [];
        let crossPositions = [];
        let naughtPositions = [];

        for(let n = 0; n < 9; n++){
    
          if(boardArray[n] == "X"){
    
            crossPositions.push(n);
    
          };
    
          if(boardArray[n] == "O"){
    
            naughtPositions.push(n);
    
          };
    
        };

        positionsArray.push(crossPositions);
        positionsArray.push(naughtPositions);

        return positionsArray;

      };

      //#2.2.1
      const _countGenerator = (boardArray) => {

        let crossCount = 0;
        let naughtCount = 0;
        let countArray = [];
    
        for(let n = 0; n < 9; n++){
    
          if(boardArray[n] == "X"){
    
            crossCount += 1;
    
          };
    
          if(boardArray[n] == "O"){
    
            naughtCount += 1;
    
          };
    
        };

        countArray.push(crossCount);
        countArray.push(naughtCount);

        return countArray;

      };

      //#2.2.2
      const _symbolUpdate = (countArray, playerOne, playerTwo, event) => {

        let crossCount = countArray[0];
        let naughtCount = countArray[1];
        let symbolInsert;
            
        let statusInfo = document.querySelector('#statusInfo');

        if(crossCount == naughtCount){ //even number of each, therefore player who is using X's turn
    
          if(playerOne.playerSymbol == "X"){
  
            symbolInsert = playerOne.playerSymbol;

            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER TWO'S TURN";

            };
  
          }else{
  
            symbolInsert = playerTwo.playerSymbol;

            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER ONE'S TURN";

            };
  
          };
          
        }else{
  
          if(playerOne.playerSymbol == "O"){
  
            symbolInsert = playerOne.playerSymbol;
            
            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER TWO'S TURN";

            };
  
          }else{
  
            symbolInsert = playerTwo.playerSymbol;
            
            if(event.target.textContent == "" && event.target.id == "column"){

              statusInfo.textContent = "PLAYER ONE'S TURN";

            };
  
          };
  
        };

        return symbolInsert;

      };
    
      //#2.4.2
      const _winnerNaughts = (naughtPositions) => {
    
        let statementArray = _resultStatement(naughtPositions);
        //#2.4.3
        let winnerAsk = _winnerCompare(statementArray);
        //#2.4.4
        return winnerAsk;
    
      };
    
      const _winnerCrosses = (crossPositions) => {
    
        let statementArray = _resultStatement(crossPositions);
        let winnerAsk = _winnerCompare(statementArray);
        return winnerAsk;
    
      };
    
      //#2.4.3
      const _resultStatement = (symbolPositions) => {
    
        let statementArray = [];
      
        if(symbolPositions.length == 5){
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
          let combTwo = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[3]}`;
          let combThree = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[4]}`;
          let combFour = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combFive = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[4]}`;
          let combSix = `${symbolPositions[0]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
          let combSeven = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combEight = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[4]}`;
          let combNine = `${symbolPositions[1]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
          let combTen = `${symbolPositions[2]}` + `${symbolPositions[3]}` + `${symbolPositions[4]}`;
    
          statementArray.push(combOne);
          statementArray.push(combTwo);
          statementArray.push(combThree);
          statementArray.push(combFour);
          statementArray.push(combFive);
          statementArray.push(combSix);
          statementArray.push(combSeven);
          statementArray.push(combEight);
          statementArray.push(combNine);
          statementArray.push(combTen);
    
          
        }else if(symbolPositions.length == 4){
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
          let combTwo = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[3]}`;
          let combThree = `${symbolPositions[0]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
          let combFour = `${symbolPositions[1]}` + `${symbolPositions[2]}` + `${symbolPositions[3]}`;
    
          statementArray.push(combOne);
          statementArray.push(combTwo);
          statementArray.push(combThree);
          statementArray.push(combFour);
    
        }else{
    
          let combOne = `${symbolPositions[0]}` + `${symbolPositions[1]}` + `${symbolPositions[2]}`;
    
          statementArray.push(combOne);
    
        };
    
        return statementArray;
    
      };
    
      //#2.4.4
      const _winnerCompare = (statementArray) => {
    
        let winningStatements = ["012", "345", "678", "036", "147", "258", "048", "246"];
    
        for(let m = 0; m < winningStatements.length; m++){
    
          for(let n = 0; n < statementArray.length; n++){
    
            if(statementArray[n] == winningStatements[m]){
    
              return true;
    
            };
    
          };
    
        };
    
        return false;
    
      };

      //#2.4.5
      const _drawTest = (winnerNaughts, winnerCrosses, crossCount, naughtCount) => {

        if((winnerNaughts != true && winnerCrosses != true) && (crossCount == 5 && naughtCount == 4)){

          let statusInfo = document.querySelector('#statusInfo');
          statusInfo.textContent = "TIE!";
          let resetButton = document.querySelector('.resetButton');
          resetButton.textContent = "PLAY AGAIN?";

        }; 

      };
      
      return {loadGameScreen, playerTurn, winnerCheck};
    
    })();
    
    //#2.1
    const playerObject = (playerNumber) => {
    
      let playerSymbol;
    
      if(playerNumber == 1){
    
        playerSymbol = "X";
        playerName = "PLAYER ONE";
    
      }else{
    
        playerSymbol = "O";
        playerName = "PLAYER TWO";
    
      };
    
      return {playerSymbol};
    
    };
    //#2.1
    
    // gameboard module
    const gameBoardObject = (() => {
    
      let boardArray = ["","","","","","","","",""];
    
      let currentMove; 
    
      const moveUpdate = (moveClass, playerSymbol) => {
    
        if(moveClass == "blockOne"){
    
          currentMove = 0;
    
        }else if(moveClass == "blockTwo"){
    
          currentMove = 1;
    
        }else if(moveClass == "blockThree"){
    
          currentMove = 2;
    
        }else if(moveClass == "blockFour"){
    
          currentMove = 3;
    
        }else if(moveClass == "blockFive"){
    
          currentMove = 4;
    
        }else if(moveClass == "blockSix"){
    
          currentMove = 5;
    
        }else if(moveClass == "blockSeven"){
    
          currentMove = 6;
    
        }else if(moveClass == "blockEight"){
    
          currentMove = 7;
    
        }else if(moveClass == "blockNine"){
    
          currentMove = 8;
    
        }else{
    
          currentMove = 9;
    
        };
    
        //#2.3.1
        _arrayUpdate(currentMove, playerSymbol);

        //#2.3.2
        boardUpdate(boardArray);
    
      };
    
      //#2.3.1
      const _arrayUpdate = (currentMove, playerSymbol) => {
    
        if(boardArray[currentMove] == ""){
    
          boardArray.splice(currentMove, 1, playerSymbol);
    
        };
    
      };

      //#2.3.2
      const boardUpdate = (boardArray) => {

        let blockOne = document.querySelector(".blockOne");
        let blockTwo = document.querySelector(".blockTwo");
        let blockThree = document.querySelector(".blockThree");
        let blockFour = document.querySelector(".blockFour");
        let blockFive = document.querySelector(".blockFive");
        let blockSix = document.querySelector(".blockSix");
        let blockSeven = document.querySelector(".blockSeven");
        let blockEight = document.querySelector(".blockEight");
        let blockNine = document.querySelector(".blockNine");
    
        blockOne.textContent = boardArray[0];
        blockTwo.textContent = boardArray[1];
        blockThree.textContent = boardArray[2];
        blockFour.textContent = boardArray[3];
        blockFive.textContent = boardArray[4];
        blockSix.textContent = boardArray[5];
        blockSeven.textContent = boardArray[6];
        blockEight.textContent = boardArray[7];
        blockNine.textContent = boardArray[8];

      };
    
      return {moveUpdate, boardUpdate, boardArray};
    
    })();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//#2

    gameObject.loadGameScreen();    
    playerOne = playerObject(1); //#2.1
    playerTwo = playerObject(2);


    window.addEventListener('click', (e) => {

      const playButton = document.querySelector('#play');
      
      if(playButton != null){
      //if(gameObject.winStatus == true){
    
        console.log("Do nothing");
    
      }else{
        //#2.3                                          //#2.2
        gameBoardObject.moveUpdate(e.target.className, gameObject.playerTurn(gameBoardObject.boardArray, playerOne, playerTwo, e));
        //#2.4
        gameObject.winnerCheck(gameBoardObject.boardArray);

      };
    
    });

//#2

    let resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener('mousedown', () => {
        
      resetButton.setAttribute('class', 'resetButtonPressed');
    
      resetButton.addEventListener('mouseup', () => {
    
        for(let m = 0; m < 9; m++){
    
          gameBoardObject.boardArray.pop();
    
        };
    
        for(let a = 0; a < 9; a++){
    
          gameBoardObject.boardArray.push("");
    
        };
    
        gameBoardObject.boardUpdate(gameBoardObject.boardArray);
    
        resetButton.setAttribute('class', 'resetButton');
        resetButton.setAttribute('id', 'reset');
        resetButton.textContent = "RESET";

        let statusInfo = document.querySelector('#statusInfo');
        statusInfo.textContent = "PLAYER ONE'S TURN";
    
      });
    
    });

  });*/

});