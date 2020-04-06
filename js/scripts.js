// Business Logic for Location List------>
function LocationList() {
  this.locations = [];
  this.currentId = 0;
}

LocationList.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

LocationList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

LocationList.prototype.findLocation = function(id) {
  for (var i = 0; i<this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        return this.locations[i];
      }
    }
  };
  return false;
}

LocationList.prototype.deleteLocation = function (id) {
  for (var i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        delete this.locations[i];
        return true;
      }
    };
  };
  return false;
}

//Business Logic for userEntry---------
function UserEntry (locationCity, locationCountry, landmarks, timeStamp, userNotes){
  this.locationCity = locationCity;
  this.locationCountry = locationCountry; 
  this.landmarks = landmarks; 
  this.timeStamp = timeStamp; 
  this.userNotes = userNotes;
}

UserEntry.prototype.newLocation = function() {
  return this.locationCity + " " + this.locationCountry;
}

//User Interface Logic -----------------

var locationList = new LocationList();
// var userEntry1 = new UserEntry("Portland", "OR", "roses", "2020", "pretty!");
// var userEntry2 = new UserEntry("Seattle", "WA", "spaceneedle", "2020", "beautiful!");
// locationList.addLocation(userEntry1);
// locationList.addLocation(userEntry2);
// console.log(locationList);










