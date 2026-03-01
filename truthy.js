let data;
data = 0;
data = '';
data = '0' // truthy
data = ' '; // truthy
data = false
data = true
data = null;
data = undefined;
data = {}
data = []




if(data){
    console.log('Truthy')
}
else{
    console.log('Falsy')
}



let price = 0;
if(!!price){
    console.log('Price is falsy')
}