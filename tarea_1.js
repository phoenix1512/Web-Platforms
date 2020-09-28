//¿Cuántos registros arrojo el comando count?
use students;
db.grades.count()
//800

//Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({student_id: 4})
//{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }

//¿Cuántos registros hay de tipo exam?
db.grades.count({type: "exam"})
//200

//¿Cuántos registros hay de tipo homework?
db.grades.count({type: "homework"})
//400

//¿Cuántos registros hay de tipo quiz?
db.grades.count({type: "quiz"})
//200

//Elimina todas las calificaciones del estudiante con el id numero 3 
db.grades.updateMany({student_id: 3}, {$set: {score: null}})
//{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
db.grades.find({student_id: 3})
//{ "_id" : ObjectId("50906d7fa3c412bb040eb583"), "student_id" : 3, "type" : "exam", "score" : null }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb584"), "student_id" : 3, "type" : "quiz", "score" : null }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb586"), "student_id" : 3, "type" : "homework", "score" : null }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb585"), "student_id" : 3, "type" : "homework", "score" : null }

//¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea?
db.grades.find({score: 75.29561445722392})
//{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

//Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
db.grades.update({_id: ObjectId("50906d7fa3c412bb040eb591")}, {$set: {score: 100}})
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// A qué estudiante pertenece esta calificación.
db.grades.find({_id: ObjectId("50906d7fa3c412bb040eb591")})
//{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 
