import React from "react";

import Google from "./Google";
import Facebook from "./Facebook";
import { GOOGLE_URL, FB_URL } from "../../../config";

const Home = () => (
  <div>
    <Facebook url={FB_URL} />
    <Google url={GOOGLE_URL} />
  </div>
);

export default Home;
