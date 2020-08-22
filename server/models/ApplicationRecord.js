export class Record
{
    constructor(
        bankCode,
        formNumber,
        applicationType,
        applicationSubType,
        customerType,
        programCode,
        existingDeviceNumber,
        existingClientCode,
        existingAddOnClientCode,
        relationWithPrimaryClient,
        walletPlan1Promo,
        walletPlan2Promo,
        walletPlan3Promo,
        deviceType1,
        devicePlanCode1,
        devicePlanPromoCode1,
        devicePhotoIndicator1,
        deviceType2,
        devicePlanCode2,
        devicePlanPromoCode2,
        devicePhotoIndicator2,
        deviceType3, 
        devicePlanCode3,
        devicePlanPromoCode3,
        devicePhotoIndicator3,
        deviceType4, 
        devicePlanCode4,
        devicePlanPromoCode4,
        devicePhotoIndicator4,
        deviceType5, 
        devicePlanCode5,
        devicePlanPromoCode5,
        devicePhotoIndicator5,
        deviceType6, 
        devicePlanCode6,
        devicePlanPromoCode6,
        devicePhotoIndicator6,
        branchCode,
        corporateClientCode,
        title,
        firstName,
        middleName1,
        middleName2,
        lastName,
        gender,
        maidenName,
        married,
        nationality,
        birthDate,
        birthCity,
        birthCountry,
        education,
        VIPFlag,
        embossedName,
        encodedName,
        KYCStatus,
        KYCRemarks,
        travelPurpose,
        pictureCode,
        photoCode,
        preferredMailingAddress,
        currentAddressLine1,
        currentAddressLine2,
        currentAddressLine3,
        currentAddressLine4,
        currentCityCode,
        currentStateCode,
        currentCountryCode,
        currentZIPCode,
        currentPhoneNumber1,
        currentPhoneNumber2,
        permanentAddressLine1,
        permanentAddressLine2,
        permanentAddressLine3,
        permanentAddressLine4,
        permanentCityCode,
        permanentStateCode,
        permanentCountryCode,
        permanentZIPCode,
        permanentPhoneNumber1,
        permanentPhoneNumber2,
        faxNumber,
        registerForDNCR,
        SMSAlertList,
        emailAlertList,
        statementPreference,
        deliveryMode,
        registeredMobileISDCode,
        registeredMobileNumber,
        registeredMailID,
        languagePreference,
        officeAddressLine1,
        officeAddressLine2,
        officeAddressLine3,
        officeAddressLine4,
        officeCityCode,
        officeStateCode,
        officeCountryCode,
        officeZIPCode,
        officePhoneNumber1,
        officePhoneNumber2,
        officeEmailID,
        officeISDCode,
        officeMobileNumber,
        legalID1Type,
        legalID1,
        legalID1ExpiryDate,
        legalID1IssuancePlace,
        legalID2Type,
        legalID2,
        legalID2ExpiryDate,
        legalID2IssuancePlace,
        legalID3Type,
        legalID3,
        legalID3ExpiryDate,
        legalID3IssuancePlace,
        legalID4Type,
        legalID4,
        legalID4ExpiryDate,
        legalID4IssuancePlace,
        memo,
        clientCustomDate1,
        clientCustomDate2,
        clientCustomDate3,
        clientCustomDate4,
        clientCustomDate5,
        clientCustomData1,
        clientCustomData2,
        clientCustomData3,
        clientCustomData4,
        clientCustomData5,
        clientCustomNumber1,
        clientCustomNumber2,
        clientCustomNumber3,
        clientCustomNumber4,
        clientCustomNumber5,
        deviceCustomDate1,
        deviceCustomDate2,
        deviceCustomDate3,
        deviceCustomDate4,
        deviceCustomDate5,
        deviceCustomData1,
        deviceCustomData2,
        deviceCustomData3,
        deviceCustomData4,
        deviceCustomData5,
        deviceCustomNumber1,
        deviceCustomNumber2,
        deviceCustomNumber3,
        deviceCustomNumber4,
        deviceCustomNumber5,
        walletCustomDate1,
        walletCustomDate2,
        walletCustomDate3,
        walletCustomDate4,
        walletCustomDate5,
        walletCustomData1,
        walletCustomData2,
        walletCustomData3,
        walletCustomData4,
        walletCustomData5,
        walletCustomNumber1,
        walletCustomNumber2,
        walletCustomNumber3,
        walletCustomNumber4,
        walletCustomNumber5,
        employmentStatus,
        emplID, 
        employerName,
        emplDesignation,
        emplDepartment,
        compType, 
        currentJobTenure,
        occupation,
        applicantProf,
        emplJoiningDate,
        travelTypecode,
        travelDestinationCountry,
        travelStartDate,
        travelEndDate,
        clientCustomerID,
        riskCategoryValue,
        cobrandNumber,
        reuterReferenceNumber,
        CBSReferenceNumber,
        lodgingMode,
        permanentAddressFrom,
        clientGSTINNumber,
        checksum

    )
    {


        this._bankCode=        bankCode;
        this._formNumber=        formNumber;
        this._applicationType=        applicationType;
        this._applicationSubType=        applicationSubType;
        this._customerType=        customerType;
        this._programCode=        programCode;
        this._existingDeviceNumber=        existingDeviceNumber;
        this._existingClientCode=        existingClientCode;
        this._existingAddOnClientCode=        existingAddOnClientCode;
       
        this._relationWithPrimaryClient=        relationWithPrimaryClient;
        this._walletPlan1Promo=        walletPlan1Promo;
        this._walletPlan2Promo=        walletPlan2Promo;
        this._walletPlan3Promo=        walletPlan3Promo;
        this._deviceType1=        deviceType1;
        this._devicePlanCode1=        devicePlanCode1;
        this._devicePlanPromoCode1=        devicePlanPromoCode1;
       
        this._devicePhotoIndicator1=        devicePhotoIndicator1;
       
        this._deviceType2=        deviceType2;
        this._devicePlanCode2=        devicePlanCode2;
        this._devicePlanPromoCode2=        devicePlanPromoCode2;
        this._devicePhotoIndicator2=        devicePhotoIndicator2;
        
        this._deviceType3=        deviceType3; 
        this._devicePlanCode3=        devicePlanCode3;
        this._devicePlanPromoCode3=        devicePlanPromoCode3;
        this._devicePhotoIndicator3=        devicePhotoIndicator3;
        
        this._deviceType4=        deviceType4;
        this._devicePlanCode4=        devicePlanCode4;
        this._devicePlanPromoCode4=        devicePlanPromoCode4;
        this._devicePhotoIndicator4=        devicePhotoIndicator4;
        
        this._deviceType5=        deviceType5;
        this._devicePlanCode5=        devicePlanCode5;
        this._devicePlanPromoCode5=        devicePlanPromoCode5;
        this._devicePhotoIndicator5=        devicePhotoIndicator5;
        
        this._deviceType6=        deviceType6;
        this._devicePlanCode6=        devicePlanCode6;


        this._devicePlanPromoCode6=        devicePlanPromoCode6;
        this._devicePhotoIndicator6=        devicePhotoIndicator6;
        
        this._branchCode=        branchCode;
        this._corporateClientCode=        corporateClientCode;
        
        this._title=        title;
        this._firstName=        firstName;
        this._middleName1=        middleName1;
        this._middleName2=        middleName2;
        this._lastName=        lastName;
        this._gender=        gender;
        this._maidenName=        maidenName;
        this._married=        married;
        
        this._nationality=        nationality;
        this._birthDate=        birthDate;
        this._birthCity=        birthCity;
        this._birthCountry=        birthCountry;
        this._education=        education;
        this._VIPFlag=        VIPFlag;
        this._embossedName=        embossedName;
        this._encodedName=        encodedName;
        
        this._KYCStatus=        KYCStatus;
        this._KYCRemarks=        KYCRemarks;
        this._travelPurpose=        travelPurpose;
        this._pictureCode=        pictureCode;
        this._photoCode=        photoCode;
        this._preferredMailingAddress=        preferredMailingAddress;


        this._currentAddressLine1=        currentAddressLine1;
        this._currentAddressLine2=        currentAddressLine2;
        this._currentAddressLine3=        currentAddressLine3;
        this._currentAddressLine4=        currentAddressLine4;
        
        this._currentCityCode=        currentCityCode;
        this._currentStateCode=        currentStateCode;
        this._currentCountryCode=        currentCountryCode;
        this._currentZIPCode=        currentZIPCode;
        
        this._currentPhoneNumber1=        currentPhoneNumber1;
        this._currentPhoneNumber2=        currentPhoneNumber2;
        this._permanentAddressLine1=        permanentAddressLine1;
        this._permanentAddressLine2=        permanentAddressLine2;
        this._permanentAddressLine3=        permanentAddressLine3;
        this._permanentAddressLine4=        permanentAddressLine4;
        this._permanentCityCode=        permanentCityCode;
        
        this._permanentStateCode=        permanentStateCode;
        this._permanentCountryCode=        permanentCountryCode;
        this._permanentZIPCode=        permanentZIPCode;
        this._permanentPhoneNumber1=        permanentPhoneNumber1;
        this._permanentPhoneNumber2=        permanentPhoneNumber2;
        
        this._faxNumber=        faxNumber;
        this._registerForDNCR=        registerForDNCR;
        this._SMSAlertList=        SMSAlertList;
        this._emailAlertList=        emailAlertList;
        
        this._statementPreference=        statementPreference;
        this._deliveryMode=        deliveryMode;
        this._registeredMobileISDCode = registeredMobileISDCode;
        this._registeredMobileNumber=        registeredMobileNumber;
        this._registeredMailID=        registeredMailID;
        this._languagePreference=        languagePreference;
        this._officeAddressLine1=        officeAddressLine1;
        this._officeAddressLine2=        officeAddressLine2;
        this._officeAddressLine3=        officeAddressLine3;
        this._officeAddressLine4=        officeAddressLine4;
        
        this._officeCityCode=        officeCityCode;
        this._officeStateCode=        officeStateCode;
        this._officeCountryCode=        officeCountryCode;
        this._officeZIPCode=        officeZIPCode;
       
        this._officePhoneNumber1=        officePhoneNumber1;
        this._officePhoneNumber2=        officePhoneNumber2;
        this._officeEmailID=        officeEmailID;
        this._officeISDCode=        officeISDCode;
        this._officeMobileNumber=        officeMobileNumber;
       
        this._legalID1Type=        legalID1Type;
        this._legalID1=        legalID1;
        this._legalID1ExpiryDate=        legalID1ExpiryDate;
        this._legalID1IssuancePlace=        legalID1IssuancePlace;
       
        this._legalID2Type=        legalID2Type;
        this._legalID2=        legalID2;
        this._legalID2ExpiryDate=        legalID2ExpiryDate;
        this._legalID2IssuancePlace=        legalID2IssuancePlace;
       
        this._legalID3Type=        legalID3Type;
        this._legalID3=        legalID3;
        this._legalID3ExpiryDate=        legalID3ExpiryDate;
        this._legalID3IssuancePlace=        legalID3IssuancePlace;
       
        this._legalID4Type=        legalID4Type;
        this._legalID4=legalID4;
        this._legalID4ExpiryDate=legalID4ExpiryDate;
        this._legalID4IssuancePlace=legalID4IssuancePlace;
       
        this._memo=memo;
       
        this._clientCustomDate1=clientCustomDate1;
        this._clientCustomDate2=clientCustomDate2;
        this._clientCustomDate3=clientCustomDate3;
        this._clientCustomDate4=clientCustomDate4;
        this._clientCustomDate5=clientCustomDate5;
       
        this._clientCustomData1=clientCustomData1;
        this._clientCustomData2=clientCustomData2;
        this._clientCustomData3=clientCustomData3;
        this._clientCustomData4=clientCustomData4;
        this._clientCustomData5=clientCustomData5;
       
        this._clientCustomNumber1=clientCustomNumber1;
        this._clientCustomNumber2=clientCustomNumber2;
        this._clientCustomNumber3=clientCustomNumber3;
        this._clientCustomNumber4=clientCustomNumber4;
        this._clientCustomNumber5=clientCustomNumber5;
       
        this._deviceCustomDate1=deviceCustomDate1;
        this._deviceCustomDate2=deviceCustomDate2;
        this._deviceCustomDate3=deviceCustomDate3;
        this._deviceCustomDate4=deviceCustomDate4;
        this._deviceCustomDate5=deviceCustomDate5;
       
        this._deviceCustomData1=deviceCustomData1;
        this._deviceCustomData2=deviceCustomData2;
        this._deviceCustomData3=deviceCustomData3;
        this._deviceCustomData4=deviceCustomData4;
        this._deviceCustomData5=deviceCustomData5;
       
        this._deviceCustomNumber1 = deviceCustomNumber1;
        this._deviceCustomNumber2 = deviceCustomNumber2;
        this._deviceCustomNumber3 = deviceCustomNumber3;
        this._deviceCustomNumber4 = deviceCustomNumber4;
        this._deviceCustomNumber5 = deviceCustomNumber5;
       
        this._walletCustomDate1 =walletCustomDate1;
        this._walletCustomDate2 = walletCustomDate2;
        this._walletCustomDate3 =walletCustomDate3;
        this._walletCustomDate4 =walletCustomDate4;
        this._walletCustomDate5 =walletCustomDate5;
       
        this._walletCustomData1 = walletCustomData1;
        this._walletCustomData2 = walletCustomData2;
        this._walletCustomData3 = walletCustomData3;
        this._walletCustomData4 = walletCustomData4;
        this._walletCustomData5 = walletCustomData5;
       
        this._walletCustomNumber1 =walletCustomNumber1;
        this._walletCustomNumber2 =walletCustomNumber2;
        this._walletCustomNumber3 = walletCustomNumber3;
        this._walletCustomNumber4 =walletCustomNumber4;
        this._walletCustomNumber5 =walletCustomNumber5;
       
        this._employmentStatus =employmentStatus;
        this._emplID= emplID; 
        this._employerName = employerName;
        this._emplDesignation =emplDesignation;
        this._emplDepartment = emplDepartment;
        this._compType = compType;
        this._currentJobTenure = currentJobTenure;
        this._occupation = occupation;
       
        this._applicantProf = applicantProf;
        this._emplJoiningDate = emplJoiningDate;
        this._travelTypecode = travelTypecode;
        this._travelDestinationCountry = travelDestinationCountry;
        this._travelStartDate = travelStartDate;
        this._travelEndDate = travelEndDate;
        this._clientCustomerID = clientCustomerID;
        this._riskCategoryValue = riskCategoryValue;
        this._cobrandNumber = cobrandNumber;
        this._reuterReferenceNumber = reuterReferenceNumber;
        this._CBSReferenceNumber = CBSReferenceNumber;
        this._lodgingMode = lodgingMode;
        this._permanentAddressFrom = permanentAddressFrom;
       
        this._clientGSTINNumber = clientGSTINNumber;
        this._checksum = checksum;
    }
}