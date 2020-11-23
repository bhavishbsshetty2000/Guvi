//                                   *********************                 Html file                       *********************
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Countries in Asia</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>



//                                   *********************                 JS file                       *********************
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.responseText);
    //Filter countries in Asia
    var Asian_countries=data.filter(item=>{
        if(item.region==="Asia")
        {
            console.log( item.name);
        }
        })
    
}
