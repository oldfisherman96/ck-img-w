export const FULL_MATCH = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Full Match Thumbnail</title>
</head>

<body>
  <div id="bm"> </div>
  <script src="/thumbnails/js/lottie.js"></script>
  <script>
    var away_logo = '<%= query.away_logo %>';
    var home_logo = '<%= query.home_logo %>';
    var away_name = '<%= query.away_name %>';
    var home_name = '<%= query.home_name %>';
    var league_name = '<%= query.league_name %>';
    var date = '<%= query.date %>';
    var time = '<%= query.time %>';
    var commentator = '<%= query.commentator %>';
    var is_live = '<%= query.is_live %>';
    var sport_type = '<%= query.sport_type %>';

    var animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: {
        "v": "5.9.0",
        "fr": 30,
        "ip": 0,
        "op": 5,
        "w": 670,
        "h": 312,
        "nm": "Thumb CK Long",
        "ddd": 0,
        "assets": [{
            "id": "image_0",
            "w": 110,
            "h": 126,
            "u": "/thumbnails/images/",
            "p": "bi-a.png",
            "e": 0
          },
          {
            "id": "image_1",
            "w": 111,
            "h": 122,
            "u": "/thumbnails/images/",
            "p": "bong-ban.png",
            "e": 0
          },
          {
            "id": "image_2",
            "w": 111,
            "h": 126,
            "u": "/thumbnails/images/",
            "p": "bong-chuyen.png",
            "e": 0
          },
          {
            "id": "image_3",
            "w": 110,
            "h": 125,
            "u": "/thumbnails/images/",
            "p": "bong-da.png",
            "e": 0
          },
          {
            "id": "image_4",
            "w": 110,
            "h": 126,
            "u": "/thumbnails/images/",
            "p": "bong-ro.png",
            "e": 0
          },
          {
            "id": "image_5",
            "w": 110,
            "h": 120,
            "u": "/thumbnails/images/",
            "p": "cau-long.png",
            "e": 0
          },
          {
            "id": "image_6",
            "w": 110,
            "h": 126,
            "u": "/thumbnails/images/",
            "p": "dua-xe.png",
            "e": 0
          },
          {
            "id": "image_7",
            "w": 111,
            "h": 117,
            "u": "/thumbnails/images/",
            "p": "esport.png",
            "e": 0
          },
          {
            "id": "image_8",
            "w": 110,
            "h": 125,
            "u": "/thumbnails/images/",
            "p": "tennis.png",
            "e": 0
          },
          {
            "id": "image_9",
            "w": 1000,
            "h": 1000,
            "p": home_logo,
            "e": 0
          },
          {
            "id": "image_10",
            "w": 1000,
            "h": 1000,
            "p": away_logo,
            "e": 0
          },
          {
            "id": "image_11",
            "w": 779,
            "h": 538,
            "u": "/thumbnails/images/",
            "p": "element-1.png",
            "e": 0
          },
          {
            "id": "image_12",
            "w": 1012,
            "h": 524,
            "u": "/thumbnails/images/",
            "p": "bg.jpg",
            "e": 0
          },
          {
            "id": "comp_0",
            "nm": "icon 2",
            "fr": 30,
            "layers": [{
                "ddd": 0,
                "ind": 1,
                "ty": 2,
                "nm": "bi-a.png",
                "cl": "png",
                "refId": "image_0",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('billard')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 63, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 2,
                "ty": 2,
                "nm": "bong-ban.png",
                "cl": "png",
                "refId": "image_1",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('pingpong')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55.5, 61, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 3,
                "ty": 2,
                "nm": "bong-chuyen.png",
                "cl": "png",
                "refId": "image_2",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('volleyball')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55.5, 63, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 4,
                "ty": 2,
                "nm": "bong-da.png",
                "cl": "png",
                "refId": "image_3",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('football')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 62.5, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 5,
                "ty": 2,
                "nm": "bong-ro.png",
                "cl": "png",
                "refId": "image_4",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('basketball')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 63, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 6,
                "ty": 2,
                "nm": "cau-long.png",
                "cl": "png",
                "refId": "image_5",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('badminton')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 60, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 7,
                "ty": 2,
                "nm": "dua-xe.png",
                "cl": "png",
                "refId": "image_6",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('racing')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 63, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 8,
                "ty": 2,
                "nm": "esport.png",
                "cl": "png",
                "refId": "image_7",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('esport')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55.5, 58.5, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 9,
                "ty": 2,
                "nm": "tennis.png",
                "cl": "png",
                "refId": "image_8",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11,
                    "x": "var $bm_rt;\\nif (comp('Thumb CK Long').layer('Settings').effect('null')('Checkbox') == 0) {\\n    $bm_rt = $bm_mul(comp('Thumb CK Long').layer('Settings').effect('tennis')('Checkbox'), 100);\\n} else {\\n    $bm_rt = 0;\\n}"
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [100, 100, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [55, 62.5, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [158, 158, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              }
            ]
          },
          {
            "id": "comp_1",
            "nm": "Logo Comp Team 1",
            "fr": 30,
            "layers": [{
              "ddd": 0,
              "ind": 1,
              "ty": 2,
              "nm": "team-1-logo.png",
              "cl": "png",
              "refId": "image_9",
              "sr": 1,
              "ks": {
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 11
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 10
                },
                "p": {
                  "a": 0,
                  "k": [150, 150, 0],
                  "ix": 2,
                  "l": 2
                },
                "a": {
                  "a": 0,
                  "k": [500, 500, 0],
                  "ix": 1,
                  "l": 2
                },
                "s": {
                  "a": 0,
                  "k": [30, 30, 100],
                  "ix": 6,
                  "l": 2
                }
              },
              "ao": 0,
              "ip": 0,
              "op": 30,
              "st": 0,
              "bm": 0
            }]
          },
          {
            "id": "comp_2",
            "nm": "Logo Comp Team 2",
            "fr": 30,
            "layers": [{
              "ddd": 0,
              "ind": 1,
              "ty": 2,
              "nm": "team-2-logo.png",
              "cl": "png",
              "refId": "image_10",
              "sr": 1,
              "ks": {
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 11
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 10
                },
                "p": {
                  "a": 0,
                  "k": [150, 150, 0],
                  "ix": 2,
                  "l": 2
                },
                "a": {
                  "a": 0,
                  "k": [500, 500, 0],
                  "ix": 1,
                  "l": 2
                },
                "s": {
                  "a": 0,
                  "k": [30, 30, 100],
                  "ix": 6,
                  "l": 2
                }
              },
              "ao": 0,
              "ip": 0,
              "op": 30,
              "st": 0,
              "bm": 0
            }]
          },
          {
            "id": "comp_3",
            "nm": "Live Icon",
            "fr": 30,
            "layers": [{
                "ddd": 0,
                "ind": 1,
                "ty": 4,
                "nm": "Asset 1 Outlines",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [501.75, 65.75, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [9, 5.5, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [292, 292, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "shapes": [{
                  "ty": "gr",
                  "it": [{
                      "ind": 0,
                      "ty": "sh",
                      "ix": 1,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [-0.127, -0.163],
                            [0, -1.134],
                            [0.684, -0.872],
                            [0.111, 0],
                            [0.068, 0.054],
                            [-0.128, 0.163],
                            [0, 0.968],
                            [0.58, 0.74],
                            [-0.163, 0.127]
                          ],
                          "o": [
                            [0.684, 0.872],
                            [0, 1.135],
                            [-0.074, 0.094],
                            [-0.081, 0],
                            [-0.163, -0.127],
                            [0.58, -0.74],
                            [0, -0.967],
                            [-0.128, -0.163],
                            [0.163, -0.13]
                          ],
                          "v": [
                            [4.055, -3.111],
                            [5.115, 0],
                            [4.055, 3.112],
                            [3.76, 3.255],
                            [3.529, 3.175],
                            [3.465, 2.649],
                            [4.365, 0],
                            [3.465, -2.648],
                            [3.529, -3.174]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 1",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ind": 1,
                      "ty": "sh",
                      "ix": 2,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [0, -1.914],
                            [1.17, -1.519],
                            [0.113, 0],
                            [0.068, 0.052],
                            [-0.126, 0.164],
                            [0, 1.748],
                            [1.067, 1.388],
                            [-0.164, 0.126],
                            [-0.126, -0.164]
                          ],
                          "o": [
                            [0, 1.915],
                            [-0.074, 0.096],
                            [-0.079, 0],
                            [-0.164, -0.127],
                            [1.067, -1.387],
                            [0, -1.747],
                            [-0.126, -0.164],
                            [0.164, -0.126],
                            [1.17, 1.519]
                          ],
                          "v": [
                            [8.645, 0],
                            [6.857, 5.249],
                            [6.559, 5.395],
                            [6.331, 5.318],
                            [6.263, 4.792],
                            [7.895, 0],
                            [6.263, -4.791],
                            [6.331, -5.317],
                            [6.857, -5.248]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 2",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ind": 2,
                      "ty": "sh",
                      "ix": 3,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [0.128, -0.163],
                            [0, -0.968],
                            [-0.58, -0.739],
                            [0.163, -0.128],
                            [0.08, 0],
                            [0.074, 0.094],
                            [0, 1.136],
                            [-0.683, 0.871],
                            [-0.164, -0.13]
                          ],
                          "o": [
                            [-0.58, 0.739],
                            [0, 0.969],
                            [0.128, 0.163],
                            [-0.069, 0.054],
                            [-0.112, 0],
                            [-0.683, -0.87],
                            [0, -1.135],
                            [0.127, -0.163],
                            [0.163, 0.127]
                          ],
                          "v": [
                            [-3.465, -2.648],
                            [-4.365, 0],
                            [-3.465, 2.649],
                            [-3.528, 3.176],
                            [-3.759, 3.256],
                            [-4.055, 3.112],
                            [-5.115, 0],
                            [-4.055, -3.111],
                            [-3.528, -3.174]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 3",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ind": 3,
                      "ty": "sh",
                      "ix": 4,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [0.126, -0.164],
                            [0, -1.747],
                            [-1.068, -1.387],
                            [0.165, -0.127],
                            [0.08, 0],
                            [0.075, 0.096],
                            [0, 1.915],
                            [-1.169, 1.519],
                            [-0.164, -0.126]
                          ],
                          "o": [
                            [-1.068, 1.388],
                            [0, 1.748],
                            [0.126, 0.164],
                            [-0.068, 0.052],
                            [-0.113, 0],
                            [-1.169, -1.519],
                            [0, -1.914],
                            [0.127, -0.164],
                            [0.165, 0.126]
                          ],
                          "v": [
                            [-6.263, -4.791],
                            [-7.895, 0],
                            [-6.263, 4.792],
                            [-6.332, 5.318],
                            [-6.56, 5.395],
                            [-6.858, 5.249],
                            [-8.645, 0],
                            [-6.858, -5.248],
                            [-6.332, -5.317]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 4",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ind": 4,
                      "ty": "sh",
                      "ix": 5,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [0.14, 0],
                            [0, 0],
                            [0, 0],
                            [0.14, 0],
                            [0, 0.14],
                            [0, 0],
                            [0, 0],
                            [0, 0.14],
                            [-0.14, 0],
                            [0, 0],
                            [0, 0],
                            [-0.14, 0],
                            [0, -0.14],
                            [0, 0],
                            [0, 0],
                            [0, -0.14]
                          ],
                          "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0.14],
                            [-0.14, 0],
                            [0, 0],
                            [0, 0],
                            [-0.14, 0],
                            [0, -0.14],
                            [0, 0],
                            [0, 0],
                            [0, -0.14],
                            [0.14, 0],
                            [0, 0],
                            [0, 0],
                            [0.14, 0],
                            [0, 0.14]
                          ],
                          "v": [
                            [1.34, 0.3],
                            [0.25, 0.3],
                            [0.25, 1.39],
                            [0, 1.64],
                            [-0.25, 1.39],
                            [-0.25, 0.3],
                            [-1.34, 0.3],
                            [-1.59, 0.05],
                            [-1.34, -0.2],
                            [-0.25, -0.2],
                            [-0.25, -1.29],
                            [0, -1.54],
                            [0.25, -1.29],
                            [0.25, -0.2],
                            [1.34, -0.2],
                            [1.59, 0.05]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 5",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ind": 5,
                      "ty": "sh",
                      "ix": 6,
                      "ks": {
                        "a": 0,
                        "k": {
                          "i": [
                            [1.5, 0],
                            [0, -1.5],
                            [-1.5, 0],
                            [0, 1.5]
                          ],
                          "o": [
                            [-1.5, 0],
                            [0, 1.5],
                            [1.5, 0],
                            [0, -1.5]
                          ],
                          "v": [
                            [0, -2.72],
                            [-2.72, 0],
                            [0, 2.72],
                            [2.72, 0]
                          ],
                          "c": true
                        },
                        "ix": 2
                      },
                      "nm": "Path 6",
                      "mn": "ADBE Vector Shape - Group",
                      "hd": false
                    },
                    {
                      "ty": "mm",
                      "mm": 1,
                      "nm": "Merge Paths 1",
                      "mn": "ADBE Vector Filter - Merge",
                      "hd": false
                    },
                    {
                      "ty": "fl",
                      "c": {
                        "a": 0,
                        "k": [1, 1, 1, 1],
                        "ix": 4
                      },
                      "o": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "r": 1,
                      "bm": 0,
                      "nm": "Fill 1",
                      "mn": "ADBE Vector Graphic - Fill",
                      "hd": false
                    },
                    {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [8.645, 5.395],
                        "ix": 2
                      },
                      "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                      },
                      "s": {
                        "a": 0,
                        "k": [100, 100],
                        "ix": 3
                      },
                      "r": {
                        "a": 0,
                        "k": 0,
                        "ix": 6
                      },
                      "o": {
                        "a": 0,
                        "k": 100,
                        "ix": 7
                      },
                      "sk": {
                        "a": 0,
                        "k": 0,
                        "ix": 4
                      },
                      "sa": {
                        "a": 0,
                        "k": 0,
                        "ix": 5
                      },
                      "nm": "Transform"
                    }
                  ],
                  "nm": "Group 1",
                  "np": 10,
                  "cix": 2,
                  "bm": 0,
                  "ix": 1,
                  "mn": "ADBE Vector Group",
                  "hd": false
                }],
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 2,
                "ty": 5,
                "nm": "Live",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [581.75, 78.75, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [0, 0, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "t": {
                  "d": {
                    "k": [{
                      "s": {
                        "s": 38,
                        "f": "SBGPremierLeague-Regular",
                        "t": "Live",
                        "ca": 0,
                        "j": 2,
                        "tr": 10,
                        "lh": 45.6000022888184,
                        "ls": 0,
                        "fc": [1, 1, 1]
                      },
                      "t": 0
                    }]
                  },
                  "p": {},
                  "m": {
                    "g": 1,
                    "a": {
                      "a": 0,
                      "k": [0, 0],
                      "ix": 2
                    }
                  },
                  "a": []
                },
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              },
              {
                "ddd": 0,
                "ind": 3,
                "ty": 4,
                "nm": "Shape Layer 1",
                "sr": 1,
                "ks": {
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                  },
                  "p": {
                    "a": 0,
                    "k": [336, 288.5, 0],
                    "ix": 2,
                    "l": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [0, 0, 0],
                    "ix": 1,
                    "l": 2
                  },
                  "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6,
                    "l": 2
                  }
                },
                "ao": 0,
                "shapes": [{
                  "ty": "gr",
                  "it": [{
                      "ty": "rc",
                      "d": 1,
                      "s": {
                        "a": 0,
                        "k": [187.5, 71],
                        "ix": 2
                      },
                      "p": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 3
                      },
                      "r": {
                        "a": 0,
                        "k": 235,
                        "ix": 4
                      },
                      "nm": "Rectangle Path 1",
                      "mn": "ADBE Vector Shape - Rect",
                      "hd": false
                    },
                    {
                      "ty": "fl",
                      "c": {
                        "a": 0,
                        "k": [0.933333396912, 0.113725498319, 0.098039224744, 1],
                        "ix": 4
                      },
                      "o": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "r": 1,
                      "bm": 0,
                      "nm": "Fill 1",
                      "mn": "ADBE Vector Graphic - Fill",
                      "hd": false
                    },
                    {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [211.75, -224],
                        "ix": 2
                      },
                      "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                      },
                      "s": {
                        "a": 0,
                        "k": [100, 100],
                        "ix": 3
                      },
                      "r": {
                        "a": 0,
                        "k": 0,
                        "ix": 6
                      },
                      "o": {
                        "a": 0,
                        "k": 100,
                        "ix": 7
                      },
                      "sk": {
                        "a": 0,
                        "k": 0,
                        "ix": 4
                      },
                      "sa": {
                        "a": 0,
                        "k": 0,
                        "ix": 5
                      },
                      "nm": "Transform"
                    }
                  ],
                  "nm": "Rectangle 1",
                  "np": 3,
                  "cix": 2,
                  "bm": 0,
                  "ix": 1,
                  "mn": "ADBE Vector Group",
                  "hd": false
                }],
                "ip": 0,
                "op": 5,
                "st": 0,
                "bm": 0
              }
            ]
          }
        ],
        "fonts": {
          "list": [{
              "origin": 3,
              "fPath": "/thumbnails/fonts/SBG-PremierLeague-Regular.woff2",
              "fClass": "",
              "fFamily": "SBG-Premier League Regular",
              "fWeight": "",
              "fStyle": "Regular",
              "fName": "SBGPremierLeague-Regular",
              "ascent": 75.9994506835938
            },
            {
              "origin": 3,
              "fPath": "/thumbnails/fonts/SBG-PremierLeague-Bold.woff2",
              "fClass": "",
              "fFamily": "SBG-Premier League Bold",
              "fWeight": "",
              "fStyle": "Bold",
              "fName": "SBGPremierLeague-Bold",
              "ascent": 75.9994506835938
            }
          ]
        },
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 3,
            "nm": "Settings",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [335, 156, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [336, 234, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "ef": [{
                "ty": 5,
                "nm": "event",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 1,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'event' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "live",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 2,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": is_live ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "billard",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 3,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'billard' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "pingpong",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 4,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'pingpong' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "volleyball",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 5,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'volleyball' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "football",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 6,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'football' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "basketball",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 7,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'basketball' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "badminton",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 8,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'badminton' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "racing",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 9,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'racing' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "esport",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 10,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'esport' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "tennis",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 11,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": sport_type === 'tennis' ? 1 : 0,
                    "ix": 1
                  }
                }]
              },
              {
                "ty": 5,
                "nm": "null",
                "np": 3,
                "mn": "ADBE Checkbox Control",
                "ix": 12,
                "en": 1,
                "ef": [{
                  "ty": 7,
                  "nm": "Checkbox",
                  "mn": "ADBE Checkbox Control-0001",
                  "ix": 1,
                  "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 1
                  }
                }]
              }
            ],
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 2,
            "ty": 0,
            "nm": "icon 2",
            "refId": "comp_0",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [37, 13, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [100, 100, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [50, 50, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "w": 200,
            "h": 200,
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 3,
            "ty": 5,
            "nm": "event",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100);"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [343.715, 218, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [3.5, -0.68, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "sz": [514, 194],
                    "ps": [-256.784973144531, -32.679759979248],
                    "s": 28,
                    "f": "SBGPremierLeague-Bold",
                    "t": home_name,
                    "ca": 0,
                    "j": 2,
                    "tr": 10,
                    "lh": 33.6000022888184,
                    "ls": 0,
                    "fc": [0.043, 0.024, 0.137]
                  },
                  "t": 0
                }],
                "x": "var $bm_rt;\\n$bm_rt = thisComp.layer('Team 1').text.sourceText;"
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 4,
            "ty": 0,
            "nm": "logo event",
            "refId": "comp_1",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100);"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [335, 117.736, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [150, 150, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [35, 35, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "w": 300,
            "h": 300,
            "ip": 0,
            "op": 30,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 5,
            "ty": 0,
            "nm": "Logo Comp Team 2",
            "refId": "comp_2",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [56.5, 260.97, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [150, 150, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [22, 22, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "w": 300,
            "h": 300,
            "ip": 0,
            "op": 30,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 6,
            "ty": 5,
            "nm": "Team 2",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [108, 269.78, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [4, 0.32, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "s": 28,
                    "f": "SBGPremierLeague-Bold",
                    "t": away_name,
                    "ca": 0,
                    "j": 0,
                    "tr": 10,
                    "lh": 33.6000022888184,
                    "ls": 0,
                    "fc": [0.043, 0.024, 0.137]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 7,
            "ty": 0,
            "nm": "Logo Comp Team 1",
            "refId": "comp_1",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [56.25, 115.986, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [150, 150, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [22, 22, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "w": 300,
            "h": 300,
            "ip": 0,
            "op": 30,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 8,
            "ty": 5,
            "nm": "Team 1",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [107.75, 125.264, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [3.5, -0.68, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "s": 28,
                    "f": "SBGPremierLeague-Bold",
                    "t": home_name,
                    "ca": 0,
                    "j": 0,
                    "tr": 10,
                    "lh": 33.6000022888184,
                    "ls": 0,
                    "fc": [0.043, 0.024, 0.137]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 9,
            "ty": 5,
            "nm": "League",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('event')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [103.5, 48.25, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [3.5, -0.39, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "sz": [296, 31],
                    "ps": [0, -19.7598571777344],
                    "s": 26,
                    "f": "SBGPremierLeague-Regular",
                    "t": league_name,
                    "ca": 0,
                    "j": 0,
                    "tr": 10,
                    "lh": 31.2000007629395,
                    "ls": 0,
                    "fc": [0.494, 0.492, 0.492]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 10,
            "ty": 0,
            "nm": "Live Icon",
            "refId": "comp_3",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Settings').effect('live')('Checkbox'), 100);"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [403, 180, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [336, 234, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [80, 80, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "w": 672,
            "h": 468,
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 11,
            "ty": 5,
            "nm": "Date",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('live')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [646.5, 53, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [-1.5, 0.43, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "s": 35,
                    "f": "SBGPremierLeague-Regular",
                    "t": date,
                    "ca": 0,
                    "j": 1,
                    "tr": 0,
                    "lh": 42,
                    "ls": 0,
                    "fc": [0.494, 0.492, 0.492]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 12,
            "ty": 5,
            "nm": "Time",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\\n$bm_rt = $bm_sub(100, $bm_mul(thisComp.layer('Settings').effect('live')('Checkbox'), 100));"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [541, 54.5, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [-0.9, 0.6, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "s": 50,
                    "f": "SBGPremierLeague-Bold",
                    "t": time,
                    "ca": 0,
                    "j": 1,
                    "tr": 10,
                    "lh": 60.0000038146973,
                    "ls": 0,
                    "fc": [0.047, 0.027, 0.141]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 13,
            "ty": 5,
            "nm": "BLV",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [362, 197.25, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1,
                "l": 2,
                "x": "var $bm_rt;\\nvar i;\\n$bm_rt = i = thisComp.layer('Settings').effect('event')('Checkbox');\\nif (i == 0) {\\n    $bm_rt = [\\n        0,\\n        0\\n    ];\\n} else {\\n    $bm_rt = [\\n        0,\\n        -80\\n    ];\\n}"
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "sz": [225, 147.029846191406],
                    "ps": [0, -21.2798461914062],
                    "s": 28,
                    "f": "SBGPremierLeague-Bold",
                    "t": commentator,
                    "ca": 0,
                    "j": 0,
                    "tr": 5,
                    "lh": 33.6000022888184,
                    "ls": 0,
                    "fc": [0.886, 0.753, 0.51]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 14,
            "ty": 5,
            "nm": "Watch",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [169, 198.75, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1,
                "l": 2,
                "x": "var $bm_rt;\\nvar i;\\n$bm_rt = i = thisComp.layer('Settings').effect('event')('Checkbox');\\nif (i == 0) {\\n    $bm_rt = [\\n        0,\\n        0\\n    ];\\n} else {\\n    $bm_rt = [\\n        0,\\n        -80\\n    ];\\n}"
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [{
                  "s": {
                    "s": 28,
                    "f": "SBGPremierLeague-Regular",
                    "t": "Watch",
                    "ca": 0,
                    "j": 2,
                    "tr": 10,
                    "lh": 33.6000022888184,
                    "ls": 0,
                    "fc": [0.655, 0.655, 0.655]
                  },
                  "t": 0
                }]
              },
              "p": {},
              "m": {
                "g": 1,
                "a": {
                  "a": 0,
                  "k": [0, 0],
                  "ix": 2
                }
              },
              "a": []
            },
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 15,
            "ty": 4,
            "nm": "Shape Layer 2",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [54.75, 143.5, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1,
                "l": 2,
                "x": "var $bm_rt;\\nvar i;\\n$bm_rt = i = thisComp.layer('Settings').effect('event')('Checkbox');\\nif (i == 0) {\\n    $bm_rt = [\\n        0,\\n        0\\n    ];\\n} else {\\n    $bm_rt = [\\n        0,\\n        -80\\n    ];\\n}"
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [{
                  "ty": "sr",
                  "sy": 2,
                  "d": 1,
                  "pt": {
                    "a": 0,
                    "k": 3,
                    "ix": 3
                  },
                  "p": {
                    "a": 0,
                    "k": [0, 0],
                    "ix": 4
                  },
                  "r": {
                    "a": 0,
                    "k": 90,
                    "ix": 5
                  },
                  "or": {
                    "a": 0,
                    "k": 19,
                    "ix": 7
                  },
                  "os": {
                    "a": 0,
                    "k": 0,
                    "ix": 9
                  },
                  "ix": 1,
                  "nm": "Polystar Path 1",
                  "mn": "ADBE Vector Shape - Star",
                  "hd": false
                },
                {
                  "ty": "fl",
                  "c": {
                    "a": 0,
                    "k": [0.886274576187, 0.752941250801, 0.509803950787, 1],
                    "ix": 4
                  },
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 5
                  },
                  "r": 1,
                  "bm": 0,
                  "nm": "Fill 1",
                  "mn": "ADBE Vector Graphic - Fill",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": {
                    "a": 0,
                    "k": [186.5, 46.5],
                    "ix": 2
                  },
                  "a": {
                    "a": 0,
                    "k": [0, 0],
                    "ix": 1
                  },
                  "s": {
                    "a": 0,
                    "k": [70, 100],
                    "ix": 3
                  },
                  "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 6
                  },
                  "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 7
                  },
                  "sk": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                  },
                  "sa": {
                    "a": 0,
                    "k": 0,
                    "ix": 5
                  },
                  "nm": "Transform"
                }
              ],
              "nm": "Polystar 1",
              "np": 3,
              "cix": 2,
              "bm": 0,
              "ix": 1,
              "mn": "ADBE Vector Group",
              "hd": false
            }],
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 16,
            "ty": 4,
            "nm": "Shape Layer 3",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [335, 143.5, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1,
                "l": 2,
                "x": "var $bm_rt;\\nvar i;\\n$bm_rt = i = thisComp.layer('Settings').effect('event')('Checkbox');\\nif (i == 0) {\\n    $bm_rt = [\\n        0,\\n        0\\n    ];\\n} else {\\n    $bm_rt = [\\n        0,\\n        -80\\n    ];\\n}"
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [0, 0],
                          [0, 0]
                        ],
                        "o": [
                          [0, 0],
                          [0, 0]
                        ],
                        "v": [
                          [-231.5, 45.5],
                          [-180, 45.5]
                        ],
                        "c": false
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                  },
                  {
                    "ty": "st",
                    "c": {
                      "a": 0,
                      "k": [0.654901960784, 0.654901960784, 0.654901960784, 1],
                      "ix": 3
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 4
                    },
                    "w": {
                      "a": 0,
                      "k": 3,
                      "ix": 5
                    },
                    "lc": 2,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [180.5, 0],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [0, 0],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [100, 100],
                      "ix": 3
                    },
                    "r": {
                      "a": 0,
                      "k": 0,
                      "ix": 6
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 7
                    },
                    "sk": {
                      "a": 0,
                      "k": 0,
                      "ix": 4
                    },
                    "sa": {
                      "a": 0,
                      "k": 0,
                      "ix": 5
                    },
                    "nm": "Transform"
                  }
                ],
                "nm": "Shape 2",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              },
              {
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [0, 0],
                          [0, 0]
                        ],
                        "o": [
                          [0, 0],
                          [0, 0]
                        ],
                        "v": [
                          [-250, 45.5],
                          [-222.5, 45.5]
                        ],
                        "c": false
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                  },
                  {
                    "ty": "st",
                    "c": {
                      "a": 0,
                      "k": [0.654901960784, 0.654901960784, 0.654901960784, 1],
                      "ix": 3
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 4
                    },
                    "w": {
                      "a": 0,
                      "k": 3,
                      "ix": 5
                    },
                    "lc": 2,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [517.5, 0],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [0, 0],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [100, 100],
                      "ix": 3
                    },
                    "r": {
                      "a": 0,
                      "k": 0,
                      "ix": 6
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 7
                    },
                    "sk": {
                      "a": 0,
                      "k": 0,
                      "ix": 4
                    },
                    "sa": {
                      "a": 0,
                      "k": 0,
                      "ix": 5
                    },
                    "nm": "Transform"
                  }
                ],
                "nm": "Shape 3",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
              },
              {
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [0, 0],
                          [0, 0]
                        ],
                        "o": [
                          [0, 0],
                          [0, 0]
                        ],
                        "v": [
                          [-306, 45.5],
                          [-238, 45.5]
                        ],
                        "c": false
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                  },
                  {
                    "ty": "st",
                    "c": {
                      "a": 0,
                      "k": [0.654901960784, 0.654901960784, 0.654901960784, 1],
                      "ix": 3
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 4
                    },
                    "w": {
                      "a": 0,
                      "k": 3,
                      "ix": 5
                    },
                    "lc": 2,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [0, 0],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [0, 0],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [100, 100],
                      "ix": 3
                    },
                    "r": {
                      "a": 0,
                      "k": 0,
                      "ix": 6
                    },
                    "o": {
                      "a": 0,
                      "k": 100,
                      "ix": 7
                    },
                    "sk": {
                      "a": 0,
                      "k": 0,
                      "ix": 4
                    },
                    "sa": {
                      "a": 0,
                      "k": 0,
                      "ix": 5
                    },
                    "nm": "Transform"
                  }
                ],
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 3,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 17,
            "ty": 2,
            "nm": "element-1.png",
            "cl": "png",
            "refId": "image_11",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [363, 256, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [389.5, 269, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
              "inv": false,
              "mode": "a",
              "pt": {
                "a": 0,
                "k": {
                  "i": [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  "o": [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  "v": [
                    [748.5, -34],
                    [401.5, -34],
                    [401.5, 177],
                    [748.5, 177]
                  ],
                  "c": true
                },
                "ix": 1
              },
              "o": {
                "a": 0,
                "k": 100,
                "ix": 3
              },
              "x": {
                "a": 0,
                "k": 0,
                "ix": 4
              },
              "nm": "Mask 1"
            }],
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 18,
            "ty": 2,
            "nm": "element-1.png",
            "cl": "png",
            "refId": "image_11",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [363, 124, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [389.5, 269, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 20,
            "ty": 1,
            "nm": "White Solid 3",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [335, 156, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [336, 234, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "sw": 672,
            "sh": 468,
            "sc": "#f4f4f4",
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 21,
            "ty": 2,
            "nm": "bg.jpg",
            "cl": "jpg",
            "refId": "image_12",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [335, 156, 0],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [506, 262, 0],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 0,
                "k": [96, 96, 100],
                "ix": 6,
                "l": 2
              }
            },
            "ao": 0,
            "ip": 0,
            "op": 5,
            "st": 0,
            "bm": 0
          }
        ],
        "markers": []
      }

    });
  </script>
</body>

</html>`