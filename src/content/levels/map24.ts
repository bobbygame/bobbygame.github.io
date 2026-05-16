import type { Layout } from '../../game/layout';

export const map24: Layout = {
  "name": "map24",
  "width": 800,
  "height": 800,
  "sid": 985284175162346,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "Tilemap24",
          "uid": 1325,
          "world": {
            "x": 0,
            "y": 0,
            "width": 800,
            "height": 800,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {},
          "instanceVariables": {},
          "ownData": {
            "tilemapData": {
              "width": 16,
              "height": 16,
              "max-width": 16,
              "max-height": 16,
              "data": "3,2,0,3,5,3,2,3,6,2,3,5,0,4,2,2x3,2,5,3,0,3,2,6,2x5,2x6,4,2x1,4,6,4,2,2x0,1,6,1,2,1,2,0,6,0,3,1,3,5,1,4,2,0,2,1,2,6,5,2x1,4,1,5,0,3,4,0,2x1,4,1,0,6,1,5,2,2x6,2,1,6,9,10,11,7,9,4,3,5,0,2,3,8,3,1,2,5,7,10,3,8,10,3x5,2x10,7,10,8,2,3,2x7,8,2x11,2x7,2x10,11,8,11,2x7,0,2,0,8,9,2,9,10,1,6,7,11,9,8,5,0,5,4,2,8,9,10,2x7,2x2,3x8,7,6,2x4,1,4,3,0,4,3,4,5,10,4x11,5,4,1,6,2,1,0,2x3,5,1,2x10,9,2x7,6,3,2x4,1,2x3,6,2,3,6,7,11,8,11,8,1,3x0,5,0,5,2x1,0,1,2x9,10,9,11,6,3,2,3x6,0,3x4,2,10,2x7,11,9,5,1,0,5,4,5,3,1,2x5,3,2,1,6,0,2,1,6,5"
            },
            "tile-width": 50,
            "tile-height": 50,
            "tile-x-offset": 0,
            "tile-y-offset": 0,
            "tile-x-spacing": 0,
            "tile-y-spacing": 0
          }
        },
        {
          "type": "conveyorBeltY",
          "uid": 1326,
          "world": {
            "x": 600,
            "y": 550,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "startDown",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 1,
            "isUp": 0
          }
        },
        {
          "type": "conveyorBeltY",
          "uid": 1327,
          "world": {
            "x": 600,
            "y": 600,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "startDown",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 1,
            "isUp": 0
          }
        },
        {
          "type": "bornPlace",
          "uid": 1328,
          "world": {
            "x": 501,
            "y": 603,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {},
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 1330,
          "world": {
            "x": 450,
            "y": 600,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 1331,
          "world": {
            "x": 550,
            "y": 600,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barX",
          "uid": 1332,
          "world": {
            "x": 500,
            "y": 650,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barRightBottom",
          "uid": 1333,
          "world": {
            "x": 550,
            "y": 650,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barLeftBottom",
          "uid": 1334,
          "world": {
            "x": 450,
            "y": 650,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 1335,
          "world": {
            "x": 450,
            "y": 550,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 1336,
          "world": {
            "x": 550,
            "y": 550,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 1337,
          "world": {
            "x": 500,
            "y": 500,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "carrot1",
          "uid": 1338,
          "world": {
            "x": 450,
            "y": 500,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1339,
          "world": {
            "x": 550,
            "y": 500,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 1340,
          "world": {
            "x": 450,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1341,
          "world": {
            "x": 600,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1342,
          "world": {
            "x": 500,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "stone",
          "uid": 1343,
          "world": {
            "x": 550,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "stoneButton",
          "uid": 1344,
          "world": {
            "x": 450,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "stone",
          "uid": 1345,
          "world": {
            "x": 500,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "stoneButton",
          "uid": 1346,
          "world": {
            "x": 550,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "stoneButton",
          "uid": 1347,
          "world": {
            "x": 600,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1348,
          "world": {
            "x": 500,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "4",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 4
          }
        },
        {
          "type": "stone",
          "uid": 1349,
          "world": {
            "x": 550,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "2",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
          }
        },
        {
          "type": "stone",
          "uid": 1350,
          "world": {
            "x": 600,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "2",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
          }
        },
        {
          "type": "stoneButton",
          "uid": 1351,
          "world": {
            "x": 400,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "false",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 0
          }
        },
        {
          "type": "carrot1",
          "uid": 1352,
          "world": {
            "x": 650,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1353,
          "world": {
            "x": 700,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1354,
          "world": {
            "x": 650,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1355,
          "world": {
            "x": 700,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "stoneButton",
          "uid": 1356,
          "world": {
            "x": 650,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "false",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 0
          }
        },
        {
          "type": "channel",
          "uid": 1357,
          "world": {
            "x": 50,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "close",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 1358,
          "world": {
            "x": 100,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1359,
          "world": {
            "x": 100,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1360,
          "world": {
            "x": 100,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1361,
          "world": {
            "x": 100,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1362,
          "world": {
            "x": 100,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "4",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 4
          }
        },
        {
          "type": "trap",
          "uid": 1363,
          "world": {
            "x": 150,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1364,
          "world": {
            "x": 150,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1365,
          "world": {
            "x": 150,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "3",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 3
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1366,
          "world": {
            "x": 150,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "carrot1",
          "uid": 1367,
          "world": {
            "x": 150,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1368,
          "world": {
            "x": 200,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1369,
          "world": {
            "x": 250,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1370,
          "world": {
            "x": 200,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1371,
          "world": {
            "x": 200,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 1372,
          "world": {
            "x": 250,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1373,
          "world": {
            "x": 300,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1374,
          "world": {
            "x": 300,
            "y": 350,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "trap",
          "uid": 1375,
          "world": {
            "x": 300,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1376,
          "world": {
            "x": 300,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "2",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1377,
          "world": {
            "x": 300,
            "y": 450,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "3",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 3
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1378,
          "world": {
            "x": 250,
            "y": 300,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 1
          }
        },
        {
          "type": "stoneAngle",
          "uid": 1379,
          "world": {
            "x": 250,
            "y": 400,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "3",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 3
          }
        },
        {
          "type": "trap",
          "uid": 1380,
          "world": {
            "x": 250,
            "y": 250,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        }
      ]
    },
    {
      "name": "图层 1",
      "overriden": 1,
      "subLayers": [],
      "instances": [
        {
          "type": "bobby",
          "uid": 1329,
          "world": {
            "x": 500,
            "y": 600,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "initially-visible": true,
            "initial-animation": "downStop",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "directionX": 0,
            "directionY": 0,
            "变量1": 0,
            "isXY": 0
          }
        },
      ]
    },
    {
      "name": "图层 2",
      "overriden": 2,
      "subLayers": [],
      "instances": []
    }
  ]
};

export default map24;
