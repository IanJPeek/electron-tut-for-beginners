const { app, BrowserWindow, Menu } = require("electron");

// FROM: - https://www.google.com/search?sxsrf=ACYBGNS6f6h455A5lBsY-VyoVHgkGu66_g%3A1579979522610&ei=ApMsXsT3JJSy8gKAx54I&q=electron+tutorial+for+beginners&oq=electron+tutorial+for+&gs_l=psy-ab.1.0.0j0i22i30.14575.19907..22019...3.2..4.680.4252.13j4j2j0j2j2......0....1..gws-wiz.......0i71j35i39j0i20i263j0i273.nBJ12JvZdCY#kpvalbx=_GZMsXtzQFoPGgQbD2aaIAg33
//BOILER-PLATE (may not need "Menu" / electron?)

const path = require("path");
const url = require("url");
require("electron-reload")(__dirname);
let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file",
      slashes: true
    })
  );

  win.on("closed", () => {
    win = null;
  });

  // optional
  // win.openDevTools()
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
  // if (process.platform !== "darwin"){
  //   app.quit()
  // }
});

app.on("activate"),
  () => {
    if (win == null) {
      createWindow();
    }
  };
