import type { Layout } from '../../game/layout';

export const map14: Layout = {
  "name": "map14",
  "width": 800,
  "height": 800,
  "sid": 555951631806403,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "Tilemap14",
          "uid": 135,
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
              "data": "3,2,1,3,0,4,6,2,3,1,6,1,5,6,1,2,5,3,1,2x3,1,0,4,3,4,5,2x2,2x5,3,5,6,4,6,1,2x6,10,2x7,9,8,6,5,3,4,1,3,2x0,5,1,0,8,5,4,5,10,5,4,3,0,5,2x4,3,6,3,2,11,5,3,6,7,5,0,4,3,0,5,1,4x11,2x8,9,11,10,6,3,1,6,4,3,6,10,0,5,0,9,1,0,5,10,5,1,0,4,2,6,1,8,6,1,3,9,5,0,1,7,4,5,6,3,6,4,11,8,11,2x1,9,4,0,2x9,10,1,5,6,2,6,2x8,10,8,11,7,2x10,8,9,11,3,5,4,2,4,7,9,10,0,4,7,2,3,10,7,9,3,0,2x2,5,6,9,5,1,4,10,2,6,2,7,5,6,1,2,0,6,2,10,2,5,6,7,4,0,5,10,4,6,2,5,1,6,5,7,11,10,11,10,8,2x9,8,3,1,2x0,4,1,6,5,2,1,0,2x4,5,2,0,1,0,1,3,4,5,0,4,3,6,2,2x1,2,3,2x0,5,4,5"
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
          "type": "channel",
          "uid": 136,
          "world": {
            "x": 552,
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
            "initial-animation": "close",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "bornPlace",
          "uid": 332,
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
          "properties": {},
          "instanceVariables": {}
        },
        {
          "type": "trap",
          "uid": 348,
          "world": {
            "x": 550,
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
          "uid": 349,
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
          "uid": 352,
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
          "uid": 842,
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
          "type": "stoneAngle",
          "uid": 350,
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
          "type": "stoneAngle",
          "uid": 845,
          "world": {
            "x": 350,
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
          "uid": 351,
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
          "type": "carrot1",
          "uid": 333,
          "world": {
            "x": 200,
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
          "type": "carrot1",
          "uid": 334,
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
          "type": "carrot1",
          "uid": 335,
          "world": {
            "x": 300,
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
          "type": "carrot1",
          "uid": 336,
          "world": {
            "x": 400,
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
          "type": "carrot1",
          "uid": 337,
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
          "type": "carrot1",
          "uid": 338,
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
          "type": "carrot1",
          "uid": 339,
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
          "uid": 340,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 341,
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
          "type": "carrot1",
          "uid": 342,
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
          "type": "carrot1",
          "uid": 343,
          "world": {
            "x": 450,
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
          "uid": 344,
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
            "initial-animation": "Animation 1",
            "initial-frame": 0,
            "enable-collisions": true
          },
          "instanceVariables": {}
        },
        {
          "type": "carrot1",
          "uid": 345,
          "world": {
            "x": 399,
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
          "uid": 346,
          "world": {
            "x": 449,
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
          "uid": 347,
          "world": {
            "x": 499,
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
          "uid": 843,
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
          "uid": 844,
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
          "uid": 137,
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

export default map14;
