import { BASE_URL } from "./Api";
import io from "socket.io-client";

export const socket = io(BASE_URL);
