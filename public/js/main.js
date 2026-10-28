/////////////////////////////////////////////////////////////////////
//PSEUDO CODE 
// 
// What I need:
// 2 players 
//The players need to click on the spaces in order to place their board pieces 
// a win message needs to appear on the screen
//OOP requested 
//
/** What needs to happen specifically
 * Players need to click on the board and JS needs to figure out which space they clicked on 
 * There needs to be a state for JS to store the location 
 * JS needs to display the users piece 
 * JS needs to check for a row of 3 
 * if player has a row of 3 then they are a winner and the message should display on the site 
 * match everything with the visual elements 
 * 
 * 
 */


//using the indexing in the html
const boardsState = [
    null, null, null, 
    null, null, null, 
    null, null, null
]

//i need the game to find all of the cells that are going to be used 
const cells = document.querySelectorAll('.cell')


//it needs to move through each cell
cells.forEach((cell) => {
    //the cells need to listen to hear if they are being clicked 
    cell.addEventListener('click', (event) => {
        //remember Michael Kazin's currentTarget; this is the cell that is being 'targeted'; it has the click on it
        const clickedCell = event.currentTarget

        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset#examples
        const index =clickedCell.dataset.index //you need to figure out which index the cell is based on the HTML 

        //don't let the player put a board piece in the same spot 
       if (boardsState[index] !== null) {
        return //if they clicked the same spot then nothing should happen; null is only for blank spots 
       }

       boardsState[index] = "button"

       const boardPiece = document.createElement('img')
        boardPiece.src="public/images/button.jpeg"
        boardPiece.alt = "Button Eye"

        //this is how the board piece (my images are gonna appear in the right spot)
        clickedCell.appendChild(boardPiece)
        console.log(boardsState)
})



        //check what's going on; what space did the player click on 
        console.log(boardsState)
    })
