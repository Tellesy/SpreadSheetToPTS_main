//Tools to extract records for spreadsheet file
import {Record} from '../models/ApplicationRecord';


function extractRecordsFromSpreadSheet()
    {
        var records = [];

        //test data here
        var record = new Record();
        record._CBSReferenceNumber = '1000124';
        
    

        records.push(record);


        return records;

    }

export {
    extractRecordsFromSpreadSheet
}