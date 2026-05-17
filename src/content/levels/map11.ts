import type { LevelDefinition } from '../../game/levelDefinition';

export const map11: LevelDefinition = {
  "name": "map11",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 16,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      4,
      0,
      0,
      1,
      2,
      2,
      0,
      0,
      1,
      4,
      2,
      1,
      1,
      3,
      4,
      4,
      0,
      3,
      3,
      3,
      0,
      6,
      6,
      5,
      5,
      3,
      2,
      6,
      2,
      0,
      2,
      3,
      1,
      2,
      1,
      4,
      11,
      8,
      9,
      8,
      11,
      7,
      9,
      5,
      0,
      2,
      3,
      2,
      4,
      4,
      4,
      5,
      10,
      8,
      7,
      8,
      10,
      9,
      10,
      5,
      1,
      4,
      5,
      4,
      6,
      8,
      10,
      9,
      7,
      8,
      7,
      7,
      7,
      8,
      8,
      10,
      7,
      7,
      5,
      3,
      4,
      11,
      0,
      1,
      1,
      7,
      11,
      8,
      9,
      9,
      4,
      6,
      6,
      9,
      4,
      0,
      6,
      10,
      9,
      7,
      11,
      10,
      11,
      11,
      8,
      9,
      8,
      10,
      10,
      9,
      3,
      0,
      4,
      11,
      3,
      3,
      0,
      11,
      8,
      11,
      11,
      9,
      4,
      0,
      2,
      8,
      0,
      1,
      6,
      10,
      7,
      10,
      8,
      10,
      8,
      7,
      11,
      7,
      8,
      9,
      10,
      9,
      4,
      1,
      0,
      4,
      1,
      3,
      4,
      11,
      9,
      7,
      7,
      10,
      2,
      3,
      3,
      6,
      2,
      1,
      2,
      1,
      6,
      4,
      1,
      6,
      1,
      11,
      0,
      3,
      0,
      5,
      6,
      6,
      6,
      4,
      0,
      5,
      6,
      6,
      3,
      3,
      4,
      8,
      1,
      3,
      5,
      0,
      1,
      0,
      2,
      4,
      1,
      0,
      0,
      3,
      5,
      1,
      7,
      8,
      7,
      1,
      4,
      0,
      0,
      4,
      5,
      0,
      6,
      6,
      0,
      0,
      0,
      0,
      9,
      10,
      7,
      2,
      3,
      1,
      4,
      2,
      3,
      2,
      1,
      1,
      3,
      6,
      5,
      1,
      7,
      8,
      10,
      4,
      5,
      4,
      2,
      6,
      3,
      3,
      0,
      2,
      1,
      0,
      0,
      3,
      6,
      0,
      2,
      5,
      0,
      2,
      4,
      4,
      5,
      4
    ],
    "typeName": "Tilemap11"
  },
  "entities": [
    {
      "id": 353,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 354,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 355,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 505,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 506,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 489,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 503,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 504,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 128,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 511,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 512,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 513,
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
      "id": 514,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 507,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 509,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 515,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 516,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 517,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 518,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 519,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 520,
      "kind": "wall",
      "typeName": "barLeftTop",
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
      "id": 521,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 522,
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
      "id": 523,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 524,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 525,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 526,
      "kind": "wall",
      "typeName": "barRightBottom",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 527,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 528,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 529,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 530,
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
      "id": 531,
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
      "id": 532,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 533,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 534,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 535,
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
      "id": 536,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 537,
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
      "id": 538,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 300,
        "y": 700
      },
      "cell": {
        "col": 6,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 539,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 540,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 700
      },
      "cell": {
        "col": 8,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 541,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 204,
        "y": 101
      },
      "cell": {
        "col": 4,
        "row": 2,
        "offset": {
          "x": 4,
          "y": 1
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
      "id": 542,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 250,
        "y": 100
      },
      "cell": {
        "col": 5,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 543,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 500,
        "y": 101
      },
      "cell": {
        "col": 10,
        "row": 2,
        "offset": {
          "x": 0,
          "y": 1
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
      "id": 544,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 100
      },
      "cell": {
        "col": 9,
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 545,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 127,
      "kind": "player",
      "typeName": "bobby",
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
        "initial-animation": "downStop",
        "initial-frame": 0,
        "enable-collisions": true,
        "directionX": 0,
        "directionY": 0,
        "变量1": 0,
        "isXY": 0
      },
      "angle": 0
    },
    {
      "id": 508,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 510,
      "kind": "wall",
      "typeName": "barRightTop",
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
    }
  ]
};

export default map11;
