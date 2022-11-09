export default function mousEventBosch() {
    let choiceRow;
    choiceRow = document.querySelectorAll("tbody tr .c1");

    for (let index = 0; index < document.querySelectorAll(".ChoiceRow .table-cell span").length; index++) {
        choiceRow[index].addEventListener("mousemove", function (e) {
            console.log(this)
        })
    }
}