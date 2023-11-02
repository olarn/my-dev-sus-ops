import http from "k6/http";
import { check, group, sleep } from "k6";
export default function () {
  let res = http.get("http://app-loadbalancer/mock100");
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}
