import type { LevelDefinition } from '../../game/levelDefinition';

export const map20: LevelDefinition = {
  "name": "map20",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 23,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      5,
      1,
      5,
      1,
      0,
      6,
      0,
      1,
      3,
      6,
      6,
      1,
      2,
      4,
      6,
      3,
      1,
      4,
      1,
      6,
      1,
      6,
      6,
      5,
      1,
      2,
      1,
      3,
      5,
      5,
      0,
      0,
      0,
      2,
      2,
      4,
      6,
      1,
      3,
      6,
      5,
      1,
      6,
      2,
      0,
      3,
      3,
      4,
      3,
      6,
      0,
      6,
      11,
      10,
      8,
      9,
      11,
      7,
      10,
      5,
      0,
      0,
      6,
      0,
      3,
      0,
      6,
      4,
      8,
      4,
      0,
      7,
      3,
      4,
      10,
      0,
      5,
      3,
      5,
      5,
      3,
      4,
      5,
      3,
      8,
      2,
      0,
      7,
      0,
      5,
      11,
      5,
      0,
      0,
      0,
      3,
      6,
      6,
      4,
      2,
      8,
      9,
      7,
      7,
      11,
      11,
      9,
      5,
      0,
      6,
      2,
      3,
      5,
      1,
      2,
      2,
      11,
      3,
      2,
      9,
      1,
      2,
      11,
      1,
      3,
      1,
      5,
      5,
      2,
      6,
      3,
      1,
      10,
      0,
      0,
      9,
      0,
      3,
      8,
      2,
      1,
      4,
      2,
      5,
      4,
      1,
      5,
      5,
      11,
      7,
      7,
      7,
      9,
      8,
      11,
      6,
      3,
      4,
      2,
      6,
      3,
      1,
      3,
      6,
      7,
      0,
      6,
      7,
      4,
      3,
      9,
      0,
      0,
      5,
      0,
      5,
      1,
      4,
      2,
      2,
      8,
      3,
      5,
      7,
      0,
      2,
      7,
      2,
      0,
      0,
      6,
      2,
      6,
      4,
      2,
      6,
      7,
      9,
      11,
      9,
      7,
      11,
      8,
      0,
      6,
      4,
      2,
      4,
      5,
      3,
      3,
      3,
      5,
      6,
      0,
      7,
      4,
      0,
      3,
      0,
      2,
      6,
      1,
      2,
      5,
      0,
      5,
      6,
      4,
      1,
      6,
      8,
      2,
      3,
      4,
      4,
      1,
      5,
      2,
      5,
      3,
      5,
      3,
      6,
      6,
      2,
      0,
      5,
      5,
      2,
      0,
      2,
      4,
      1,
      5,
      2
    ],
    "typeName": "Tilemap20"
  },
  "entities": [
    {
      "id": 1083,
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
      "id": 1085,
      "kind": "channel",
      "typeName": "channel",
      "pos": {
        "x": 350,
        "y": 700
      },
      "cell": {
        "col": 7,
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
      "id": 1086,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1087,
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
      "id": 1088,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1089,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1090,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1091,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 200,
        "y": 150
      },
      "cell": {
        "col": 4,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1092,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1093,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 500,
        "y": 150
      },
      "cell": {
        "col": 10,
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1094,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1095,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1096,
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
      "id": 1097,
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
      "id": 1098,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1099,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1100,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 200,
        "y": 200
      },
      "cell": {
        "col": 4,
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
      "id": 1101,
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
      "id": 1102,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 150
      },
      "cell": {
        "col": 5,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1103,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 150
      },
      "cell": {
        "col": 6,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1104,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 150
      },
      "cell": {
        "col": 8,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1105,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 150
      },
      "cell": {
        "col": 9,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1106,
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
      "id": 1107,
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
      "id": 1108,
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
      "id": 1109,
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
      "id": 1110,
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
      "id": 1111,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1112,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1113,
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
      "id": 1114,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1115,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1116,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1117,
      "kind": "lock",
      "typeName": "lock",
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1118,
      "kind": "lock",
      "typeName": "lock",
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
        "initial-animation": "red",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1119,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1120,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "red",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1084,
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

export default map20;
