const objectToString = Object.prototype.toString;
const OptionNode = require("./option-node.js");

class OptionFlag extends OptionNode {
  constructor(options, short) {
    super(options.flags || {});

    if(objectToString.call(options) == "[object String]") {
      options = {
        long : options,
      };
    }

    this.short = short;
    this.default = options.default;
    this.long = options.long || short;
    this.type = options.type;
  }
}

module.exports = OptionFlag;
