class Mole {

  timeoutId = null;
  isVisible = false;
  isWhacked = false;

  static hideDelay() {
    return Math.floor(Math.random() * 3000000) + 500000;
  }

  static showDelay() {
    return Math.floor(Math.random() * 10) + 100;
  }

  handleClick(view) {

    if (this.isVisible && !this.isWhacked) {
      this.isWhacked = true;
      this.isVisible = true;
      view.innerText = 'Whacked :) ';
    }

  }

  timeoutCallback(view) {
    debugger;
    // change the status in case mole or '' for a hide delay time
    if (!this.isWhacked) {
      this.isVisible ? view.innerText = '' : view.innerText = 'mole';
      this.isVisible = !this.isVisible;
      setTimeout(this.timeoutCallback.bind(this, view), this.showDelay);
    }

  }

  render() {
    debugger;
    //render the text inside the td of each er of the table
    const moleCell = document.createElement('div');
    moleCell.innerText = "mole";
    moleCell.style = 'text-align: center;'
    // we will add on click function event
    moleCell.onclick = this.handleClick.bind(this, moleCell)
    // we need to add a timeout callback function and set a timer
    //to hide or display the mole
    setTimeout(this.timeoutCallback(moleCell), this.hideDelay);
    return moleCell;

  }

}
