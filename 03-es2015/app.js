let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

//------------------------------------

const citiesId = ["paris","nyc","rome","rio-de-janeiro"];

console.log(citiesId);

//citiesId = [];

citiesId.push("tokyo");

console.log(citiesId);

//------------------------------------

function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city,temperature};
}

const weather = getWeather(favoriteCityId);

console.log(weather);

//------------------------------------

const {city,temperature} = weather;

console.log(city);
console.log(temperature);

//------------------------------------

const [parisId,nycId,...otherCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(otherCitiesId);

//------------------------------------

class Trip {
    constructor(id,name,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString(){
        return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]";
    }

    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Roi de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip("paris","Paris","img/paris.jpg");
parisTrip.price = 100;

console.log(parisTrip);
console.log(parisTrip.name);

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

//------------------------------------

class FreeTrip extends Trip {
    constructor(id,name,imageUrl,price=0){
        super(id,name,imageUrl);
        this.price = price;
    }

    toString(){
        return "Free"+super.toString();
    }
}

const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");

console.log(freeTrip.toString());

//------------------------------------

class TripService {
    
    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    
    findByName(tripName) {
        let trips = this.trips;
        return new Promise(function(resolve,reject){
            return setTimeout(function(){
                trips.forEach(function(trip){
                    if(trip.name == tripName){
                        resolve(trip);
                    }
                });
                reject("No trip with name "+tripName);
            },2000);
        })
    }
}

class PriceService {
    
    constructor() {
        this.prices = {"paris":100,"rio-de-janeiro":800};
    }
    
    findPriceByTripId(tripId) {
        let prices = this.prices;
        return new Promise(function(resolve,reject){
            return setTimeout(function(){
                let price = prices[tripId];
                if(price == undefined){
                    reject("No price found for id "+tripId);
                } else {
                    resolve(price);
                }
            },2000);
        })
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("Paris").then(function(tripFound){
    console.log("Trip found : "+tripFound);
}, function(error) {
    console.log(error);
});

tripService.findByName("Toulouse").then(function(tripFound){
    console.log("Trip found : "+tripFound);
}, function(error) {
    console.log(error);
});

tripService.findByName("Rio de Janeiro")
.then(function(tripFound){
    return priceService.findPriceByTripId(tripFound.id);
}).then(function(priceFound){
    console.log("Price found : "+priceFound);
}).catch(function(error) {
    console.log(error);
});

tripService.findByName("Nantes")
.then(function(tripFound){
    return priceService.findPriceByTripId(tripFound.id);
}).then(function(priceFound){
    console.log("Price found : "+priceFound);
}).catch(function(error) {
    console.log(error);
});