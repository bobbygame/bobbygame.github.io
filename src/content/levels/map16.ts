import type { Layout } from '../../game/layout';

export const map16: Layout = {
  "name": "map16",
  "width": 800,
  "height": 800,
  "sid": 918058428959570,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "Tilemap16",
          "uid": 837,
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
              "data": "3,2,2x0,1,2x3,2,5,0,6,2,3,5,2x4,2x5,2x1,0,5,4,3,1,5,0,6,1,0,2x1,5,2,3,6,1,0,1,0,3,0,6,4,3,4,3x3,2,5,3,4x6,0,3,2,2x5,4,2x2,5,8,11,7,10,11,2x1,4,2,0,2,9,6,3,1,0,11,10,2x9,11,9,1,8,9,8,10,9,2x11,4,0,11,3x8,7,2,0,2x10,11,9,10,2x8,2x4,10,2x11,9,11,2x9,7,8,7,9,10,7,10,1,6,8,11,2x9,11,6,3,11,2x9,10,9,7,9,1,0,2x11,10,11,9,2,4,11,2x8,11,7,9,8,0,6,2x7,9,2x11,4,1,2x9,11,2x7,11,10,6,2,7,9,10,9,8,10,2x9,11,7,2x8,2x9,5,0,8,7,9,10,9,3,4,8,9,11,8,10,11,8,2x5,1,7,2x11,2,0,2,5,3x1,4,2x2,0,2,4,5,0,2,6,5,6,3,6,3,1,2x4,2,1,2x2,3,2x2,3,5,3,2,3x6,5,1,4,1"
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
          "type": "stoneButton",
          "uid": 867,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "channel",
          "uid": 868,
          "world": {
            "x": 150,
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
            "initial-animation": "close",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "conveyorBeltButton",
          "uid": 869,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "barY",
          "uid": 871,
          "world": {
            "x": 50,
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
          "type": "barY",
          "uid": 872,
          "world": {
            "x": 50,
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
          "type": "barY",
          "uid": 873,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 874,
          "world": {
            "x": 50,
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
          "type": "barY",
          "uid": 875,
          "world": {
            "x": 50,
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
          "type": "barLeftBottom",
          "uid": 876,
          "world": {
            "x": 50,
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
          "type": "barLeftTop",
          "uid": 877,
          "world": {
            "x": 50,
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
          "type": "barX",
          "uid": 870,
          "world": {
            "x": 100,
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
          "type": "barX",
          "uid": 878,
          "world": {
            "x": 150,
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
          "type": "barX",
          "uid": 879,
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
          "type": "barRightBottom",
          "uid": 880,
          "world": {
            "x": 250,
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
          "type": "barX",
          "uid": 881,
          "world": {
            "x": 100,
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
          "type": "barX",
          "uid": 882,
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
          "type": "barRightBottom",
          "uid": 883,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "stone",
          "uid": 884,
          "world": {
            "x": 150,
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
          "uid": 886,
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
          "uid": 887,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 888,
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
          "uid": 889,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 890,
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
          "uid": 891,
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
          "uid": 892,
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
          "uid": 893,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 894,
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
          "type": "conveyorBeltX",
          "uid": 885,
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
          "type": "conveyorBeltX",
          "uid": 895,
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
          "type": "conveyorBeltX",
          "uid": 896,
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
          "type": "conveyorBeltX",
          "uid": 897,
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
          "uid": 898,
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
            "initial-animation": "false",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 0
          }
        },
        {
          "type": "barX",
          "uid": 899,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barX",
          "uid": 900,
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
          "uid": 901,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barX",
          "uid": 902,
          "world": {
            "x": 650,
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
          "type": "barRightBottom",
          "uid": 903,
          "world": {
            "x": 700,
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
          "type": "barRightTop",
          "uid": 904,
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
          "type": "barLeftTop",
          "uid": 905,
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
          "type": "conveyorBeltY",
          "uid": 906,
          "world": {
            "x": 400,
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
            "initial-animation": "startUp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 0,
            "isUp": 1
          }
        },
        {
          "type": "conveyorBeltY",
          "uid": 907,
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
            "initial-animation": "startUp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 0,
            "isUp": 1
          }
        },
        {
          "type": "conveyorBeltY",
          "uid": 908,
          "world": {
            "x": 400,
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
            "initial-animation": "startUp",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "direction1": 0,
            "isUp": 1
          }
        },
        {
          "type": "trap",
          "uid": 909,
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
          "type": "barY",
          "uid": 910,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barY",
          "uid": 911,
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
          "type": "barY",
          "uid": 912,
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
          "type": "barY",
          "uid": 913,
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
          "type": "barLeftBottom",
          "uid": 914,
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
          "uid": 915,
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
          "type": "barY",
          "uid": 916,
          "world": {
            "x": 700,
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
          "type": "barY",
          "uid": 917,
          "world": {
            "x": 700,
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
          "type": "barY",
          "uid": 918,
          "world": {
            "x": 700,
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
          "type": "barY",
          "uid": 919,
          "world": {
            "x": 700,
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
          "type": "barX",
          "uid": 920,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "barX",
          "uid": 921,
          "world": {
            "x": 550,
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
          "type": "barX",
          "uid": 922,
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
          "type": "conveyorBeltY",
          "uid": 923,
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
          "type": "conveyorBeltX",
          "uid": 924,
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
          "uid": 925,
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
            "initial-animation": "false",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 0
          }
        },
        {
          "type": "conveyorBeltButton",
          "uid": 926,
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
            "initial-animation": "true",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {
            "open": 1
          }
        },
        {
          "type": "conveyorBeltButton",
          "uid": 927,
          "world": {
            "x": 600,
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
          "uid": 928,
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
          "uid": 929,
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
          "uid": 930,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 931,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 932,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 933,
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
          "type": "carrot1",
          "uid": 934,
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
          "uid": 935,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 936,
          "world": {
            "x": 600,
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
          "uid": 937,
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
          "uid": 938,
          "world": {
            "x": 650,
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
          "uid": 939,
          "world": {
            "x": 650,
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
          "type": "bornPlace",
          "uid": 1189,
          "world": {
            "x": 100,
            "y": 550,
            "width": 50,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {},
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
          "uid": 866,
          "world": {
            "x": 100,
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
          "uid": 1856,
          "world": {
            "x": 0,
            "y": 200,
            "width": 50,
            "height": 450,
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
          "uid": 1857,
          "world": {
            "x": 750,
            "y": 250,
            "width": 50,
            "height": 400,
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
          "uid": 1858,
          "world": {
            "x": 300,
            "y": 400,
            "width": 100,
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
          "uid": 1859,
          "world": {
            "x": 50,
            "y": 150,
            "width": 250,
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
          "uid": 240,
          "world": {
            "x": 400,
            "y": 200,
            "width": 200,
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
          "uid": 1865,
          "world": {
            "x": 650,
            "y": 200,
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
          "uid": 1866,
          "world": {
            "x": 400,
            "y": 650,
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
          "uid": 1867,
          "world": {
            "x": 100,
            "y": 700,
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
          "uid": 1868,
          "world": {
            "x": 300,
            "y": 600,
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
          "uid": 1869,
          "world": {
            "x": 300,
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
          "uid": 1870,
          "world": {
            "x": 50,
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
          "type": "wall",
          "uid": 1871,
          "world": {
            "x": 250,
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
          "type": "wall",
          "uid": 1872,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "wall",
          "uid": 1873,
          "world": {
            "x": 600,
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

export default map16;
