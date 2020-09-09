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

  var record1 = new _ApplicationRecord.Record(); //record._requestType = '1';

  record1._applicationType = 'P';
  record1._applicationSubType = 'N';
  record1._customerType = '0';
  record1._deviceType1 = '4';
  record1._devicePhotoIndicator1 = '0';
  record1._clientCustomerID = '1515151';
  record1._CBSReferenceNumber = '1515151';
  record1._branchCode = '001';
  record1._title = '1';
  record1._lastName = 'Younes';
  record1._firstName = 'Sarah';
  record1._middleName1 = 'Ahmed';
  record1._embossedName = 'Sarah A. Younes';
  record1._married = '1';
  record1._gender = 'F';
  record1._legalID1 = '108JJ455';
  record1._legalID1Type = '01';
  record1._legalID1IssuancePlace = 'Tripoli';
  record1._legalID1ExpiryDate = '20022030';
  record1._legalID2 = '21989030101';
  record1._legalID2Type = '02';
  record1._legalID2IssuancePlace = 'Tripoli';
  record1._legalID2ExpiryDate = '20032030';
  record1._nationality = '434';
  record1._birthDate = '13061989';
  record1._birthCity = '';
  record1._birthCountry = '434';
  record1._languagePreference = 'en';
  record1._education = '';
  record1._preferredMailingAddress = 'C';
  record1._currentAddressLine1 = 'Tripoli';
  record1._currentCountryCode = '434';
  record1._currentCityCode = '';
  record1._currentZIPCode = '';
  record1._registeredMobileISDCode = '+218';
  record1._registeredMobileNumber = '911091195';
  record1._registeredMailID = 'mtellesyuk@gmail.com';
  record1._registerForDNCR = 'Y';
  record1._SMSAlertList = 'Y';
  record1._emailAlertList = 'Y';
  record1._statementPreference = 'B';
  record1._programCode = 'PRG18';
  record1._devicePlanCode1 = '20354DP012'; //record._deliveryMode = '0';

  record1._KYCStatus = 'Y';
  record1._KYCRemarks = 'valid'; //record._accountNumber = '166666684002027';
  //record._accountCurrency = '840';
  //record._accountType = '20';

  var record2 = new _ApplicationRecord.Record(); //record._requestType = '1';

  record2._applicationType = 'P';
  record2._applicationSubType = 'N';
  record2._customerType = '0';
  record2._deviceType1 = '4';
  record2._devicePhotoIndicator1 = '0';
  record2._clientCustomerID = '1115151';
  record2._CBSReferenceNumber = '1115151';
  record2._branchCode = '001';
  record2._title = '1';
  record2._lastName = 'Salama';
  record2._firstName = 'Sawsan';
  record2._middleName1 = 'Mike';
  record2._embossedName = 'Sawsan M. Salama';
  record2._married = '1';
  record2._gender = 'F';
  record2._legalID1 = '155JG499';
  record2._legalID1Type = '01';
  record2._legalID1IssuancePlace = 'Tripoli';
  record2._legalID1ExpiryDate = '20022030';
  record2._legalID2 = '21988030190';
  record2._legalID2Type = '02';
  record2._legalID2IssuancePlace = 'Tripoli';
  record2._legalID2ExpiryDate = '20032030';
  record2._nationality = '434';
  record2._birthDate = '13061989';
  record2._birthCity = '';
  record2._birthCountry = '434';
  record2._languagePreference = 'en';
  record2._education = '';
  record2._preferredMailingAddress = 'C';
  record2._currentAddressLine1 = 'Tripoli';
  record2._currentCountryCode = '434';
  record2._currentCityCode = '';
  record2._currentZIPCode = '';
  record2._registeredMobileISDCode = '+218';
  record2._registeredMobileNumber = '911091195';
  record2._registeredMailID = 'mtellesyturkey@gmail.com';
  record2._registerForDNCR = 'Y';
  record2._SMSAlertList = 'Y';
  record2._emailAlertList = 'Y';
  record2._statementPreference = 'B';
  record2._programCode = 'TF019';
  record2._devicePlanCode1 = '20354DP013'; //record._deliveryMode = '0';

  record2._KYCStatus = 'Y';
  record2._KYCRemarks = 'valid';
  var record3 = new _ApplicationRecord.Record(); //record._requestType = '1';

  record3._applicationType = 'P';
  record3._applicationSubType = 'N';
  record3._customerType = '0';
  record3._deviceType1 = '4';
  record3._devicePhotoIndicator1 = '0';
  record3._clientCustomerID = '1002994';
  record3._CBSReferenceNumber = '1002994';
  record3._branchCode = '001';
  record3._title = '1';
  record3._lastName = 'Mahmoud';
  record3._firstName = 'Khaled';
  record3._middleName1 = 'Momen';
  record3._embossedName = 'Khaled M. Momen';
  record3._married = '1';
  record3._gender = 'M';
  record3._legalID1 = '108TT455';
  record3._legalID1Type = '01';
  record3._legalID1IssuancePlace = 'Tripoli';
  record3._legalID1ExpiryDate = '20022030';
  record3._legalID2 = '11983050101';
  record3._legalID2Type = '02';
  record3._legalID2IssuancePlace = 'Tripoli';
  record3._legalID2ExpiryDate = '20032030';
  record3._nationality = '434';
  record3._birthDate = '13061983';
  record3._birthCity = '';
  record3._birthCountry = '434';
  record3._languagePreference = 'en';
  record3._education = '';
  record3._preferredMailingAddress = 'C';
  record3._currentAddressLine1 = 'Tripoli';
  record3._currentCountryCode = '434';
  record3._currentCityCode = '';
  record3._currentZIPCode = '';
  record3._registeredMobileISDCode = '+218';
  record3._registeredMobileNumber = '911091195';
  record3._registeredMailID = 'mtellesyuae@gmail.com';
  record3._registerForDNCR = 'Y';
  record3._SMSAlertList = 'Y';
  record3._emailAlertList = 'Y';
  record3._statementPreference = 'B';
  record3._programCode = 'EM10';
  record3._devicePlanCode1 = '20354DP014'; //record._deliveryMode = '0';

  record3._KYCStatus = 'Y';
  record3._KYCRemarks = 'valid'; //record._accountNumber = '166666684002027';
  //record._accountCurrency = '840';
  //record._accountType = '20';
  //record._accountNumber = '166666684002027';
  //record._accountCurrency = '840';
  //record._accountType = '20';

  records.push(record1);
  records.push(record2);
  records.push(record3);
  return records;
}