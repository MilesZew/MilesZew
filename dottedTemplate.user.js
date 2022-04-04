// ==UserScript==
// @name         Multiple Images RPlace Template
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the canvas!
// @author       MilesZew
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

if (window.top !== window.self) {
  window.addEventListener('load', () => {
    let templates = [
      {pos: [225, 343], src: 'https://cdn.discordapp.com/attachments/959997011598401557/960251171191283722/HORNET.png', width: 84, height: 78},
      {pos: [246, 1339], src: 'https://github.com/Pookachu/HKPLACE/blob/main/Dotted_Overlay_PNGs/!dotted_RadianceTemplate.png?raw=true', width: 96, height: 106},
      {pos: [176, 386], src: 'https://raw.githubusercontent.com/Pookachu/HKPLACE/main/Dotted_Overlay_PNGs/!dotted_ELDEN_RING.png', width: 47, height: 64}
    ]

    templates.forEach(i => {
      
      let img = document.createElement('img')
      let undotted = document.createElement('img')
      img.src = i.src
      img.style = `z-index: 10000 !important; position: absolute;left: ${i.pos[0]}px;top: ${i.pos[1]}px;image-rendering: pixelated;width: ${i.width}px;height: ${i.height}px;`
      

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(img)

        const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("mona-lisa-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    })

  }, false);

}
})();
