const tableTemplate=require('./tableTemplate')
const uuid = require("uuid");

//==============================
const shopInit={
    shopName:"shopa",
    password:"shopa",
    active:true,
    code:uuid.v4(),
    dateIn: new Date().toISOString().substring(0,10),
    
    ownerName:"ownera",
    ownerPassword:"ownera",
    ownerActive:true,
    ownerCode:uuid.v4(),
    
    ownerEmail:'a@mail.com'
}
//-----------------------------
const userInit={
    id:1,
    username:"usera",
    password:"usera",
    active:true,
    code:uuid.v4(),
    userLevel:"admin",
    dateIn: new Date().toISOString().substring(0,10),
    name:"usera",
    surname:"usera"
}

//--------------------------------------
const basicDataInit={
    id:1,
    //partnerType:["ผู้ซื้อ","ผู้ขาย"],
    
    routeAuth:[
     
     {id:1,routeAddress:'/user/adduser', routeName:"N/A", userLevel:["admin"]},

     {id:4,routeAddress:'/user/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:5,routeAddress:'/user/deletecustom', routeName:"N/A", userLevel:["admin"]},

     {id:11,routeAddress:'/sticker/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:12,routeAddress:'/sticker/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:13,routeAddress:'/sticker/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:14,routeAddress:'/sticker/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:15,routeAddress:'/sticker/deletemany', routeName:"N/A", userLevel:["admin","staff"]},

     {id:31,routeAddress:'/basicdata/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:32,routeAddress:'/basicdata/deletecustom', routeName:"N/A", userLevel:["admin"]},
     {id:32,routeAddress:'/basicdata/addcustom', routeName:"N/A", userLevel:["admin"]},
     {id:33,routeAddress:'/basicdata/updatecustom', routeName:"N/A", userLevel:["admin"]},


    ]
}

//------------------------------------
//------------------------------------
const stickerInit={
    id:1,
    recordName:"abcd",
    date:"2021-12-31",
    thaiDate:"",
    recordBy:"Peter",

    xPerLine:4,
    heightP:297,
    widthP:210,

    gridColumnGap:2,
    gridRowGap:2,
    showBorder:true,

    paddingTopP:5,
    paddingBottomP:5,
    paddingLeftP:5,
    paddingRightP:5,

    showCode:true,
    showBarCode:true,

    heightB:20,
    widthB:1,
    fontSizeCode:10,

    showName:true,
    fontSizeName:10,

    showPrice:true,
    fontSizePrice:10,
    
    showUnit:true,
    fontSizeUnit:10,

    productData : [
        {code:"1234",name:"coloa",price:100,unit:"ขวด",qty:10},
        {code:"4aa5",name:"pepsi",price:200,unit:"ขวด",qty:5},
    ]

}
//-------------------------------------

//-----------------------------------------

const initData= {
                    shopInit,userInit,
                    basicDataInit,
                    stickerInit,
                }



module.exports = initData;