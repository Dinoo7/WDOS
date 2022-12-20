//Global variables
let Availablecost = 0;
let Finalcost = 0;
let Additionalcost = 0;
let Overallcost = 0;
let tsla = 0;
let tslc = 0;
let tfa = 0;
let tfc = 0;
let tin = 0;
let tex = 0;

//Calling the DOM function
const SlAdult = document.getElementById("slAD");
const SlChild = document.getElementById("slCH");
const ForeignAdult = document.getElementById("foAD");
const ForeignChild = document.getElementById("foCH");
const Infant = document.getElementById("iNf");
const Duration = document.getElementById("duRation");
const Txtcost = document.getElementById("cost");
const ArrivalDate = document.getElementById("date");
const FullName = document.getElementById("fullName");
const MobileNumber = document.getElementById("mobNum");
const EmailAddress = document.getElementById("eMail");
const ConfirmEmailAddress = document.getElementById("conEmail");
const Gender = document.getElementById("gender");
const AddOrderButton = document.getElementById("addOrder");
const PlaceOrderButton = document.getElementById("placeOrder");
const IncrementButton = document.getElementById("increment");
const DecrementButton = document.getElementById("decrement");
const IncrementButton1 = document.getElementById("increment1");
const DecrementButton1 = document.getElementById("decrement1");
const IncrementButton2 = document.getElementById("increment2");
const DecrementButton2 = document.getElementById("decrement2");
const IncrementButton3 = document.getElementById("increment3");
const DecrementButton3 = document.getElementById("decrement3");
const IncrementButton4 = document.getElementById("increment4");
const DecrementButton4 = document.getElementById("decrement4");
const CurrentOrder = document.getElementById("currentOrder");
const OverallOrder = document.getElementById("overallOrder");
const TotalCost = document.getElementById("totalCost");
const AddFavoriteButton = document.getElementById("addFav");
const OrderFavouriteButton = document.getElementById("orderFav");
const LoyaltyButton = document.getElementById("loyalty");
const txtloy = document.getElementById("outloy");


//Increment and Decrement of No. of people
IncrementButton.addEventListener("click",SlaI);
function SlaI(){
    let value = SlAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    SlAdult.setAttribute("value", a);
    Availablecost += 1200 ;
    Txtcost.innerText = `LKR. ${Availablecost}`;
}

DecrementButton.addEventListener("click",SlaD);
function SlaD(){
    let value = SlAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)SlAdult.setAttribute("value", a);
    Availablecost -= 1200 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

IncrementButton1.addEventListener("click",SlbI);
function SlbI(){
    let value = SlChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    SlChild.setAttribute("value", a);
    Availablecost += 700 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

DecrementButton1.addEventListener("click",SlbD);
function SlbD(){
    let value = SlChild.getAttribute("value");
    let newValue = parseInt(value)
    let a = newValue - 1;
    if(a >=0)SlChild.setAttribute("value", a);
    Availablecost -= 700 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

IncrementButton2.addEventListener("click",foaI);
function foaI(){
    let value = ForeignAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    ForeignAdult.setAttribute("value", a);
    Availablecost += 5500 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

DecrementButton2.addEventListener("click",foaD);
function foaD(){
    let value = ForeignAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)ForeignAdult.setAttribute("value", a);
    Availablecost -= 5500 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

IncrementButton3.addEventListener("click",fobI);
function fobI(){
    let value = ForeignChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    ForeignChild.setAttribute("value", a);
    Availablecost += 2700 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

DecrementButton3.addEventListener("click",fobD);
function fobD(){
    let value = ForeignChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)ForeignChild.setAttribute("value", a);
    Availablecost -= 2700 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

IncrementButton4.addEventListener("click",iNaI);
function iNaI(){
    let value = Infant.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    Infant.setAttribute("value", a);
    Availablecost += 0 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}

DecrementButton4.addEventListener("click",iNaD);
function iNaD(){
    let value = Infant.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)Infant.setAttribute("value", a);
    Availablecost -= 0 ;
    Txtcost.innerText = `LKR. ${Availablecost}`
}


//Change of Duration
Duration.addEventListener("change",Addval);
function Addval(){
    let a = Duration.value;
    let SlAV = parseInt(SlAdult.value);
    let SlCV = parseInt(SlChild.value);
    let foAV = parseInt(ForeignAdult.value);
    let foCV = parseInt(ForeignChild.value);
    if(a == "Half Day"){
        Additionalcost = (SlAV*350)+(SlCV*350)+(foAV*450)+(foCV*450);
        Finalcost = Availablecost + Additionalcost;
        Txtcost.innerText = `LKR. ${Finalcost}`;
    }else if(a == "Full Day"){
        Additionalcost = (SlAV*600)+(SlCV*600)+(foAV*800)+(foCV*800);
        Finalcost = Availablecost + Additionalcost;
        Txtcost.innerText = `LKR. ${Finalcost}`;
    }else Txtcost.innerText = `LKR. ${Availablecost}`;
}


//Showing order
AddOrderButton.addEventListener("click",AddOdrBtn);
function AddOdrBtn(){
    let fullName = FullName.value;
    let SlAV = parseInt(SlAdult.value);
    let SlCV = parseInt(SlChild.value);
    let foAV = parseInt(ForeignAdult.value);
    let foCV = parseInt(ForeignChild.value);
    let iNfV = parseInt(Infant.value);
    let totalEx = (SlAV+SlCV+foAV+foCV+iNfV);
    let Email = EmailAddress.value;
    let mobileNumber = MobileNumber.value;
    let total = Txtcost.innerText;
    let arda = date.value;
    Overallcost += (Availablecost + Additionalcost);
    tsla += SlAV;
    tslc += SlCV;
    tfa += foAV;
    tfc += foCV;
    tin += iNfV;
    tex += totalEx
    
    OverallOrder.innerHTML = `
    <div id= "orderDe">
    <p>
        Booking Name: ${fullName} <br>
        Number of People: ${tex} <br>
        SL Adult: ${tsla} <br>
        SL Child: ${tslc} <br>
        Foreign Adult: ${tfa} <br>
        Foreign Child: ${tfc} <br>
        Infant: ${tin} <br>
        Total: ${total} <br>
        Arrival Date: ${arda} <br>
        Email: ${Email} <br>
        Contact No: ${mobileNumber} 
    </p>
    </div>
    `

    TotalCost.innerText = `LKR. ${Overallcost}`;
    reset(); 
}

function reset(){
    SlAdult.setAttribute("value", 0);
    SlChild.setAttribute("value", 0);
    ForeignAdult.setAttribute("value", 0);
    ForeignChild.setAttribute("value", 0);
    Infant.setAttribute("value", 0);
    Txtcost.innerText = `LKR. 0`;
    Availablecost = 0;
    Finalcost = 0;
    Additionalcost = 0;
}



AddFavoriteButton.addEventListener("click", addFav);
function addFav(){
    delt();
    let slAD = SlAdult.getAttribute("value");
    let slCH = SlChild.getAttribute("value");
    let foAD = ForeignAdult.getAttribute("value");
    let foCH = ForeignChild.getAttribute("value");
    let iNf = Infant.getAttribute("value");

    localStorage.setItem("Sl Adult", slAD)
    localStorage.setItem("Sl Child", slCH)
    localStorage.setItem("Foreign Adult", foAD)
    localStorage.setItem("Foreign Child", foCH)
    localStorage.setItem("Infant", iNf)
}

function delt(){
    localStorage.clear
}

OrderFavouriteButton.addEventListener("click", orderFav);
function orderFav(){
    let slAD = localStorage.getItem("Sl Adult")
    let slCH = localStorage.getItem("Sl Child");
    let foAD = localStorage.getItem("Foreign Adult");
    let foCH = localStorage.getItem("Foreign Child");
    let iNf = localStorage.getItem("Infant");
    let slAD1 = parseInt(slAD);
    let slCH1 = parseInt(slCH);
    let foAD1 = parseInt(foAD);
    let foCH1 = parseInt(foCH);
    let iNf1 = parseInt(iNf);

    Availablecost = (slAD1*1200)+(slCH1*700)+(foAD1*5500)+(foCH1*2700)+(iNf1*0);

    SlAdult.setAttribute("value", slAD);
    SlChild.setAttribute("value", slCH);
    ForeignAdult.setAttribute("value", foAD);
    ForeignChild.setAttribute("value", foCH);
    Infant.setAttribute("value", iNf);
    Txtcost.innerText = `LKR. ${Availablecost}`
}

PlaceOrderButton.addEventListener("click", plaOrd);
function plaOrd(){
    alert("Thank you for Booking! \nHope to see you again!")
    FullName.value = "";
    ArrivalDate.value = "";
    MobileNumber.value = "";
    EmailAddress.value = "";
    ConfirmEmailAddress.value = "";
    SlAdult.value = 0;
    SlChild.value = 0;
    ForeignAdult.value = 0;
    ForeignChild.value = 0;
    Availablecost = 0;
    Finalcost = 0;
    Additionalcost = 0;
    Txtcost.innerText = "0.00"
    OverallOrder.innerText = ""
    TotalCost.innerText = "0.00"
}

LoyaltyButton.addEventListener("click", addLoy);
function addLoy(){
    
    if(tex > 3){
       let loyaltypoints = tex*15
       txtloy.innerText = `Loyalty Earned: ${loyaltypoints} points`
    }else txtloy.innerText= `Loyalty Earned: 0 points`
}