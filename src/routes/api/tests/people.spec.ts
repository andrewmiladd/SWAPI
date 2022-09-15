import supertest from "supertest";
import { app } from "../../..";

const request = supertest(app);
beforeAll( () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
});

describe("endpoints test", () => {
  it("should respond OK to all people", async () => {
    const response = await request
      .get("/api/people/")
      .set("content-type", "application/json");
    expect(response.status).toBe(200);
  });
  it("Should respond OK to one person", async () => {
    const response = await request
      .get("/api/people/1")
      .set("content-type", "application/json");
    expect(response.status).toBe(200);
  });
});
