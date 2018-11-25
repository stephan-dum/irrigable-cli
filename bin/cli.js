#!/usr/bin/env node
"use strict";

const irrigable = require("@aboutweb/irrigable");

const OptionParser = require("./option-parser");
const options = require("./options.js");
const config = new OptionParser(options).parse();

irrigable.write({
  bundleId : "cli",
  config : config
});
