import http from "k6/http";
import { check, group, sleep } from "k6";

export const options = {
  // กำหนดขั้นตอนได้โดยไม่ต้องใส่ parameter --vus, --duration
  stages: [
    { duration: "1m", target: 2 }, // target คือ VUs
    { duration: "1m", target: 1 },
    { duration: "10s", target: 0 },
  ],
};

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
