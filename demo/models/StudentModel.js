const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.Model

var StudentSchema = new schema({
    name: String, 
    email: String, 
    gender: String, 
    image: String, 
    dob: Date, 
    year: Number,
    grade: Number,
},
{
    versionKey: false //optional (remove _v: 0 when add new data)
})

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var StudentModel = mongoose.model('student', StudentSchema, 'student')


module.exports = StudentModel