let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    );
  }
  
  drivers() {
    let trips = this.trips();
    trips.map(
      function(trip) {
        console.log('this trip' + trip);
        console.log('trip driver wo f call' + trip.driver);
        console.log('called trip driver f' + trip.driver());
        return trip.driver().name;
      }.bind(this)
    );
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    store.trips.push(this);
  }
  
  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }
  
  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}