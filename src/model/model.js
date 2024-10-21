import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatarUrl:{
        type: String,
        required: true
    },
    desc:{
        type: String,
    },
    githubUrl:{
        type: String,
        required: true
    },
    linkedUrl:{
        type: String,
        required: true
    },
    projects:{
        type: Array,
    },
    password: {
        type: String,
        required: true
    },
    c_password: {
        type: String,
        required: true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
    changePassToken: String,
    changePassTokenExpiry: Date
})

export const User=mongoose.models.users || mongoose.model('users', userSchema);


const ProjectSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    liveSiteUrl:{
        type: String,
        required: true
    },
    githubUrl:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})

export const Project=mongoose.models.projects || mongoose.model('projects', ProjectSchema);
