"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractRecordsFromSpreadSheet = extractRecordsFromSpreadSheet;

var _ApplicationRecord = require("../models/ApplicationRecord");

//Tools to extract records for spreadsheet file
function extractRecordsFromSpreadSheet() {
  var records = []; //test data here

  var record = new _ApplicationRecord.Record();
  record._CBSReferenceNumber = '1000124';
  records.push(record);
  return records;
}