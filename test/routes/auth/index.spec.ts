import request from "supertest";
import { describe } from "mocha";
import createServer from "server";

const app = createServer;


describe("# Auth routes", () => {
    it("/auth responds with 200", (done) => {
        request(app).get("/auth").expect(200, done());
    });
});