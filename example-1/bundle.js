(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      add = (num1, num2) => {
        return num1 + num2;
      };
      module.exports = add;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      multiply = (num1, num2) => {
        return num1 * num2;
      };
      module.exports = multiply;
    }
  });

  // index.js
  var add2 = require_add();
  var multiply2 = require_multiply();
  console.log(multiply2(add2(3, 6), 2));
  console.log("Hello from the developer console!");
  console.log(new Date());
})();
