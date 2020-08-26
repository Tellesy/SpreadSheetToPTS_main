export class Record
{
    constructor(
        requestType,
        deviceIdentifierType,
        deviveIdentfier,
        CBSClientID,
        branchCode,
        VIPFlag,
        customerType,
        primaryDeviceNumber,
        title,
        lastName,
        firstName,
        middleName1,
        middleName2,
        maidenName,
        embossedName,
        encodedName,
        maritalStatus,
        gender,
        legalID1,
        legalID1Type,
        legalID1IssuancePlace,
        legalID1ExpiryDate,
        legalID2,
        legalID2Type,
        legalID2IssuancePlace,
        legalID2ExpiryDate,
        legalID3,
        legalID3Type,
        legalID3IssuancePlace,
        legalID3ExpiryDate,
        legalID4,
        legalID4Type,
        legalID4IssuancePlace,
        legalID4ExpiryDate,
        nationalityCode,
        birthDate,
        birthCity,
        birthCountry,
        languagePreference,
        education,
        preferredMailingAddress,
        currentAddressLine1,
        currentAddressLine2,
        currentAddressLine3,
        currentAddressLine4,
        currentCountry,
        currentCity,
        currentPostalCode,
        currentStateCode,
        currentContactNo1,
        currentContactNo2,
        permanentAddressLine1,
        permanentAddressLine2,
        permanentAddressLine3,
        permanentAddressLine4,
        permanentCountry,
        permanentCity,
        permanentStateCode,
        permanentPostalCode,
        permanentContactNo1,
        permanentContactNo2,
        ISDCode,
        registeredMobileNo,
        registeredEmailID,
        faxNo,
        registerForDNCR,
        SMSAlertList,
        emailAlertList,
        statementPreference,
        occupation,
        employerName,
        employerType,
        employmentStatus,
        designation,
        department,
        jobTenure,
        joiningDate,
        officeAddressLine1,
        officeAddressLine2,
        officeAddressLine3,
        officeAddressLine4,
        officeCountry,
        officeCity,
        officeStateCode,
        officePostalCode,
        officeContactNo1,
        officeContactNo2,
        officeExt,
        officeISDCode,
        officeMobileNo,
        officeEmailID,
        programCode,
        walletPromoPlan,
        devicePlan1,
        devicePromoPlan1,
        cardCategoryIndicator1,
        pictureCode,
        photoCode,
        devicePlan2,
        devicePromoPlan2,
        cardCategoryIndicator2,
        devicePlan3,
        devicePromoPlan3,
        cardCategoryIndicator3,
        devicePlan4,
        devicePromoPlan4,
        cardCategoryIndicator4,
        devicePlan5,
        devicePromoPlan5,
        cardCategoryIndicator5,
        devicePlan6,
        devicePromoPlan6,
        cardCategoryIndicator6,
        deliveryMode,
        deliveryFlag,
        deliveryDate,
        accountNumber,
        accountCurrency,
        accountType,
        corporateClientCode,
        clientCustomDate1,
        clientCustomDate2,
        clientCustomDate3,
        clientCustomDate4,
        clientCustomDate5,
        clientCustomNumber1,
        clientCustomNumber2,
        clientCustomNumber3,
        clientCustomNumber4,
        clientCustomNumber5,
        clientCustomVarchar1,
        clientCustomVarchar2,
        clientCustomVarchar3,
        clientCustomVarchar4,
        clientCustomVarchar5,
        deviceCustomVarchar1,
        deviceCustomVarchar2,
        deviceCustomVarchar3,
        deviceCustomVarchar4,
        deviceCustomVarchar5,
        deviceCustomDate1,
        deviceCustomDate2,
        deviceCustomDate3,
        deviceCustomDate4,
        deviceCustomDate5,
        deviceCustomNumber1,
        deviceCustomNumber2,
        deviceCustomNumber3,
        deviceCustomNumber4,
        deviceCustomNumber5,
        walletCustomNumber1,
        walletCustomNumber2,
        walletCustomNumber3,
        walletCustomNumber4,
        walletCustomNumber5,
        walletCustomDate1,
        walletCustomDate2,
        walletCustomDate3,
        walletCustomDate4,
        walletCustomDate5,
        walletCustomVarchar1,
        walletCustomVarchar2,
        walletCustomVarchar3,
        walletCustomVarchar4,
        walletCustomVarchar5,
        lodgingMode,
        permanentAddressFrom,
        alternateName,
        filler1,
        filler2,
        filler3,
        filler4,
        filler5,
        filler6,
        filler7,
        filler8,
        filler9,
        filler10,
        filler11,
        filler12,
        filler13,
        filler14,
        filler15,
        filler16,
        filler17,
        filler18,
        filler19,
        filler20,
        checksum
         )
    {


        this._requestType = requestType;
        this._deviceIdentifierType = deviceIdentifierType; 
        this._deviveIdentfier = deviveIdentfier;
        this._CBSClientID = CBSClientID;
        this._branchCode= branchCode;
        this._VIPFlag= VIPFlag;
        this._customerType= customerType;
        this._primaryDeviceNumber = primaryDeviceNumber;
        this._title = title;
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName1 = middleName1;
        this._middleName2 = middleName2;
        this._maidenName = maidenName;
        this._embossedName = embossedName;
        this._encodedName = encodedName;
        this._maritalStatus = maritalStatus;
        this._gender = gender;
        this._legalID1 = legalID1;
        this._legalID1Type = legalID1Type;
        this._legalID1IssuancePlace = legalID1IssuancePlace;
        this._legalID1ExpiryDate = legalID1ExpiryDate;
        this._legalID2 = legalID2;
        this._legalID2Type = legalID2Type;
        this._legalID2IssuancePlace = legalID2IssuancePlace;
        this._legalID2ExpiryDate = legalID2ExpiryDate;
        this._legalID3 = legalID3;
        this._legalID3Type = legalID3Type;
        this._legalID3IssuancePlace = legalID3IssuancePlace;
        this._legalID3ExpiryDate = legalID3ExpiryDate;
        this._legalID4 = legalID4;
        this._legalID4Type = legalID4Type;
        this._legalID4IssuancePlace = legalID4IssuancePlace;
        this._legalID4ExpiryDate = legalID4ExpiryDate;
        this._nationalityCode = nationalityCode;
        this._birthDate = birthDate;
        this._birthCity = birthCity;
        this._birthCountry = birthCountry;
        this._languagePreference = languagePreference;
        this._education = education;
        this._preferredMailingAddress = preferredMailingAddress;
        this._currentAddressLine1 = currentAddressLine1;
        this._currentAddressLine2 = currentAddressLine2;
        this._currentAddressLine3 = currentAddressLine3;
        this._currentAddressLine4 = currentAddressLine4;
        this._currentCountry= currentCountry;
        this._currentCity = currentCity;
        this._currentPostalCode = currentPostalCode;
        this._currentStateCode= currentStateCode;
        this._currentContactNo1 = currentContactNo1;
        this._currentContactNo2 = currentContactNo2;
        this._permanentAddressLine1= permanentAddressLine1;
        this._permanentAddressLine2= permanentAddressLine2;
        this._permanentAddressLine3= permanentAddressLine3;
        this._permanentAddressLine4= permanentAddressLine4;
        this._permanentCountry = permanentCountry;
        this._permanentCity = permanentCity;
        this._permanentStateCode = permanentStateCode;
        this._permanentPostalCode = permanentPostalCode;
        this._permanentContactNo1 = permanentContactNo1;
        this._permanentContactNo2 = permanentContactNo2;
        this._ISDCode = ISDCode;
        this._registeredMobileNo = registeredMobileNo;
        this._registeredEmailID = registeredEmailID;
        this._faxNo = faxNo;
        this._registerForDNCR = registerForDNCR;
        this._SMSAlertList = SMSAlertList;
        this._emailAlertList= emailAlertList;
        this._statementPreference = statementPreference;
        this._occupation = occupation;
        this._employerName = employerName;
        this._employerType = employerType;
        this._employmentStatus = employmentStatus;
        this._designation = designation;
        this._department = department;
        this._jobTenure = jobTenure;
        this._joiningDate = joiningDate;
        this._officeAddressLine1 = officeAddressLine1;
        this._officeAddressLine2 = officeAddressLine2;
        this._officeAddressLine3 = officeAddressLine3;
        this._officeAddressLine4 = officeAddressLine4;
        this._officeCountry = officeCountry;
        this._officeCity = officeCity;
        this._officeStateCode = officeStateCode;
        this._officePostalCode = officePostalCode;
        this._officeContactNo1 = officeContactNo1;
        this._officeContactNo2 = officeContactNo2;
        this._officeExt = officeExt;
        this._officeISDCode = officeISDCode;
        this._officeMobileNo = officeMobileNo;
        this._officeEmailID = officeEmailID;
        this._programCode = programCode;
        this._walletPromoPlan = walletPromoPlan;
        this._devicePlan1 = devicePlan1;
        this._devicePromoPlan1 = devicePromoPlan1;
        this._cardCategoryIndicator1 = cardCategoryIndicator1;
        this._pictureCode = pictureCode;
        this._photoCode = photoCode;
        this._devicePlan2 = devicePlan2;
        this._devicePromoPlan2 = devicePromoPlan2;
        this._cardCategoryIndicator2 = cardCategoryIndicator2;
        this._devicePlan3 = devicePlan3;
        this._devicePromoPlan3 = devicePromoPlan3;
        this._cardCategoryIndicator3 = cardCategoryIndicator3;
        this._devicePlan4 = devicePlan4;
        this._devicePromoPlan4 = devicePromoPlan4;
        this._cardCategoryIndicator4 = cardCategoryIndicator4;
        this._devicePlan5 = devicePlan5;
        this._devicePromoPlan5 = devicePromoPlan5;
        this._cardCategoryIndicator5 = cardCategoryIndicator5;
        this._devicePlan6 = devicePlan6;
        this._devicePromoPlan6 = devicePromoPlan6;
        this._cardCategoryIndicator6 = cardCategoryIndicator6;
        this._deliveryMode = deliveryMode;
        this._deliveryFlag = deliveryFlag;
        this._deliveryDate = deliveryDate;
        this._accountNumber = accountNumber;
        this._accountCurrency = accountCurrency;
        this._accountType = accountType;
        this._corporateClientCode = corporateClientCode;
        this._clientCustomDate1=clientCustomDate1;
        this._clientCustomDate2=clientCustomDate2;
        this._clientCustomDate3=clientCustomDate3;
        this._clientCustomDate4=clientCustomDate4;
        this._clientCustomDate5=clientCustomDate5;
        this._clientCustomNumber1=clientCustomNumber1;
        this._clientCustomNumber2=clientCustomNumber2;
        this._clientCustomNumber3=clientCustomNumber3;
        this._clientCustomNumber4=clientCustomNumber4;
        this._clientCustomNumber5=clientCustomNumber5;
        this._clientCustomVarchar1=clientCustomVarchar1;
        this._clientCustomVarchar2=clientCustomVarchar2;
        this._clientCustomVarchar3=clientCustomVarchar3;
        this._clientCustomVarchar4=clientCustomVarchar4;
        this._clientCustomVarchar5=clientCustomVarchar5;
        this._deviceCustomVarchar1=deviceCustomVarchar1;
        this._deviceCustomVarchar2=deviceCustomVarchar2;
        this._deviceCustomVarchar3=deviceCustomVarchar3;
        this._deviceCustomVarchar4=deviceCustomVarchar4;
        this._deviceCustomVarchar5=deviceCustomVarchar5;
        this._deviceCustomDate1=deviceCustomDate1;
        this._deviceCustomDate2=deviceCustomDate2;
        this._deviceCustomDate3=deviceCustomDate3;
        this._deviceCustomDate4=deviceCustomDate4;
        this._deviceCustomDate5=deviceCustomDate5;
        this._deviceCustomNumber1 = deviceCustomNumber1;
        this._deviceCustomNumber2 = deviceCustomNumber2;
        this._deviceCustomNumber3 = deviceCustomNumber3;
        this._deviceCustomNumber4 = deviceCustomNumber4;
        this._deviceCustomNumber5 = deviceCustomNumber5;
        this._walletCustomNumber1 =walletCustomNumber1;
        this._walletCustomNumber2 =walletCustomNumber2;
        this._walletCustomNumber3 = walletCustomNumber3;
        this._walletCustomNumber4 =walletCustomNumber4;
        this._walletCustomNumber5 =walletCustomNumber5;
        this._walletCustomDate1 =walletCustomDate1;
        this._walletCustomDate2 = walletCustomDate2;
        this._walletCustomDate3 =walletCustomDate3;
        this._walletCustomDate4 =walletCustomDate4;
        this._walletCustomDate5 =walletCustomDate5;
        this._walletCustomVarchar1 = walletCustomVarchar1;
        this._walletCustomVarchar2 = walletCustomVarchar2;
        this._walletCustomVarchar3 = walletCustomVarchar3;
        this._walletCustomVarchar4 = walletCustomVarchar4;
        this._walletCustomVarchar5 = walletCustomVarchar5;
        this._lodgingMode = lodgingMode;
        this._permanentAddressFrom = permanentAddressFrom;
        this._alternateName = alternateName;
        this._filler1 = filler1;
        this._filler2 = filler2;
        this._filler3 = filler3;
        this._filler4 = filler4;
        this._filler5 = filler5;
        this._filler6 = filler6;
        this._filler7 = filler7;
        this._filler8 = filler8;
        this._filler9 = filler9;
        this._filler10 = filler10;
        this._filler11 = filler11;
        this._filler12 = filler12;
        this._filler13 = filler13;
        this._filler14 = filler14;
        this._filler15 = filler15;
        this._filler16 = filler16;
        this._filler17 = filler17;
        this._filler18 = filler18;
        this._filler19 = filler19;
        this._filler20 = filler20;
        this._checksum = checksum;    
    }
}