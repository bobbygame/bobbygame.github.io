import type { LevelDefinition } from '../../game/levelDefinition';

export const map18: LevelDefinition = {
  "name": "map18",
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
      1,
      4,
      4,
      6,
      3,
      6,
      4,
      1,
      3,
      2,
      2,
      0,
      4,
      5,
      6,
      2,
      6,
      0,
      0,
      1,
      1,
      0,
      2,
      6,
      5,
      6,
      2,
      0,
      5,
      3,
      5,
      2,
      6,
      6,
      0,
      1,
      6,
      5,
      4,
      1,
      10,
      10,
      8,
      6,
      6,
      6,
      5,
      4,
      1,
      2,
      5,
      1,
      8,
      8,
      9,
      8,
      8,
      8,
      8,
      11,
      8,
      11,
      9,
      0,
      4,
      6,
      3,
      4,
      11,
      10,
      9,
      1,
      1,
      7,
      1,
      6,
      8,
      9,
      9,
      6,
      0,
      3,
      4,
      3,
      4,
      0,
      5,
      5,
      6,
      9,
      3,
      4,
      3,
      2,
      3,
      1,
      4,
      4,
      0,
      5,
      1,
      9,
      11,
      11,
      11,
      8,
      11,
      7,
      9,
      9,
      10,
      1,
      4,
      11,
      9,
      7,
      7,
      10,
      11,
      8,
      9,
      10,
      1,
      9,
      8,
      10,
      11,
      1,
      2,
      11,
      7,
      7,
      11,
      10,
      9,
      8,
      9,
      8,
      4,
      9,
      9,
      8,
      8,
      3,
      4,
      8,
      10,
      8,
      11,
      7,
      8,
      7,
      11,
      9,
      9,
      11,
      11,
      9,
      9,
      0,
      6,
      11,
      10,
      10,
      9,
      8,
      8,
      7,
      11,
      11,
      10,
      9,
      7,
      11,
      8,
      6,
      2,
      11,
      7,
      9,
      11,
      10,
      5,
      4,
      1,
      3,
      4,
      2,
      1,
      3,
      6,
      4,
      5,
      2,
      10,
      10,
      9,
      5,
      6,
      7,
      9,
      11,
      2,
      1,
      6,
      5,
      4,
      3,
      2,
      6,
      10,
      9,
      10,
      1,
      4,
      7,
      9,
      7,
      11,
      11,
      1,
      5,
      3,
      3,
      5,
      6,
      8,
      9,
      8,
      8,
      10,
      8,
      11,
      10,
      5,
      2,
      5,
      2,
      3,
      4,
      6,
      6,
      3,
      1,
      6,
      2,
      1,
      5,
      0,
      1,
      2,
      0,
      1,
      0,
      3,
      3
    ],
    "typeName": "Tilemap18"
  },
  "entities": [
    {
      "id": 980,
      "kind": "bornPlace",
      "typeName": "bornPlace",
      "pos": {
        "x": 150,
        "y": 650
      },
      "cell": {
        "col": 3,
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
      "data": {},
      "angle": 0
    },
    {
      "id": 982,
      "kind": "lock",
      "typeName": "lock",
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
        "initial-animation": "yellow",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 983,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "yellow",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 984,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 985,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 986,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 987,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 989,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 988,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 990,
      "kind": "wall",
      "typeName": "barLeftBottom",
      "pos": {
        "x": 50,
        "y": 550
      },
      "cell": {
        "col": 1,
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
      "id": 991,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 500
      },
      "cell": {
        "col": 1,
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
      "id": 992,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 450
      },
      "cell": {
        "col": 1,
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
      "id": 993,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 400
      },
      "cell": {
        "col": 1,
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
      "id": 994,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 995,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 996,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 997,
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
      "id": 998,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 999,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1000,
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
      "id": 1001,
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
      "id": 1002,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 1003,
      "kind": "lock",
      "typeName": "lock",
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
        "initial-animation": "red",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1004,
      "kind": "lock",
      "typeName": "lock",
      "pos": {
        "x": 550,
        "y": 150
      },
      "cell": {
        "col": 11,
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1005,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1006,
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
      "id": 1007,
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
      "id": 1008,
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
      "id": 1009,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 200
      },
      "cell": {
        "col": 5,
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
      "id": 1010,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1011,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 600,
        "y": 150
      },
      "cell": {
        "col": 12,
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
      "id": 1012,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 150
      },
      "cell": {
        "col": 13,
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
      "id": 1013,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 700,
        "y": 150
      },
      "cell": {
        "col": 14,
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
      "id": 1014,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 600,
        "y": 200
      },
      "cell": {
        "col": 12,
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
      "id": 1015,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 650,
        "y": 200
      },
      "cell": {
        "col": 13,
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
      "id": 1016,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 700,
        "y": 200
      },
      "cell": {
        "col": 14,
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
      "id": 1017,
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
      "id": 1018,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1019,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1020,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1021,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1022,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1023,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1024,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "4",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 4
      },
      "angle": 0
    },
    {
      "id": 1025,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
      "pos": {
        "x": 650,
        "y": 450
      },
      "cell": {
        "col": 13,
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
        "initial-animation": "3",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1026,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
      "id": 1027,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1028,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1029,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1030,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1031,
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
      "id": 1032,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "3",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1033,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "4",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 4
      },
      "angle": 0
    },
    {
      "id": 1034,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1035,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "red",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 981,
      "kind": "player",
      "typeName": "bobby",
      "pos": {
        "x": 150,
        "y": 650
      },
      "cell": {
        "col": 3,
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

export default map18;
