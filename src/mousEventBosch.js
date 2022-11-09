export default function mousEventBosch() {
    let choiceRow;
    choiceRow = document.querySelectorAll("tbody tr .c1");

    const choisImages = (elem) => {
        let elemPosition = Number(elem.id.split("~").slice(2).join());
        let img = document.createElement("img");
        img.className = "img-top";
        console.log(elemPosition);

        elem.addEventListener("mouseout", () => {
            console.log("out");
        })
        choiceRow[elemPosition].insertBefore(img, choiceRow[elemPosition][elemPosition]);
    }

    for (let index = 0; index < document.querySelectorAll(".ChoiceRow .table-cell span").length; index++) {
        choiceRow[index].addEventListener("mousemove", function (e) {
            choisImages(this)
        })
    }
}