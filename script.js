const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount')
const movie = document.getElementById('movie');

const seat = document.querySelectorAll('.seat:not(seat-reserve)');


container.addEventListener('click',function(e){
   if(e.target.classList.contains('seat') && !e.target.classList.contains('seat-reserve')){
    
    e.target.classList.toggle('seat-add');
    calculet();

     

   }
});

movie.addEventListener('change',function(e){

    calculet();
});



function calculet(){

    
    const select =  container.querySelectorAll('.seat.seat-add');
    const selectSeatArr = [];
    const searArr = [];
   

    select.forEach(function(seat){
        selectSeatArr.push(seat);
    });


    seat.forEach(function(seat){
        searArr.push(seat);
    });


    let selectSeatİndexs = selectSeatArr.map(function(seat){
        return searArr.indexOf(seat);

    })

    console.log(selectSeatİndexs);





    let selectedSeatcount = select.length;
     
    amount.innerText = selectedSeatcount * movie.value;
    count.innerText = selectedSeatcount;


    saveToLocalStorage(selectSeatİndexs);
      

}


function saveToLocalStorage(index){
    localStorage.setItem('select',JSON.stringify(index));
}