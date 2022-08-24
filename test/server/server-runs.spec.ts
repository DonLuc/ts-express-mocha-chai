//Chai is an assertion library
import { expect } from "chai";
import { describe, it } from "mocha";
import createServer from "server";
import request from "supertest";

const app = createServer();
describe("# Server Checks", () => {
    it("Server returns 200 on correct route", (done) => {
        request(app).get("/").expect(200, done());
    }); 
});

describe("# Server Checks", () => {
    it("Server returns 404 on incorrect route", (done) => {
        request(app).get("/incorrect").expect(404, done());
    }); 
});
