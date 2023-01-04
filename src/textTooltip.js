export default function textTooltip() {
    let tooltip;

    const QUESTIONTEXT = document.querySelector("#QID25 .QuestionText");
    const QUESTIONTEXTCHILD2 = QUESTIONTEXT.children[2];
    const QUESTIONTEXTCHILD3 = QUESTIONTEXT.children[3];
console.log(window.innerWidth)
    QUESTIONTEXTCHILD3.remove();

    const createQuesttionButton = () => {
        let questionTextContent = QUESTIONTEXTCHILD2.firstChild.textContent;
        QUESTIONTEXTCHILD2.firstChild.remove();

        let questionButton = createEl("button", questionTextContent);
        questionButton.classList.add("questionButton");
        questionButton.setAttribute("type", "button");
        QUESTIONTEXTCHILD2.appendChild(questionButton);
    }
    createQuesttionButton();
    
    

    // desktop
    QUESTIONTEXTCHILD2.addEventListener('mousemove', () => { showTooltip(QUESTIONTEXTCHILD3.textContent, "desktop") });
    QUESTIONTEXTCHILD2.addEventListener('mouseout', () => { hideTooltip() });
     // mobile
    QUESTIONTEXTCHILD2.addEventListener('click', () => { showTooltip(QUESTIONTEXTCHILD3.textContent, "mobile") });
   

    const showTooltip = (title, device) => {
        const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

        if (isMobile && device === "desktop") return;
        if (!isMobile && device === "mobile") return;

        tooltip = document.getElementById("skopos-tooltip");

        if (!tooltip) {
            // build tooltip
            tooltip = document.createElement("div");
            tooltip.id = "skopos-tooltip";
            tooltip.style.backgroundColor = "white";

            tooltip.style.boxShadow = "1px 1px 20px 2px grey";
            tooltip.style.padding = "20px";
            tooltip.style.position = "absolute";

            const tooltipHeader = document.createElement('div');
            tooltipHeader.style.display = "flex";
            tooltipHeader.style.justifyContent = "space-between";

            const tooltipTitle = document.createElement("h4");
            tooltipTitle.style.fontFamily = '"Helvetica Neue",Arial,sans-serif'
            tooltipTitle.style.margin = "1em 0";
            tooltipTitle.textContent = title;
            tooltipHeader.appendChild(tooltipTitle);

            const body = document.querySelector("body");

            // position tooltip
            if (device === "desktop") {
                const mousePositionX = window.event.clientX;
                const mousePositionY = window.event.clientY;

                tooltip.style.left = mousePositionX + 40 + "px";
                tooltip.style.top = mousePositionY - 200 + "px";
                tooltip.style.maxWidth = "500px";
                
            } else if (device === "mobile") {
                tooltip.style.marginTop = "20px";
                tooltip.style.left = "0px";
                tooltip.style.top = "0px";

                const closeIcon = document.createElement('div');
                closeIcon.style.fontSize = "40px";
                closeIcon.style.fontWeight = "bold";
                closeIcon.style.cursor = "pointer";
                closeIcon.innerHTML = "&times;"

                closeIcon.addEventListener('click', () => { hideTooltip() });

                tooltipHeader.appendChild(closeIcon);
            }

            tooltip.appendChild(tooltipHeader);
            body.appendChild(tooltip);
        }

    };

    // helper functions
    const hideTooltip = () => {
        tooltip = document.getElementById("skopos-tooltip");
        if (tooltip) {
            const body = document.querySelector("body");
            body.removeChild(tooltip);
        }
    };
    function createEl(tag, txt) {
        let el = document.createElement(tag);
        if (txt) {
            txt = document.createTextNode(txt);
            el.appendChild(txt);
        }
        return el;
    }


}

// P_1672761558925


// #Page .Skin #SkinContent      #Questions .QuestionOuter 

// + #QID22   +QID25

// #desktop-container
// #mobile-container


// .QuestionBody
