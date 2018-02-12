let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris","nyc","rome","rio-de-janeiro"];
console.log(citiesId);
// citiesId =[];
// console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);


function getWeather (cityId){
  let city = cityId.toUpperCase();
  let temperature = 20;
  return{city,temperature};
};

const weather = getWeather(favoriteCityId);
console.log(weather);


const city = weather.city;
const temperature = weather.temperature;
console.log(city);
console.log(temperature);

let[paris,nyc,...others]=citiesId;
const parisId=paris;
const nycId=nyc
const othersCitiesId=others.length;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);


class Trip{
  constructor(id,name,imageUrl){
    this.id=id;
    this.name=name
    this.imageUrl=imageUrl;
  }
  toString(){
    return ("Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]");
  }
  get price(){
    return this._price;
  }
  set price(price){
    this._price = price;
  }
  static getDefaultTrip(){
    return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    // this.name="Rio de Janeiro";
    // this.imageUrl="img/rio-de-janeiro.jpg";
  }
}

let parisTrip = new Trip("paris","Paris","img/paris.jpg");
parisTrip.price =100;
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{
  constructor(id,name,imageUrl){
    super(id,name,imageUrl);
    this.price = 0;
  }
  toString(){
    return "Free"+super.toString()
  }
}

let freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
console.log(freeTrip.toString());



class TripService {
  constructor() {
    this.trips = new Set();
    this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
    this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
    this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
  }
  findByName(tripName) {
    // let trip = this.trips.filter((trip) => {trip.name == tripName});
    return new Promise((resolve,reject) => {
      this.trips.forEach((trip) => {
        if(trip.name == tripName){
          resolve(trip);
        }
      });
      reject(" No trip with name "+tripName);
    })
  }
}
class PriceService {
  constructor() {
    this.prices = new Map()
    this.prices.set("paris",100)
    this.prices.set("rio-de-janeiro",800)
    // TODO Map of 2 trips
    // 'paris' --> price = 100
    // 'rio-de-janeiro' --> price = 800)
    // no price for 'nantes'
  }
  findPriceByTripId(tripId) {
    return new Promise((resolve,reject) => {
      let price = this.prices.get(tripId);
      price ? resolve(price) :reject(" No trip with id "+tripId);
    })
  }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("Paris").then(
  found => console.log("trip found "+found),
  error => console.log(error)
);


priceService.findPriceByTripId("paris").then(
  found => console.log("price found "+found),
  error => console.log(error)
);
