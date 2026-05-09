import type { Layout } from '../../game/layout';

export const map17: Layout = {
  "name": "map17",
  "width": 800,
  "height": 800,
  "sid": 851191882981615,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "Tilemap17",
          "uid": 865,
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
              "data": "3,2x4,3,2,0,5,6,0,1,6,1,3,6,1,0,5,2x3,5,6,1,3,5,4,1,5,3,2x1,6,3,0,3,6,5,3,6,7,2x8,2x2,1,6,1,5,4,2,0,6,5,2x6,9,7,10,2,0,5,2,6,5,6,3,2,1,5,4,3,11,7,9,2x6,2,2x6,2,3,1,4,5,1,2,4,2,11,0,2x5,4,2x1,6,3x3,8,9,8,3,7,9,11,5,3,11,8,11,0,5,2,3,7,10,7,9,3x8,2x9,7,8,10,3,0,5,4,8,10,8,0,8,10,7,6,3,11,7,11,0,1,5,2,2x6,7,1,2,7,6,5,0,11,1,4,5,2x2,0,10,7,9,8,10,8,11,2x8,10,9,6,2x0,3,4,11,2x8,0,2x11,10,1,9,10,11,1,2x2,5,2,8,11,10,5,10,2x8,6,9,7,11,1,6,1,6,5,1,5,0,6,2,2x3,1,4,3,1,5,0,1,3,0,1,5,3,4,2,6,2,4,6,3,6,5,3,0,2,3,4,6,2x5,3,0,6,4,5,6,4,5,4,0"
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
          "uid": 941,
          "world": {
            "x": 350,
            "y": 350,
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
          "type": "stone",
          "uid": 943,
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
          "uid": 944,
          "world": {
            "x": 350,
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
          "type": "stone",
          "uid": 945,
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
            "initial-animation": "2",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "sign": 2
          }
        },
        {
          "type": "trap",
          "uid": 946,
          "world": {
            "x": 450,
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
          "type": "stone",
          "uid": 947,
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
          "uid": 948,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "trap",
          "uid": 949,
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
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "conveyorBeltX",
          "uid": 950,
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
            "initial-animation": "startLeft",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 0,
            "isLeft": 1
          }
        },
        {
          "type": "channel",
          "uid": 951,
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
            "initial-animation": "close",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 952,
          "world": {
            "x": 350,
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
          "type": "conveyorBeltX",
          "uid": 953,
          "world": {
            "x": 250,
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
            "initial-animation": "startLeft",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 0,
            "isLeft": 1
          }
        },
        {
          "type": "conveyorBeltButton",
          "uid": 954,
          "world": {
            "x": 150,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "trap",
          "uid": 955,
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
            "initial-animation": "notSharp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "isSharp": 0
          }
        },
        {
          "type": "stoneButton",
          "uid": 956,
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
            "initial-animation": "false",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 0
          }
        },
        {
          "type": "stoneButton",
          "uid": 957,
          "world": {
            "x": 350,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "carrot1",
          "uid": 958,
          "world": {
            "x": 300,
            "y": 100,
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
          "uid": 959,
          "world": {
            "x": 350,
            "y": 100,
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
          "uid": 960,
          "world": {
            "x": 400,
            "y": 100,
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
          "uid": 961,
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
          "uid": 962,
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
          "uid": 963,
          "world": {
            "x": 600,
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
          "uid": 964,
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
          "uid": 965,
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
          "uid": 966,
          "world": {
            "x": 650,
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
          "uid": 967,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 968,
          "world": {
            "x": 300,
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
          "uid": 969,
          "world": {
            "x": 350,
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
          "uid": 970,
          "world": {
            "x": 400,
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
          "uid": 971,
          "world": {
            "x": 300,
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
          "type": "carrot1",
          "uid": 972,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 973,
          "world": {
            "x": 400,
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
          "type": "carrot1",
          "uid": 974,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 975,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 976,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 977,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 978,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
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
          "uid": 942,
          "world": {
            "x": 350,
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
          "uid": 1874,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "wall",
          "uid": 1875,
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
          "type": "wall",
          "uid": 1876,
          "world": {
            "x": 400,
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
          "type": "wall",
          "uid": 1877,
          "world": {
            "x": 600,
            "y": 450,
            "width": 100,
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
          "uid": 1878,
          "world": {
            "x": 450,
            "y": 400,
            "width": 100,
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
          "uid": 1879,
          "world": {
            "x": 250,
            "y": 450,
            "width": 100,
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
          "uid": 1880,
          "world": {
            "x": 400,
            "y": 450,
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
          "uid": 1881,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "wall",
          "uid": 1882,
          "world": {
            "x": 450,
            "y": 300,
            "width": 100,
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
          "uid": 1883,
          "world": {
            "x": 100,
            "y": 450,
            "width": 100,
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
          "uid": 1884,
          "world": {
            "x": 250,
            "y": 550,
            "width": 50,
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
          "uid": 1885,
          "world": {
            "x": 450,
            "y": 550,
            "width": 50,
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
          "uid": 1886,
          "world": {
            "x": 300,
            "y": 50,
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
          "uid": 1887,
          "world": {
            "x": 100,
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
          "uid": 1888,
          "world": {
            "x": 300,
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
          "uid": 1889,
          "world": {
            "x": 500,
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
          "uid": 1890,
          "world": {
            "x": 550,
            "y": 250,
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
          "uid": 1891,
          "world": {
            "x": 100,
            "y": 250,
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
          "uid": 1892,
          "world": {
            "x": 50,
            "y": 300,
            "width": 50,
            "height": 150,
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
          "uid": 1893,
          "world": {
            "x": 50,
            "y": 500,
            "width": 50,
            "height": 150,
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
          "uid": 1894,
          "world": {
            "x": 650,
            "y": 500,
            "width": 50,
            "height": 150,
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
          "uid": 1895,
          "world": {
            "x": 700,
            "y": 300,
            "width": 50,
            "height": 150,
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
          "uid": 1896,
          "world": {
            "x": 450,
            "y": 100,
            "width": 50,
            "height": 150,
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
          "uid": 1897,
          "world": {
            "x": 250,
            "y": 100,
            "width": 50,
            "height": 150,
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

export default map17;
