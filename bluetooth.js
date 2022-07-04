function startBlutooth() {
  console.log("Testing Bluetooth....");
  navigator.bluetooth
    .requestDevice({
      filters: [
        { services: ['battery_service'] }
      ],
      optionalServices: ["battery_service"], // Required to access service later.
    })
    .then((device) => {
      /* … */
    })
    .catch((error) => {
      console.error(error);
    });
}
