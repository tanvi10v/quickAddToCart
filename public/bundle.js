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
alert('t');


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
tesseract_js_1.default.workerOptions.workerPath = 'http://localhost:8080/worker.min.js';
const setImageSrc = (image, imageFile) => {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = function () {
            if (typeof fr.result !== 'string') {
                return reject(null);
            }
            image.src = fr.result;
            return resolve();
        };
        fr.onerror = reject;
        fr.readAsDataURL(imageFile);
    });
};
const recognitionImageInputElement = document.querySelector('#recognition-image-input');
const recognitionConfidenceInputElement = document.querySelector('#recognition-confidence-input');
const recognitionProgressElement = document.querySelector('#recognition-progress');
const recognitionTextElement = document.querySelector('#recognition-text');
const originalImageElement = document.querySelector('#original-image');
const labeledImageElement = document.querySelector('#labeled-image');
if (!recognitionImageInputElement ||
    !recognitionTextElement ||
    !originalImageElement ||
    !labeledImageElement ||
    !recognitionProgressElement ||
    !recognitionConfidenceInputElement) {
    throw new Error('Missing elements');
}
recognitionImageInputElement.addEventListener('change', () => {
    if (!recognitionImageInputElement.files) {
        return null;
    }
    const file = recognitionImageInputElement.files[0];
    return tesseract_js_1.default
        .recognize(file, {
        lang: 'eng',
    })
        .progress(({ progress, status }) => {
        if (!progress || !status || status !== 'recognizing text') {
            return null;
        }
        const p = (progress * 100).toFixed(2);
        recognitionProgressElement.textContent = `${status}: ${p}%`;
        recognitionProgressElement.value = p;
    })
        .then(async (res) => {
        originalImageElement.innerHTML = '';
        labeledImageElement.innerHTML = '';
        recognitionTextElement.innerHTML = '';
        const paragraphsElements = res.paragraphs.map(({ text }) => {
            const p = document.createElement('p');
            p.textContent = text;
            return p;
        });
        recognitionTextElement.append(...paragraphsElements);
        const originalImage = document.createElement('img');
        await setImageSrc(originalImage, file);
        const labeledImage = originalImage.cloneNode(true);
        const wordsElements = res.words
            .filter(({ confidence }) => {
            return confidence > parseInt(recognitionConfidenceInputElement.value, 10);
        })
            .map((word) => {
            const div = document.createElement('div');
            const { x0, x1, y0, y1 } = word.bbox;
            div.classList.add('word-element');
            Object.assign(div.style, {
                top: `${y0}px`,
                left: `${x0}px`,
                width: `${x1 - x0}px`,
                height: `${y1 - y0}px`,
                border: '1px solid black',
                position: 'absolute',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUU7Z0JBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDckIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDdEIsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsUUFBUSxFQUFFLFVBQVU7YUFDckIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVMLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gd29ya2VyUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzQDAuMi4wL2Rpc3Qvd29ya2VyLmpzJyxcbiAgICBjb3JlUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzLWNvcmVAMC4xLjAvaW5kZXguanMnLCAgICBcbiAgICBsYW5nUGF0aDogJ2h0dHBzOi8vdGVzc2RhdGEucHJvamVjdG5hcHRoYS5jb20vMy4wMi8nLFxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGNvbnNvbGUuZGVidWcoJ1VzaW5nIERldmVsb3BtZW50IENvbmZpZ3VyYXRpb24nKVxuICAgIGRlZmF1bHRPcHRpb25zLndvcmtlclBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy9kaXN0L3dvcmtlci5kZXYuanM/bm9jYWNoZT0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMylcbn1lbHNle1xuICAgIHZhciB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9uYXB0aGEvdGVzc2VyYWN0LmpzQCcgKyB2ZXJzaW9uICsgJy9kaXN0L3dvcmtlci5qcydcbn1cblxuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXG5cbmV4cG9ydHMuc3Bhd25Xb3JrZXIgPSBmdW5jdGlvbiBzcGF3bldvcmtlcihpbnN0YW5jZSwgd29ya2VyT3B0aW9ucyl7XG4gICAgaWYod2luZG93LkJsb2IgJiYgd2luZG93LlVSTCl7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoWydpbXBvcnRTY3JpcHRzKFwiJyArIHdvcmtlck9wdGlvbnMud29ya2VyUGF0aCArICdcIik7J10pXG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyT3B0aW9ucy53b3JrZXJQYXRoKVxuICAgIH1cblxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIHBhY2tldCA9IGUuZGF0YTtcbiAgICAgICAgaW5zdGFuY2UuX3JlY3YocGFja2V0KVxuICAgIH1cbiAgICByZXR1cm4gd29ya2VyXG59XG5cbmV4cG9ydHMudGVybWluYXRlV29ya2VyID0gZnVuY3Rpb24oaW5zdGFuY2Upe1xuICAgIGluc3RhbmNlLndvcmtlci50ZXJtaW5hdGUoKVxufVxuXG5leHBvcnRzLnNlbmRQYWNrZXQgPSBmdW5jdGlvbiBzZW5kUGFja2V0KGluc3RhbmNlLCBwYWNrZXQpe1xuICAgIGxvYWRJbWFnZShwYWNrZXQucGF5bG9hZC5pbWFnZSwgZnVuY3Rpb24oaW1nKXtcbiAgICAgICAgcGFja2V0LnBheWxvYWQuaW1hZ2UgPSBpbWdcbiAgICAgICAgaW5zdGFuY2Uud29ya2VyLnBvc3RNZXNzYWdlKHBhY2tldCkgXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2UsIGNiKXtcbiAgICBpZih0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgaWYoL15cXCMvLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgY3NzIHNlbGVjdG9yXG4gICAgICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW1hZ2UpLCBjYilcbiAgICAgICAgfWVsc2UgaWYoLyhibG9ifGRhdGEpXFw6Ly50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAvLyBkYXRhIHVybFxuICAgICAgICAgICAgdmFyIGltID0gbmV3IEltYWdlXG4gICAgICAgICAgICBpbS5zcmMgPSBpbWFnZTtcbiAgICAgICAgICAgIGltLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKGltLCBjYik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgaW1hZ2UsIHRydWUpXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XG4gICAgICAgICAgICB4aHIub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoeGhyLnJlc3BvbnNlLCBjYik7XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGlmKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpbWFnZSkgJiYgIS9eaHR0cHM6XFwvXFwvY3Jvc3NvcmlnaW4ubWUvLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQXR0ZW1wdGluZyB0byBsb2FkIGltYWdlIHdpdGggQ09SUyBwcm94eScpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRJbWFnZSgnaHR0cHM6Ly9jcm9zc29yaWdpbi5tZS8nICsgaW1hZ2UsIGNiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZW5kKG51bGwpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKGltYWdlIGluc3RhbmNlb2YgRmlsZSl7XG4gICAgICAgIC8vIGZpbGVzXG4gICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZnIub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoZnIucmVzdWx0LCBjYik7XG4gICAgICAgIGZyLnJlYWRBc0RhdGFVUkwoaW1hZ2UpXG4gICAgICAgIHJldHVyblxuICAgIH1lbHNlIGlmKGltYWdlIGluc3RhbmNlb2YgQmxvYil7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSksIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLmdldENvbnRleHQpe1xuICAgICAgICAvLyBjYW52YXMgZWxlbWVudFxuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGltYWdlLmdldENvbnRleHQoJzJkJyksIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLnRhZ05hbWUgPT0gXCJJTUdcIiB8fCBpbWFnZS50YWdOYW1lID09IFwiVklERU9cIil7XG4gICAgICAgIC8vIGltYWdlIGVsZW1lbnQgb3IgdmlkZW8gZWxlbWVudFxuICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjLndpZHRoICA9IGltYWdlLm5hdHVyYWxXaWR0aCAgfHwgaW1hZ2UudmlkZW9XaWR0aDtcbiAgICAgICAgYy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IGltYWdlLnZpZGVvSGVpZ2h0O1xuICAgICAgICB2YXIgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShjdHgsIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLmdldEltYWdlRGF0YSl7XG4gICAgICAgIC8vIGNhbnZhcyBjb250ZXh0XG4gICAgICAgIHZhciBkYXRhID0gaW1hZ2UuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLmNhbnZhcy53aWR0aCwgaW1hZ2UuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoZGF0YSwgY2IpXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjYihpbWFnZSlcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJldHVybiBpbiBsb2FkSW1hZ2UgY2FzY2FkZScpXG5cbn1cbiIsIi8vIFRoZSByZXN1bHQgb2YgZHVtcC5qcyBpcyBhIGJpZyBKU09OIHRyZWVcbi8vIHdoaWNoIGNhbiBiZSBlYXNpbHkgc2VyaWFsaXplZCAoZm9yIGluc3RhbmNlXG4vLyB0byBiZSBzZW50IGZyb20gYSB3ZWJ3b3JrZXIgdG8gdGhlIG1haW4gYXBwXG4vLyBvciB0aHJvdWdoIE5vZGUncyBJUEMpLCBidXQgd2Ugd2FudFxuLy8gYSAoY2lyY3VsYXIpIERPTS1saWtlIGludGVyZmFjZSBmb3Igd2Fsa2luZ1xuLy8gdGhyb3VnaCB0aGUgZGF0YS4gXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2lyY3VsYXJpemUocGFnZSl7XG4gICAgcGFnZS5wYXJhZ3JhcGhzID0gW11cbiAgICBwYWdlLmxpbmVzID0gW11cbiAgICBwYWdlLndvcmRzID0gW11cbiAgICBwYWdlLnN5bWJvbHMgPSBbXVxuXG4gICAgcGFnZS5ibG9ja3MuZm9yRWFjaChmdW5jdGlvbihibG9jayl7XG4gICAgICAgIGJsb2NrLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgIGJsb2NrLmxpbmVzID0gW11cbiAgICAgICAgYmxvY2sud29yZHMgPSBbXVxuICAgICAgICBibG9jay5zeW1ib2xzID0gW11cblxuICAgICAgICBibG9jay5wYXJhZ3JhcGhzLmZvckVhY2goZnVuY3Rpb24ocGFyYSl7XG4gICAgICAgICAgICBwYXJhLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICBwYXJhLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgICAgICBwYXJhLndvcmRzID0gW11cbiAgICAgICAgICAgIHBhcmEuc3ltYm9scyA9IFtdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhcmEubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKXtcbiAgICAgICAgICAgICAgICBsaW5lLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgbGluZS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgIGxpbmUucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgICAgICAgICBsaW5lLnN5bWJvbHMgPSBbXVxuXG4gICAgICAgICAgICAgICAgbGluZS53b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHdvcmQpe1xuICAgICAgICAgICAgICAgICAgICB3b3JkLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24oc3ltKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS53b3JkID0gd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5saW5lID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5saW5lLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFyYWdyYXBoLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0uYmxvY2suc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYWdlLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFyYWdyYXBoLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICAgICAgd29yZC5ibG9jay53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFnZS53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsaW5lLmJsb2NrLmxpbmVzLnB1c2gobGluZSlcbiAgICAgICAgICAgICAgICBsaW5lLnBhZ2UubGluZXMucHVzaChsaW5lKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBhcmEucGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBwYWdlXG59IiwiY29uc3QgYWRhcHRlciA9IHJlcXVpcmUoJy4uL25vZGUvaW5kZXguanMnKVxuXG5sZXQgam9iQ291bnRlciA9IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGVzc2VyYWN0Sm9iIHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSl7XG4gICAgICAgIHRoaXMuaWQgPSAnSm9iLScgKyAoKytqb2JDb3VudGVyKSArICctJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDMsIDgpXG5cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IFtdXG4gICAgICAgIHRoaXMuX3JlamVjdCA9IFtdXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzID0gW11cbiAgICAgICAgdGhpcy5fZmluYWxseSA9IFtdXG4gICAgfVxuXG4gICAgdGhlbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBpZih0aGlzLl9yZXNvbHZlLnB1c2gpe1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZS5wdXNoKHJlc29sdmUpIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5fcmVzb2x2ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHJlamVjdCkgdGhpcy5jYXRjaChyZWplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2F0Y2gocmVqZWN0KXtcbiAgICAgICAgaWYodGhpcy5fcmVqZWN0LnB1c2gpe1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0LnB1c2gocmVqZWN0KSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZWplY3QodGhpcy5fcmVqZWN0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcm9ncmVzcyhmbil7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzLnB1c2goZm4pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaW5hbGx5KGZuKSB7XG4gICAgICAgIHRoaXMuX2ZpbmFsbHkucHVzaChmbilcbiAgICAgICAgcmV0dXJuIHRoaXM7ICBcbiAgICB9XG4gICAgX3NlbmQoYWN0aW9uLCBwYXlsb2FkKXtcbiAgICAgICAgYWRhcHRlci5zZW5kUGFja2V0KHRoaXMuX2luc3RhbmNlLCB7XG4gICAgICAgICAgICBqb2JJZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9oYW5kbGUocGFja2V0KXtcbiAgICAgICAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgbGV0IHJ1bkZpbmFsbHlDYnMgPSBmYWxzZTtcblxuICAgICAgICBpZihwYWNrZXQuc3RhdHVzID09PSAncmVzb2x2ZScpe1xuICAgICAgICAgICAgaWYodGhpcy5fcmVzb2x2ZS5sZW5ndGggPT09IDApIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gZm4oZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYocmV0ICYmIHR5cGVvZiByZXQudGhlbiA9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUZXNzZXJhY3RKb2IgaW5zdGFuY2VzIGRvIG5vdCBjaGFpbiBsaWtlIEVTNiBQcm9taXNlcy4gVG8gY29udmVydCBpdCBpbnRvIGEgcmVhbCBwcm9taXNlLCB1c2UgUHJvbWlzZS5yZXNvbHZlLicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2RlcXVldWUoKVxuICAgICAgICAgICAgcnVuRmluYWxseUNicyA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZWplY3QnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3JlamVjdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QuZm9yRWFjaChmbiA9PiBmbihkYXRhKSlcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVxdWV1ZSgpXG4gICAgICAgICAgICBydW5GaW5hbGx5Q2JzID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Byb2dyZXNzJyl7XG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzcy5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWVzc2FnZSB0eXBlIHVua25vd24nLCBwYWNrZXQuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bkZpbmFsbHlDYnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsbHkuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCBhZGFwdGVyID0gcmVxdWlyZSgnLi9ub2RlL2luZGV4LmpzJylcbmNvbnN0IGNpcmN1bGFyaXplID0gcmVxdWlyZSgnLi9jb21tb24vY2lyY3VsYXJpemUuanMnKVxuY29uc3QgVGVzc2VyYWN0Sm9iID0gcmVxdWlyZSgnLi9jb21tb24vam9iJyk7XG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuY29uc3QgY3JlYXRlID0gZnVuY3Rpb24od29ya2VyT3B0aW9ucyA9IHt9KXtcblx0dmFyIHdvcmtlciA9IG5ldyBUZXNzZXJhY3RXb3JrZXIoT2JqZWN0LmFzc2lnbih7fSwgYWRhcHRlci5kZWZhdWx0T3B0aW9ucywgd29ya2VyT3B0aW9ucykpO1xuXHR3b3JrZXIuY3JlYXRlID0gY3JlYXRlO1xuXHR3b3JrZXIudmVyc2lvbiA9IHZlcnNpb247XG5cdHJldHVybiB3b3JrZXI7XG59XG5cbmNsYXNzIFRlc3NlcmFjdFdvcmtlciB7XG5cdGNvbnN0cnVjdG9yKHdvcmtlck9wdGlvbnMpe1xuXHRcdHRoaXMud29ya2VyID0gbnVsbDtcblx0XHR0aGlzLndvcmtlck9wdGlvbnMgPSB3b3JrZXJPcHRpb25zO1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdHRoaXMuX3F1ZXVlID0gW107XG5cdH1cblxuXHRyZWNvZ25pemUoaW1hZ2UsIG9wdGlvbnMgPSB7fSl7XG5cdFx0cmV0dXJuIHRoaXMuX2RlbGF5KGpvYiA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0ge2xhbmc6IG9wdGlvbnN9XG5cdFx0XHRvcHRpb25zLmxhbmcgPSBvcHRpb25zLmxhbmcgfHwgJ2VuZyc7XG5cblx0XHRcdGpvYi5fc2VuZCgncmVjb2duaXplJywgeyBpbWFnZSwgb3B0aW9ucywgd29ya2VyT3B0aW9uczogdGhpcy53b3JrZXJPcHRpb25zIH0pO1xuXHRcdH0pXG5cdH1cblx0ZGV0ZWN0KGltYWdlLCBvcHRpb25zID0ge30pe1xuXHRcdHJldHVybiB0aGlzLl9kZWxheShqb2IgPT4ge1xuXHRcdFx0am9iLl9zZW5kKCdkZXRlY3QnLCB7IGltYWdlLCBvcHRpb25zLCB3b3JrZXJPcHRpb25zOiB0aGlzLndvcmtlck9wdGlvbnMgfSk7XG5cdFx0fSlcblx0fVxuXG5cdHRlcm1pbmF0ZSgpe1xuXHRcdGlmKHRoaXMud29ya2VyKSBhZGFwdGVyLnRlcm1pbmF0ZVdvcmtlcih0aGlzKTtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdFx0dGhpcy5fY3VycmVudEpvYiA9IG51bGw7XG5cdFx0dGhpcy5fcXVldWUgPSBbXTtcblx0fVxuXG5cdF9kZWxheShmbil7XG5cdFx0aWYoIXRoaXMud29ya2VyKSB0aGlzLndvcmtlciA9IGFkYXB0ZXIuc3Bhd25Xb3JrZXIodGhpcywgdGhpcy53b3JrZXJPcHRpb25zKTtcblxuXHRcdHZhciBqb2IgPSBuZXcgVGVzc2VyYWN0Sm9iKHRoaXMpO1xuXHRcdHRoaXMuX3F1ZXVlLnB1c2goZSA9PiB7XG5cdFx0XHR0aGlzLl9xdWV1ZS5zaGlmdCgpO1xuXHRcdFx0dGhpcy5fY3VycmVudEpvYiA9IGpvYjtcblx0XHRcdGZuKGpvYik7XG5cdFx0fSk7XG5cdFx0aWYoIXRoaXMuX2N1cnJlbnRKb2IpIHRoaXMuX2RlcXVldWUoKTtcblx0XHRyZXR1cm4gam9iO1xuXHR9XG5cblx0X2RlcXVldWUoKXtcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHRpZih0aGlzLl9xdWV1ZS5sZW5ndGgpe1xuXHRcdFx0dGhpcy5fcXVldWVbMF0oKTtcblx0XHR9XG5cdH1cblxuXHRfcmVjdihwYWNrZXQpe1xuICAgICAgICBpZihwYWNrZXQuc3RhdHVzID09PSAncmVzb2x2ZScgJiYgcGFja2V0LmFjdGlvbiA9PT0gJ3JlY29nbml6ZScpe1xuICAgICAgICAgICAgcGFja2V0LmRhdGEgPSBjaXJjdWxhcml6ZShwYWNrZXQuZGF0YSk7XG4gICAgICAgIH1cblxuXHRcdGlmKHRoaXMuX2N1cnJlbnRKb2IuaWQgPT09IHBhY2tldC5qb2JJZCl7XG5cdFx0XHR0aGlzLl9jdXJyZW50Sm9iLl9oYW5kbGUocGFja2V0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0pvYiBJRCAnICsgcGFja2V0LmpvYklkICsgJyBub3Qga25vd24uJylcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoKTtcbiIsImFsZXJ0KCd0Jyk7XG5leHBvcnQge30iLCIvLyBSZWZlcmVuY2VkOiBodHRwczovL2dpdGh1Yi5jb20vbWFjaWVqY2llc2xhci9PQ1JcbmltcG9ydCB0ZXNzZXJhY3QgZnJvbSAndGVzc2VyYWN0LmpzJztcblxuKHRlc3NlcmFjdCBhcyBhbnkpLndvcmtlck9wdGlvbnMud29ya2VyUGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvd29ya2VyLm1pbi5qcyc7XG5cbmNvbnN0IHNldEltYWdlU3JjID0gKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCBpbWFnZUZpbGU6IEZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0eXBlb2YgZnIucmVzdWx0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICBpbWFnZS5zcmMgPSBmci5yZXN1bHQ7XG5cbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIGZyLm9uZXJyb3IgPSByZWplY3Q7XG5cbiAgICBmci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjcmVjb2duaXRpb24taW1hZ2UtaW5wdXQnLFxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgcmVjb2duaXRpb25Db25maWRlbmNlSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNyZWNvZ25pdGlvbi1jb25maWRlbmNlLWlucHV0JyxcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY29nbml0aW9uLXByb2dyZXNzJyk7XG5jb25zdCByZWNvZ25pdGlvblRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY29nbml0aW9uLXRleHQnKTtcblxuY29uc3Qgb3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JpZ2luYWwtaW1hZ2UnKTtcbmNvbnN0IGxhYmVsZWRJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxlZC1pbWFnZScpO1xuXG5pZiAoXG4gICFyZWNvZ25pdGlvbkltYWdlSW5wdXRFbGVtZW50IHx8XG4gICFyZWNvZ25pdGlvblRleHRFbGVtZW50IHx8XG4gICFvcmlnaW5hbEltYWdlRWxlbWVudCB8fFxuICAhbGFiZWxlZEltYWdlRWxlbWVudCB8fFxuICAhcmVjb2duaXRpb25Qcm9ncmVzc0VsZW1lbnQgfHxcbiAgIXJlY29nbml0aW9uQ29uZmlkZW5jZUlucHV0RWxlbWVudFxuKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50cycpO1xufVxuXG5yZWNvZ25pdGlvbkltYWdlSW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgaWYgKCFyZWNvZ25pdGlvbkltYWdlSW5wdXRFbGVtZW50LmZpbGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBmaWxlID0gcmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudC5maWxlc1swXTtcblxuICByZXR1cm4gdGVzc2VyYWN0XG4gICAgLnJlY29nbml6ZShmaWxlLCB7XG4gICAgICBsYW5nOiAnZW5nJyxcbiAgICB9KVxuICAgIC5wcm9ncmVzcygoeyBwcm9ncmVzcywgc3RhdHVzIH0pID0+IHtcbiAgICAgIGlmICghcHJvZ3Jlc3MgfHwgIXN0YXR1cyB8fCBzdGF0dXMgIT09ICdyZWNvZ25pemluZyB0ZXh0Jykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcCA9IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKTtcblxuICAgICAgcmVjb2duaXRpb25Qcm9ncmVzc0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtzdGF0dXN9OiAke3B9JWA7XG4gICAgICAocmVjb2duaXRpb25Qcm9ncmVzc0VsZW1lbnQgYXMgYW55KS52YWx1ZSA9IHA7XG4gICAgfSlcbiAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGxhYmVsZWRJbWFnZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICByZWNvZ25pdGlvblRleHRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICBjb25zdCBwYXJhZ3JhcGhzRWxlbWVudHMgPSByZXMucGFyYWdyYXBocy5tYXAoKHsgdGV4dCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KTtcblxuICAgICAgcmVjb2duaXRpb25UZXh0RWxlbWVudC5hcHBlbmQoLi4ucGFyYWdyYXBoc0VsZW1lbnRzKTtcblxuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICBhd2FpdCBzZXRJbWFnZVNyYyhvcmlnaW5hbEltYWdlLCBmaWxlKTtcblxuICAgICAgY29uc3QgbGFiZWxlZEltYWdlID0gb3JpZ2luYWxJbWFnZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHdvcmRzRWxlbWVudHMgPSByZXMud29yZHNcbiAgICAgICAgLmZpbHRlcigoeyBjb25maWRlbmNlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29uZmlkZW5jZSA+IHBhcnNlSW50KHJlY29nbml0aW9uQ29uZmlkZW5jZUlucHV0RWxlbWVudC52YWx1ZSwgMTApO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY29uc3QgeyB4MCwgeDEsIHkwLCB5MSB9ID0gd29yZC5iYm94O1xuXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dvcmQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkaXYuc3R5bGUsIHtcbiAgICAgICAgICAgIHRvcDogYCR7eTB9cHhgLFxuICAgICAgICAgICAgbGVmdDogYCR7eDB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3gxIC0geDB9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiBgJHt5MSAtIHkwfXB4YCxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH0pO1xuXG4gICAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5hcHBlbmRDaGlsZChvcmlnaW5hbEltYWdlKTtcbiAgICAgIGxhYmVsZWRJbWFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxlZEltYWdlKTtcbiAgICAgIGxhYmVsZWRJbWFnZUVsZW1lbnQuYXBwZW5kKC4uLndvcmRzRWxlbWVudHMpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9