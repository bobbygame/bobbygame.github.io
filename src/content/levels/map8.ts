import type { LevelDefinition } from '../../game/levelDefinition';

export const map8: LevelDefinition = {
  "name": "map8",
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
      2,
      3,
      6,
      0,
      0,
      3,
      2,
      3,
      4,
      4,
      0,
      1,
      0,
      0,
      3,
      6,
      6,
      0,
      1,
      6,
      2,
      3,
      4,
      6,
      6,
      4,
      1,
      4,
      3,
      2,
      6,
      3,
      0,
      3,
      5,
      2,
      6,
      4,
      5,
      2,
      3,
      0,
      2,
      6,
      0,
      4,
      6,
      5,
      3,
      0,
      1,
      4,
      4,
      0,
      6,
      1,
      2,
      6,
      3,
      0,
      5,
      6,
      4,
      5,
      1,
      1,
      4,
      5,
      6,
      1,
      3,
      1,
      6,
      6,
      5,
      3,
      2,
      0,
      4,
      3,
      1,
      1,
      2,
      2,
      5,
      2,
      5,
      0,
      2,
      1,
      2,
      3,
      5,
      0,
      5,
      5,
      2,
      0,
      1,
      1,
      3,
      2,
      3,
      3,
      1,
      5,
      0,
      2,
      2,
      1,
      4,
      1,
      2,
      6,
      9,
      10,
      11,
      2,
      4,
      8,
      7,
      5,
      0,
      4,
      0,
      2,
      3,
      0,
      4,
      4,
      10,
      9,
      11,
      8,
      7,
      7,
      9,
      8,
      8,
      11,
      9,
      11,
      5,
      5,
      4,
      0,
      11,
      7,
      11,
      4,
      3,
      9,
      9,
      4,
      10,
      8,
      0,
      10,
      6,
      0,
      1,
      5,
      9,
      11,
      8,
      6,
      1,
      11,
      8,
      3,
      9,
      8,
      10,
      7,
      2,
      0,
      6,
      6,
      8,
      9,
      7,
      9,
      10,
      7,
      7,
      10,
      11,
      11,
      7,
      5,
      2,
      3,
      3,
      3,
      8,
      7,
      11,
      0,
      4,
      10,
      11,
      2,
      3,
      10,
      10,
      1,
      3,
      3,
      0,
      2,
      4,
      5,
      3,
      2,
      5,
      6,
      1,
      3,
      2,
      5,
      6,
      6,
      4,
      6,
      1,
      1,
      3,
      3,
      0,
      6,
      4,
      4,
      5,
      6,
      3,
      3,
      5,
      4,
      5,
      6,
      4,
      5,
      0,
      5,
      4,
      2,
      6,
      4,
      2,
      6,
      1,
      1,
      3,
      6,
      4,
      6
    ],
    "typeName": "Tilemap8"
  },
  "entities": [
    {
      "id": 729,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 75,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 730,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startLeft",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 0,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 731,
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
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 732,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 733,
      "kind": "conveyorX",
      "typeName": "conveyorBeltX",
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
        "initial-animation": "startRight",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isLeft": 0
      },
      "angle": 0
    },
    {
      "id": 744,
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
      "id": 745,
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
      "id": 746,
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
      "id": 747,
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
      "id": 748,
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
      "id": 749,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 750,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 751,
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
      "id": 734,
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
      "id": 735,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 736,
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
      "id": 737,
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
      "id": 738,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 739,
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
      "id": 740,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 741,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 742,
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
      "id": 743,
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
      "id": 64,
      "kind": "player",
      "typeName": "bobby",
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

export default map8;
