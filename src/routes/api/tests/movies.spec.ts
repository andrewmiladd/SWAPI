import supertest from "supertest";
import { app } from "../../..";

const request = supertest(app);
beforeAll(function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
});

describe("endpoints test", () => {
  it("should respond OK to all films", async () => {
    const response = await request
      .get("/api/movies/")
      .set("content-type", "application/json");
    expect(response.status).toBe(200);
  });
  it("Should respond OK to one film", async () => {
    const response = await request
      .get("/api/movies/1")
      .set("content-type", "application/json");
    expect(response.status).toBe(200);
  });
  it("Should respond 404 if I had entered a wrong path", async () => {
    const response = await request
      .get("/api/movies/s/s")
      .set("content-type", "application/json");
    expect(response.status).toBe(404);
  });
});
