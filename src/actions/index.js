export const FETCH_CARS = "FETCH_CARS";
export const CREATE_CAR = "CREATE_CAR";

export function createCar(garage, car, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
  .then(r => r.json())
  .then(callback);

  return {
    type: CREATE_CAR,
    payload: request
  }
};

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}
