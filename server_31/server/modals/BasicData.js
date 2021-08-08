const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasicDataSchema = new Schema({
    id:{type: Number,required:true}, // ไอดี
    //partnerType:{type:[String]}, // ประเภทคู่ค้า
    routeAuth:{type:[{
        id:{type:Number}, //ไอดี
        routeAddress:{type:String}, // เราท์แอดเดรส
        routeName:{type:String}, // เราท์เนม
        userLevel:{type:[String]} // ระดับผู้ใช้
    }],default:[]},
    userId:{type:String},
    shopId:{type:String,required:true}, //
    timestamp:{type:Date},
});

BasicDataSchema.index({id:1})

module.exports = BasicData = mongoose.model('BasicData', BasicDataSchema);


/*

    transactionType:{type:[{
        groupId:{type:String},
        groupName:{type:String},
        effectOrder:{type:String},
        effectPlan:{type:String},
        effectStock:{type:String},
    }]
    }, // ประเภทเอกสาร
    




*/