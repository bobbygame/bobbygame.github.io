import type { Layout } from '../../game/layout';

export const map20: Layout = {
  "name": "map20",
  "width": 800,
  "height": 800,
  "sid": 793141205581111,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "Tilemap20",
          "uid": 1036,
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
              "data": "5,1,5,1,0,6,0,1,3,2x6,1,2,4,6,3,1,4,1,6,1,2x6,5,1,2,1,3,2x5,3x0,2x2,4,6,1,3,6,5,1,6,2,0,2x3,4,3,6,0,6,11,10,8,9,11,7,10,5,2x0,6,0,3,0,6,4,8,4,0,7,3,4,10,0,5,3,2x5,3,4,5,3,8,2,0,7,0,5,11,5,3x0,3,2x6,4,2,8,9,2x7,2x11,9,5,0,6,2,3,5,1,2x2,11,3,2,9,1,2,11,1,3,1,2x5,2,6,3,1,10,2x0,9,0,3,8,2,1,4,2,5,4,1,2x5,11,3x7,9,8,11,6,3,4,2,6,3,1,3,6,7,0,6,7,4,3,9,2x0,5,0,5,1,4,2x2,8,3,5,7,0,2,7,2,2x0,6,2,6,4,2,6,7,9,11,9,7,11,8,0,6,4,2,4,5,3x3,5,6,0,7,4,0,3,0,2,6,1,2,5,0,5,6,4,1,6,8,2,3,2x4,1,5,2,5,3,5,3,2x6,2,0,2x5,2,0,2,4,1,5,2"
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
          "type": "bornPlace",
          "uid": 1083,
          "world": {
            "x": 350,
            "y": 600,
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
          "type": "channel",
          "uid": 1085,
          "world": {
            "x": 350,
            "y": 700,
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
          "uid": 1086,
          "world": {
            "x": 200,
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
          "uid": 1087,
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
          "uid": 1088,
          "world": {
            "x": 350,
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
          "uid": 1089,
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
          "uid": 1090,
          "world": {
            "x": 200,
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
          "uid": 1091,
          "world": {
            "x": 200,
            "y": 150,
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
          "uid": 1092,
          "world": {
            "x": 350,
            "y": 150,
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
          "uid": 1093,
          "world": {
            "x": 500,
            "y": 150,
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
          "uid": 1094,
          "world": {
            "x": 200,
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
          "type": "carrot1",
          "uid": 1095,
          "world": {
            "x": 200,
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
          "uid": 1096,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1097,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1098,
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
          "uid": 1099,
          "world": {
            "x": 200,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1100,
          "world": {
            "x": 200,
            "y": 200,
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
          "uid": 1101,
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
          "uid": 1102,
          "world": {
            "x": 250,
            "y": 150,
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
          "uid": 1103,
          "world": {
            "x": 300,
            "y": 150,
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
          "uid": 1104,
          "world": {
            "x": 400,
            "y": 150,
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
          "uid": 1105,
          "world": {
            "x": 450,
            "y": 150,
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
          "uid": 1106,
          "world": {
            "x": 500,
            "y": 200,
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
          "uid": 1107,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1108,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1109,
          "world": {
            "x": 400,
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
          "uid": 1110,
          "world": {
            "x": 450,
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
          "uid": 1111,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1112,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1113,
          "world": {
            "x": 400,
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
          "type": "carrot1",
          "uid": 1114,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1115,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 1116,
          "world": {
            "x": 500,
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
          "type": "lock",
          "uid": 1117,
          "world": {
            "x": 350,
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
            "initial-animation": "blue",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 3
          }
        },
        {
          "type": "lock",
          "uid": 1118,
          "world": {
            "x": 500,
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
            "initial-animation": "red",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
          }
        },
        {
          "type": "key",
          "uid": 1119,
          "world": {
            "x": 500,
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
            "initial-animation": "blue",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 3
          }
        },
        {
          "type": "key",
          "uid": 1120,
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
            "initial-animation": "red",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
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
          "uid": 1084,
          "world": {
            "x": 350,
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
        {
          "type": "wall",
          "uid": 1937,
          "world": {
            "x": 250,
            "y": 200,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1938,
          "world": {
            "x": 400,
            "y": 200,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1939,
          "world": {
            "x": 250,
            "y": 350,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1940,
          "world": {
            "x": 400,
            "y": 350,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1941,
          "world": {
            "x": 250,
            "y": 500,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1942,
          "world": {
            "x": 400,
            "y": 500,
            "width": 100,
            "height": 100,
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
          "type": "wall",
          "uid": 1943,
          "world": {
            "x": 550,
            "y": 150,
            "width": 50,
            "height": 500,
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
          "type": "wall",
          "uid": 1944,
          "world": {
            "x": 150,
            "y": 150,
            "width": 50,
            "height": 500,
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
          "type": "wall",
          "uid": 1945,
          "world": {
            "x": 200,
            "y": 100,
            "width": 350,
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
          "type": "wall",
          "uid": 1946,
          "world": {
            "x": 200,
            "y": 650,
            "width": 150,
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
          "type": "wall",
          "uid": 1947,
          "world": {
            "x": 400,
            "y": 650,
            "width": 150,
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
          "type": "wall",
          "uid": 1948,
          "world": {
            "x": 300,
            "y": 700,
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
          "type": "wall",
          "uid": 1949,
          "world": {
            "x": 400,
            "y": 700,
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
          "type": "wall",
          "uid": 1950,
          "world": {
            "x": 350,
            "y": 750,
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
        }
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

export default map20;
