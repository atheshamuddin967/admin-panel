import { BASE_URL } from "./Api";
import { io, Socket } from "socket.io-client";

export const socket: Socket = io(BASE_URL);
