let OptionFlag /*circular see bottom*/;

class OptionNode extends Array {
  constructor(flags) {
    super();

    this.add(flags);
  }
  add(flags) {
    for(let [key, value] of Object.entries(flags)) {
      this.push(new OptionFlag(value, key));
    }
  }
  parse(ns, value, receiver) {
    let property = ns[0];

    let flag = this.find(
      ({ long, short }) => long == property || short == property
    );

    if(flag) {
      ns.shift()

      if(ns.length) {
        receiver = (
          receiver[flag.long]
          || (receiver[flag.long] = Object.create(flag.type.prototype))
        );

        return flag.parse(ns, value, receiver);
      }

      receiver[flag.long] = value || flag.default || "";
    }
  }
}

module.exports = OptionNode;

/*circular*/
OptionFlag = require("./option-flag.js");
