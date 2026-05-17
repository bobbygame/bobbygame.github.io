import type { LevelDefinition } from '../../game/levelDefinition';

export const map21: LevelDefinition = {
  "name": "map21",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 18,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      2,
      0,
      0,
      0,
      5,
      3,
      4,
      4,
      3,
      2,
      0,
      6,
      2,
      3,
      1,
      2,
      1,
      3,
      3,
      3,
      5,
      2,
      2,
      0,
      6,
      6,
      1,
      5,
      3,
      0,
      3,
      5,
      4,
      1,
      0,
      2,
      3,
      6,
      6,
      2,
      5,
      2,
      1,
      1,
      4,
      3,
      6,
      0,
      0,
      0,
      2,
      6,
      6,
      4,
      4,
      4,
      4,
      2,
      6,
      3,
      6,
      4,
      4,
      4,
      1,
      2,
      1,
      1,
      1,
      5,
      3,
      0,
      0,
      1,
      5,
      0,
      3,
      1,
      6,
      0,
      4,
      11,
      8,
      7,
      7,
      8,
      9,
      9,
      8,
      8,
      7,
      7,
      11,
      11,
      2,
      5,
      3,
      8,
      7,
      9,
      11,
      9,
      10,
      8,
      9,
      9,
      11,
      7,
      8,
      10,
      0,
      0,
      2,
      7,
      8,
      8,
      7,
      7,
      11,
      11,
      11,
      10,
      8,
      9,
      9,
      10,
      3,
      6,
      2,
      9,
      11,
      9,
      7,
      10,
      8,
      11,
      9,
      11,
      8,
      7,
      7,
      11,
      3,
      0,
      3,
      7,
      9,
      11,
      11,
      11,
      7,
      8,
      11,
      11,
      10,
      10,
      7,
      8,
      5,
      1,
      4,
      9,
      8,
      8,
      7,
      8,
      10,
      9,
      8,
      9,
      11,
      10,
      8,
      11,
      2,
      4,
      3,
      8,
      9,
      10,
      8,
      11,
      9,
      7,
      8,
      7,
      11,
      8,
      8,
      10,
      3,
      0,
      0,
      11,
      8,
      8,
      7,
      8,
      7,
      7,
      8,
      10,
      7,
      10,
      9,
      9,
      3,
      6,
      2,
      8,
      9,
      11,
      10,
      7,
      8,
      9,
      8,
      8,
      10,
      10,
      9,
      9,
      6,
      5,
      2,
      11,
      10,
      8,
      11,
      7,
      10,
      11,
      11,
      11,
      9,
      10,
      8,
      7,
      5,
      5,
      5,
      1,
      2,
      5,
      6,
      1,
      0,
      6,
      0,
      5,
      5,
      5,
      4,
      6,
      6,
      4
    ],
    "typeName": "Tilemap21"
  },
  "entities": [
    {
      "id": 839,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 50,
        "y": 700
      },
      "cell": {
        "col": 1,
        "row": 14,
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
      "id": 840,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 600,
        "y": 700
      },
      "cell": {
        "col": 12,
        "row": 14,
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
      "id": 841,
      "kind": "stone",
      "typeName": "stone",
      "pos": {
        "x": 500,
        "y": 700
      },
      "cell": {
        "col": 10,
        "row": 14,
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 315,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
      "pos": {
        "x": 248,
        "y": 652
      },
      "cell": {
        "col": 5,
        "row": 13,
        "offset": {
          "x": -2,
          "y": 2
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 317,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 308,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 550,
        "y": 650
      },
      "cell": {
        "col": 11,
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
      "id": 314,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 600,
        "y": 650
      },
      "cell": {
        "col": 12,
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
      "id": 316,
      "kind": "wall",
      "typeName": "barRightBottom",
      "pos": {
        "x": 650,
        "y": 650
      },
      "cell": {
        "col": 13,
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
      "id": 318,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 319,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 500,
        "y": 600
      },
      "cell": {
        "col": 10,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 320,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 550,
        "y": 600
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 321,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 600,
        "y": 600
      },
      "cell": {
        "col": 12,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 322,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 650,
        "y": 600
      },
      "cell": {
        "col": 13,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 323,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 500,
        "y": 550
      },
      "cell": {
        "col": 10,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1121,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 550,
        "y": 550
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1122,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 600,
        "y": 550
      },
      "cell": {
        "col": 12,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1123,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 650,
        "y": 550
      },
      "cell": {
        "col": 13,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1124,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 500,
        "y": 500
      },
      "cell": {
        "col": 10,
        "row": 10,
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
      "id": 1125,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 500,
        "y": 450
      },
      "cell": {
        "col": 10,
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
      "id": 1126,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 500,
        "y": 400
      },
      "cell": {
        "col": 10,
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
      "id": 1127,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 500,
        "y": 350
      },
      "cell": {
        "col": 10,
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
      "id": 1128,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 500,
        "y": 300
      },
      "cell": {
        "col": 10,
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
      "id": 1129,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1130,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 550,
        "y": 250
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1131,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 600,
        "y": 250
      },
      "cell": {
        "col": 12,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1132,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 650,
        "y": 250
      },
      "cell": {
        "col": 13,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1133,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
      "pos": {
        "x": 550,
        "y": 300
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 1134,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
      "pos": {
        "x": 650,
        "y": 500
      },
      "cell": {
        "col": 13,
        "row": 10,
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 1135,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 600,
        "y": 500
      },
      "cell": {
        "col": 12,
        "row": 10,
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
      "id": 1136,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 600,
        "y": 450
      },
      "cell": {
        "col": 12,
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
      "id": 1137,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 600,
        "y": 400
      },
      "cell": {
        "col": 12,
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
      "id": 1138,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 600,
        "y": 350
      },
      "cell": {
        "col": 12,
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
      "id": 1139,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 600,
        "y": 300
      },
      "cell": {
        "col": 12,
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
      "id": 1140,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 550,
        "y": 350
      },
      "cell": {
        "col": 11,
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
      "id": 1141,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1142,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 550,
        "y": 450
      },
      "cell": {
        "col": 11,
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
      "id": 1143,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 550,
        "y": 500
      },
      "cell": {
        "col": 11,
        "row": 10,
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
      "id": 1144,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 300
      },
      "cell": {
        "col": 13,
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
      "id": 1145,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 350
      },
      "cell": {
        "col": 13,
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
      "id": 1146,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 400
      },
      "cell": {
        "col": 13,
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
      "id": 1147,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 460
      },
      "cell": {
        "col": 13,
        "row": 9,
        "offset": {
          "x": 0,
          "y": 10
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
      "id": 1149,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 400,
        "y": 550
      },
      "cell": {
        "col": 8,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1150,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 400,
        "y": 500
      },
      "cell": {
        "col": 8,
        "row": 10,
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
      "id": 1151,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1152,
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
      "id": 1153,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 350,
        "y": 550
      },
      "cell": {
        "col": 7,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1154,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 350,
        "y": 500
      },
      "cell": {
        "col": 7,
        "row": 10,
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
      "id": 1155,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1156,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 1157,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1158,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1159,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1160,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1161,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1162,
      "kind": "stone",
      "typeName": "stone",
      "pos": {
        "x": 150,
        "y": 350
      },
      "cell": {
        "col": 3,
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1163,
      "kind": "stone",
      "typeName": "stone",
      "pos": {
        "x": 100,
        "y": 350
      },
      "cell": {
        "col": 2,
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1164,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1165,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 500
      },
      "cell": {
        "col": 5,
        "row": 10,
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
      "id": 1166,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 550
      },
      "cell": {
        "col": 5,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1167,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 1168,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
      "pos": {
        "x": 200,
        "y": 550
      },
      "cell": {
        "col": 4,
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 1169,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1170,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1171,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 150,
        "y": 500
      },
      "cell": {
        "col": 3,
        "row": 10,
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
      "id": 1172,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 150,
        "y": 550
      },
      "cell": {
        "col": 3,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1174,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 100,
        "y": 550
      },
      "cell": {
        "col": 2,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1175,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 100,
        "y": 500
      },
      "cell": {
        "col": 2,
        "row": 10,
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
      "id": 1176,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 100,
        "y": 450
      },
      "cell": {
        "col": 2,
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
      "id": 1177,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 100,
        "y": 400
      },
      "cell": {
        "col": 2,
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
      "id": 1180,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 200,
        "y": 500
      },
      "cell": {
        "col": 4,
        "row": 10,
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
      "id": 1181,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1182,
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
      "id": 1185,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 300,
        "y": 500
      },
      "cell": {
        "col": 6,
        "row": 10,
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
      "id": 1186,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1187,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1148,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 150,
        "y": 600
      },
      "cell": {
        "col": 3,
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
      "id": 1173,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1178,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1179,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1183,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1184,
      "kind": "wall",
      "typeName": "barRightBottom",
      "pos": {
        "x": 400,
        "y": 600
      },
      "cell": {
        "col": 8,
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
      "id": 1188,
      "kind": "wall",
      "typeName": "barLeftBottom",
      "pos": {
        "x": 100,
        "y": 600
      },
      "cell": {
        "col": 2,
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
      "id": 838,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 50,
        "y": 700
      },
      "cell": {
        "col": 1,
        "row": 14,
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

export default map21;
