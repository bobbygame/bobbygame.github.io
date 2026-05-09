import type { Layout } from '../../game/layout';

export const end: Layout = {
  "name": "end",
  "width": 480,
  "height": 640,
  "sid": 997504601721489,
  "layers": [
    {
      "name": "图层 0",
      "overriden": 0,
      "subLayers": [],
      "instances": [
        {
          "type": "conveyorBeltX",
          "uid": 142,
          "world": {
            "x": 241,
            "y": -118,
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
            "isLeft": 0
          }
        },
        {
          "type": "finallyBobby",
          "uid": 141,
          "world": {
            "x": 0,
            "y": 0,
            "width": 480,
            "height": 640,
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
      "name": "图层 2",
      "overriden": 1,
      "subLayers": [],
      "instances": [
        {
          "type": "TheEnd",
          "uid": 1855,
          "world": {
            "x": 33,
            "y": 36,
            "width": 200,
            "height": 50,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "text": "THE END",
            "enable-bbcode": true,
            "font": "comicbd",
            "size": 30,
            "line-height": 0,
            "bold": false,
            "italic": false,
            "color": [
              0,
              1,
              0
            ],
            "horizontal-alignment": "left",
            "vertical-alignment": "top",
            "wrapping": 0,
            "initially-visible": true,
            "origin": 0
          },
          "instanceVariables": {}
        },
        {
          "type": "Sprite",
          "uid": 2084,
          "world": {
            "x": 414,
            "y": 69,
            "width": 100,
            "height": 100,
            "angle": 0,
            "originX": 0.5,
            "originY": 0.5,
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
          "type": "视频",
          "uid": 1864,
          "world": {
            "x": 36,
            "y": 156,
            "width": 410,
            "height": 274,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "webm-source": "",
            "ogg-theora-source": "",
            "h264-source": "https://beiyipu.oss-cn-beijing.aliyuncs.com/videos/dut.mp4",
            "autoplay": 2,
            "play-in-background": false,
            "initially-visible": true
          },
          "instanceVariables": {}
        },
        {
          "type": "Dlut",
          "uid": 150,
          "world": {
            "x": 34,
            "y": 467,
            "width": 110,
            "height": 56,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "text": "DLUT",
            "enable-bbcode": true,
            "font": "bgothm",
            "size": 25,
            "line-height": 0,
            "bold": false,
            "italic": false,
            "color": [
              1,
              1,
              1
            ],
            "horizontal-alignment": "center",
            "vertical-alignment": "center",
            "wrapping": 0,
            "initially-visible": true,
            "origin": 0
          },
          "instanceVariables": {}
        },
        {
          "type": "Myblog",
          "uid": 2085,
          "world": {
            "x": 1,
            "y": 597,
            "width": 244,
            "height": 42,
            "angle": 0,
            "originX": 0,
            "originY": 0,
            "zElevation": 0
          },
          "properties": {
            "text": "Myblog(Click Me)",
            "enable-bbcode": true,
            "font": "bgothm",
            "size": 18,
            "line-height": 0,
            "bold": false,
            "italic": false,
            "color": [
              1,
              1,
              1
            ],
            "horizontal-alignment": "center",
            "vertical-alignment": "center",
            "wrapping": 0,
            "initially-visible": true,
            "origin": 0
          },
          "instanceVariables": {}
        }
      ]
    }
  ]
};

export default end;
