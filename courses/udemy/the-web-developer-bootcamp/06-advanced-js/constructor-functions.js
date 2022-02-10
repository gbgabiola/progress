// This is a Constructor Function...
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color(35, 60, 190); // undefined, new operator should be used

// ===================
// THE NEW OPERATOR!
// ===================
// 1. Creates a blank, plain JavaScript object
// 2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// 3. Binds the newly created object instance as the this context
// 4. Returns this if the function doesn't return an object

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
color1.rgba(0.5);
const color2 = new Color(0, 0, 0);
color2.hex();
