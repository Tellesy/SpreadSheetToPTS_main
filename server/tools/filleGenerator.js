import fs from 'fs';
import {EOL} from 'os';

let endOfLine = EOL;
let bankCode = '020354';


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

function insertHeader(fileName)
{
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear().toString();
    var hour = String(today.getHours()).padStart(2,'0');
    var minutes = String(today.getMinutes()).padStart(2,'0');
    var seconds = String(today.getSeconds()).padStart(2,'0');
    var header = 'HD'+bankCode+day+month+year+hour+minutes+seconds+'2.0';

    var logStream = fs.createWriteStream(fileName, {flags: 'a'});
    logStream.write(header);
    logStream.end(endOfLine);

    

}


 function generateFile(req, res,next) {

   var fileName = createApplicationFile();
   insertHeader(fileName);


      next();
 }


 function insertRecord(fileName,record)
 {
    //receive an array of data
   
 }

function createFile()
{
    var logStream = fs.createWriteStream('newFile.txt', {flags: 'a'});
    // use {flags: 'a'} to append and {flags: 'w'} to erase and write a new file
    logStream.write('Initial line...');
   
    logStream.write(endOfLine);
    logStream.write(endOfLine);
    logStream.write(endOfLine);
    //logStream.end('this is the end line');
    logStream.write('Initial line...');
   
    logStream.write(endOfLine);
    logStream.write(endOfLine);
    logStream.write(endOfLine);
    logStream.end('this is the end line');


}


export {
    generateFile
}

