console.log("Sveiki no Emīla!");

let skaitlis = 1;


function izvadaSkaitli() {
    if (skaitlis <= 10) {
        console.log(skaitlis); 
        skaitlis++; 
    } else {
        console.log("Visi skaitļi no 1 līdz 10 ir izvadīti!"); 
    }
}


document.getElementById('klikšķināt').addEventListener('click', izvadaSkaitli);

Element.addEventListener("click", myFunction);


function myFunction(){
    alert ()
}