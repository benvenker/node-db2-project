exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "23423asdf", make: "BMW", model: "3 series", mileage: 123535 },
        { vin: "VIN2342353", make: "Mercedes", model: "E class", mileage: 234 },
        { vin: "VN2092353", make: "Honda", model: "Accord", mileage: 98223 },
      ]);
    });
};
