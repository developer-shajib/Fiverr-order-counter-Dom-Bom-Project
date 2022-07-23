// get data 
const fiverr_form = document.getElementById('fiverr');
const counter = document.querySelector('.counter');
const msg = document.querySelector('.msg');
const a1 = document.querySelector('.a1');
const stop_alerm = document.getElementById('stop_alerm');
const bar = document.querySelector('.bar');
const perval = document.getElementById('pervla');

let count;
//submit fiver form
fiverr_form.onsubmit=(e)=>{
    e.preventDefault();
  let form_data = new FormData(e.target);
    let {date,time} = Object.fromEntries(form_data.entries());

    if(!date || !time){
        msg.innerHTML= setAlert('Select Date and Time')
    }

    else{

    clearInterval(count);

    //get time
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

    // show time on display
    count = setInterval(()=>{
      //time setup
    futureTimeCountdown(date,time,counter,count,a1)
    //rang create
    let per = counterPer(start_time,end_time);
      if(per>=0 && per<25){
        bar.style.backgroundColor = 'red';
      }else if( per>=25 && per<50){
        bar.style.backgroundColor = 'yellow';
      }
      else if( per>=50 && per<=75){
        bar.style.backgroundColor = 'blue';
      }
      else if( per>=75 && per<=100){
        bar.style.backgroundColor = 'green';
      }

    per && (bar.style.display = 'block');
    per && (bar.style.width =` ${100 - per}%`);

    perval.innerHTML=`${100 - per}%`

    },1000)

    }

}

// stop alerm
stop_alerm.onclick=(e)=>{
  e.preventDefault()
  a1.pause();
}