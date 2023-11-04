import http from "k6/http";
import { sleep } from "k6";

export default function () {
  http.get("http://localhost:3001/hello");
  sleep(1); // sleep เพื่อให้เห็นแค่ 1s timebox
}
