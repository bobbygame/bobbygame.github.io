import { assetUrl } from './paths';

export function installFonts() {
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: "comic";
      src: url("${assetUrl('assets/fonts/comic.ttf')}") format("truetype");
    }

    @font-face {
      font-family: "comicbd";
      src: url("${assetUrl('assets/fonts/comicbd.ttf')}") format("truetype");
    }

    @font-face {
      font-family: "bgothm";
      src: url("${assetUrl('assets/fonts/bgothm.ttf')}") format("truetype");
    }
  `;
  document.head.appendChild(style);
}
