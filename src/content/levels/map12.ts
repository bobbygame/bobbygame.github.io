import type { LevelDefinition } from '../../game/levelDefinition';

export const map12: LevelDefinition = {
  "name": "map12",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 27,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      6,
      2,
      0,
      2,
      2,
      4,
      6,
      3,
      2,
      0,
      5,
      0,
      2,
      2,
      6,
      2,
      5,
      0,
      3,
      3,
      6,
      5,
      2,
      3,
      3,
      2,
      1,
      1,
      3,
      0,
      4,
      3,
      0,
      3,
      3,
      2,
      3,
      0,
      3,
      2,
      7,
      10,
      8,
      1,
      2,
      2,
      0,
      5,
      4,
      5,
      7,
      9,
      1,
      2,
      5,
      1,
      7,
      10,
      7,
      9,
      10,
      11,
      6,
      4,
      6,
      0,
      9,
      7,
      9,
      7,
      11,
      8,
      11,
      7,
      7,
      1,
      5,
      8,
      5,
      1,
      1,
      6,
      7,
      10,
      5,
      1,
      8,
      0,
      5,
      7,
      6,
      0,
      6,
      10,
      0,
      5,
      6,
      1,
      10,
      10,
      6,
      4,
      9,
      6,
      2,
      11,
      6,
      6,
      1,
      10,
      5,
      2,
      4,
      11,
      9,
      8,
      9,
      9,
      8,
      7,
      11,
      8,
      10,
      2,
      4,
      10,
      11,
      5,
      5,
      9,
      10,
      11,
      8,
      11,
      8,
      9,
      8,
      7,
      11,
      0,
      5,
      10,
      8,
      0,
      0,
      10,
      10,
      11,
      9,
      7,
      11,
      8,
      8,
      10,
      7,
      4,
      6,
      10,
      10,
      3,
      6,
      4,
      8,
      7,
      3,
      6,
      3,
      3,
      3,
      5,
      4,
      4,
      6,
      10,
      2,
      1,
      5,
      1,
      9,
      11,
      3,
      5,
      0,
      0,
      6,
      1,
      1,
      2,
      6,
      8,
      5,
      1,
      1,
      0,
      7,
      11,
      10,
      7,
      7,
      7,
      8,
      7,
      11,
      5,
      0,
      7,
      1,
      3,
      4,
      6,
      10,
      10,
      5,
      3,
      1,
      8,
      11,
      9,
      8,
      7,
      7,
      8,
      6,
      3,
      3,
      4,
      1,
      0,
      0,
      5,
      3,
      8,
      11,
      10,
      10,
      6,
      1,
      3,
      4,
      0,
      4,
      5,
      5,
      0,
      3,
      3,
      4,
      4,
      0,
      2,
      3,
      5,
      5,
      2,
      0,
      6
    ],
    "typeName": "Tilemap12"
  },
  "entities": [
    {
      "id": 131,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 550,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 551,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 552,
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
      "id": 553,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 554,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 555,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 400,
        "y": 100
      },
      "cell": {
        "col": 8,
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
      "id": 556,
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
      "id": 557,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 500,
        "y": 100
      },
      "cell": {
        "col": 10,
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
      "id": 558,
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
      "id": 559,
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
      "id": 560,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 561,
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
      "id": 562,
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
      "id": 563,
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
      "id": 564,
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
      "id": 565,
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
      "id": 566,
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
      "id": 567,
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
      "id": 568,
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
      "id": 569,
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
      "id": 570,
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
      "id": 571,
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
      "id": 572,
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
      "id": 573,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 574,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 575,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 576,
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
      "id": 577,
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
      "id": 578,
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
      "id": 579,
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
      "id": 580,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 450,
        "y": 700
      },
      "cell": {
        "col": 9,
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
      "id": 581,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 584,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 585,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startUp",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isUp": 1
      },
      "angle": 0
    },
    {
      "id": 586,
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
      "id": 587,
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
      "id": 588,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 589,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 590,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 593,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 594,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 595,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 596,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 1
      },
      "angle": 0
    },
    {
      "id": 599,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 600,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 601,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 602,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 603,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 604,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 592,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 591,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 597,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 598,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 583,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 582,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 130,
      "kind": "player",
      "typeName": "bobby",
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

export default map12;
