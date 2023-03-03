let count = 0;
const paragraph = document.getElementById("demo");
const btn_decrement = document.getElementById("btn-1");
const btn_reset = document.getElementById("btn-2");
const btn_increment = document.getElementById("btn-3");

btn_decrement.addEventListener('click', count_dec);
btn_reset.addEventListener('click', count_reset);
btn_increment.addEventListener('click', count_inc);

function count_dec(){
    --count;
    Validation(count)
    return (paragraph.innerText = count);
}

function count_reset(){
    count = 0;
    Validation(count)
    return (paragraph.innerText = count);
}

function count_inc(){
    ++count;
    Validation(count)
    return (paragraph.innerText = count);
}

function Validation(count){
    paragraph.innerText = count;
    if (count < 0) {
        paragraph.style.color = "red";
    } else if (count > 0) {
        paragraph.style.color = "green";
    } else {
        paragraph.style.color = "black";
    }
}