#!/bin/bash
mapf = function(){ emit(this.customerId,  {zip:this.address.zip}); }

reducef = function(key,values){

  return ({zip:values[0].zip});

}

db.customers.mapReduce(mapf,reducef,{out:"temp1"});

cursor = db.temp1.find();

while(cursor.hasNext()){
  printjson(cursor.next());
}


mapf2 = function(){

  for(item of this.items)
  {
    if(item.itemNo == 1)
    {
      emit(this.customer,{qty:item.qty});
    }
}

}


reducef2 = function(key,values){
  var sum = 0;
  //program would only run if I added zip initialized here
  var zip = "";
  for (value of values)
  {
    if("zip" in value){
      zip = value.zip;
    }
    if("qty" in value){
      sum = sum + value.qty;
    }

  }
return{zip:zip,qty:sum}
}

db.orders.mapReduce(mapf2,reducef2,{out: {reduce:"temp1"}});

/*
mapf3 = function()
{
  if("qty" in this.value){
  emit(this.value.zip,this.value.qty)
}
}

reducef3 = function(key,values)
{
  sum=0;
  for(x of values)
  {
    sum = sum + x;
  }
  return sum;
}

db.temp1.mapReduce(mapf3,reducef3,{out:"temp2"});*/
cursor = db.temp1.find();

while(cursor.hasNext()){
  printjson(cursor.next());
}
