const { server, app } = require("../server");
const { clearDatabase, connect, closeDatabase } = require("../database/mongo");
const supertest = require("supertest");
const api = supertest(app);

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

afterAll((done) => {
  closeDatabase();
  server.close();
  done();
});

describe("GET /user", () => {
  test("Response should return 200", () => {
    api
      .get("/user/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
