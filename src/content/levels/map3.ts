import type { LevelDefinition } from '../../game/levelDefinition';

export const map3: LevelDefinition = {
  "name": "map3",
  "pixelSize": {
    "x": 750,
    "y": 800
  },
  "requiredCarrots": 12,
  "tilemap": {
    "cols": 15,
    "rows": 16,
    "width": 750,
    "height": 800,
    "tileSize": 50,
    "data": [
      1,
      1,
      4,
      2,
      3,
      6,
      1,
      4,
      1,
      1,
      3,
      4,
      6,
      3,
      1,
      2,
      2,
      1,
      3,
      1,
      4,
      2,
      4,
      1,
      5,
      2,
      0,
      0,
      4,
      2,
      4,
      1,
      2,
      4,
      0,
      2,
      1,
      11,
      0,
      2,
      6,
      2,
      2,
      5,
      1,
      6,
      1,
      1,
      3,
      0,
      1,
      10,
      7,
      8,
      3,
      3,
      4,
      1,
      2,
      0,
      3,
      5,
      3,
      5,
      10,
      8,
      11,
      9,
      8,
      7,
      8,
      2,
      0,
      4,
      2,
      5,
      6,
      3,
      4,
      0,
      5,
      1,
      8,
      1,
      5,
      0,
      1,
      0,
      3,
      3,
      3,
      4,
      6,
      2,
      3,
      7,
      9,
      8,
      8,
      11,
      1,
      3,
      3,
      2,
      1,
      1,
      4,
      1,
      4,
      0,
      9,
      7,
      10,
      7,
      9,
      4,
      4,
      5,
      2,
      2,
      4,
      0,
      0,
      0,
      4,
      8,
      9,
      10,
      10,
      7,
      1,
      1,
      5,
      2,
      5,
      4,
      5,
      3,
      1,
      2,
      0,
      3,
      7,
      2,
      2,
      4,
      1,
      1,
      4,
      2,
      0,
      6,
      0,
      4,
      4,
      3,
      2,
      8,
      4,
      3,
      6,
      2,
      3,
      0,
      4,
      4,
      3,
      2,
      1,
      3,
      4,
      11,
      11,
      9,
      6,
      4,
      5,
      6,
      4,
      0,
      0,
      0,
      3,
      4,
      6,
      0,
      8,
      8,
      10,
      4,
      5,
      6,
      6,
      2,
      2,
      0,
      6,
      2,
      5,
      1,
      3,
      8,
      10,
      10,
      4,
      1,
      0,
      6,
      5,
      5,
      6,
      6,
      6,
      4,
      6,
      2,
      3,
      4,
      5,
      3,
      5,
      1,
      0,
      4,
      2,
      3,
      4,
      0,
      5,
      5,
      4,
      1,
      3,
      3,
      4,
      4,
      4,
      5,
      5,
      2
    ],
    "typeName": "Tilemap3"
  },
  "entities": [
    {
      "id": 121,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 350
      },
      "cell": {
        "col": 9,
        "row": 7,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 122,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 400
      },
      "cell": {
        "col": 5,
        "row": 8,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 416,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 350
      },
      "cell": {
        "col": 5,
        "row": 7,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 417,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 300
      },
      "cell": {
        "col": 6,
        "row": 6,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 418,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 300
      },
      "cell": {
        "col": 9,
        "row": 6,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 419,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 400
      },
      "cell": {
        "col": 6,
        "row": 8,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 420,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 300
      },
      "cell": {
        "col": 8,
        "row": 6,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 421,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 350
      },
      "cell": {
        "col": 8,
        "row": 7,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 422,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 400
      },
      "cell": {
        "col": 8,
        "row": 8,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 423,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 400
      },
      "cell": {
        "col": 9,
        "row": 8,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 119,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 300
      },
      "cell": {
        "col": 5,
        "row": 6,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 120,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 350
      },
      "cell": {
        "col": 6,
        "row": 7,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 424,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 350,
        "y": 300
      },
      "cell": {
        "col": 7,
        "row": 6,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 425,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 350,
        "y": 350
      },
      "cell": {
        "col": 7,
        "row": 7,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 426,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 350,
        "y": 400
      },
      "cell": {
        "col": 7,
        "row": 8,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 2087,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 350,
        "y": 600
      },
      "cell": {
        "col": 7,
        "row": 12,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {},
      "angle": 0
    },
    {
      "id": 70,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 350,
        "y": 150
      },
      "cell": {
        "col": 7,
        "row": 3,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 54,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 350,
        "y": 600
      },
      "cell": {
        "col": 7,
        "row": 12,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "downStop",
        "initial-frame": 0,
        "enable-collisions": true,
        "directionX": 0,
        "directionY": 0,
        "变量1": 0,
        "isXY": 0
      },
      "angle": 0
    }
  ]
};

export default map3;
