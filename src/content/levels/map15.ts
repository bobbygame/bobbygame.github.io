import type { LevelDefinition } from '../../game/levelDefinition';

export const map15: LevelDefinition = {
  "name": "map15",
  "pixelSize": {
    "x": 800,
    "y": 800
  },
  "requiredCarrots": 10,
  "tilemap": {
    "cols": 16,
    "rows": 16,
    "width": 800,
    "height": 800,
    "tileSize": 50,
    "data": [
      5,
      6,
      0,
      2,
      1,
      4,
      4,
      6,
      6,
      0,
      2,
      6,
      0,
      4,
      0,
      2,
      6,
      3,
      3,
      0,
      3,
      4,
      1,
      0,
      2,
      0,
      0,
      4,
      4,
      0,
      6,
      3,
      0,
      5,
      3,
      5,
      2,
      0,
      0,
      0,
      1,
      0,
      0,
      6,
      6,
      2,
      5,
      5,
      6,
      0,
      3,
      5,
      5,
      0,
      2,
      2,
      0,
      2,
      0,
      3,
      6,
      2,
      4,
      3,
      0,
      2,
      0,
      2,
      5,
      1,
      4,
      3,
      1,
      1,
      6,
      3,
      2,
      4,
      4,
      2,
      6,
      1,
      6,
      1,
      4,
      5,
      9,
      9,
      8,
      10,
      1,
      0,
      10,
      7,
      8,
      0,
      4,
      2,
      5,
      0,
      3,
      3,
      10,
      11,
      8,
      7,
      11,
      11,
      10,
      8,
      9,
      0,
      3,
      8,
      10,
      8,
      2,
      2,
      9,
      3,
      1,
      7,
      2,
      1,
      9,
      7,
      8,
      0,
      1,
      10,
      7,
      10,
      8,
      8,
      9,
      4,
      2,
      7,
      4,
      6,
      4,
      10,
      3,
      6,
      5,
      11,
      9,
      11,
      6,
      0,
      6,
      6,
      1,
      11,
      8,
      10,
      9,
      9,
      8,
      6,
      4,
      5,
      3,
      2,
      5,
      3,
      5,
      5,
      1,
      8,
      10,
      9,
      3,
      8,
      11,
      6,
      0,
      1,
      5,
      6,
      11,
      9,
      8,
      4,
      6,
      10,
      7,
      8,
      9,
      11,
      11,
      1,
      5,
      1,
      1,
      3,
      9,
      7,
      8,
      10,
      10,
      7,
      8,
      10,
      3,
      8,
      9,
      0,
      2,
      1,
      4,
      0,
      9,
      8,
      8,
      3,
      6,
      7,
      9,
      7,
      7,
      10,
      10,
      6,
      5,
      5,
      0,
      0,
      2,
      0,
      3,
      2,
      2,
      5,
      5,
      1,
      2,
      4,
      2,
      0,
      3,
      1,
      2,
      2,
      4,
      2,
      6,
      0,
      4,
      1,
      2,
      6,
      6,
      3,
      2,
      4
    ],
    "typeName": "Tilemap15"
  },
  "entities": [
    {
      "id": 139,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 846,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 847,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 848,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 849,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 850,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 851,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 852,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 853,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 854,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "4",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 4
      },
      "angle": 0
    },
    {
      "id": 855,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "4",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 4
      },
      "angle": 0
    },
    {
      "id": 856,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 857,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 858,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 859,
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
      "id": 860,
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
      "id": 861,
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
      "id": 862,
      "kind": "carrot",
      "typeName": "carrot1",
      "pos": {
        "x": 700,
        "y": 250
      },
      "cell": {
        "col": 14,
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
      "id": 863,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 864,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 2089,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 140,
      "kind": "player",
      "typeName": "bobby",
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

export default map15;
