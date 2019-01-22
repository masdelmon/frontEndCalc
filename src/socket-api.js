import clientSocket from 'socket.io-client';

export const API_URL = "https://route35vhpkzf-masdelmon2-che.4e1e.starter-us-east-1b.openshiftapps.com:8080";
const socket = clientSocket(`${API_URL}/calc`);
export const subscribe = (newCallback) => {
  socket.on("calc", (result) => {
    result = JSON.parse(result);
    newCallback(result);
  });
}
