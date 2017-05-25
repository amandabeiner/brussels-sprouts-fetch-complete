import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: []
    }
  }

  getRandomRecipe(){
    fetch('/api/v1/random-recipe')
      .then(response => {
        let recipe = response.json()
        return recipe
      }).then(recipe => {
        this.setState({
          recipe: recipe,
          recipes: []
        });
      })
  }

  getAllRecipes(){
    fetch('/api/v1/recipes')
    .then(response =>{
      let recipes = response.json()
      return recipes
    }).then(recipes => {
      this.setState({
        recipe: "",
        recipes: recipes
      });
    })
  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />

        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">See All Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
