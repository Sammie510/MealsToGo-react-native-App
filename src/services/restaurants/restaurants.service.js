import { mocks } from "./mocks";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
