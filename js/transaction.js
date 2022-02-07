let depositBtn = document.getElementById('deposit-btn');
let withdrawBtn = document.getElementById('withdraw-btn');

//event listener for deposite
depositBtn.addEventListener('click', function(e){
    e.preventDefault();
    let inputDeposite = document.getElementById('deposit-amt');
    let depositCount = document.getElementById('curr-deposit');
    let balanceCount = document.getElementById('total-balance').innerText;
    let depoNewAmount = inputDeposite.value;
    let depoPreAmount = depositCount.innerText;

    if(inputDeposite.value ==''){
        alert('Please put some value to add');
    }
    else{
        let totalDepo = parseInt(depoNewAmount) + parseInt(depoPreAmount);
        depositCount.innerText = totalDepo;
        inputDeposite.value = '';
        let totalBalance = parseInt(balanceCount) + parseInt(depoNewAmount);
        
        document.getElementById('total-balance').innerText = totalBalance;
    }
    
    // console.log('deposite btn click');
    // console.log(depositCount.innerHTML);
    // console.log(balanceCount);
})

withdrawBtn.addEventListener('click',function(e){
    e.preventDefault();
    let inputWithdraw = document.getElementById('withdraw-amt');
    let withdrawCount = document.getElementById('curr-withdraw').innerText;

    let withdrawAmount = inputWithdraw.value;
    let balanceCount = document.getElementById('total-balance').innerText;
    let balaceDeduct = parseInt(balanceCount) - parseInt(withdrawAmount);

    if(balaceDeduct > 0){
        document.getElementById('total-balance').innerText = balaceDeduct;
        let addWithdraw = parseInt(withdrawCount) + parseInt(withdrawAmount);
        document.getElementById('curr-withdraw').innerText = addWithdraw;
    }
    else{
        alert("Insufficient Balance!!!!");
    }   
    inputWithdraw.value = '';
   //add the deducted amount into withdrawn
})

//check storage 
