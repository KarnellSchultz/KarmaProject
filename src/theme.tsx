// const karmaBlue = '#63c6cb';
const darkKarmaPink = "#ff82a7";
const lightKarmaPink = "#f8dbd5";
// const lightKarmaPink = "#fba8b2";
const karmaCream = "#f5eee8";
const karmaGreen = "#29ba80";
const red = "#ea3546";

// karma colors

export const themes = {
  lightTheme: {
    body: "#E2E2E2",
    text: "#363537",
    //Button
    buttonBackgroundColor: red,
    buttonHoverColor: "#222",
    navColor: "#111",
    toggleBorder: "#FFF",
    mainAccent: red,
    gradient: `rgb(255, 255, 255)
	linear-gradient(to right bottom, rgb(109, 110, 114), rgb(158, 160, 166))
	repeat scroll 0% 0%`,
    maxMobileSize: "775px",
    minFullSize: "1160px"
  },
  darkTheme: {
    body: "#282c35",
    text: "#f0f0f0",
    //Button
    buttonBackgroundColor: red,
    buttonHoverColor: "#222",
    navColor: "#111",
    mainAccent: red,
    toggleBorder: "#6B8096",
    gradient: `rgb(255, 255, 255)
	linear-gradient(to right bottom, rgb(109, 110, 114), rgb(158, 160, 166))
	repeat scroll 0% 0%`,
    maxMobileSize: "775px",
    minFullSize: "1160px"
  },
  karmaTheme: {
    body: lightKarmaPink,
    text: "#111",
    //Button
    buttonBackgroundColor: karmaGreen,
    buttonHoverColor: lightKarmaPink,
    navColor: karmaCream,
    toggleBorder: "#FFF",
    mainAccent: darkKarmaPink,
    gradient: `rgb(255, 255, 255)
	linear-gradient(to right bottom, rgb(109, 110, 114), rgb(158, 160, 166))
	repeat scroll 0% 0%`,
    maxMobileSize: "775px",
    minFullSize: "1160px"
  }
};
