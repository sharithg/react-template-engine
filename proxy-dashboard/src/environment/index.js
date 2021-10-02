import LOCAL from "./local";
import PROD from "./production";

export default window.location.hostname === "localhost" ? LOCAL : PROD;
