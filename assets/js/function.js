
//setalert
let setAlert= (msg, type = 'danger')=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button> </p>`
 }
 
 //Email check
 const checkmail = (mail)=>{
     let pattern = /^[a-z0-9_]{1,}@[a-z0-9]{1,}\.[a-z]{1,}$/
     return pattern.test(mail)
 }
 
 //Phone number check bd
 const checkcell = (cell)=>{
     let pattern = /^(\+8801|8801|01){1}[3-9]{1}[0-9]{8}$/
     return pattern.test(cell)
 }
 
 //age check
 const checkage = (age)=>{
     let pattern = /^[0-9]{2}$/;
     return pattern.test(age);
 }
 
 
 
 // set data localstorage
 const createLSData = (key,value)=>{
     let data = [];
     if(localStorage.getItem(key)){
         data = JSON.parse(localStorage.getItem(key));
     }
     data.push(value)
     localStorage.setItem(key,JSON.stringify(data))
 }
 
 
 
 // get data from localstorage
 const readLSData  = (key) => {
 
     if( localStorage.getItem(key) ){
         return JSON.parse(localStorage.getItem(key));
     } else {
         return false;
     }
 
 }
 
 // Update LS data 
 const updateLSData = (key,array)=>{
     localStorage.setItem(key,JSON.stringify(array));
 }
 

 // Time Counter
 const futureTimeCountdown = (date,time,counter,interval = null,alerm=null)=>{

    //get time
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);
    let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));


    // get val form time 
    let total_sec = Math.floor(order_time / 1000);
    let total_min = Math.floor(total_sec / 60) ;
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    // final date & time
    let hour = total_hour - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - ( hour * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - ( hour * 60 * 60) - ( min * 60);

    if(total_sec <= 0){
        clearInterval(interval);
        counter.style.color="red";
        alerm.play()
    }
    counter.innerHTML= `<h1>${total_day} Days : ${hour} Hr : ${min} Min : ${sec} Sec</h1>`


 }

 // counter percentais

 const counterPer=(start,end)=>{

    let time_dif = end -start;
    let time_change = end - Date.now();
    return Math.floor(( 100 * time_change)/time_dif);

 }