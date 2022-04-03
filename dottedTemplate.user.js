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
      {pos: [247, 1339], src: 'https://github.com/Pookachu/HKPLACE/blob/main/Dotted_Overlay_PNGs/!dotted_RadianceTemplate.png?raw=true', width: 94, height: 105},
      {pos: [176, 386], src: 'https://raw.githubusercontent.com/Pookachu/HKPLACE/main/Dotted_Overlay_PNGs/!dotted_ELDEN_RING.png', width: 47, height: 64}
    ]

    templates.forEach(i => {
      let img = document.createElement('img')
      img.src = i.src
      img.style = `z-index: 10000 !important; position: absolute;left: ${i.pos[0]}px;top: ${i.pos[1]}px;image-rendering: pixelated;width: ${i.width}px;height: ${i.height}px;`
        console.log(i.src)

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(img)
    })

  }, false);

}
})();
