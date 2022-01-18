/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

describe("GET /countries", () => {
  it("should get 200", async () => {
    const res = await agent.get("/countries");
    expect(res.statusCode).toBe(200);
  });
  it("should get 200 if a name is passed", async () => {
    const res = await agent.get("/countries?name=Argentina");
    expect(res.statusCode).toBe(200);
  });
  it("should get an empty array if name is invalid", async () => {
    const res = await agent.get("/countries?name=adfjnalfsdn");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  });

describe('GET /countries/:id',()=>{
  it("should get 200 if id is valid", async () => {
    const res = await agent.get("/countries/ARG");
    expect(res.statusCode).toBe(200);
  });
  it("should get 404 if id is not valid", async () => {
    const res = await agent.get("/countries/ARGENTINA");
    expect(res.statusCode).toBe(404);
  });

})
