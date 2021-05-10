export class Jiprock {

    //dimensions is in meters and wieght is kilograms
    constructor (dimensions, weight) {
        this.dimensions = dimensions;
        this.weight = weight;
    }
    //return weight numerical value
    getWeight () {
        return this.weight;
    }
}

