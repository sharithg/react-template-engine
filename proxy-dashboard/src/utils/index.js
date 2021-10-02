export const getResource = async (url, jwt) => {
  try {
    const res = await fetch(url, {
      headers: new Headers({
        Authorization: `JWT ${jwt}`,
      }),
    });
    const res_json = await res.json();
    return [res_json, null];
  } catch (e) {
    return [null, e];
  }
};

export const hslToHex = (hsl_str) => {
  // const regexp =
  //   /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
  // console.log(regexp.exec(hsl_str).slice(1, 4));
  const hslStr = hsl_str.substring(1, hsl_str.length);
  let [h, s, l] = hslStr.replace("hsl(", "").replace(")", "").split(",");
  h = parseFloat(h);
  s = parseFloat(s.substring(0, s.length - 1));
  l = parseFloat(l.substring(0, l.length - 1));
  console.log(h, s, l);
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const getHex = (css_var) => {
  const coputed_css = getComputedStyle(document.body).getPropertyValue(css_var);
  return coputed_css;
};

export const getFormattedDate = () => {
  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const fortnightAway = new Date();
  const date = fortnightAway.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][fortnightAway.getMonth()];

  return `${month} ${date}${nth(date)}, ${fortnightAway.getFullYear()}`;
};
