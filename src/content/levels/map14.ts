import type { LevelDefinition } from '../../game/levelDefinition';

export const map14: LevelDefinition = {
  "name": "map14",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 17,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      3,
      2,
      1,
      3,
      0,
      4,
      6,
      2,
      3,
      1,
      6,
      1,
      5,
      6,
      1,
      2,
      5,
      3,
      1,
      3,
      3,
      1,
      0,
      4,
      3,
      4,
      5,
      2,
      2,
      5,
      5,
      3,
      5,
      6,
      4,
      6,
      1,
      6,
      6,
      10,
      7,
      7,
      9,
      8,
      6,
      5,
      3,
      4,
      1,
      3,
      0,
      0,
      5,
      1,
      0,
      8,
      5,
      4,
      5,
      10,
      5,
      4,
      3,
      0,
      5,
      4,
      4,
      3,
      6,
      3,
      2,
      11,
      5,
      3,
      6,
      7,
      5,
      0,
      4,
      3,
      0,
      5,
      1,
      11,
      11,
      11,
      11,
      8,
      8,
      9,
      11,
      10,
      6,
      3,
      1,
      6,
      4,
      3,
      6,
      10,
      0,
      5,
      0,
      9,
      1,
      0,
      5,
      10,
      5,
      1,
      0,
      4,
      2,
      6,
      1,
      8,
      6,
      1,
      3,
      9,
      5,
      0,
      1,
      7,
      4,
      5,
      6,
      3,
      6,
      4,
      11,
      8,
      11,
      1,
      1,
      9,
      4,
      0,
      9,
      9,
      10,
      1,
      5,
      6,
      2,
      6,
      8,
      8,
      10,
      8,
      11,
      7,
      10,
      10,
      8,
      9,
      11,
      3,
      5,
      4,
      2,
      4,
      7,
      9,
      10,
      0,
      4,
      7,
      2,
      3,
      10,
      7,
      9,
      3,
      0,
      2,
      2,
      5,
      6,
      9,
      5,
      1,
      4,
      10,
      2,
      6,
      2,
      7,
      5,
      6,
      1,
      2,
      0,
      6,
      2,
      10,
      2,
      5,
      6,
      7,
      4,
      0,
      5,
      10,
      4,
      6,
      2,
      5,
      1,
      6,
      5,
      7,
      11,
      10,
      11,
      10,
      8,
      9,
      9,
      8,
      3,
      1,
      0,
      0,
      4,
      1,
      6,
      5,
      2,
      1,
      0,
      4,
      4,
      5,
      2,
      0,
      1,
      0,
      1,
      3,
      4,
      5,
      0,
      4,
      3,
      6,
      2,
      1,
      1,
      2,
      3,
      0,
      0,
      5,
      4,
      5
    ],
    "typeName": "Tilemap14"
  },
  "entities": [
    {
      "id": 136,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 552,
        "y": 450
      },
      "cell": {
        "col": 11,
        "row": 9,
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 332,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 150,
        "y": 450
      },
      "cell": {
        "col": 3,
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
      "data": {},
      "angle": 0
    },
    {
      "id": 348,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 550,
        "y": 100
      },
      "cell": {
        "col": 11,
        "row": 2,
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
      "id": 349,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 350,
        "y": 100
      },
      "cell": {
        "col": 7,
        "row": 2,
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
      "id": 352,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 842,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 450,
        "y": 450
      },
      "cell": {
        "col": 9,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 350,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 845,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
      "pos": {
        "x": 350,
        "y": 650
      },
      "cell": {
        "col": 7,
        "row": 13,
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
        "initial-animation": "4",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 4
      },
      "angle": 0
    },
    {
      "id": 351,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 333,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 200,
        "y": 650
      },
      "cell": {
        "col": 4,
        "row": 13,
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
      "id": 334,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 650
      },
      "cell": {
        "col": 5,
        "row": 13,
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
      "id": 335,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 650
      },
      "cell": {
        "col": 6,
        "row": 13,
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
      "id": 336,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 650
      },
      "cell": {
        "col": 8,
        "row": 13,
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
      "id": 337,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 650
      },
      "cell": {
        "col": 9,
        "row": 13,
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
      "id": 338,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 500,
        "y": 650
      },
      "cell": {
        "col": 10,
        "row": 13,
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
      "id": 339,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 340,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 341,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 342,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 343,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 250
      },
      "cell": {
        "col": 9,
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
      "id": 344,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 500,
        "y": 250
      },
      "cell": {
        "col": 10,
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
      "id": 345,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 399,
        "y": 100
      },
      "cell": {
        "col": 8,
        "row": 2,
        "offset": {
          "x": -1,
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
      "id": 346,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 449,
        "y": 100
      },
      "cell": {
        "col": 9,
        "row": 2,
        "offset": {
          "x": -1,
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
      "id": 347,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 499,
        "y": 100
      },
      "cell": {
        "col": 10,
        "row": 2,
        "offset": {
          "x": -1,
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
      "id": 843,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 450
      },
      "cell": {
        "col": 6,
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
      "id": 844,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 137,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 150,
        "y": 450
      },
      "cell": {
        "col": 3,
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

export default map14;
