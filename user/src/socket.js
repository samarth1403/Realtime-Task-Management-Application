import { io } from "socket.io-client";
import { base_url } from "./utils/base_url";

// "undefined" means the URL will be computed from the `window.location` object
const URL = base_url;

export const socket = io(URL);
