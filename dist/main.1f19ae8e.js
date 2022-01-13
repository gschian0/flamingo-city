// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
//main function to randomize images for avatar generation
var pickImageToBlend = function pickImageToBlend(subpath, amt) {
  var image = new Image();
  var imgAmt = Math.floor(Math.random() * amt) + 1; // number of heads

  var subPath = subpath;
  var finalPath = subPath + imgAmt + ".png";
  return image.src = finalPath;
};

var selectImage = function selectImage(subpath, imgNum) {
  var image = new Image();
  var subPath = subpath;
  var finalPath = subPath + imgNum + ".png";
  return image.src = finalPath;
}; // generate random color background and other applications 


var generateRandomColor = function generateRandomColor() {
  var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
  var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
  var b = Math.floor(Math.random() * (255 - 100 + 1) + 100);
  var bgCol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return bgCol;
}; //array of images for the avatar to supply the canvas context to draw wrapped up for iterating


var imgArr = [];

window.onload = function () {
  //create canvas
  var canvas = document.getElementById("canvas"); // SIZE OF INPUT SQUARE

  var squareImageSize = 1600; //NAME FIRST IMAGE 

  var layer1 = new Image(); //NAMES SECOND IMAGE

  var layer2 = new Image();
  var layer3 = new Image();
  var layer4 = new Image();
  var layer5 = new Image();
  var layer6 = new Image();
  var layer7 = new Image(); //assign random file to image output
  //quotation is folder path to image collections ... head... body... etc.. etc..

  var setSource = function setSource(l1, l2, l3, l4, l5, l6, l7) {
    layer1.src = selectImage("img/Layer1/Common/", l1);
    layer2.src = selectImage("img/Layer2/Common/", l2);
    layer3.src = selectImage("img/Layer3/Common/", l3);
    layer4.src = selectImage("img/Layer4/Common/", l4);
    layer5.src = selectImage("img/Layer5/Common/", l5);
    layer6.src = selectImage("img/Layer6/Common/", l6);
    layer7.src = selectImage("img/Layer7/Common/", l7);
  };

  setSource(1, 1, 6, 3, 3, 3, 3); // add more images to the array by loading them from files from folder
  // let newImage = new Image();
  // newImage.src = pickImageToBlend("img/folder/filename", ammount of images);
  //imgArr[i] = newImage;
  //assign images to the array

  imgArr[0] = layer1;
  imgArr[1] = layer2;
  imgArr[2] = layer3;
  imgArr[3] = layer4;
  imgArr[4] = layer5;
  imgArr[5] = layer6;
  imgArr[6] = layer7; // ... would be imgARR[2] = nameImg;

  var button1 = document.getElementById("select1"); //build robot when images load

  layer1.onload = function () {
    buildRobot();
    button1.addEventListener("click", function (e) {
      console.log(e);
      console.log(imgArr);
    });
  }; // function to render the robot to screen


  var buildRobot = function buildRobot(ol1, ol2, ol3, ol4, ol5, ol6, ol7) {
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.height = squareImageSize;
    ctx.alpha = .5;
    ctx.fillRect(0, 0, squareImageSize, squareImageSize); // if(imgArr){
    // imgArr[0].src = selectImage(`img/Layer1/Common/`, ol1);
    // imgArr[1].src = selectImage(`img/Layer1/Common/`, ol2);
    // imgArr[3].src = selectImage(`img/Layer3/Common/`, ol3);
    // imgArr[4].src = selectImage(`img/Layer4/Common/`, ol4);
    // imgArr[5].src = selectImage(`img/Layer5/Common/`, ol5);
    // imgArr[6].src = selectImage(`img/Layer6/Common/`, ol6);
    // imgArr[7].src = selectImage(`img/Layer7/Common/`, ol7);
    // }
    //draw first image of array
    // ctx.globalCompositeOperation = "source-atop";
    // ctx.globalCompositeOperation = "source-over";

    imgArr[0].src = selectImage("img/Layer1/Common/", 2);
    ctx.globalCompositeOperation = "source-atop"; // imgArr[1].src = selectImage(`img/Layer2/Common/`,  1)
    // ctx.globalCompositeOperation = "source-over";
    // imgArr[2].src = selectImage(`img/Layer3/Common/`, ol3)
    // ctx.globalCompositeOperation = "source-atop";
    // imgArr[3].src = selectImage(`img/Layer4/Common/`, ol4)
    // imgArr[4].src = selectImage(`img/Layer5/Common/`, ol5)
    // imgArr[5].src = selectImage(`img/Layer6/Common/`, ol6)
    // imgArr[6].src = selectImage(`img/Layer7/Common/`, ol7)

    for (i = 0; i < imgArr.length; i++) {
      ctx.drawImage(imgArr[i], squareImageSize - imgArr[i].width, 0); // console.log(imgArr[1]);
    }

    var link = document.getElementById('link');
    link.setAttribute('download', "Avatar".concat(Math.random(), ".png"));
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")); // const link2 = document.getElementById('link2');
  };
}; //old logic to keep in mind


{// link.click();
  //* old logic 
  //original code before function wrap
  // let layer1Num = Math.floor(Math.random() * 5) +1 ;  // number of heads
  // let layer1Name = "img/colclouds/colcloud" + layer1Num + ".png";
  //layer1.src = layer1Name;
  // let layer2 = new Image();
  // let cloudsNum = Math.floor(Math.random() * 5) +1 ;  // number of heads
  // let cloudsName = "img/clouds/cloud" + cloudsNum + ".png";
  // layer2.src = cloudsName;
  //to output png to page
  // let output = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  // window.location.href=output; // it will save locally
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64995" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map