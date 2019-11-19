const assert = require("assert");
const ISO4217 = require("./index");

assert(ISO4217.isCurrencyCode("USD"));

try {
  ISO4217.isCurrencyCode("FAKE")
  assert(false);
} catch {
  assert(true);
}