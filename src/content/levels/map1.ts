import type { LevelDefinition } from '../../game/levelDefinition';

export const map1: LevelDefinition = {
  "name": "map1",
  "pixelSize": {
    "x": 650,
    "y": 800
  },
  "requiredCarrots": 9,
  "tilemap": {
    "cols": 13,
    "rows": 16,
    "width": 650,
    "height": 800,
    "tileSize": 50,
    "data": [
      1,
      1,
      0,
      2,
      2,
      3,
      5,
      4,
      2,
      5,
      3,
      6,
      2,
      3,
      4,
      6,
      3,
      3,
      5,
      4,
      0,
      6,
      0,
      0,
      2,
      2,
      5,
      0,
      5,
      1,
      4,
      5,
      1,
      0,
      0,
      0,
      5,
      0,
      5,
      6,
      1,
      1,
      0,
      6,
      8,
      9,
      10,
      4,
      5,
      5,
      2,
      2,
      1,
      0,
      3,
      10,
      8,
      9,
      11,
      10,
      7,
      8,
      1,
      2,
      6,
      1,
      2,
      2,
      7,
      10,
      9,
      10,
      10,
      10,
      8,
      4,
      5,
      0,
      0,
      5,
      6,
      8,
      8,
      9,
      10,
      11,
      10,
      7,
      6,
      6,
      6,
      3,
      5,
      6,
      7,
      7,
      10,
      7,
      8,
      10,
      8,
      4,
      6,
      2,
      4,
      1,
      4,
      9,
      7,
      7,
      10,
      10,
      11,
      9,
      5,
      4,
      6,
      5,
      6,
      0,
      8,
      11,
      10,
      10,
      9,
      10,
      7,
      3,
      3,
      3,
      2,
      0,
      5,
      11,
      11,
      7,
      9,
      9,
      9,
      10,
      2,
      5,
      0,
      6,
      1,
      4,
      7,
      11,
      11,
      10,
      8,
      7,
      8,
      2,
      4,
      3,
      2,
      6,
      0,
      4,
      0,
      8,
      10,
      10,
      1,
      4,
      0,
      5,
      3,
      5,
      0,
      4,
      3,
      3,
      0,
      5,
      1,
      4,
      5,
      1,
      4,
      3,
      3,
      2,
      5,
      5,
      2,
      2,
      0,
      3,
      2,
      2,
      5,
      3,
      2,
      5,
      5,
      5,
      6,
      6,
      2,
      0,
      6,
      2,
      4,
      3,
      1,
      2
    ],
    "typeName": "Tilemap"
  },
  "entities": [
    {
      "id": 21,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 300,
        "y": 550
      },
      "cell": {
        "col": 6,
        "row": 11,
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
      "id": 26,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 250,
        "y": 250
      },
      "cell": {
        "col": 5,
        "row": 5,
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
      "id": 27,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 300,
        "y": 250
      },
      "cell": {
        "col": 6,
        "row": 5,
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
      "id": 28,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 350,
        "y": 250
      },
      "cell": {
        "col": 7,
        "row": 5,
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
      "id": 29,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 250,
        "y": 450
      },
      "cell": {
        "col": 5,
        "row": 9,
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
      "id": 30,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 350,
        "y": 450
      },
      "cell": {
        "col": 7,
        "row": 9,
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
      "id": 37,
      "kind": "wall",
      "typeName": "barLeftBottom",
      "pos": {
        "x": 200,
        "y": 450
      },
      "cell": {
        "col": 4,
        "row": 9,
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
      "id": 79,
      "kind": "wall",
      "typeName": "barLeftTop",
      "pos": {
        "x": 200,
        "y": 250
      },
      "cell": {
        "col": 4,
        "row": 5,
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
      "id": 33,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 200,
        "y": 300
      },
      "cell": {
        "col": 4,
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
      "id": 34,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 200,
        "y": 350
      },
      "cell": {
        "col": 4,
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
      "id": 35,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 36,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 39,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 200,
        "y": 400
      },
      "cell": {
        "col": 4,
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
      "id": 40,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 41,
      "kind": "wall",
      "typeName": "barRightBottom",
      "pos": {
        "x": 400,
        "y": 450
      },
      "cell": {
        "col": 8,
        "row": 9,
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
      "id": 38,
      "kind": "wall",
      "typeName": "barRightTop",
      "pos": {
        "x": 400,
        "y": 250
      },
      "cell": {
        "col": 8,
        "row": 5,
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
      "id": 6,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 302,
        "y": 299
      },
      "cell": {
        "col": 6,
        "row": 6,
        "offset": {
          "x": 2,
          "y": -1
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
      "id": 7,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 352,
        "y": 299
      },
      "cell": {
        "col": 7,
        "row": 6,
        "offset": {
          "x": 2,
          "y": -1
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
      "id": 8,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 252,
        "y": 300
      },
      "cell": {
        "col": 5,
        "row": 6,
        "offset": {
          "x": 2,
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
      "id": 9,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 349
      },
      "cell": {
        "col": 6,
        "row": 7,
        "offset": {
          "x": 0,
          "y": -1
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
      "id": 10,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 352,
        "y": 349
      },
      "cell": {
        "col": 7,
        "row": 7,
        "offset": {
          "x": 2,
          "y": -1
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
      "id": 11,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 252,
        "y": 398
      },
      "cell": {
        "col": 5,
        "row": 8,
        "offset": {
          "x": 2,
          "y": -2
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
      "id": 22,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 349
      },
      "cell": {
        "col": 5,
        "row": 7,
        "offset": {
          "x": 0,
          "y": -1
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
      "id": 23,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 302,
        "y": 400
      },
      "cell": {
        "col": 6,
        "row": 8,
        "offset": {
          "x": 2,
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
      "id": 24,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 351,
        "y": 399
      },
      "cell": {
        "col": 7,
        "row": 8,
        "offset": {
          "x": 1,
          "y": -1
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
      "id": 20,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 300,
        "y": 200
      },
      "cell": {
        "col": 6,
        "row": 4,
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
      "id": 3,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 300,
        "y": 550
      },
      "cell": {
        "col": 6,
        "row": 11,
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

export default map1;
