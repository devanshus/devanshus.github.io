 // TODO: Add code to check answers to questions
 document.addEventListener('DOMContentLoaded', function(){

    //When correct answer is clicked, change color to green
    let corrects = document.querySelectorAll('.correct');
    for(let i=0; i< corrects.length; i++){
        corrects[i].addEventListener('click', function(){
            corrects[i].style.backgroundColor = 'lightgreen';
            alert("Correct!");
        });
    }

    //When incorrect answer is clicked, change color to red
    let incorrects = document.querySelectorAll('.incorrect');
    for(let i=0; i< incorrects.length; i++){
        incorrects[i].addEventListener('click', function(){
            incorrects[i].style.backgroundColor = '#fad1d0';
            alert("Incorrect!");
        });
    }

    //when free response submission
    document.querySelector('#check').addEventListener('click', function(){
        let input = document.querySelector('input')
        if (input.value === 'Killua' ||input.value === 'killua') {
            input.style.backgroundColor = 'lightgreen';
            document.querySelector('#feedback3').innerHTML = 'Correct!';
        }
        else {
            input.style.backgroundColor = '#fad1d0';
            document.querySelector('#feedback3').innerHTML = 'Incorrect!';
        }
    });



});
