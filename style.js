import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url(\"./images/background.jpg\") center",
        "backgroundAttachment": "fixed",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "fontFamily": "'Playfair Display', serif"
    },
    "my-container": {
        "marginTop": "20%"
    },
    "custom-container": {
        "borderRadius": 10,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header-main": {
        "color": "white",
        "fontSize": 60,
        "textTransform": "uppercase"
    },
    "blue": {
        "color": "rgb(189, 249, 129)",
        "fontWeight": "bold"
    },
    "input": {
        "width": "90%",
        "border": "none",
        "backgroundColor": "white",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 50
    },
    "input:focus": {
        "outline": "none !important"
    },
    "ui-widget": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ui-helper-hidden-accessible": {
        "display": "none"
    },
    "ui-menu": {
        "backgroundColor": "white",
        "listStyle": "none",
        "width": 30
    },
    "ui-menu li:hover": {
        "cursor": "pointer",
        "backgroundColor": "aquamarine"
    },
    "ui-menu li:active": {
        "cursor": "pointer",
        "backgroundColor": "aquamarine"
    },
    "ui-state-active": {
        "cursor": "pointer",
        "backgroundColor": "aquamarine"
    },
    "ui-id-1": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "footer": {
        "marginTop": 20,
        "fontSize": 15
    },
    "footer a": {
        "color": "rgb(215, 97, 21)"
    }
});