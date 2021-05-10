import Jiprock from "./data/jiprock-info.js"

//Jiprock sizes and weight
let smallJiprock = new Jiprock("3x2", 100);

let mediumJiprock= new Jiprock("4x2", 150);

let largeJiprock= new Jiprock("6x4", 300);

//Values from html selectors to calculate total wieght.

//Selector 1 for smallest dimension
let weightOne = smallJiprock.getWeight();
let seletorOne = '';
selectorWeightTotal();

//Selector 2

//Selector 3

// Selecter nth for largest dimension

function selectorWeightTotal (weight, howMany) {
    if (isNaN(howMany) === true) {
        return weight * parseInt(howMany)
    } else {
        return weight * howMany;
    }
}

//function to calculate jipRock weight based on number selected from dropdown menu
function calculateWeight ()