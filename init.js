window.onload = () => {
    //first we will load the board with things in it mole // step 1
    //thThing here is the mole --> so creating new mole
    // we will not create an object of mole as we are going to pass the mole class itself as a parameter
    debugger;
    const boardGrid = new Board(Mole, 5, 5);
    document.getElementById('root').appendChild(boardGrid.render());

}