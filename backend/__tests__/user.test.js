const { expect } = require("@jest/globals");
const { server, app } = require("../server");
const { clearDatabase, connect, closeDatabase } = require("../database/mongo");
const request = require("supertest");
const api = request(app);

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await clearDatabase());

/**
 * Remove and close the db and server.
 */

afterAll(async () => {
  await closeDatabase();
  server.close();
});

describe("POST /user", () => {

  test("Response should return 200", () => {
    api
      .post("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("response should not be null", async () => {
    const toAdd = {
      username: "edgar",
      password: "12345",
      email: "edgargc9@gmail.com",
    };
    await api.post("/user").send({ username }).def;
  });
});

