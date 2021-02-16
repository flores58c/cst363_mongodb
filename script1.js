db.patients.insertMany([
{"name":"Nikki","ssn":1112223333,"age":10,"address":"5506 Atlas Street, South Pasadena,CA,90032"},
{"name":"Vernita","ssn":2222223333,"age":20,"address":"5506 Atlas Street, South Pasadena,CA,90032"},
{"name":"Will","ssn":8798234789,"age":30,"address":"251 North Bristol Avenue, Los Angeles, CA 90049",
"prescriptions" : [
                { "id": "RX743009", "tradename" : "Hydrochlorothiazide"   },
                { "id" : "RX656003", "tradename" : "LEVAQUIN", "formula" : "levofloxacin"}]
}
]);
cursor = db.patients.find();
print("\nDISPLAY ALL\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.find({age:{$eq:20}});
print("\nEQUAL TO 20\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.find({age:{$lt:25}});
print("\nLESS THAN 25\n")
while(cursor.hasNext())
{
  printjson(cursor.next());
}
cursor = db.patients.drop();
