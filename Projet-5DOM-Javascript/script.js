const div = document.querySelectorAll("div.grid,div.box1, div.box2, div.box3");

let button = document.getElementById("change");

let button2 = document.getElementById("reset");

let button3 = document.getElementById("reverse");

let clic = 0; 

const box1 = document.getElementById("box1");

const box2 = document.getElementById("box2");

const box3 = document.getElementById("box3");

button.addEventListener("click", function (){
    if (document.getElementById("box1").style.backgroundColor!=("red")) {
        document.getElementById("box1").style.backgroundColor="red"
    } else {
        document.getElementById("box1").style.backgroundColor="transparent"
    }
});

box2.addEventListener("mouseover", function (){
    if (document.getElementById("box2").style.backgroundColor!=("blue")) {
        document.getElementById("box2").style.backgroundColor="blue"
    }
});

box2.addEventListener("mouseout", function (){
    document.getElementById("box2").style.backgroundColor="green"
});


button2.addEventListener("click", function () {
    if (document.getElementById("box2").style.backgroundColor!=("green")) {
        document.getElementById("box2").style.backgroundColor="transparent"
    }
});

button2.addEventListener("dblclick", function () {
    document.getElementById("box2").style.backgroundColor="orange"
});

button3.addEventListener("click", function (){
    
    document.getElementById("texte-inverse").innerText = inverserTexte("Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae, officiis eum ipsum dolores repellendus amet porro mollitia? Quod accusamus minus nemo ea deserunt tenetur quia quibusdam debitis sed possimus.")

    function inverserTexte(texte) {
        return texte.split('').reverse().join('');
    }

    let isReversed = true;

    document.getElementById("reverse").addEventListener("click", function () {
        let texteElement = document.getElementById("texte-inverse");

        let texte = texteElement.innerText ;

        if (isReversed) {
            texteElement.innerText = inverserTexte(texte);
            isReversed = false;
        } else {
            texteElement.innerText = inverserTexte(texte);
            isReversed = true;
        }
    });

    function inverserTexte(texte) {
        return texte.split(' ').reverse().join(' ');
    }
    

    });