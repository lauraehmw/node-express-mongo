module.exports = (x,y,callback) =>{
    if(x <= 0 || y <= 0){
        setTimeout(() =>  /* Just for simulating processing time, for example, from a database */
            callback(new Error("Rectangle dimensions should be greater than zero. l = " 
            + x + " and b = "+y), null), 
            2000);
    
    }else{
        setTimeout(() =>  
            callback(null, 
            {                
                perimeter : () => (x,y) => (2*(x+y)),
                area : () => (x*y)
            }), 
            2000);      
    }
}

























