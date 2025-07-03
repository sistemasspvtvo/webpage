const { DateTime } = require("luxon");

module.exports = function(date, format = "LLLL d, yyyy") {
  return DateTime.fromJSDate(date).toFormat(format);
};