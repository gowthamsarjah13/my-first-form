let form = document.querySelector(".form-head");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fn = document.querySelector('[placeholder="Enter the first name"]');
  let fn1 = fn.value;
//   let fnData = document.querySelector(".tdata-fn");
//   fnData.append(fn1);

  let ln = document.querySelector('[placeholder="Enter the last name"]');
  let ln1 = ln.value;
//   let lnData = document.querySelector(".tdata-ln");
//   lnData.append(ln1);

  let adrs = document.querySelector(
    '[placeholder="Enter the complete address"]'
  );
  let adrs1 = adrs.value;
//   let adrsData = document.querySelector(".tdata-addrs");
//   adrsData.append(adrs1);

  let pincode = document.querySelector('[placeholder="Enter the pin code"]');
  let pincode1 = pincode.value;
//   let pincodeData = document.querySelector(".tdata-pincode");
//   pincodeData.append(pincode1);

  let gn = document.querySelector('[placeholder="Enter the gender"]');
  let gn1 = gn.value;
//   let gnData = document.querySelector(".tdata-gender");
//   gnData.append(gn1);

  let checkboxes = document.getElementsByName("food-iteams");
  let arr = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      arr.push(checkboxes[i].value);
    }
  }
//   let food1 = document.querySelector(".tdata-food");
//   food1.append(arr);

  let state = document.querySelector('[placeholder="Enter the state name"]');
  let state1 = state.value;
//   let stateData = document.querySelector(".tdata-state");
//   stateData.append(state1);

  let country = document.querySelector(
    '[placeholder="Enter the country name"]'
  );
  let country1 = country.value;
//   let countryData = document.querySelector(".tdata-country");
//   countryData.append(country1);

  let template = `
  
  <tr>

     <td>${fn1}</td>
     <td>${ln1}</td>
     <td>${adrs1}</td>
     <td>${pincode1}</td>
     <td>${gn1}</td>
     <td>${arr}</td>
     <td>${state1}</td>
     <td>${country1}</td>
   
  </tr>

`
let newrow = document.querySelector('.table-striped');
newrow.innerHTML += template;

fn.value = " ";
ln.value = " ";
adrs.value = " ";
pincode.value = " ";
gn.value = " ";
arr.value = " ";
state.value = " ";
country.value = " ";

});
