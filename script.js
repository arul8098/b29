//step 1:create an XHR object
var request=new XMLHttpRequest();
//step 2:create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//push a api from client to server
request.send();
//step 4:once data successfully recieved from server
request.onload=function(){
    //conversion string to array of JSON object
    var data=JSON.parse(request.response);
    var res=data.filter((ele)=>ele.population<100000);
    console.log(res);
 
    
}