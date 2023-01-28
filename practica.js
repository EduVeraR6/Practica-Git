// // Función declarada
// function suma (a,b){
//     return a + b;
// }

// //invocacion de funcion 
// let resultado = suma(6,6);
// console.log(resultado);

// // Fuincion Flecha
// // const unaFuncion = () =>{
// //     console.log(1);
// // };

// unaFuncion();

// const suma = (num1 , num2) => {
//     num1 = 6 , num2 = 12;
//     console.log(num1+num2);
// };


// const lista = ['Aceite' ,'Arroz' , 'Leche' ,'Pan'];//array


// for(let i = lista.length-1 ; i>=0; i--){
//     console.log(lista[i]);
// }
// suma();

// const lista = document.querySelector('.lista-perros');
// const perros = ['Dalmata' , 'pitbull' , 'salchicha' , 'Chihuahua', 'Pastor Aleman'];

// perros.forEach(item=>{
//     const li = document.createElement('li');
//     li.textContent = item;
//     lista.appendChild(li);
// });

// const parrafo = document.querySelector('p');
// const boton = document.querySelector('button');

// let contador = 0;
// boton.addEventListener('click' , ()=>{
//     console.log("Click");
//     contador++;
//     parrafo.textContent = contador;
// })

// const parrafo = document.querySelector('p');
// const input = document.querySelector('input');

// input.addEventListener('change',(e) =>{
//     parrafo.textContent = e.target.value;
// })

// const bloque = document.querySelector('.bloque');

// bloque.addEventListener('mouseenter' , ()=>{
//    bloque.style.backgroundColor = 'red';
// });

// bloque.addEventListener('mouseleave',()=>{
//     bloque.style.backgroundColor ='blue';
// });

const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');

const empty = document.querySelector('.empty');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();//hace que no se recargue la pagina
    const text = input.value;


    if(text!= ''){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = "";
    
        empty.style.display ="none";
    }
    
});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className="btn-delete";

    deleteBtn.addEventListener('click' ,(e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items =document.querySelectorAll('li');

        if(items.length === 0){
            empty.style.display = "none";
        }
    })

    return deleteBtn;
}