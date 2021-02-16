mapf = function()
{
  if(this.address.zip.startsWith("9"))
  {
    emit(this.address.zip,1);
  }
}

reducef = function(key,values)
{
 total = 0;
 for (x of values)
 {
 total = total + x;
 }
return total;
}

db.customers.mapReduce(mapf,reducef,{out:"out_result"});
cursor = db.out_result.find();

while(cursor.hasNext()){
  printjson(cursor.next());
}

// to check db.customers.find({"address.zip":{$regex:/^9/,$options:'1'}}).pretty()
