const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Please enter a name"],
        default:""
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
    },
    email:{
        type:String,
        required:[true,"Please enter an email"],
        default:""
    },
    activatedByAdmin:{
        type:Boolean,
        default:true
    },
    type_of_user:{
        type:String,
        default:""
    },
    completed_profile:{
        type:Boolean,
        default:false
    },
    customer_image:{
        type:String,
        default:""
    },
    customer_phone:{
        type:String,
        default:""
    },
    ratedProviders:[
        {
            type:mongoose.Schema.Types.ObjectId,
        }
    ],
    requested_Providers:[
        {
            requested_provider_id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"provider"
            },
            serviceId:{
                type:String
            },
            date:{
                type:Date,
                default:Date.now
            },
            status:{
                type:String,
                default:"pending"
            },
            service_description:{
                type:String,
            },
            proceed:{
                type:Boolean,
                default:false
            },
            
        }
    ],
    debts:[
        {
            customer_Info:{
                name:{
                    type:String
                },
                email:{
                    type:String
                },
                customer_id:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"customer",
                },
        
            },
            serviceId:{
                type:String
            },
            provider_Info:{
                name:{
                    type:String
                },
                email:{
                    type:String
                },
                provider_id:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"provider",
                },
            },
            commission:{
                type:Number
            },  
            date:{
                type:Date,
                default:Date.now
            },
            paid:{
                type:Boolean,
                default:false
                
            }
        }
        ],
        verificationToken:{
            type:Number,
            default:undefined
        },
    emailVerified:{
        type:Boolean,
        default:false
    } 
},
{
    timestamps:true
}
)
module.exports = mongoose.model("customer", customerSchema)