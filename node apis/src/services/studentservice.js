require('dotenv').config();
function student(db)
{
	return new Promise((resolve,reject)=>
	{
     db.collection(process.env.collection).find({}).toArray(function(err, result) {
    if (err)
    {
    reject("database query error");
    }
    else
    {
    	resolve(result);
    }
});
	});
}
exports.student=student;