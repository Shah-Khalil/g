const text = document.querySelectorAll('.text')
const question = document.querySelector('.question')
const questionArray = ['Bunlardan hansı ətyeyən bitkidir?']
question.innerHTML = questionArray
const answerArray = {
    One:[ 'Milçəkqapan', 'Qızılgül','Palıd' ,'Pambıq'],
    Two:[ 'Yonca', 'Şehçiçəyi','Zanbaq' ,'Çaytikanı'],
    Three:[ 'Çobanyastığı', 'Qovaq ', 'Meymun fincanı' ,'Dəvədabanı'],
}


const questions =   Math.floor(Math.random() * 3);
console.log()
let answer = 0
let trueAnswer;
for (let i = 0; i < text.length; i++) {
    console.log(text[i])
    if(0 == questions){
        text[0].innerHTML = answerArray.One[0]
        text[1].innerHTML = answerArray.One[1]
        text[2].innerHTML = answerArray.One[2]
        text[3].innerHTML = answerArray.One[3]
        trueAnswer = "Milçəkqapan" 
    }else if(1 == questions){
        text[0].innerHTML = answerArray.Two[0]
        text[1].innerHTML = answerArray.Two[1]
        text[2].innerHTML = answerArray.Two[2]
        text[3].innerHTML = answerArray.Two[3]
        trueAnswer = "Şehçiçəyi" 
    }else if(2 == questions){
        text[0].innerHTML = answerArray.Three[0]
        text[1].innerHTML = answerArray.Three[1]
        text[2].innerHTML = answerArray.Three[2]
        text[3].innerHTML = answerArray.Three[3]
        trueAnswer = 'Meymun fincanı'
    }
}
$(document).ready(function () {
    $(".quiz-option").click(function () {
        let value = $(this).children("label").text()
        console.log(value);
        if (value == trueAnswer) {
            console.log(value)
            $(".gamelink").fadeIn();
            $(this).css("background-color", "green");
        } else {
            console.log(false)
            $(".gamelink").fadeOut();
        }
    });
});