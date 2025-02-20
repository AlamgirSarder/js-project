

const single_btn = document.querySelector(".single_btn");
single_btn.addEventListener("click",()=>{

    const ss_input = document.querySelector(".ss_input");
    ss_input.classList.add("ss_input_show");


    const dd_input = document.querySelector(".dd_input");
    dd_input.classList.remove("dd_input_show");


  const tables = document.querySelector(".table");
 tables.innerHTML = "";

});


const double_btn = document.querySelector(".double_btn");
double_btn.addEventListener("click",()=>{

    const dd_input = document.querySelector(".dd_input");
    dd_input.classList.add("dd_input_show");


    const ss_input = document.querySelector(".ss_input");
    ss_input.classList.remove("ss_input_show");

    
  const tables = document.querySelector(".table");
  tables.innerHTML = "";


});




const s_btn = document.querySelector(".s_btn");

s_btn.addEventListener("click", () => {
    const s_input = parseInt(document.querySelector(".s_input").value);
    
if(s_input<0){
    alert("Please enter positive number!");
    return;
}


    if (isNaN(s_input)) {
        alert("Please enter a valid number!");
        return;
    }



    
    const table = document.querySelector(".table");

    const ul_list = document.querySelector(".ul_list");
    
    if(ul_list){
        ul_list.remove();
    }

    const divv = document.createElement("div");
    divv.classList="ul_list";
    table.appendChild(divv);

    const ul = document.createElement("ul");
   
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `${s_input} x ${i} = ${s_input * i}`;
        ul.appendChild(li);
    }

    divv.appendChild(ul); 
});





const d_btn = document.querySelector(".d_btn");

d_btn.addEventListener("click", () => {
  

    const d_input1 = parseInt(document.querySelector(".d_input1").value);
    const d_input2 = parseInt(document.querySelector(".d_input2").value);

    if (isNaN(d_input1) || isNaN(d_input2)) {
        alert("Please enter valid numbers!");
        return;
    }

    if ((d_input1<0) || (d_input2<0)) {
        alert("Please enter positive numbers!");
        return;
    }
 


    const table = document.querySelector(".table");

    table.innerHTML = "";

    for (let i = d_input1; i <= d_input2; i++) {
        const divv = document.createElement("div");
        divv.classList.add("ul_list");

        const ul = document.createElement("ul");

        for (let j = 1; j <= 10; j++) {
            const li = document.createElement("li");
            li.textContent = `${i} x ${j} = ${i * j}`;
            ul.appendChild(li);
        }

        divv.appendChild(ul);
        table.appendChild(divv);
    }
});
