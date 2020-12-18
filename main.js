stud_array = [];

function submit() {
    display_array = [];
    for (var j = 1; j <= 4; j++) {
        var student = document.getElementById("name_of_the_student_" + j).value;
        console.log(student);
        stud_array.push(student)
    }
    console.log(stud_array);
    var len = stud_array.length;
    console.log(len);
    for (k = 0; k < len; k++) {
        display_array.push("<h4> NAME-" + stud_array[k] + "</h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_commas = display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    stud_array.sort();
    console.log(stud_array);
    var display_array_sort = [];
    var len = stud_array.length;
    console.log(len);
    for (k = 0; k < len; k++) {
        display_array_sort.push("<h4> NAME-" + stud_array[k] + "</h4>");
        console.log(display_array_sort);
    }
    console.log(display_array_sort);
    var remove_commas = display_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + stud_array + "</h1>";
}