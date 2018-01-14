require('dotenv').config();
function student(db,a)
{
	return new Promise((resolve,reject)=>
	{
        db.collection(process.env.collection).insertOne(a, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve([{"inserted successfully":"sfd"}]);
                                }
	});
    });
}
exports.student=student;