import type { LevelDefinition } from '../../game/levelDefinition';

export const map10: LevelDefinition = {
  "name": "map10",
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
      5,
      0,
      5,
      4,
      6,
      3,
      6,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      0,
      3,
      1,
      5,
      3,
      1,
      4,
      6,
      1,
      2,
      3,
      6,
      2,
      2,
      5,
      4,
      1,
      3,
      4,
      3,
      0,
      0,
      6,
      8,
      9,
      8,
      10,
      9,
      4,
      1,
      2,
      1,
      6,
      6,
      3,
      6,
      5,
      2,
      3,
      7,
      11,
      8,
      7,
      11,
      4,
      2,
      0,
      2,
      0,
      5,
      3,
      2,
      0,
      1,
      6,
      11,
      8,
      9,
      8,
      11,
      2,
      2,
      4,
      4,
      5,
      5,
      0,
      1,
      5,
      5,
      9,
      9,
      10,
      10,
      9,
      11,
      7,
      0,
      3,
      5,
      3,
      3,
      6,
      6,
      2,
      6,
      11,
      7,
      8,
      11,
      7,
      7,
      9,
      2,
      2,
      2,
      2,
      0,
      2,
      4,
      0,
      2,
      7,
      8,
      8,
      8,
      11,
      9,
      11,
      2,
      6,
      0,
      0,
      6,
      3,
      1,
      2,
      3,
      10,
      7,
      7,
      8,
      11,
      7,
      7,
      2,
      3,
      0,
      2,
      4,
      0,
      0,
      5,
      0,
      11,
      9,
      7,
      8,
      8,
      8,
      9,
      5,
      6,
      4,
      0,
      0,
      5,
      5,
      0,
      2,
      3,
      2,
      0,
      9,
      3,
      6,
      1,
      1,
      2,
      3,
      0,
      4,
      5,
      1,
      6,
      0,
      0,
      4,
      2,
      11,
      6,
      2,
      6,
      6,
      6,
      2,
      6,
      6,
      0,
      4,
      5,
      3,
      5,
      6,
      9,
      11,
      9,
      3,
      2,
      3,
      1,
      1,
      6,
      4,
      6,
      5,
      6,
      0,
      6,
      0,
      9,
      10,
      11,
      2,
      6,
      1,
      2,
      0,
      3,
      4,
      4,
      0,
      0,
      1,
      6,
      2,
      10,
      8,
      7,
      5,
      0,
      2,
      4,
      5,
      2,
      5,
      0,
      6,
      1,
      1,
      0,
      0,
      1,
      6,
      4,
      1,
      6,
      0,
      4,
      4,
      5,
      0
    ],
    "typeName": "Tilemap10"
  },
  "entities": [
    {
      "id": 804,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 810,
      "kind": "wall",
      "typeName": "barX",
      "pos": {
        "x": 260,
        "y": 400
      },
      "cell": {
        "col": 5,
        "row": 8,
        "offset": {
          "x": 10,
          "y": 0
        }
      },
      "size": {
        "x": 50,
        "y": 50
      },
      "data": {
        "initially-visible": true,
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 800,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 801,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 802,
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
      "id": 803,
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
      "id": 806,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 807,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 808,
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
      "id": 809,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 811,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 805,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 788,
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
      "id": 789,
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
      "id": 790,
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
      "id": 812,
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
      "id": 813,
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
      "id": 814,
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
      "id": 815,
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
      "id": 816,
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
      "id": 817,
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
      "id": 818,
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
      "id": 819,
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
      "id": 820,
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
      "id": 821,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 822,
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
      "id": 823,
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
      "id": 824,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 825,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 791,
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
      "id": 792,
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
      "id": 799,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 793,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 794,
      "kind": "trap",
      "typeName": "trap",
      "pos": {
        "x": 350,
        "y": 200
      },
      "cell": {
        "col": 7,
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
      "id": 795,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 796,
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
      "id": 797,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 798,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 77,
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
      "id": 787,
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
      "id": 68,
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
    }
  ]
};

export default map10;
