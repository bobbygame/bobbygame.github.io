import type { LevelDefinition } from '../../game/levelDefinition';

export const map30: LevelDefinition = {
  "name": "map30",
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
      3,
      5,
      2,
      5,
      5,
      5,
      0,
      2,
      5,
      6,
      3,
      2,
      2,
      4,
      1,
      3,
      1,
      3,
      1,
      6,
      4,
      4,
      1,
      5,
      4,
      1,
      2,
      5,
      0,
      1,
      2,
      1,
      1,
      4,
      4,
      2,
      5,
      2,
      0,
      4,
      6,
      5,
      3,
      0,
      0,
      0,
      6,
      0,
      4,
      3,
      4,
      4,
      2,
      5,
      5,
      6,
      6,
      2,
      6,
      5,
      0,
      11,
      4,
      4,
      5,
      6,
      4,
      3,
      2,
      2,
      3,
      8,
      8,
      7,
      6,
      5,
      4,
      11,
      0,
      3,
      4,
      2,
      4,
      3,
      1,
      0,
      5,
      10,
      6,
      8,
      0,
      6,
      3,
      8,
      4,
      4,
      5,
      9,
      4,
      3,
      2,
      6,
      2,
      8,
      2,
      9,
      10,
      8,
      8,
      11,
      4,
      5,
      3,
      7,
      9,
      9,
      8,
      9,
      7,
      10,
      8,
      11,
      7,
      6,
      1,
      9,
      4,
      4,
      3,
      7,
      11,
      7,
      7,
      9,
      4,
      0,
      9,
      11,
      6,
      3,
      5,
      8,
      6,
      6,
      6,
      7,
      8,
      10,
      11,
      7,
      4,
      5,
      10,
      8,
      0,
      6,
      1,
      9,
      6,
      6,
      0,
      8,
      8,
      11,
      11,
      10,
      11,
      10,
      9,
      10,
      7,
      10,
      9,
      9,
      5,
      3,
      2,
      7,
      9,
      10,
      10,
      10,
      10,
      11,
      11,
      9,
      11,
      8,
      10,
      7,
      4,
      5,
      1,
      5,
      5,
      1,
      4,
      9,
      8,
      11,
      10,
      7,
      11,
      7,
      10,
      11,
      3,
      3,
      3,
      6,
      0,
      4,
      3,
      1,
      1,
      4,
      0,
      0,
      3,
      6,
      0,
      1,
      0,
      6,
      4,
      3,
      1,
      5,
      1,
      4,
      2,
      1,
      3,
      6,
      2,
      1,
      5,
      3,
      2,
      6,
      2,
      5,
      5,
      0,
      3,
      4,
      3,
      4,
      5,
      5,
      1,
      5,
      5,
      5,
      2,
      6
    ],
    "typeName": "Tilemap30"
  },
  "entities": [
    {
      "id": 1804,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 1805,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1806,
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
      "id": 1807,
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
      "id": 1808,
      "kind": "wall",
      "typeName": "barY",
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
      "id": 1809,
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
      "id": 1810,
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
      "id": 1811,
      "kind": "lock",
      "typeName": "lock",
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1812,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1813,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1814,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1815,
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
      "id": 1816,
      "kind": "stoneButton",
      "typeName": "stoneButton",
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
        "initial-animation": "false",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 0
      },
      "angle": 0
    },
    {
      "id": 1817,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
      "id": 1818,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1819,
      "kind": "bornPlace",
      "typeName": "bornPlace",
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
      "data": {},
      "angle": 0
    },
    {
      "id": 1821,
      "kind": "conveyorY",
      "typeName": "conveyorBeltY",
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
        "initial-animation": "startDown",
        "initial-frame": 0,
        "enable-collisions": true,
        "direction1": 1,
        "isUp": 0
      },
      "angle": 0
    },
    {
      "id": 1822,
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
      "id": 1823,
      "kind": "carrot",
      "typeName": "carrot1",
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
        "initial-animation": "Animation 1",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1824,
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
      "id": 1825,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
      "id": 1826,
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
      "id": 1827,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "1",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 1
      },
      "angle": 0
    },
    {
      "id": 1828,
      "kind": "stoneAngle",
      "typeName": "stoneAngle",
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
        "initial-animation": "3",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1829,
      "kind": "conveyorButton",
      "typeName": "conveyorBeltButton",
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
        "initial-animation": "true",
        "initial-frame": 0,
        "enable-collisions": true,
        "open": 1
      },
      "angle": 0
    },
    {
      "id": 1830,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1831,
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
      "id": 1832,
      "kind": "stone",
      "typeName": "stone",
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
        "initial-animation": "2",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 2
      },
      "angle": 0
    },
    {
      "id": 1833,
      "kind": "channel",
      "typeName": "channel",
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
        "initial-animation": "close",
        "initial-frame": 0,
        "enable-collisions": true
      },
      "angle": 0
    },
    {
      "id": 1834,
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
      "id": 1835,
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
      "id": 1836,
      "kind": "key",
      "typeName": "key",
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
        "initial-animation": "blue",
        "initial-frame": 0,
        "enable-collisions": true,
        "sign": 3
      },
      "angle": 0
    },
    {
      "id": 1837,
      "kind": "wall",
      "typeName": "barLeftBottom",
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
      "id": 1838,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1839,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1840,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1841,
      "kind": "wall",
      "typeName": "barX",
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
      "id": 1842,
      "kind": "wall",
      "typeName": "barRightBottom",
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
      "id": 1843,
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
      "id": 1844,
      "kind": "trap",
      "typeName": "trap",
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
        "initial-animation": "notSharp",
        "initial-frame": 0,
        "enable-collisions": true,
        "isSharp": 0
      },
      "angle": 0
    },
    {
      "id": 1845,
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
      "id": 1846,
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
      "id": 1847,
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
      "id": 1848,
      "kind": "carrot",
      "typeName": "carrot1",
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
      "id": 1820,
      "kind": "player",
      "typeName": "bobby",
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

export default map30;
