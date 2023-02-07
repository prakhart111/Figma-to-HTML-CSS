function generateCSS(className:string,node:any) {
  let cssTemp:string = "";

  cssTemp+= `.${className}{`
  //background color
  if (node.fills) {
    let r:number = Math.floor(node.fills[0].color.r * 255)
    let g:number = Math.floor(node.fills[0].color.g * 255)
    let b:number = Math.floor(node.fills[0].color.b * 255)
    cssTemp += `background-color: rgb(${r},${g},${b});\n`;
  }
  
  //width and height
  if (node.width && node.height) {
    cssTemp += `width: ${node.width}px;\n`;
    cssTemp += `height: ${node.height}px;\n`;
  }
  
  //position
  if (node) {
    cssTemp += `position: absolute;\n`;
    cssTemp += `left: ${node.x}px;\n`;
    cssTemp += `top: ${node.y}px;\n`;
  }
  cssTemp+= `}`
  return cssTemp;
}

async function exportFrame() {
  const frames = figma.currentPage.selection;
  if (frames.length !== 1 || frames[0].type !== "FRAME") {
    figma.closePlugin("Please select a single Frame and try again.");
    return;
  }

  const frame = frames[0];
  let html:string = `<html><head>
  <title>${frame.name}</title>
  <link rel="stylesheet" href="./style.css">
  </head><body>`;
  let css:string = "";
  console.log(frame.name);

  let index:number=0;
  for (const node of frame.children) {
    console.log(`${node.name}-${node.id}`);
    let nodeClassName = `child-${index}-${node.name.split(" ")?.[0]}-class}`
    console.log(node.id);

    // html
    html += `<div class="${nodeClassName}"` +
            ` style="width: ${node.width}px; height: ${node.height}px;` +
            ` left: ${node.x}px; top: ${node.y}px;"></div>`;
    //css
    css += generateCSS(nodeClassName,node)
    index++;
  }

  html+="</body></html>"
  console.log(html);
  console.log(css);
}

exportFrame()
figma.closePlugin()