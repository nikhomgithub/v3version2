const validationTemplate =require('../middleware/validation/validationTemplate')
const initData = require('../data/initData/initData')
//const restoreData = require('../data/restoreData/restoreData')

const backupFolder='./data/backupData/'

const shop={
    modal:'../modals/Auth',
    initData:initData.shopInit,
    //restoreData:restoreData.shopRestore,
    backupFolder:backupFolder,
    //addLimit:5,
    tokenName:"shopToken",
    routeName:"shop",
    folder:"p31upload/shop",
    valTemplate:validationTemplate.shop
}
const user={
    modal:'../modals/Auth',
    initData:initData.userInit,
    //restoreData:restoreData.userRestore,
    backupFolder:backupFolder,
    //addLimit:5,
    tokenName:"userToken",
    routeName:"user",
    folder:"p31upload/user",
    valTemplate:validationTemplate.user
}
const basicData={
    modal:'../modals/BasicData',
    initData:initData.basicDataInit,
    //restoreData:restoreData.basicDataRestore,
    backupFolder:backupFolder,
    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"basicdata",
    folder:"p31upload/basicdata",
    valTemplate:validationTemplate.basicData
}

const sticker={
    modal:'../modals/Sticker',
    initData:initData.stickerInit,
    //restoreData:restoreData.partnerRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"sticker",
    folder:"p31upload/sticker",
    valTemplate:validationTemplate.sticker
}

const params={shop,user,basicData,sticker}

module.exports=params