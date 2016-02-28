var Colors = require ('material-ui/lib/styles/colors');
var ColorManipulator =require ('material-ui/lib/utils/color-manipulator');
var Spacing =require ('material-ui/lib/styles/spacing');
var zIndex =require ('material-ui/lib/styles/zIndex');
var ThemeManager = require('material-ui/lib/styles/theme-manager');
var DarkTheme = require("material-ui/lib/styles/raw-themes/dark-raw-theme");

DarkTheme.fontFamily = "Hammersmith One";

var theme = ThemeManager.getMuiTheme(DarkTheme);

var defaultFontSize = 24;
var gray1 = "#555";
var gray2 = "#444";
theme.toolbar.height = 64;
theme.toolbar.titleFontSize = defaultFontSize;
theme.toolbar.backgroundColor = gray1;


theme.flatButton.color=gray2;
theme.navButton = {
    fontFamily: "Hammersmith One, Helvetica",
    backgroundColor: "transparent",
    lineHeight: "64px",
    fontSize: defaultFontSize,
    color: "white",
    margin: "0"
};
module.exports = theme;