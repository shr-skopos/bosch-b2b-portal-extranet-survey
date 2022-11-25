export default function imageTooltip(items) {
  let tooltip;

  items.forEach((item) => {
    const element = document.getElementById(item.id).parentElement;

    // desktop
    element.addEventListener('mouseover', () => {showTooltip(item.imageURL, item.title, "desktop")});
    element.addEventListener('mouseout', () => {hideTooltip()});

    // mobile
    element.addEventListener('click', () => {showTooltip(item.imageURL, item.title, "mobile")});   
  });
  
  const showTooltip = (imageURL, title, device) => {
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
      
      const image = document.createElement("img");
      image.src = imageURL;
      image.style.width = "100%";

      const body = document.querySelector("body");
      
      // position tooltip
      if (device === "desktop") {
        const mousePositionX = window.event.clientX;
        const mousePositionY = window.event.clientY;

        tooltip.style.left = mousePositionX + "px";
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

        closeIcon.addEventListener('click', () => { hideTooltip() } );

        tooltipHeader.appendChild(closeIcon);
      }

      tooltip.appendChild(tooltipHeader);
      tooltip.appendChild(image);
      body.appendChild(tooltip);
    }
  };

  const hideTooltip = () => {
    tooltip = document.getElementById("skopos-tooltip");
    if (tooltip) {
      const body = document.querySelector("body");
      body.removeChild(tooltip);
    }
  };
}