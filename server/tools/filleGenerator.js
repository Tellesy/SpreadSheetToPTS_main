import fs from 'fs';
import {EOL} from 'os';
import config from '../config';

import {Record} from '../models/ApplicationRecord';
import {extractRecordsFromSpreadSheet} from './recordExtractor';

const endOfLine = EOL;
const bankCode = config.bank_code;


function createApplicationFile()
{
    //First generate the name of the file
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear().toString().substring(2,4);
    var hour = String(today.getHours()).padStart(2,'0');
    var minutes = String(today.getMinutes()).padStart(2,'0');
    var seconds = String(today.getSeconds()).padStart(2,'0');

    var product = 'PR';
    var sequence = 1;

    var name = 'APP'+product+bankCode+day+month+year+hour+minutes+seconds+String(sequence).padStart(6,'0')+'.dat';

    if(fs.existsSync(name))
    {
        sequence++;
        name = 'APP'+product+bankCode+day+month+year+hour+minutes+seconds+String(sequence).padStart(6,'0')+'.dat';
    }

    fs.writeFileSync(name,'');

    return name;

}

function getHeader()
{
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear().toString();
    var hour = String(today.getHours()).padStart(2,'0');
    var minutes = String(today.getMinutes()).padStart(2,'0');
    var seconds = String(today.getSeconds()).padStart(2,'0');
    var header = 'HD'+bankCode+day+month+year+hour+minutes+seconds+'2.0';

  
    // var logStream = fs.createWriteStream(fileName, {flags: 'a'});
    // logStream.write(header);
    // //logStream.wirte(header);
    // logStream.write(endOfLine);
    // logStream.end();

    return header;

}


 function generateFile(req, res,next) {

    var records = extractRecordsFromSpreadSheet();
    //records.push(record);

    var content = [];
    var fileName = createApplicationFile();
    content.push(getHeader());
    console.log(content);

    //should be for each (record in reocrds) here
    content.push(extractRecordsString(records));


    insertContentToFile(fileName,content);
    next();
 }


  function extractRecordsString(records)
 {
    
    var record = new Record();
    record._bankCode = bankCode;
    record._firstName = 'fffff';
    record._faxNumber = 'faffs';
    var recordArray = [];
    var recordString = '';

    Object.keys(record).map(function(key) {
        recordArray[key] = record[key];
});

//console.log(recordArray);
Object.keys(record).forEach(function(key)
{
    var value = record[key];
    if(!value)
    {
        value = '|';
    }
    if(recordString == '')
    {
        recordString = value;
    }
    else
    recordString = recordString+'|'+value;
});

console.log(recordString);

return recordString;
   
 }

function insertContentToFile(fileName,content)
{
    var logStream = fs.createWriteStream(fileName, {flags: 'a'});
     

    Object.values(content).forEach(function(value){
        logStream.write(value);
        logStream.write(endOfLine);
        
    });

    logStream.end();
}


export {
    generateFile
}

