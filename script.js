// getCurrentPosition()
function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()
const target = {
  latitude: 41.3874,
  longitude: -41.3874,
};

function watchSuccess(pos) {
  const coords = pos.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
      console.log(`You've arrived`);
      navigator.geolocation.clearWatch(id)
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

// watchPosition returns an ID
// which we can use to clear
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
