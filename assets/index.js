$(document).ready(function() {
    $('#boardType').bind('change', function() {
        var elements = $('div.container').children().hide(); // hide all the elements
        var value = $(this).val();

        if (value.length) { // if somethings' selected
            elements.filter('.' + value).show(); // show the ones we want
        }
    }).trigger('change');
    
    $('.second-level-select').bind('change', function() {
        var elements = $('div.second-level-container').children().hide(); // hide all the elements
        var value = $(this).val();

        if (value.length) { // if somethings' selected
            elements.filter('.' + value).show(); // show the ones we want
        }
    }).trigger('change');
});





/* import Jiprock from "./data/jiprock-info.js"

//Jiprock sizes and weight in kilograms
let smallJiprock = new Jiprock("3x2", 100);

let mediumJiprock= new Jiprock("4x2", 150);

let largeJiprock= new Jiprock("6x4", 300);

//Values from html selectors to calculate total wieght.

//Selector 1 for smallest dimension
let weightOne = smallJiprock.getWeight();
let selectorOne = '';
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

//function to calculate jipRock weight based on number selected from input field value
function calculateWeight (JipOne, JipTwo, JipThree, JipN) {
    let total = JipOne + JipTwo + JipThree + JipN;
    if (total <= 2000) {
        return "Safe";
    } else {
        return "unsafe";
    }
}
*/