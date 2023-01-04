export default function textTooltip(items) {
    let tooltip;

    items.forEach((item) => {
        const element = document.getElementById(item.id);
        const content = document.getElementById(item.id + '-content');

        if (content) {
            const html = content.innerHTML;

            // desktop
            element.addEventListener('mousemove', () => {showTooltip(html, "desktop")});
            element.addEventListener('mouseout', () => {hideTooltip()});
        
            // mobile
            element.addEventListener('click', () => {showTooltip(html, "mobile")});
            
            content.remove();
        }
      });

    const showTooltip = (html, device) => {
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

            const tooltipBody = document.createElement('div');
            tooltipBody.innerHTML = html;
            
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
            tooltip.appendChild(tooltipBody);
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
