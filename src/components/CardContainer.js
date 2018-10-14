import React, { Component } from "react";
import Card from "./Card";
import Pics from "./../pics.json";
import shuffle from "shuffle-array";

class CardContainer extends Component {
  constructor(props) {
    super(props);

    // setting the state: score is at 1, pics is pulling in the pic json, and we have no selected pics yet
    this.state = {
      score: 1,
      pics: Pics,
      selectedPics: []
    };
  }

  // when the user clicks on a pic card
  handleClick = e => {
    // grab the selected pic's id
    let id = e.target.id;

    // init variable that sees if the user selects a pic that's already in selectedpics
    let exists = false;

    // loop through selected pics and see if any ids match selected id
    this.state.selectedPics.forEach(pic => {
      // if id matches
      if (pic.id == id) {
        // change exists to true
        exists = true;
      }
    });

    // if exists is true
    if (exists) {
      // end the game
      this.endGame();
    }

    // otherwise
    else {
      // loop through the pic json
      this.state.pics.forEach(pic => {
        // if the pic id matches the selected id
        if (pic.id == id) {
          // add the pic to the selected pic array
          this.setState({ selectedPics: [...this.state.selectedPics, pic] });
          console.log(this.state.selectedPics);

          // update the score
          this.updateScore();
        }
      });
    }

    // SHUFFLE THE PICS
    this.setState({ pics: shuffle(this.state.pics) });
    console.log("Shuffling Pusheens");
  };

  // function to update the current game's score
  updateScore = () => {
    // set the new score
    this.setState({ score: this.state.score + 1 });
    // update the parent component's display
    this.props.updateCurrentScore(this.state.score);
    console.log("Score: " + this.state.score);
  };

  // function to end the game
  endGame = () => {
    console.log("End!");
    // push the current game score as the new top score
    this.props.updateTopScore(this.state.score);
    // set the score back to 1 and the selected array to empty
    this.setState({ score: 1, selectedPics: [] });
    // update the current score to 0
    this.props.updateCurrentScore(0);
  };

  render() {
    return (
      <div className="container" id="card-container">
        <div className="row">
          {Pics.map(pic => (
            <Card
              src={pic.photo}
              key={pic.id}
              id={pic.id}
              alt={pic.name}
              endGame={this.endGame}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
