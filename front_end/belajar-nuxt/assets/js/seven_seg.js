export function seven_seg(number, {color = "red",  dot = "yes", state = "on", outline_color = "green"} = {}) {

    let seg_color ="";
    if(state == "on"){
        seg_color = color;
    }else if(state == "off"){
        seg_color = "none";
    }
    let outline = {"color":outline_color, "stroke":""}
    let seg = {
      "a":seg_color,"b":seg_color,"c":seg_color,"d":seg_color,"e":seg_color,"f":seg_color,"g":seg_color,"dot":seg_color
    }
    
    if (number == 0) {
        seg.g = "none"
    }
    else if(number == 1){
        seg.a = "none"
        seg.d = "none"
        seg.e = "none"
        seg.f = "none"
        seg.g = "none"
    }
    else if (number == 2) {
        seg.c = "none"
        seg.f = "none"
    }
    else if (number == 3) {
        seg.e = "none"
        seg.f = "none"
    }
    else if (number == 4) {
        seg.a = "none"
        seg.d = "none"
        seg.e = "none"
    }else if (number == 5) {
        seg.b = "none"
        seg.e = "none"
    }else if (number == 6) {
        seg.b = "none"
    }else if (number == 7) {
        seg.d = "none"
        seg.e = "none"
        seg.f = "none"
        seg.g = "none"
    }else if (number == 8) {
      //all segmen are fillled
    }else if (number == 9) {
        seg.e = "none"
    }else{
        // seg.a = "none"
        seg.b = "none"
        seg.c = "none"
        // seg.d = "none"
        // seg.e = "none"
        // seg.f = "none"
        // seg.g = "none"
    }
    
    if(dot == "no"){
      seg.dot = "none"
    }else if (dot == "yes"){
      seg.dot = color
    }

    return `
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100px" height="142px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 850.71 1228.91" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                  <g id="a">
                    <polygon fill=`+seg.a+` points="227.16,94.36 288.51,34.8 656.58,34.8 717.93,94.36 656.58,153.92 288.51,153.92 "/>
                  </g>
                  <g id="b">
                    <polygon fill=`+seg.b+` points="717.93,105.08 771.95,164.64 731.23,547.01 665.93,607.16 612.11,547.01 652.83,164.64 "/>
                  </g>
                  <g id="c">
                    <polygon fill=`+seg.c+` points="665.33,628.01 717.93,687.57 678.2,1066.36 612.3,1125.92 557.12,1066.36 599.42,687.57 "/>
                  </g>
                  <g id="d">
                    <polygon fill=`+seg.d+` points="612.3,1136.64 546.4,1196.2 178.32,1196.2 114.38,1136.64 178.32,1077.08 559.08,1077.08 "/>
                  </g>
                  <g id="e">
                    <polygon fill=`+seg.e+` points="114.38,1125.92 61.17,1066.36 101.28,689.76 167.6,628.01 220.63,687.57 180.29,1066.36 "/>
                  </g>
                  <g id="f">
                    <polygon fill=`+seg.f+` points="167.6,606.57 114.38,547.01 167.6,164.64 227.16,105.08 286.72,164.64 233.31,547.01 "/>
                  </g>
                  <g id="g">
                    <polygon fill=`+seg.g+` points="167.6,617.29 233.31,557.73 612.11,557.73 665.52,617.29 599.42,676.85 220.63,676.85 "/>
                  </g>
                  <rect fill="none" stroke=`+outline.color+` stroke-width="4.96" stroke-miterlimit="2.61313" x="2.48" y="2.48" width="845.74" height="1223.95"/>
                  <circle fill=`+seg.dot+` cx="749.96" cy="1127.41" r="35.59"/>
                </g>
              </svg>`

        
    }