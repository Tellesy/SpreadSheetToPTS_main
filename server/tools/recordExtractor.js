//Tools to extract records for spreadsheet file
import {Record} from '../models/ApplicationRecord';
import config from '../config';


function extractRecordsFromSpreadSheet()
    {
        var records = [];

        //test data here
        var record = new Record();
        record._requestType = '1';
        record._CBSClientID = '1666666';
        record._branchCode ='001';
        record._title='1';
        record._lastName = 'Alatrash';
        record._firstName = 'Abdulkhalik';
        record._middleName1 = 'Ahmed';
        record._embossedName = 'Abdulkhalik A. Alatrash';
        record._maritalStatus = '0';
        record._gender='M';
        record._legalID1 = '109JJ355';
        record._legalID1Type = '01';
        record._legalID1IssuancePlace = 'Tripoli';
        record._legalID1ExpiryDate = '20022030';
        record._legalID2 = '11994030101';
        record._legalID2Type = '02';
        record._legalID2IssuancePlace = 'Tripoli';
        record._legalID2ExpiryDate = '20032030';
        record._nationalityCode = '434';
        record._birthDate = '24/10/1994';
        record._birthCity = 'Khumes';
        record._birthCountry = '434';
        record._languagePreference = 'en';
        record._education = '3';
        record._preferredMailingAddress = 'C';
        record._currentAddressLine1 ='Tripoli 11';
        record._currentCountry = '434';
        record._currentCity = 'Tripoli';
        record._currentPostalCode = '114521';
        record._ISDCode = '+218';
        record._registeredMobileNo = '911092233';
        record._registeredEmailID = 'a.altatrash@lib.com.ly';
        record._SMSAlertList = 'Y';
        record._emailAlertList = 'Y';
        record._statementPreference = 'B';
        record._programCode = 'PRG18';
        record._devicePlan1 ='20354DP012';
        record._deliveryMode = '0';
        record._accountNumber = '166666684002027';
        record._accountCurrency = '840';
        record._accountType = '20';
    
        
        records.push(record);



        return records;

    }



export {
    extractRecordsFromSpreadSheet
};