"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractRecordsFromSpreadSheet = extractRecordsFromSpreadSheet;

var _ApplicationRecord = require("../models/ApplicationRecord");

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Tools to extract records for spreadsheet file
function extractRecordsFromSpreadSheet() {
  var records = []; //test data here

  var record = new _ApplicationRecord.Record();
  record._CBSReferenceNumber = '599999';
  record._clientCustomerID = '599999';
  record._bankCode = _config.default.bank_code;
  record._applicationType = 'P';
  record._applicationSubType = 'N';
  record._customerType = '0';
  record._programCode = 'PRG18';
  record._deviceType1 = '4';
  record._devicePlanCode1 = '20354DP012';
  record._devicePhotoIndicator1 = '0';
  record._branchCode = '001';
  record._title = '1';
  record._firstName = 'Khaled';
  record._middleName1 = 'Ahmed';
  record._lastName = 'Saad';
  record._gender = 'M';
  record._married = '1';
  record._nationality = '434';
  record._birthDate = '01091954';
  record._birthCountry = '434';
  record._embossedName = 'KHALED A. SAAD';
  record._KYCStatus = 'Y';
  record._KYCRemarks = 'valid';
  record._preferredMailingAddress = 'C';
  record._currentAddressLine1 = 'Tripoli';
  record._currentCountryCode = '434';
  record._SMSAlertList = 'Y';
  record._emailAlertList = 'Y';
  record._statementPreference = 'B';
  record._registeredMobileISDCode = '+218';
  record._registeredMobileNumber = '911112233';
  record._registeredMailID = 'muhammad.tellesy.archive@gmail.com';
  record._languagePreference = 'en';
  record._legalID1Type = '01';
  record._legalID1 = '105KK495';
  record._legalID1ExpiryDate = '20012030';
  record._legalID1IssuancePlace = 'Tripoli';
  record._legalID2Type = '02';
  record._legalID2 = '10001452222';
  record._legalID2ExpiryDate = '20012030';
  record._legalID2IssuancePlace = 'Tripoli';
  records.push(record);
  return records;
}