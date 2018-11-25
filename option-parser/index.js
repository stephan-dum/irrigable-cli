const OptionNode = require("./option-node.js");

class OptionParser extends OptionNode {
  parse(argv = process.argv) {
    const options = {};

    argv.forEach((raw) => {
      let [property, value = ""] = raw.split("=");

      property = property.replace(/^--?/, "");
      value = value.replace(
        /(["'])(.*)\1/,
        (match, quote, value) => value
      );

      super.parse(property.split("."), value, options);
    });

    return options;
  }
}

module.exports = OptionParser;
