import type { LevelDefinition } from '../../game/levelDefinition';

export const map13: LevelDefinition = {
  "name": "map13",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 8,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      6,
      6,
      4,
      1,
      0,
      2,
      0,
      2,
      1,
      3,
      2,
      1,
      4,
      2,
      0,
      5,
      3,
      4,
      2,
      1,
      3,
      2,
      4,
      4,
      0,
      6,
      3,
      3,
      0,
      4,
      4,
      0,
      1,
      1,
      3,
      5,
      2,
      2,
      2,
      6,
      6,
      2,
      3,
      4,
      6,
      5,
      2,
      2,
      3,
      1,
      1,
      5,
      4,
      4,
      5,
      6,
      3,
      6,
      3,
      3,
      6,
      0,
      6,
      6,
      5,
      2,
      3,
      3,
      3,
      5,
      4,
      9,
      8,
      7,
      9,
      11,
      4,
      6,
      3,
      2,
      6,
      5,
      4,
      6,
      5,
      3,
      5,
      8,
      2,
      2,
      0,
      8,
      1,
      1,
      2,
      6,
      4,
      3,
      4,
      1,
      3,
      0,
      3,
      11,
      6,
      5,
      3,
      7,
      2,
      6,
      6,
      4,
      2,
      6,
      9,
      9,
      8,
      6,
      1,
      10,
      4,
      0,
      8,
      9,
      8,
      6,
      6,
      1,
      0,
      6,
      7,
      10,
      11,
      7,
      9,
      11,
      10,
      8,
      8,
      11,
      9,
      2,
      5,
      4,
      2,
      2,
      10,
      11,
      8,
      1,
      0,
      8,
      0,
      5,
      11,
      10,
      9,
      3,
      6,
      2,
      6,
      3,
      2,
      8,
      2,
      0,
      6,
      7,
      3,
      0,
      2,
      3,
      2,
      1,
      0,
      5,
      3,
      0,
      1,
      11,
      6,
      0,
      2,
      11,
      0,
      5,
      2,
      5,
      3,
      1,
      1,
      5,
      1,
      2,
      6,
      11,
      11,
      7,
      11,
      11,
      1,
      4,
      1,
      5,
      3,
      6,
      2,
      3,
      5,
      2,
      6,
      0,
      5,
      3,
      2,
      3,
      6,
      6,
      1,
      6,
      5,
      2,
      1,
      1,
      5,
      1,
      4,
      1,
      0,
      5,
      4,
      5,
      4,
      0,
      4,
      4,
      3,
      0,
      1,
      5,
      3,
      0,
      3,
      4,
      1,
      2,
      1,
      2,
      0,
      5,
      2,
      4,
      2,
      1,
      5,
      4
    ],
    "typeName": "Tilemap13"
  },
  "entities": [
    {
      "id": 134,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 550,
        "y": 400
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 826,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 150,
        "y": 400
      },
      "cell": {
        "col": 3,
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
      "data": {},
      "angle": 0
    },
    {
      "id": 827,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 828,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 829,
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
      "id": 830,
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
      "id": 831,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 200
      },
      "cell": {
        "col": 8,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 832,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 200
      },
      "cell": {
        "col": 9,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 833,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 500,
        "y": 200
      },
      "cell": {
        "col": 10,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 834,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 200,
        "y": 600
      },
      "cell": {
        "col": 4,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 835,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 600
      },
      "cell": {
        "col": 5,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 836,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 600
      },
      "cell": {
        "col": 6,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 331,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 133,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 150,
        "y": 400
      },
      "cell": {
        "col": 3,
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

export default map13;
