import type { LevelDefinition } from '../../game/levelDefinition';

export const map16: LevelDefinition = {
  "name": "map16",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 21,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      3,
      2,
      0,
      0,
      1,
      3,
      3,
      2,
      5,
      0,
      6,
      2,
      3,
      5,
      4,
      4,
      5,
      5,
      1,
      1,
      0,
      5,
      4,
      3,
      1,
      5,
      0,
      6,
      1,
      0,
      1,
      1,
      5,
      2,
      3,
      6,
      1,
      0,
      1,
      0,
      3,
      0,
      6,
      4,
      3,
      4,
      3,
      3,
      3,
      2,
      5,
      3,
      6,
      6,
      6,
      6,
      0,
      3,
      2,
      5,
      5,
      4,
      2,
      2,
      5,
      8,
      11,
      7,
      10,
      11,
      1,
      1,
      4,
      2,
      0,
      2,
      9,
      6,
      3,
      1,
      0,
      11,
      10,
      9,
      9,
      11,
      9,
      1,
      8,
      9,
      8,
      10,
      9,
      11,
      11,
      4,
      0,
      11,
      8,
      8,
      8,
      7,
      2,
      0,
      10,
      10,
      11,
      9,
      10,
      8,
      8,
      4,
      4,
      10,
      11,
      11,
      9,
      11,
      9,
      9,
      7,
      8,
      7,
      9,
      10,
      7,
      10,
      1,
      6,
      8,
      11,
      9,
      9,
      11,
      6,
      3,
      11,
      9,
      9,
      10,
      9,
      7,
      9,
      1,
      0,
      11,
      11,
      10,
      11,
      9,
      2,
      4,
      11,
      8,
      8,
      11,
      7,
      9,
      8,
      0,
      6,
      7,
      7,
      9,
      11,
      11,
      4,
      1,
      9,
      9,
      11,
      7,
      7,
      11,
      10,
      6,
      2,
      7,
      9,
      10,
      9,
      8,
      10,
      9,
      9,
      11,
      7,
      8,
      8,
      9,
      9,
      5,
      0,
      8,
      7,
      9,
      10,
      9,
      3,
      4,
      8,
      9,
      11,
      8,
      10,
      11,
      8,
      5,
      5,
      1,
      7,
      11,
      11,
      2,
      0,
      2,
      5,
      1,
      1,
      1,
      4,
      2,
      2,
      0,
      2,
      4,
      5,
      0,
      2,
      6,
      5,
      6,
      3,
      6,
      3,
      1,
      4,
      4,
      2,
      1,
      2,
      2,
      3,
      2,
      2,
      3,
      5,
      3,
      2,
      6,
      6,
      6,
      5,
      1,
      4,
      1
    ],
    "typeName": "Tilemap16"
  },
  "entities": [
    {
      "id": 867,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 868,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 869,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 871,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 250
      },
      "cell": {
        "col": 1,
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
      "id": 872,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 300
      },
      "cell": {
        "col": 1,
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
      "id": 873,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 50,
        "y": 350
      },
      "cell": {
        "col": 1,
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
      "id": 874,
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
      "id": 875,
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
      "id": 876,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 877,
      "kind": "wall",
      "typeName": "barLeftTop",
      "pos": {
        "x": 50,
        "y": 200
      },
      "cell": {
        "col": 1,
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
      "id": 870,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 100,
        "y": 200
      },
      "cell": {
        "col": 2,
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
      "id": 878,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 150,
        "y": 200
      },
      "cell": {
        "col": 3,
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
      "id": 879,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 880,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 881,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 882,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 883,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 884,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 886,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 887,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 100,
        "y": 250
      },
      "cell": {
        "col": 2,
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
      "id": 888,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 100,
        "y": 300
      },
      "cell": {
        "col": 2,
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
      "id": 889,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 150,
        "y": 250
      },
      "cell": {
        "col": 3,
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
      "id": 890,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 150,
        "y": 300
      },
      "cell": {
        "col": 3,
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
      "id": 891,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 892,
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
      "id": 893,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 894,
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
      "id": 885,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 895,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 896,
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
      "id": 897,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 898,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 899,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 900,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 901,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 902,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 903,
      "kind": "wall",
      "typeName": "barRightBottom",
      "pos": {
        "x": 700,
        "y": 600
      },
      "cell": {
        "col": 14,
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
      "id": 904,
      "kind": "wall",
      "typeName": "barRightTop",
      "pos": {
        "x": 700,
        "y": 300
      },
      "cell": {
        "col": 14,
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
      "id": 905,
      "kind": "wall",
      "typeName": "barLeftTop",
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
      "id": 906,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 907,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 908,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 909,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 910,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 911,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 912,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 450,
        "y": 500
      },
      "cell": {
        "col": 9,
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
      "id": 913,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 450,
        "y": 550
      },
      "cell": {
        "col": 9,
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
      "id": 914,
      "kind": "wall",
      "typeName": "barLeftBottom",
      "pos": {
        "x": 450,
        "y": 600
      },
      "cell": {
        "col": 9,
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
      "id": 915,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 700,
        "y": 350
      },
      "cell": {
        "col": 14,
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
      "id": 916,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 700,
        "y": 400
      },
      "cell": {
        "col": 14,
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
      "id": 917,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 700,
        "y": 450
      },
      "cell": {
        "col": 14,
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
      "id": 918,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 700,
        "y": 500
      },
      "cell": {
        "col": 14,
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
      "id": 919,
      "kind": "wall",
      "typeName": "barY",
      "pos": {
        "x": 700,
        "y": 550
      },
      "cell": {
        "col": 14,
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
      "id": 920,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 921,
      "kind": "wall",
      "typeName": "barX",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 922,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 923,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 924,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 925,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 926,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 927,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 928,
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
      "id": 929,
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
      "id": 930,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 931,
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
      "id": 932,
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
      "id": 933,
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
      "id": 934,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 935,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 936,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 937,
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
      "id": 938,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 939,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1189,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 866,
      "kind": "player",
      "typeName": "bobby",
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

export default map16;
