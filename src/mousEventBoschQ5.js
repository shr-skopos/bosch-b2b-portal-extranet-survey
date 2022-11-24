export default function mousEventBoschQ5() {
    let choiceRow;
    choiceRow = document.querySelectorAll(".CarouselCardTextContainer .CarouselCardText");

    let imageSelectionControl = (img, elemPos)=>{
        switch (elemPos) {
            case 2:
              img.src = "https://boschpt.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cBnmQFOkKByYGH4";
              img.title = "Product Information";
              break;
            case 3:
              img.src = "https://boschpt.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5BWFomEelr72hUy";
              img.title = "Order Placement";
              break;
            case 7:
              img.src = "https://boschpt.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1RlRZ21KdulW4K2";
              img.title = "Promotions2";
              break;
            case 9:
              img.src = "https://boschpt.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9ttwNZQw7wZXCke";
              img.title = "B2Blog";
              img.classList.remove('q5-img-top');
              img.classList.add('q5-img-bottom');
              break;
            case 10:
              img.src = "https://boschpt.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eLKOW5vR2SA3vlY";
              img.title = "Downloads Documents";
              img.classList.remove('q5-img-top');
              img.classList.add('q5-img-bottom');
              break;
          
          }
    }

    const createImages = (elem) => {
        let elemPosition = Number(elem.id.split("~").slice(2).shift());
        let img = document.createElement("img");
        img.className = "q5-img-top";
        imageSelectionControl(img, elemPosition);

        elem.addEventListener("mouseout", () => {
            img.classList.remove('show');
            img.classList.add('hide');
        })
        if(elemPosition){
          choiceRow[elemPosition].insertBefore(img, choiceRow[elemPosition][elemPosition]);

        }
    }

    for (let index = 0; index <choiceRow.length; index++) {
        choiceRow[index].addEventListener("mousemove", function (e) {
            createImages(this)
        })
    }
}