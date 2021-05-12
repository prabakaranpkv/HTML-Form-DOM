let rfd = (name)=>{
    let food = document.createElement('div');
    food.className = 'form-group form-check col-md-2';
        let label = document.createElement('label');
        label.setAttribute('for', name);
        label.innerHTML = name;
        label.className = 'form-check-label';
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', name);
        input.setAttribute('name', 'food');
        input.setAttribute('value', name);
        input.className = 'form-check-input food'
        food.append(input, label);
        return food;
}
let mhf = document.getElementById('mhf');
mhf.className = 'container';

let form = document.createElement('form');
form.className = 'row justify-content-around';
form.setAttribute('method', 'POST');
mhf.appendChild(form);
     
    let firstName = document.createElement('input');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.className = 'col-md-12 form-control my-1 firstName';

    let lastName = document.createElement('input');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.className = 'col-md-12 form-control my-1 lastName';

    let address = document.createElement('input');
    address.setAttribute('placeholder', 'Address');
    address.className = 'col-md-12 form-control my-1 address';

    let pincode = document.createElement('input');
    pincode.setAttribute('placeholder', 'Pincode');
    pincode.className = 'col-md-12 form-control my-1 pincode';

    let foods = document.createElement('div');
    foods.className = 'row col-12 mt-3 justify-content';
        let Veg = rfd('Veg');
        let Non_Veg = rfd('Non_Veg');
        let Chinese = rfd('Chinese');
        let Italian = rfd('Italian');
        let Indian = rfd('Indian');
    foods.append(Veg, Non_Veg, Chinese, Italian, Indian);
    
    let gend = document.createElement('div');
    gend.className = 'col-12 row my-2 justify-content-left';
        let maleLabel = document.createElement('label');
        maleLabel.setAttribute('for', 'male');
        maleLabel.innerHTML = 'Male';
        maleLabel.className = 'form-check-label col-2';

        let maleRadio = document.createElement('input');
        maleRadio.setAttribute('type', 'radio');
        maleRadio.setAttribute('id', 'male');
        maleRadio.setAttribute('name', 'gender');
        maleRadio.setAttribute('value', 'male');
        maleRadio.className = 'mx-1'

        let femaleLabel = document.createElement('label');
        femaleLabel.setAttribute('for', 'female');
        femaleLabel.innerHTML = 'Female';
        femaleLabel.className = 'form-check-label';
        let femaleRadio = document.createElement('input');
        femaleRadio.setAttribute('type', 'radio');
        femaleRadio.setAttribute('id', 'female');
        femaleRadio.setAttribute('name', 'gender');
        femaleRadio.setAttribute('value', 'female');
        femaleRadio.className = 'mx-1';

    gend.append(maleRadio,maleLabel,femaleRadio, femaleLabel);

    let state = document.createElement('input');
    state.setAttribute('placeholder', 'State');
    state.className = 'col-md-12 form-control my-1 state';

    let country = document.createElement('input');
    country.setAttribute('placeholder', 'Country');
    country.className = 'col-md-12 form-control my-1 country';

    
    let submitButton = document.createElement('button');
    submitButton.className = 'btn btn-secondary py-2 px-5 btn-mg mt-5 col-md-2';
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'submit';

form.append(firstName, lastName, address, pincode, foods,gend, state, country, submitButton);

let table = document.createElement('table');
table.className = 'table table-secondary my-4';
mhf.appendChild(table);

    let hrw = document.createElement('tr');
        let fnh = document.createElement('th');
        fnh.innerHTML = 'First Name';

        let lnh = document.createElement('th');
        lnh.innerHTML = 'Last Name';

        let addrh = document.createElement('th');
        addrh.innerHTML = 'Address';

        let pinch = document.createElement('th');
        pinch.innerHTML = 'Pincode';

        let foodh = document.createElement('th');
        foodh.innerHTML = 'Foods';
        
        let genh = document.createElement('th');
        genh.innerHTML = 'Gender';

        let sth = document.createElement('th');
        sth.innerHTML = 'State';

        let cntryh = document.createElement('th');
        cntryh.innerHTML = 'Country';

    hrw.append(fnh, lnh, addrh, pinch, foodh, genh, sth, cntryh);

table.appendChild(hrw);

function getTdElement(data){ 
    let td = document.createElement('td');
    td.innerHTML = data;
    return td;
}
function getFoodList(foods){
    let ul = document.createElement('ul');
    foods.forEach((food)=>{
        let li = document.createElement('li');
        li.innerHTML = food.value;
        ul.appendChild(li);
    })
    return ul;
}
function getTrElement(fn, ln, ad, pi, fo, ge, st, co){
    let tr = document.createElement('tr');
        tr.appendChild(getTdElement(fn));
        tr.appendChild(getTdElement(ln));
        tr.appendChild(getTdElement(ad));
        tr.appendChild(getTdElement(pi));
        tr.appendChild(getFoodList(fo));
        tr.appendChild(getTdElement(ge));
        tr.appendChild(getTdElement(st));
        tr.appendChild(getTdElement(co));
    return tr;
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let firstName = document.querySelector('.firstName').value;
    let lastName = document.querySelector('.lastName').value;
    let address = document.querySelector('.address').value;
    let pincode = document.querySelector('.pincode').value;
    let foods = document.querySelectorAll('input[name="food"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');
    let state = document.querySelector('.state').value;
    let country = document.querySelector('.country').value;

    if(foods.length < 2 || gender === null)
        alert('check food count is atleast 2 or check if you have checked your gender')
    else{
        let tr = getTrElement(firstName, lastName, address, pincode, foods, gender.value, state, country);
        table.appendChild(tr);
        form.reset();
    }
});