import http from "k6/http";
import { check, group, sleep } from "k6";

export default async function () {
  let token = "";

  group("GET Token", function () {
    let res = http.get("http://localhost:3001/token");
    let j = JSON.parse(res.body);
    token = j.token;
    check(res, {
      "is status 200": (r) => r.status === 200,
    });
  });

  group("Load MockData", function () {
    let res = http.get("http://localhost:3001/datamock", {
      headers: { Authorization: "Bearer " + token },
    });

    check(res, {
      "is status 200": (r) => r.status === 200,
    });
  });
}
