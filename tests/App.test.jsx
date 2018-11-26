import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import puppeteer from "puppeteer";

import App from "../src/Components/App";
// import AppRouter from "../src/Components/AppRouter";
// import Content from "../src/Components/Content";
// import Header from "../src/Components/Header";
// import Home from "../src/Components/Home";
// import Root from "../src/Components/Root";


describe("<App />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <App />)).not.toThrow();
  });

  it("print user agent", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://google.com");

    await page.screenshot({ path: "filename.png", fullPage: true });
    browser.close();
  }, 16000);
});

// describe("<AppRouter />", () => {
//   it("should render without crashing", () => {
//     expect(mount.bind(null, <AppRouter />)).not.toThrow();
//   });
// });

// describe("<Content />", () => {
//   it("should render without crashing", () => {
//     expect(mount.bind(null, <Content />)).not.toThrow();
//   });
// });

// describe("<Header />", () => {
//   it("should render NavLink", () => {
//     const editor = shallow(<Header />);
//     expect(editor.find("div.navbar-nav").length).toEqual(1);
//   });
// });


// describe("<Home />", () => {
//   it("should render without crashing", () => {
//     expect(mount.bind(null, <Home />)).not.toThrow();
//   });
// });

// describe("<Root />", () => {
//   it("should render jumbotron", () => {
//     const editor = shallow(<Root />);
//     expect(editor.find("div.jumbotron").length).toEqual(1);
//   });
// });
