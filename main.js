const stateSelect = document.getElementById('stateSelect');
const signUp = document.getElementById('signUp');

const states = ['Please select a state', 'Alabama', 'Alasksa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Gerogia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'NewMexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

states.forEach(x => {
    let opt = document.createElement('option');
    opt.innerHTML = x;
    stateSelect.appendChild(opt);
});

//signUp.addEventListener('click', e => {    
//    e.preventDefault();
//    var form = document.querySelector('form');
//    var data = new FormData(form);
//    var req = new XMLHttpRequest();
//    req.send(data);  
//    console.log('SUCCESS');
//});


