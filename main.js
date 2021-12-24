any_word_array = [];

function Changing()
{
    var word_1 = document.getElementById("enter_any_word_1").value;
    var word_2 = document.getElementById("enter_any_word_2").value;
    var word_3 = document.getElementById("enter_any_word_3").value;
    var word_4 = document.getElementById("enter_any_word_4").value;

    any_word_array.push(word_1);
    any_word_array.push(word_2);
    any_word_array.push(word_3);
    any_word_array.push(word_4);

    document.getElementById("display_name").innerHTML = any_word_array;
    document.getElementById("Button_Submit").style.display = "none";
    document.getElementById("Button_Sort").style.display = "inline-block";
}

function Sorting()
{
    any_word_array.sort();
    console.log(any_word_array);
    document.getElementById("display_name").innerHTML = any_word_array;
}