let root = document.documentElement;

export const setProperty = (property, value) => {
  root.style.setProperty(property, value);
};

export const PROPERTIES = {
  BG_COLOR: "--bg-color",
  SIDEBAR_COLOR: "--sidebar-color",
  STROKE_COLOR: "--stroke-color",
  STROKE_LIGHT_COLOR: "--stroke-light-color",
  STROKE_LIGHTER_COLOR: "--stroke-lighter-color",
  PRIMARY_COLOR: "--primary-color",
  FILL_COLOR: "--fill-color",
  GREY_COLOR: "--grey-color",
  INPUT_COLOR: "--input-color",
};
