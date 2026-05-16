import { assetUrl } from './paths';

export function installFonts() {
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: "comic";
      src: url("${assetUrl('assets/fonts/comic.ttf')}") format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "comic";
      src: url("${assetUrl('assets/fonts/comicbd.ttf')}") format("truetype");
      font-weight: 700 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "comic";
      src: url("${assetUrl('assets/fonts/comici.ttf')}") format("truetype");
      font-weight: 400;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: "comic";
      src: url("${assetUrl('assets/fonts/comicz.ttf')}") format("truetype");
      font-weight: 700 900;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: "comicbd";
      src: url("${assetUrl('assets/fonts/comicbd.ttf')}") format("truetype");
      font-weight: 700 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "bgothm";
      src: url("${assetUrl('assets/fonts/bgothm.ttf')}") format("truetype");
      font-weight: 400 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "bobby-cn";
      src: url("${assetUrl('assets/fonts/bobby-cn-subset.ttf')}") format("truetype");
      font-weight: 400 900;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}
