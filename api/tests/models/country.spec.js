const { Country, conn } = require("../../src/db.js");


describe("Country model", () => {
  beforeAll(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: false}));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should throw an error if  id is null", (done) => {
        Country.create({ name: "Argentina", id: "ARG" })
          .then(() => done(new Error("It requires a valid id")))
          .catch(() => done());
      });
      it("should throw an error if flag is null", (done) => {
        Country.create({ name: "Argentina", id: "ARG", flag: null })
          .then(() => done(new Error("It requires a valid flag")))
          .catch(() => done());
      });
      it("should throw an error if continent is null", (done) => {
        Country.create({
          name: "Argentina",
          id: "ARG",
          flag: "https://flagcdn.com/ar.svg",
        })
          .then(() => done(new Error("It requires a valid continent")))
          .catch(() => done());
      });
      it("should throw an error if capital is null",
        (done) => {
          Country.create({
            name: "Argentina",
            id: "ARG",
            flag: "https://flagcdn.com/ar.svg",
            capital: null,
          })
            .then(() => done(new Error("It requires a valid capital")))
            .catch(() => done());
        });
        it("should work when the data is valid", () => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://flagcdn.com/ar.svg",
          continent: "South America",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 45376763,
        });
      });
    });
  });
});
