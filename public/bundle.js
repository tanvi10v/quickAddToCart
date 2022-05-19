/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, main, scripts, browser, author, license, devDependencies, dependencies, repository, bugs, homepage, default */
/***/ (function(module) {

module.exports = {"name":"tesseract.js","version":"1.0.14","description":"Pure Javascript Multilingual OCR","main":"src/index.js","scripts":{"start":"concurrently --kill-others \"watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\"","build":"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js","release":"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"author":"","license":"Apache-2.0","devDependencies":{"babel-preset-es2015":"^6.16.0","babelify":"^7.3.0","browserify":"^13.1.0","concurrently":"^3.1.0","envify":"^3.4.1","http-server":"^0.9.0","pako":"^1.0.3","uglify-js":"^3.4.9","watchify":"^3.7.0"},"dependencies":{"file-type":"^3.8.0","isomorphic-fetch":"^2.2.1","is-url":"1.2.2","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js"};

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (true) {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{ var version; }

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(window.Blob && window.URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'])
        var worker = new Worker(window.URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            xhr.onload = e => loadImage(xhr.response, cb);
            xhr.onerror = function(e){
                if(/^https?:\/\//.test(image) && !/^https:\/\/crossorigin.me/.test(image)){
                    console.debug('Attempting to load image with CORS proxy')
                    loadImage('https://crossorigin.me/' + image, cb)
                }
            }
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}


/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const productCatalogList = [{
        title: "Amul Taza - 1L Pack",
        price: "$19.99",
        desc: "Amul Taza - 1L Pack"
    }];
document.addEventListener("DOMContentLoaded", function (event) {
    const productCatalogElement = document.querySelector('#product-catalog');
    const productCard = document.createElement('div');
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tesseract_js_1 = __importDefault(__webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js"));
tesseract_js_1.default.workerOptions.workerPath =
    "http://localhost:8080/worker.min.js";
const lastOrderPerUser = [
    {
        title: "Pinto GOYA Pack ",
        img: "./img/pintoBeans.jpg",
        type: "pinto beans",
    },
];
const bestSellerProducts = [
    {
        title: "ACT II Microwave Popcorn",
        img: "./img/popcorns.jpg",
        type: "popcorn",
    },
    {
        title: "Green Habit Organic White Quinoa ",
        img: "./img/quinoa.jpg",
        type: "Quinoa",
    },
    {
        title: "Shri Ram Agro Foods",
        img: "./img/redBeans.jpg",
        type: "red beans",
    },
    {
        title: "BB Royal Sona Masoori Raw Rice",
        img: "./img/rice.jpg",
        type: "rice",
    },
    {
        title: "Whole Wheat Atta (Sharbati) ",
        img: "./img/wheat.jpg",
        type: "wheat",
    },
];
const getRefinedExtractedTextList = (extractedTextList) => {
    let refinedExtractedTextList = [];
    extractedTextList.map((item) => {
        const texts = item.text.split("\n").filter((i) => i != "");
        refinedExtractedTextList = refinedExtractedTextList.concat(texts);
    });
    return refinedExtractedTextList;
};
const addToCart = (img) => {
    const cartItemPlaceholder = document.querySelector("#cart-item-dummy");
    const cloneCartItemPlaceholder = cartItemPlaceholder.cloneNode(true);
    cloneCartItemPlaceholder.removeAttribute("id");
    cloneCartItemPlaceholder
        .querySelector("#cart-item-img")
        .setAttribute("src", img);
    const cartSection = document.querySelector("#cart");
    cartSection.appendChild(cloneCartItemPlaceholder);
};
const filterProductListToAddInCart = (refinedProductList) => {
    refinedProductList.forEach((product) => {
        const productInLastOrder = lastOrderPerUser.filter((order) => product === order.type)[0];
        if (productInLastOrder) {
            addToCart(productInLastOrder.img);
        }
        else {
            const productInBestSeller = bestSellerProducts.filter((bestSellerProduct) => product === bestSellerProduct.type)[0];
            if (productInBestSeller)
                addToCart(productInBestSeller.img);
        }
    });
};
const setImageSrc = (image, imageFile) => {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = function () {
            if (typeof fr.result !== "string") {
                return reject(null);
            }
            image.src = fr.result;
            return resolve();
        };
        fr.onerror = reject;
        fr.readAsDataURL(imageFile);
    });
};
const recognitionImageInputElement = document.querySelector("#recognition-image-input");
const recognitionConfidenceInputElement = document.querySelector("#recognition-confidence-input");
const recognitionProgressElement = document.querySelector("#recognition-progress");
const recognitionTextElement = document.querySelector("#recognition-text");
const originalImageElement = document.querySelector("#original-image");
const labeledImageElement = document.querySelector("#labeled-image");
if (!recognitionImageInputElement ||
    !recognitionTextElement ||
    !originalImageElement ||
    !labeledImageElement ||
    !recognitionProgressElement ||
    !recognitionConfidenceInputElement) {
    throw new Error("Missing elements");
}
recognitionImageInputElement.addEventListener("change", () => {
    if (!recognitionImageInputElement.files) {
        return null;
    }
    const file = recognitionImageInputElement.files[0];
    return tesseract_js_1.default
        .recognize(file, {
        lang: "eng",
    })
        .progress(({ progress, status }) => {
        if (!progress || !status || status !== "recognizing text") {
            return null;
        }
        const p = (progress * 100).toFixed(2);
        recognitionProgressElement.textContent = `${status}: ${p}%`;
        recognitionProgressElement.value = p;
    })
        .then(async (res) => {
        originalImageElement.innerHTML = "";
        labeledImageElement.innerHTML = "";
        recognitionTextElement.innerHTML = "";
        const paragraphsElements = res.paragraphs.map(({ text }) => {
            const p = document.createElement("p");
            p.textContent = text;
            return p;
        });
        recognitionTextElement.append(...paragraphsElements);
        const refinedProductList = getRefinedExtractedTextList(res.paragraphs);
        filterProductListToAddInCart(refinedProductList);
        const originalImage = document.createElement("img");
        await setImageSrc(originalImage, file);
        const labeledImage = originalImage.cloneNode(true);
        const wordsElements = res.words
            .filter(({ confidence }) => {
            return (confidence > parseInt(recognitionConfidenceInputElement.value, 10));
        })
            .map((word) => {
            const div = document.createElement("div");
            const { x0, x1, y0, y1 } = word.bbox;
            div.classList.add("word-element");
            Object.assign(div.style, {
                top: `${y0}px`,
                left: `${x0}px`,
                width: `${x1 - x0}px`,
                height: `${y1 - y0}px`,
                border: "1px solid black",
                position: "absolute",
            });
            return div;
        });
        originalImageElement.appendChild(originalImage);
        labeledImageElement.appendChild(labeledImage);
        labeledImageElement.append(...wordsElements);
    });
});


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/index.ts ./src/app.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.ts */"./src/index.ts");
module.exports = __webpack_require__(/*! ./src/app.ts */"./src/app.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VUFBVSxFQUFFLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQ0wsVUFBVSxHQUFHLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ25FLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNaLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFckMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUN2QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNmLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ3JCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ3RCLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLFFBQVEsRUFBRSxVQUFVO2FBQ3JCLENBQUMsQ0FBQztZQUVILE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFTCxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIHdvcmtlclBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qc0AwLjIuMC9kaXN0L3dvcmtlci5qcycsXG4gICAgY29yZVBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qcy1jb3JlQDAuMS4wL2luZGV4LmpzJywgICAgXG4gICAgbGFuZ1BhdGg6ICdodHRwczovL3Rlc3NkYXRhLnByb2plY3RuYXB0aGEuY29tLzMuMDIvJyxcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdVc2luZyBEZXZlbG9wbWVudCBDb25maWd1cmF0aW9uJylcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvZGlzdC93b3JrZXIuZGV2LmpzP25vY2FjaGU9JyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDMpXG59ZWxzZXtcbiAgICB2YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4gICAgZGVmYXVsdE9wdGlvbnMud29ya2VyUGF0aCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qc0AnICsgdmVyc2lvbiArICcvZGlzdC93b3JrZXIuanMnXG59XG5cbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblxuXG5leHBvcnRzLnNwYXduV29ya2VyID0gZnVuY3Rpb24gc3Bhd25Xb3JrZXIoaW5zdGFuY2UsIHdvcmtlck9wdGlvbnMpe1xuICAgIGlmKHdpbmRvdy5CbG9iICYmIHdpbmRvdy5VUkwpe1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsnaW1wb3J0U2NyaXB0cyhcIicgKyB3b3JrZXJPcHRpb25zLndvcmtlclBhdGggKyAnXCIpOyddKVxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgfWVsc2V7XG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlck9wdGlvbnMud29ya2VyUGF0aClcbiAgICB9XG5cbiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBwYWNrZXQgPSBlLmRhdGE7XG4gICAgICAgIGluc3RhbmNlLl9yZWN2KHBhY2tldClcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtlclxufVxuXG5leHBvcnRzLnRlcm1pbmF0ZVdvcmtlciA9IGZ1bmN0aW9uKGluc3RhbmNlKXtcbiAgICBpbnN0YW5jZS53b3JrZXIudGVybWluYXRlKClcbn1cblxuZXhwb3J0cy5zZW5kUGFja2V0ID0gZnVuY3Rpb24gc2VuZFBhY2tldChpbnN0YW5jZSwgcGFja2V0KXtcbiAgICBsb2FkSW1hZ2UocGFja2V0LnBheWxvYWQuaW1hZ2UsIGZ1bmN0aW9uKGltZyl7XG4gICAgICAgIHBhY2tldC5wYXlsb2FkLmltYWdlID0gaW1nXG4gICAgICAgIGluc3RhbmNlLndvcmtlci5wb3N0TWVzc2FnZShwYWNrZXQpIFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlLCBjYil7XG4gICAgaWYodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGlmKC9eXFwjLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGNzcyBzZWxlY3RvclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlKSwgY2IpXG4gICAgICAgIH1lbHNlIGlmKC8oYmxvYnxkYXRhKVxcOi8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgLy8gZGF0YSB1cmxcbiAgICAgICAgICAgIHZhciBpbSA9IG5ldyBJbWFnZVxuICAgICAgICAgICAgaW0uc3JjID0gaW1hZ2U7XG4gICAgICAgICAgICBpbS5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZShpbSwgY2IpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGltYWdlLCB0cnVlKVxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKHhoci5yZXNwb25zZSwgY2IpO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZigvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaW1hZ2UpICYmICEvXmh0dHBzOlxcL1xcL2Nyb3Nzb3JpZ2luLm1lLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0F0dGVtcHRpbmcgdG8gbG9hZCBpbWFnZSB3aXRoIENPUlMgcHJveHknKVxuICAgICAgICAgICAgICAgICAgICBsb2FkSW1hZ2UoJ2h0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvJyArIGltYWdlLCBjYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIuc2VuZChudWxsKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEZpbGUpe1xuICAgICAgICAvLyBmaWxlc1xuICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKGZyLnJlc3VsdCwgY2IpO1xuICAgICAgICBmci5yZWFkQXNEYXRhVVJMKGltYWdlKVxuICAgICAgICByZXR1cm5cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEJsb2Ipe1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRDb250ZXh0KXtcbiAgICAgICAgLy8gY2FudmFzIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShpbWFnZS5nZXRDb250ZXh0KCcyZCcpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS50YWdOYW1lID09IFwiSU1HXCIgfHwgaW1hZ2UudGFnTmFtZSA9PSBcIlZJREVPXCIpe1xuICAgICAgICAvLyBpbWFnZSBlbGVtZW50IG9yIHZpZGVvIGVsZW1lbnRcbiAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgYy53aWR0aCAgPSBpbWFnZS5uYXR1cmFsV2lkdGggIHx8IGltYWdlLnZpZGVvV2lkdGg7XG4gICAgICAgIGMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodCB8fCBpbWFnZS52aWRlb0hlaWdodDtcbiAgICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoY3R4LCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRJbWFnZURhdGEpe1xuICAgICAgICAvLyBjYW52YXMgY29udGV4dFxuICAgICAgICB2YXIgZGF0YSA9IGltYWdlLmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS5jYW52YXMud2lkdGgsIGltYWdlLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRhdGEsIGNiKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY2IoaW1hZ2UpXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXR1cm4gaW4gbG9hZEltYWdlIGNhc2NhZGUnKVxuXG59XG4iLCIvLyBUaGUgcmVzdWx0IG9mIGR1bXAuanMgaXMgYSBiaWcgSlNPTiB0cmVlXG4vLyB3aGljaCBjYW4gYmUgZWFzaWx5IHNlcmlhbGl6ZWQgKGZvciBpbnN0YW5jZVxuLy8gdG8gYmUgc2VudCBmcm9tIGEgd2Vid29ya2VyIHRvIHRoZSBtYWluIGFwcFxuLy8gb3IgdGhyb3VnaCBOb2RlJ3MgSVBDKSwgYnV0IHdlIHdhbnRcbi8vIGEgKGNpcmN1bGFyKSBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmdcbi8vIHRocm91Z2ggdGhlIGRhdGEuIFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNpcmN1bGFyaXplKHBhZ2Upe1xuICAgIHBhZ2UucGFyYWdyYXBocyA9IFtdXG4gICAgcGFnZS5saW5lcyA9IFtdXG4gICAgcGFnZS53b3JkcyA9IFtdXG4gICAgcGFnZS5zeW1ib2xzID0gW11cblxuICAgIHBhZ2UuYmxvY2tzLmZvckVhY2goZnVuY3Rpb24oYmxvY2spe1xuICAgICAgICBibG9jay5wYWdlID0gcGFnZTtcblxuICAgICAgICBibG9jay5saW5lcyA9IFtdXG4gICAgICAgIGJsb2NrLndvcmRzID0gW11cbiAgICAgICAgYmxvY2suc3ltYm9scyA9IFtdXG5cbiAgICAgICAgYmxvY2sucGFyYWdyYXBocy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmEpe1xuICAgICAgICAgICAgcGFyYS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgcGFyYS5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICAgcGFyYS53b3JkcyA9IFtdXG4gICAgICAgICAgICBwYXJhLnN5bWJvbHMgPSBbXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJhLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSl7XG4gICAgICAgICAgICAgICAgbGluZS5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgIGxpbmUuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICBsaW5lLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgICAgICAgICAgbGluZS5zeW1ib2xzID0gW11cblxuICAgICAgICAgICAgICAgIGxpbmUud29yZHMuZm9yRWFjaChmdW5jdGlvbih3b3JkKXtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5saW5lID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uKHN5bSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ud29yZCA9IHdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhcmFncmFwaC5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmJsb2NrLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFnZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhcmFncmFwaC53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgICAgIHdvcmQuYmxvY2sud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhZ2Uud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGluZS5ibG9jay5saW5lcy5wdXNoKGxpbmUpXG4gICAgICAgICAgICAgICAgbGluZS5wYWdlLmxpbmVzLnB1c2gobGluZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYXJhLnBhZ2UucGFyYWdyYXBocy5wdXNoKHBhcmEpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcGFnZVxufSIsImNvbnN0IGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9ub2RlL2luZGV4LmpzJylcblxubGV0IGpvYkNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRlc3NlcmFjdEpvYiB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2Upe1xuICAgICAgICB0aGlzLmlkID0gJ0pvYi0nICsgKCsram9iQ291bnRlcikgKyAnLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgzLCA4KVxuXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBbXVxuICAgICAgICB0aGlzLl9yZWplY3QgPSBbXVxuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IFtdXG4gICAgICAgIHRoaXMuX2ZpbmFsbHkgPSBbXVxuICAgIH1cblxuICAgIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgaWYodGhpcy5fcmVzb2x2ZS5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUucHVzaChyZXNvbHZlKSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Jlc29sdmUpXG4gICAgICAgIH1cblxuICAgICAgICBpZihyZWplY3QpIHRoaXMuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhdGNoKHJlamVjdCl7XG4gICAgICAgIGlmKHRoaXMuX3JlamVjdC5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdC5wdXNoKHJlamVjdCkgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVqZWN0KHRoaXMuX3JlamVjdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHJvZ3Jlc3MoZm4pe1xuICAgICAgICB0aGlzLl9wcm9ncmVzcy5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmluYWxseShmbikge1xuICAgICAgICB0aGlzLl9maW5hbGx5LnB1c2goZm4pXG4gICAgICAgIHJldHVybiB0aGlzOyAgXG4gICAgfVxuICAgIF9zZW5kKGFjdGlvbiwgcGF5bG9hZCl7XG4gICAgICAgIGFkYXB0ZXIuc2VuZFBhY2tldCh0aGlzLl9pbnN0YW5jZSwge1xuICAgICAgICAgICAgam9iSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfaGFuZGxlKHBhY2tldCl7XG4gICAgICAgIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gICAgICAgIGxldCBydW5GaW5hbGx5Q2JzID0gZmFsc2U7XG5cbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3Jlc29sdmUubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGZuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGVzc2VyYWN0Sm9iIGluc3RhbmNlcyBkbyBub3QgY2hhaW4gbGlrZSBFUzYgUHJvbWlzZXMuIFRvIGNvbnZlcnQgaXQgaW50byBhIHJlYWwgcHJvbWlzZSwgdXNlIFByb21pc2UucmVzb2x2ZS4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXF1ZXVlKClcbiAgICAgICAgICAgIHJ1bkZpbmFsbHlDYnMgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihwYWNrZXQuc3RhdHVzID09PSAncmVqZWN0Jyl7XG4gICAgICAgICAgICBpZih0aGlzLl9yZWplY3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2RlcXVldWUoKVxuICAgICAgICAgICAgcnVuRmluYWxseUNicyA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKHBhY2tldC5zdGF0dXMgPT09ICdwcm9ncmVzcycpe1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MuZm9yRWFjaChmbiA9PiBmbihkYXRhKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lc3NhZ2UgdHlwZSB1bmtub3duJywgcGFja2V0LnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5GaW5hbGx5Q2JzKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5hbGx5LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgYWRhcHRlciA9IHJlcXVpcmUoJy4vbm9kZS9pbmRleC5qcycpXG5jb25zdCBjaXJjdWxhcml6ZSA9IHJlcXVpcmUoJy4vY29tbW9uL2NpcmN1bGFyaXplLmpzJylcbmNvbnN0IFRlc3NlcmFjdEpvYiA9IHJlcXVpcmUoJy4vY29tbW9uL2pvYicpO1xuY29uc3QgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbmNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKHdvcmtlck9wdGlvbnMgPSB7fSl7XG5cdHZhciB3b3JrZXIgPSBuZXcgVGVzc2VyYWN0V29ya2VyKE9iamVjdC5hc3NpZ24oe30sIGFkYXB0ZXIuZGVmYXVsdE9wdGlvbnMsIHdvcmtlck9wdGlvbnMpKTtcblx0d29ya2VyLmNyZWF0ZSA9IGNyZWF0ZTtcblx0d29ya2VyLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRyZXR1cm4gd29ya2VyO1xufVxuXG5jbGFzcyBUZXNzZXJhY3RXb3JrZXIge1xuXHRjb25zdHJ1Y3Rvcih3b3JrZXJPcHRpb25zKXtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdFx0dGhpcy53b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucztcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHR0aGlzLl9xdWV1ZSA9IFtdO1xuXHR9XG5cblx0cmVjb2duaXplKGltYWdlLCBvcHRpb25zID0ge30pe1xuXHRcdHJldHVybiB0aGlzLl9kZWxheShqb2IgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHtsYW5nOiBvcHRpb25zfVxuXHRcdFx0b3B0aW9ucy5sYW5nID0gb3B0aW9ucy5sYW5nIHx8ICdlbmcnO1xuXG5cdFx0XHRqb2IuX3NlbmQoJ3JlY29nbml6ZScsIHsgaW1hZ2UsIG9wdGlvbnMsIHdvcmtlck9wdGlvbnM6IHRoaXMud29ya2VyT3B0aW9ucyB9KTtcblx0XHR9KVxuXHR9XG5cdGRldGVjdChpbWFnZSwgb3B0aW9ucyA9IHt9KXtcblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGpvYi5fc2VuZCgnZGV0ZWN0JywgeyBpbWFnZSwgb3B0aW9ucywgd29ya2VyT3B0aW9uczogdGhpcy53b3JrZXJPcHRpb25zIH0pO1xuXHRcdH0pXG5cdH1cblxuXHR0ZXJtaW5hdGUoKXtcblx0XHRpZih0aGlzLndvcmtlcikgYWRhcHRlci50ZXJtaW5hdGVXb3JrZXIodGhpcyk7XG5cdFx0dGhpcy53b3JrZXIgPSBudWxsO1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdHRoaXMuX3F1ZXVlID0gW107XG5cdH1cblxuXHRfZGVsYXkoZm4pe1xuXHRcdGlmKCF0aGlzLndvcmtlcikgdGhpcy53b3JrZXIgPSBhZGFwdGVyLnNwYXduV29ya2VyKHRoaXMsIHRoaXMud29ya2VyT3B0aW9ucyk7XG5cblx0XHR2YXIgam9iID0gbmV3IFRlc3NlcmFjdEpvYih0aGlzKTtcblx0XHR0aGlzLl9xdWV1ZS5wdXNoKGUgPT4ge1xuXHRcdFx0dGhpcy5fcXVldWUuc2hpZnQoKTtcblx0XHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBqb2I7XG5cdFx0XHRmbihqb2IpO1xuXHRcdH0pO1xuXHRcdGlmKCF0aGlzLl9jdXJyZW50Sm9iKSB0aGlzLl9kZXF1ZXVlKCk7XG5cdFx0cmV0dXJuIGpvYjtcblx0fVxuXG5cdF9kZXF1ZXVlKCl7XG5cdFx0dGhpcy5fY3VycmVudEpvYiA9IG51bGw7XG5cdFx0aWYodGhpcy5fcXVldWUubGVuZ3RoKXtcblx0XHRcdHRoaXMuX3F1ZXVlWzBdKCk7XG5cdFx0fVxuXHR9XG5cblx0X3JlY3YocGFja2V0KXtcbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnICYmIHBhY2tldC5hY3Rpb24gPT09ICdyZWNvZ25pemUnKXtcbiAgICAgICAgICAgIHBhY2tldC5kYXRhID0gY2lyY3VsYXJpemUocGFja2V0LmRhdGEpO1xuICAgICAgICB9XG5cblx0XHRpZih0aGlzLl9jdXJyZW50Sm9iLmlkID09PSBwYWNrZXQuam9iSWQpe1xuXHRcdFx0dGhpcy5fY3VycmVudEpvYi5faGFuZGxlKHBhY2tldClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdKb2IgSUQgJyArIHBhY2tldC5qb2JJZCArICcgbm90IGtub3duLicpXG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKCk7XG4iLCJjb25zdCBwcm9kdWN0Q2F0YWxvZ0xpc3QgPSBbe1xuICAgIHRpdGxlOlwiQW11bCBUYXphIC0gMUwgUGFja1wiLFxuICAgIHByaWNlOlwiJDE5Ljk5XCIsXG4gICAgZGVzYzpcIkFtdWwgVGF6YSAtIDFMIFBhY2tcIlxufV07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgcHJvZHVjdENhdGFsb2dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtY2F0YWxvZycpO1xuICAgIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59KTtcblxuZXhwb3J0IHt9IiwiLy8gUmVmZXJlbmNlZDogaHR0cHM6Ly9naXRodWIuY29tL21hY2llamNpZXNsYXIvT0NSXG5pbXBvcnQgdGVzc2VyYWN0IGZyb20gXCJ0ZXNzZXJhY3QuanNcIjtcblxuKHRlc3NlcmFjdCBhcyBhbnkpLndvcmtlck9wdGlvbnMud29ya2VyUGF0aCA9XG4gIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3dvcmtlci5taW4uanNcIjtcblxuLy8gQVBJIHRoYXQgd2lsbCByZXR1cm4gdGhlIGxhc3QgYnV5IG9mIHRoZSBwcm9kdWN0IHBlciB1c2VyIGFuZCBpZiBub3QgYXZhaWxhYmxlLCB0aGVuIGl0IHdpbGwgYmUgdGhlIGJlc3RzZWxsZXIgaW4gY2F0ZWdvcnlcbmNvbnN0IGxhc3RPcmRlclBlclVzZXIgPSBbXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJNYXN0ZXJDaG93IEphcGFuZXNlIFJhbWVuIE5vb2RsZXNcIixcbiAgLy8gICBpbWc6IFwiLi9pbWcvbm9vZGxlcy5qcGdcIixcbiAgLy8gICB0eXBlOiBcIlJhbWVuIG5vb2RsZXNcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIlByZXNlcnZlZCBCbGFjayBCZWFuc1wiLFxuICAvLyAgIGltZzogXCIuL2ltZy9ibGFja0JlYW5zLmpwZ1wiLFxuICAvLyAgIHR5cGU6IFwiYmxhY2sgYmVhbnNcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIktpbmcgQnJlYWtmYXN0IENlcmVhbHMgU3RyYXdiZXJyeSBNdWVzbGlcIixcbiAgLy8gICBpbWc6IFwiLi9pbWcvY2VyZWFscy5qcGdcIixcbiAgLy8gICB0eXBlOiBcImNlcmVhbFwiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwiSmlvbyBPcmdhbmljcyBTdGFuZGFyZCBDb3JubWVhbFwiLFxuICAvLyAgIGltZzogXCIuL2ltZy9ibGFja0JlYW5zLmpwZ1wiLFxuICAvLyAgIHR5cGU6IFwiY29ybm1lYWxcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkNST1dOIEVuZ2xpc2ggY3JhY2tlcnMgcGFja2V0XCIsXG4gIC8vICAgaW1nOiBcIi4vaW1nL2NyYWtlcnMuanBnXCIsXG4gIC8vICAgdHlwZTogXCJjcmFja2Vyc1wiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwiU2FmZm9sYSBPYXRzXCIsXG4gIC8vICAgaW1nOiBcIi4vaW1nL29hdHMuanBnXCIsXG4gIC8vICAgdHlwZTogXCJvYXRzXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJXZWlrZmllbGQgSGlnaCBQcm90ZWluIFBlbm5lIFBhc3RhXCIsXG4gIC8vICAgaW1nOiBcIi4vaW1nL3Bhc3RhLmpwZ1wiLFxuICAvLyAgIHR5cGU6IFwicGFzdGEocylcIixcbiAgLy8gfSxcbiAge1xuICAgIHRpdGxlOiBcIlBpbnRvIEdPWUEgUGFjayBcIixcbiAgICBpbWc6IFwiLi9pbWcvcGludG9CZWFucy5qcGdcIixcbiAgICB0eXBlOiBcInBpbnRvIGJlYW5zXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBiZXN0U2VsbGVyUHJvZHVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJBQ1QgSUkgTWljcm93YXZlIFBvcGNvcm5cIixcbiAgICBpbWc6IFwiLi9pbWcvcG9wY29ybnMuanBnXCIsXG4gICAgdHlwZTogXCJwb3Bjb3JuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHcmVlbiBIYWJpdCBPcmdhbmljIFdoaXRlIFF1aW5vYSBcIixcbiAgICBpbWc6IFwiLi9pbWcvcXVpbm9hLmpwZ1wiLFxuICAgIHR5cGU6IFwiUXVpbm9hXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTaHJpIFJhbSBBZ3JvIEZvb2RzXCIsXG4gICAgaW1nOiBcIi4vaW1nL3JlZEJlYW5zLmpwZ1wiLFxuICAgIHR5cGU6IFwicmVkIGJlYW5zXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCQiBSb3lhbCBTb25hIE1hc29vcmkgUmF3IFJpY2VcIixcbiAgICBpbWc6IFwiLi9pbWcvcmljZS5qcGdcIixcbiAgICB0eXBlOiBcInJpY2VcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldob2xlIFdoZWF0IEF0dGEgKFNoYXJiYXRpKSBcIixcbiAgICBpbWc6IFwiLi9pbWcvd2hlYXQuanBnXCIsXG4gICAgdHlwZTogXCJ3aGVhdFwiLFxuICB9LFxuXTtcblxuY29uc3QgZ2V0UmVmaW5lZEV4dHJhY3RlZFRleHRMaXN0ID0gKGV4dHJhY3RlZFRleHRMaXN0OiBhbnkpID0+IHtcbiAgbGV0IHJlZmluZWRFeHRyYWN0ZWRUZXh0TGlzdDogYW55ID0gW107XG4gIGV4dHJhY3RlZFRleHRMaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgdGV4dHMgPSBpdGVtLnRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChpOiBhbnkpID0+IGkgIT0gXCJcIik7XG4gICAgcmVmaW5lZEV4dHJhY3RlZFRleHRMaXN0ID0gcmVmaW5lZEV4dHJhY3RlZFRleHRMaXN0LmNvbmNhdCh0ZXh0cyk7XG4gIH0pO1xuICByZXR1cm4gcmVmaW5lZEV4dHJhY3RlZFRleHRMaXN0O1xufTtcblxuY29uc3QgYWRkVG9DYXJ0ID0gKGltZzogYW55KSA9PiB7XG4gIGNvbnN0IGNhcnRJdGVtUGxhY2Vob2xkZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FydC1pdGVtLWR1bW15XCIpO1xuICBjb25zdCBjbG9uZUNhcnRJdGVtUGxhY2Vob2xkZXI6IGFueSA9IGNhcnRJdGVtUGxhY2Vob2xkZXIuY2xvbmVOb2RlKHRydWUpO1xuICBjbG9uZUNhcnRJdGVtUGxhY2Vob2xkZXIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gIGNsb25lQ2FydEl0ZW1QbGFjZWhvbGRlclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NhcnQtaXRlbS1pbWdcIilcbiAgICAuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XG4gIGNvbnN0IGNhcnRTZWN0aW9uOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcnRcIik7XG4gIGNhcnRTZWN0aW9uLmFwcGVuZENoaWxkKGNsb25lQ2FydEl0ZW1QbGFjZWhvbGRlcik7XG59O1xuXG5jb25zdCBmaWx0ZXJQcm9kdWN0TGlzdFRvQWRkSW5DYXJ0ID0gKHJlZmluZWRQcm9kdWN0TGlzdDogYW55KSA9PiB7XG4gIHJlZmluZWRQcm9kdWN0TGlzdC5mb3JFYWNoKChwcm9kdWN0OiBhbnkpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0SW5MYXN0T3JkZXI6IGFueSA9IGxhc3RPcmRlclBlclVzZXIuZmlsdGVyKFxuICAgICAgKG9yZGVyKSA9PiBwcm9kdWN0ID09PSBvcmRlci50eXBlXG4gICAgKVswXTtcbiAgICBpZiAocHJvZHVjdEluTGFzdE9yZGVyKSB7XG4gICAgICBhZGRUb0NhcnQocHJvZHVjdEluTGFzdE9yZGVyLmltZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RJbkJlc3RTZWxsZXI6IGFueSA9IGJlc3RTZWxsZXJQcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChiZXN0U2VsbGVyUHJvZHVjdCkgPT4gcHJvZHVjdCA9PT0gYmVzdFNlbGxlclByb2R1Y3QudHlwZVxuICAgICAgKVswXTtcbiAgICAgIGlmIChwcm9kdWN0SW5CZXN0U2VsbGVyKSBhZGRUb0NhcnQocHJvZHVjdEluQmVzdFNlbGxlci5pbWcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZXRJbWFnZVNyYyA9IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgaW1hZ2VGaWxlOiBGaWxlKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgZnIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBmci5yZXN1bHQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChudWxsKTtcbiAgICAgIH1cblxuICAgICAgaW1hZ2Uuc3JjID0gZnIucmVzdWx0O1xuXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBmci5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgZnIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNyZWNvZ25pdGlvbi1pbWFnZS1pbnB1dFwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCByZWNvZ25pdGlvbkNvbmZpZGVuY2VJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNyZWNvZ25pdGlvbi1jb25maWRlbmNlLWlucHV0XCJcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjcmVjb2duaXRpb24tcHJvZ3Jlc3NcIlxuKTtcbmNvbnN0IHJlY29nbml0aW9uVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlY29nbml0aW9uLXRleHRcIik7XG5cbmNvbnN0IG9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmlnaW5hbC1pbWFnZVwiKTtcbmNvbnN0IGxhYmVsZWRJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhYmVsZWQtaW1hZ2VcIik7XG5cbmlmIChcbiAgIXJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQgfHxcbiAgIXJlY29nbml0aW9uVGV4dEVsZW1lbnQgfHxcbiAgIW9yaWdpbmFsSW1hZ2VFbGVtZW50IHx8XG4gICFsYWJlbGVkSW1hZ2VFbGVtZW50IHx8XG4gICFyZWNvZ25pdGlvblByb2dyZXNzRWxlbWVudCB8fFxuICAhcmVjb2duaXRpb25Db25maWRlbmNlSW5wdXRFbGVtZW50XG4pIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbGVtZW50c1wiKTtcbn1cblxucmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgaWYgKCFyZWNvZ25pdGlvbkltYWdlSW5wdXRFbGVtZW50LmZpbGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBmaWxlID0gcmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudC5maWxlc1swXTtcblxuICByZXR1cm4gdGVzc2VyYWN0XG4gICAgLnJlY29nbml6ZShmaWxlLCB7XG4gICAgICBsYW5nOiBcImVuZ1wiLFxuICAgIH0pXG4gICAgLnByb2dyZXNzKCh7IHByb2dyZXNzLCBzdGF0dXMgfSkgPT4ge1xuICAgICAgaWYgKCFwcm9ncmVzcyB8fCAhc3RhdHVzIHx8IHN0YXR1cyAhPT0gXCJyZWNvZ25pemluZyB0ZXh0XCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHAgPSAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMik7XG5cbiAgICAgIHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c3RhdHVzfTogJHtwfSVgO1xuICAgICAgKHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50IGFzIGFueSkudmFsdWUgPSBwO1xuICAgIH0pXG4gICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGxhYmVsZWRJbWFnZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHJlY29nbml0aW9uVGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgY29uc3QgcGFyYWdyYXBoc0VsZW1lbnRzID0gcmVzLnBhcmFncmFwaHMubWFwKCh7IHRleHQgfSkgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KTtcblxuICAgICAgcmVjb2duaXRpb25UZXh0RWxlbWVudC5hcHBlbmQoLi4ucGFyYWdyYXBoc0VsZW1lbnRzKTtcblxuICAgICAgY29uc3QgcmVmaW5lZFByb2R1Y3RMaXN0ID0gZ2V0UmVmaW5lZEV4dHJhY3RlZFRleHRMaXN0KHJlcy5wYXJhZ3JhcGhzKTtcbiAgICAgIGZpbHRlclByb2R1Y3RMaXN0VG9BZGRJbkNhcnQocmVmaW5lZFByb2R1Y3RMaXN0KTtcblxuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGF3YWl0IHNldEltYWdlU3JjKG9yaWdpbmFsSW1hZ2UsIGZpbGUpO1xuXG4gICAgICBjb25zdCBsYWJlbGVkSW1hZ2UgPSBvcmlnaW5hbEltYWdlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgY29uc3Qgd29yZHNFbGVtZW50cyA9IHJlcy53b3Jkc1xuICAgICAgICAuZmlsdGVyKCh7IGNvbmZpZGVuY2UgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjb25maWRlbmNlID4gcGFyc2VJbnQocmVjb2duaXRpb25Db25maWRlbmNlSW5wdXRFbGVtZW50LnZhbHVlLCAxMClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB7IHgwLCB4MSwgeTAsIHkxIH0gPSB3b3JkLmJib3g7XG5cbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIndvcmQtZWxlbWVudFwiKTtcblxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGl2LnN0eWxlLCB7XG4gICAgICAgICAgICB0b3A6IGAke3kwfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3gwfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt4MSAtIHgwfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7eTEgLSB5MH1weGAsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfSk7XG5cbiAgICAgIG9yaWdpbmFsSW1hZ2VFbGVtZW50LmFwcGVuZENoaWxkKG9yaWdpbmFsSW1hZ2UpO1xuICAgICAgbGFiZWxlZEltYWdlRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbGVkSW1hZ2UpO1xuICAgICAgbGFiZWxlZEltYWdlRWxlbWVudC5hcHBlbmQoLi4ud29yZHNFbGVtZW50cyk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=