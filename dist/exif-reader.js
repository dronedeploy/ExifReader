(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ExifReader"] = factory();
	else
		root["ExifReader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(3), __webpack_require__(12), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./image-header'), require('./tags'), require('./iptc-tags'), require('./xmp-tags'));} else {var mod = { exports: {} };factory(mod.exports, global.imageHeader, global.tags, global.iptcTags, global.xmpTags);global.exifReader = mod.exports;}})(this, function (exports, _imageHeader, _tags, _iptcTags, _xmpTags) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.
	
	
	
	
	
	
	
	
	
	
	
	
	
	    load = load;exports.
	
	
	
	
	
	
	
	
	
	
	
	
	    loadView = loadView;var _imageHeader2 = _interopRequireDefault(_imageHeader);var _tags2 = _interopRequireDefault(_tags);var _iptcTags2 = _interopRequireDefault(_iptcTags);var _xmpTags2 = _interopRequireDefault(_xmpTags);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function load(data) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { expanded: false };var dataView = void 0;try {dataView = new DataView(data);} catch (error) {console.warn('Warning: A full DataView implementation is not available. If you\'re using Node.js you probably want to do this:\n  1. Install a DataView polyfill, e.g. jdataview: npm install --save jdataview\n  2. Require that at the top of your script: global.DataView = require(\'jdataview\');\nSee an example of this in the ExifReader example directory.'); // eslint-disable-line no-console
	            return {};}return loadView(dataView, options);}function loadView(dataView) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { expanded: false };var foundMetaData = false;
	        var tags = {};
	
	        _imageHeader2.default.check(dataView);var _ImageHeader$parseApp =
	        _imageHeader2.default.parseAppMarkers(dataView),tiffHeaderOffset = _ImageHeader$parseApp.tiffHeaderOffset,iptcDataOffset = _ImageHeader$parseApp.iptcDataOffset,xmpDataOffset = _ImageHeader$parseApp.xmpDataOffset,xmpFieldLength = _ImageHeader$parseApp.xmpFieldLength;
	
	        if (hasExifData(tiffHeaderOffset)) {
	            foundMetaData = true;
	            var readTags = _tags2.default.read(dataView, tiffHeaderOffset);
	            if (options.expanded) {
	                tags.exif = readTags;
	            } else {
	                tags = _extends({}, tags, readTags);
	            }
	        }
	        if (hasIptcData(iptcDataOffset)) {
	            foundMetaData = true;
	            var _readTags = _iptcTags2.default.read(dataView, iptcDataOffset);
	            if (options.expanded) {
	                tags.iptc = _readTags;
	            } else {
	                tags = _extends({}, tags, _readTags);
	            }
	        }
	        if (hasXmpData(xmpDataOffset)) {
	            foundMetaData = true;
	            var _readTags2 = _xmpTags2.default.read(dataView, xmpDataOffset, xmpFieldLength);
	            if (options.expanded) {
	                tags.xmp = _readTags2;
	            } else {
	                tags = _extends({}, tags, _readTags2);
	            }
	        }
	        if (!foundMetaData) {
	            throw new Error('No Exif data');
	        }
	
	        return tags;
	    }
	
	    function hasExifData(tiffHeaderOffset) {
	        return tiffHeaderOffset !== undefined;
	    }
	
	    function hasIptcData(iptcDataOffset) {
	        return iptcDataOffset !== undefined;
	    }
	
	    function hasXmpData(xmpDataOffset) {
	        return xmpDataOffset !== undefined;
	    }});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./utils'));} else {var mod = { exports: {} };factory(mod.exports, global.utils);global.imageHeader = mod.exports;}})(this, function (exports, _utils) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });
	
	
	
	
	
	    var MIN_DATA_BUFFER_LENGTH = 2; /* This Source Code Form is subject to the terms of the Mozilla Public
	                                     * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                     * file, You can obtain one at https://mozilla.org/MPL/2.0/. */var JPEG_ID = 0xffd8;var JPEG_ID_SIZE = 2;
	    var APP_ID_OFFSET = 4;
	    var APP_MARKER_SIZE = 2;
	    var TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.
	    var IPTC_DATA_OFFSET = 18; // From start of APP13 marker.
	    var XMP_DATA_OFFSET = 33; // From start of APP1 marker.
	    var APP0_MARKER = 0xffe0;
	    var APP1_MARKER = 0xffe1;
	    var APP13_MARKER = 0xffed;
	    var APP15_MARKER = 0xffef;
	    var COMMENT_MARKER = 0xfffe;
	    var APP1_EXIF_IDENTIFIER = 'Exif';
	    var APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/';
	    var APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';exports.default =
	
	    {
	        check: check,
	        parseAppMarkers: parseAppMarkers };
	
	
	    function check(dataView) {
	        if (dataView.byteLength < MIN_DATA_BUFFER_LENGTH || dataView.getUint16(0, false) !== JPEG_ID) {
	            throw new Error('Invalid image format');
	        }
	    }
	
	    function parseAppMarkers(dataView) {
	        var appMarkerPosition = JPEG_ID_SIZE;
	        var fieldLength = void 0;
	        var tiffHeaderOffset = void 0;
	        var iptcDataOffset = void 0;
	        var xmpDataOffset = void 0;
	        var xmpFieldLength = void 0;
	
	        while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
	            if (isApp1ExifMarker(dataView, appMarkerPosition)) {
	                fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
	                tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
	            } else if (isApp1XMPMarker(dataView, appMarkerPosition)) {
	                fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
	                xmpDataOffset = appMarkerPosition + XMP_DATA_OFFSET;
	                xmpFieldLength = fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE);
	            } else if (isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
	                fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
	                iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
	            } else if (isAppMarker(dataView, appMarkerPosition)) {
	                fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE, false);
	            } else {
	                break;
	            }
	            appMarkerPosition += APP_MARKER_SIZE + fieldLength;
	        }
	
	        return {
	            hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
	            tiffHeaderOffset: tiffHeaderOffset,
	            iptcDataOffset: iptcDataOffset,
	            xmpDataOffset: xmpDataOffset,
	            xmpFieldLength: xmpFieldLength };
	
	    }
	
	    function isApp1ExifMarker(dataView, appMarkerPosition) {
	        var markerIdLength = APP1_EXIF_IDENTIFIER.length;
	
	        return dataView.getUint16(appMarkerPosition, false) === APP1_MARKER &&
	        (0, _utils.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER &&
	        dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00;
	    }
	
	    function isApp1XMPMarker(dataView, appMarkerPosition) {
	        var markerIdLength = APP1_XMP_IDENTIFIER.length;
	
	        return dataView.getUint16(appMarkerPosition, false) === APP1_MARKER &&
	        (0, _utils.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER &&
	        dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00;
	    }
	
	    function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
	        var markerIdLength = APP13_IPTC_IDENTIFIER.length;
	
	        return dataView.getUint16(appMarkerPosition, false) === APP13_MARKER &&
	        (0, _utils.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER &&
	        dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength, false) === 0x00;
	    }
	
	    function isAppMarker(dataView, appMarkerPosition) {
	        var appMarker = dataView.getUint16(appMarkerPosition, false);
	        return appMarker >= APP0_MARKER && appMarker <= APP15_MARKER ||
	        appMarker === COMMENT_MARKER;
	    }});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.utils = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.
	
	
	
	    getStringFromDataView = getStringFromDataView; /* This Source Code Form is subject to the terms of the Mozilla Public
	                                                    * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                    * file, You can obtain one at https://mozilla.org/MPL/2.0/. */function getStringFromDataView(dataView, offset, length) {var chars = [];for (var i = 0; i < length && offset + i < dataView.byteLength; i++) {
	            chars.push(dataView.getUint8(offset + i, false));
	        }
	        return getAsciiValue(chars).join('');
	    }
	
	    function getAsciiValue(charArray) {
	        return charArray.map(function (charCode) {return String.fromCharCode(charCode);});
	    }});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./byte-order'), require('./types'), require('./tag-names'));} else {var mod = { exports: {} };factory(mod.exports, global.byteOrder, global.types, global.tagNames);global.tags = mod.exports;}})(this, function (exports, _byteOrder, _types, _tagNames) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _byteOrder2 = _interopRequireDefault(_byteOrder);var _types2 = _interopRequireDefault(_types);var _tagNames2 = _interopRequireDefault(_tagNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
	
	
	
	
	
	
	
	    var EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
	    var GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
	    var INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';
	
	    var getTagValueAt = {
	        1: _types2.default.getByteAt,
	        2: _types2.default.getAsciiAt,
	        3: _types2.default.getShortAt,
	        4: _types2.default.getLongAt,
	        5: _types2.default.getRationalAt,
	        7: _types2.default.getUndefinedAt,
	        9: _types2.default.getSlongAt,
	        10: _types2.default.getSrationalAt };exports.default =
	
	
	    {
	        read: read };
	
	
	    function read(dataView, tiffHeaderOffset) {
	        var byteOrder = _byteOrder2.default.getByteOrder(dataView, tiffHeaderOffset);
	        var tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder);
	        tags = readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder);
	        tags = readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder);
	        tags = readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder);
	
	        return tags;
	    }
	
	    function read0thIfd(dataView, tiffHeaderOffset, byteOrder) {
	        return readIfd(dataView, '0th', tiffHeaderOffset, get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder), byteOrder);
	    }
	
	    function get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder) {
	        return tiffHeaderOffset + _types2.default.getLongAt(dataView, tiffHeaderOffset + 4, byteOrder);
	    }
	
	    function readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
	        if (tags[EXIF_IFD_POINTER_KEY] !== undefined) {
	            return _extends(tags, readIfd(dataView, 'exif', tiffHeaderOffset, tiffHeaderOffset + tags[EXIF_IFD_POINTER_KEY].value, byteOrder));
	        }
	
	        return tags;
	    }
	
	    function readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
	        if (tags[GPS_INFO_IFD_POINTER_KEY] !== undefined) {
	            return _extends(tags, readIfd(dataView, 'gps', tiffHeaderOffset, tiffHeaderOffset + tags[GPS_INFO_IFD_POINTER_KEY].value, byteOrder));
	        }
	
	        return tags;
	    }
	
	    function readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
	        if (tags[INTEROPERABILITY_IFD_POINTER_KEY] !== undefined) {
	            return _extends(tags, readIfd(dataView, 'interoperability', tiffHeaderOffset, tiffHeaderOffset + tags[INTEROPERABILITY_IFD_POINTER_KEY].value, byteOrder));
	        }
	
	        return tags;
	    }
	
	    function readIfd(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
	        var FIELD_COUNT_SIZE = _types2.default.getTypeSize('SHORT');
	        var FIELD_SIZE = 12;
	
	        var tags = {};
	        var numberOfFields = _types2.default.getShortAt(dataView, offset, byteOrder);
	
	        offset += FIELD_COUNT_SIZE;
	        for (var fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
	            var tag = readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder);
	            if (tag !== undefined) {
	                tags[tag.name] = { 'value': tag.value, 'description': tag.description };
	            }
	            offset += FIELD_SIZE;
	        }
	
	        return tags;
	    }
	
	    function readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
	        var TAG_TYPE_OFFSET = _types2.default.getTypeSize('SHORT');
	        var TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + _types2.default.getTypeSize('SHORT');
	        var TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + _types2.default.getTypeSize('LONG');
	
	        var tagCode = _types2.default.getShortAt(dataView, offset, byteOrder);
	        var tagType = _types2.default.getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);
	        var tagCount = _types2.default.getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);
	        var tagValue = void 0;
	
	        if (_types2.default.typeSizes[tagType] === undefined) {
	            return undefined;
	        }
	
	        if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
	            tagValue = getTagValue(dataView, offset + TAG_VALUE_OFFSET, tagType, tagCount, byteOrder);
	        } else {
	            var tagValueOffset = _types2.default.getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);
	            tagValue = getTagValue(dataView, tiffHeaderOffset + tagValueOffset, tagType, tagCount, byteOrder);
	        }
	
	        if (tagType === _types2.default.tagTypes['ASCII']) {
	            tagValue = splitNullSeparatedAsciiString(tagValue);
	            tagValue = decodeAsciiValue(tagValue);
	        }
	
	        if (_tagNames2.default[ifdType][tagCode] !== undefined) {
	            var tagName = void 0,tagDescription = void 0;
	
	            if (_tagNames2.default[ifdType][tagCode]['name'] !== undefined && _tagNames2.default[ifdType][tagCode]['description'] !== undefined) {
	                tagName = _tagNames2.default[ifdType][tagCode]['name'];
	                tagDescription = _tagNames2.default[ifdType][tagCode]['description'](tagValue);
	            } else {
	                tagName = _tagNames2.default[ifdType][tagCode];
	                if (tagValue instanceof Array) {
	                    tagDescription = tagValue.join(', ');
	                } else {
	                    tagDescription = tagValue;
	                }
	            }
	            return {
	                name: tagName,
	                value: tagValue,
	                description: tagDescription };
	
	        }
	
	        return {
	            name: 'undefined-' + tagCode,
	            value: tagValue,
	            description: tagValue };
	
	    }
	
	    function tagValueFitsInOffsetSlot(tagType, tagCount) {
	        return _types2.default.typeSizes[tagType] * tagCount <= _types2.default.getTypeSize('LONG');
	    }
	
	    function getTagValue(dataView, offset, type, count, byteOrder) {
	        var value = [];
	
	        for (var valueIndex = 0; valueIndex < count; valueIndex++) {
	            value.push(getTagValueAt[type](dataView, offset, byteOrder));
	            offset += _types2.default.typeSizes[type];
	        }
	
	        if (type === _types2.default.tagTypes['ASCII']) {
	            value = _types2.default.getAsciiValue(value);
	        } else if (value.length === 1) {
	            value = value[0];
	        }
	
	        return value;
	    }
	
	    function splitNullSeparatedAsciiString(string) {
	        var tagValue = [];
	        var i = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
	
	            for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var character = _step.value;
	                if (character === '\x00') {
	                    i++;
	                    continue;
	                }
	                if (tagValue[i] === undefined) {
	                    tagValue[i] = '';
	                }
	                tagValue[i] += character;
	            }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
	
	        return tagValue;
	    }
	
	    function decodeAsciiValue(asciiValue) {
	        try {
	            return asciiValue.map(function (value) {return decodeURIComponent(escape(value));});
	        } catch (error) {
	            return asciiValue;
	        }
	    }});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.byteOrder = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true }); /* This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                         * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                         * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
	
	    var LITTLE_ENDIAN = 0x4949;
	    var BIG_ENDIAN = 0x4d4d;exports.default =
	
	    {
	        BIG_ENDIAN: BIG_ENDIAN,
	        LITTLE_ENDIAN: LITTLE_ENDIAN,
	        getByteOrder: getByteOrder };
	
	
	    function getByteOrder(dataView, tiffHeaderOffset) {
	        if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN)
	        return LITTLE_ENDIAN;else
	        if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
	            return BIG_ENDIAN;
	        }
	        throw new Error('Illegal byte order value. Faulty image.');
	    }});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./byte-order'));} else {var mod = { exports: {} };factory(mod.exports, global.byteOrder);global.types = mod.exports;}})(this, function (exports, _byteOrder) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _byteOrder2 = _interopRequireDefault(_byteOrder);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	
	
	
	    var typeSizes = {
	        1: 1, // BYTE
	        2: 1, // ASCII
	        3: 2, // SHORT
	        4: 4, // LONG
	        5: 8, // RATIONAL
	        7: 1, // UNDEFINED
	        9: 4, // SLONG
	        10: 8 // SRATIONAL
	    }; /* This Source Code Form is subject to the terms of the Mozilla Public
	        * License, v. 2.0. If a copy of the MPL was not distributed with this
	        * file, You can obtain one at https://mozilla.org/MPL/2.0/. */var tagTypes = {
	        'BYTE': 1,
	        'ASCII': 2,
	        'SHORT': 3,
	        'LONG': 4,
	        'RATIONAL': 5,
	        'UNDEFINED': 7,
	        'SLONG': 9,
	        'SRATIONAL': 10 };exports.default =
	
	
	    {
	        getAsciiValue: getAsciiValue,
	        getByteAt: getByteAt,
	        getAsciiAt: getAsciiAt,
	        getShortAt: getShortAt,
	        getLongAt: getLongAt,
	        getRationalAt: getRationalAt,
	        getUndefinedAt: getUndefinedAt,
	        getSlongAt: getSlongAt,
	        getSrationalAt: getSrationalAt,
	        typeSizes: typeSizes,
	        tagTypes: tagTypes,
	        getTypeSize: getTypeSize };
	
	
	    function getAsciiValue(charArray) {
	        return charArray.map(function (charCode) {return String.fromCharCode(charCode);});
	    }
	
	    function getByteAt(dataView, offset) {
	        return dataView.getUint8(offset);
	    }
	
	    function getAsciiAt(dataView, offset) {
	        return dataView.getUint8(offset);
	    }
	
	    function getShortAt(dataView, offset, byteOrder) {
	        return dataView.getUint16(offset, byteOrder === _byteOrder2.default.LITTLE_ENDIAN);
	    }
	
	    function getLongAt(dataView, offset, byteOrder) {
	        return dataView.getUint32(offset, byteOrder === _byteOrder2.default.LITTLE_ENDIAN);
	    }
	
	    function getRationalAt(dataView, offset, byteOrder) {
	        return getLongAt(dataView, offset, byteOrder) / getLongAt(dataView, offset + 4, byteOrder);
	    }
	
	    function getUndefinedAt(dataView, offset) {
	        return getByteAt(dataView, offset);
	    }
	
	    function getSlongAt(dataView, offset, byteOrder) {
	        return dataView.getInt32(offset, byteOrder === _byteOrder2.default.LITTLE_ENDIAN);
	    }
	
	    function getSrationalAt(dataView, offset, byteOrder) {
	        return getSlongAt(dataView, offset, byteOrder) / getSlongAt(dataView, offset + 4, byteOrder);
	    }
	
	    function getTypeSize(typeName) {
	        if (tagTypes[typeName] === undefined) {
	            throw new Error('No such type found.');
	        }
	
	        return typeSizes[tagTypes[typeName]];
	    }});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(10), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./tag-names-0th-ifd'), require('./tag-names-exif-ifd'), require('./tag-names-gps-ifd'), require('./tag-names-interoperability-ifd'));} else {var mod = { exports: {} };factory(mod.exports, global.tagNames0thIfd, global.tagNamesExifIfd, global.tagNamesGpsIfd, global.tagNamesInteroperabilityIfd);global.tagNames = mod.exports;}})(this, function (exports, _tagNames0thIfd, _tagNamesExifIfd, _tagNamesGpsIfd, _tagNamesInteroperabilityIfd) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _tagNames0thIfd2 = _interopRequireDefault(_tagNames0thIfd);var _tagNamesExifIfd2 = _interopRequireDefault(_tagNamesExifIfd);var _tagNamesGpsIfd2 = _interopRequireDefault(_tagNamesGpsIfd);var _tagNamesInteroperabilityIfd2 = _interopRequireDefault(_tagNamesInteroperabilityIfd);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
	
	
	
	
	
	
	
	
	    {
	        '0th': _tagNames0thIfd2.default,
	        'exif': _tagNamesExifIfd2.default,
	        'gps': _tagNamesGpsIfd2.default,
	        'interoperability': _tagNamesInteroperabilityIfd2.default };});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.tagNames0thIfd = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =
	
	
	
	    {
	        0x0100: 'ImageWidth',
	        0x0101: 'ImageLength',
	        0x0102: 'BitsPerSample',
	        0x0103: 'Compression',
	        0x0106: 'PhotometricInterpretation',
	        0x010e: 'ImageDescription',
	        0x010f: 'Make',
	        0x0110: 'Model',
	        0x0111: 'StripOffsets',
	        0x0112: {
	            name: 'Orientation',
	            description: function description(value) {
	                if (value === 1) {
	                    return 'top-left';
	                }
	                if (value === 2) {
	                    return 'top-right';
	                }
	                if (value === 3) {
	                    return 'bottom-right';
	                }
	                if (value === 4) {
	                    return 'bottom-left';
	                }
	                if (value === 5) {
	                    return 'left-top';
	                }
	                if (value === 6) {
	                    return 'right-top';
	                }
	                if (value === 7) {
	                    return 'right-bottom';
	                }
	                if (value === 8) {
	                    return 'left-bottom';
	                }
	                return 'Undefined';
	            } },
	
	        0x0115: 'SamplesPerPixel',
	        0x0116: 'RowsPerStrip',
	        0x0117: 'StripByteCounts',
	        0x011a: 'XResolution',
	        0x011b: 'YResolution',
	        0x011c: 'PlanarConfiguration',
	        0x0128: {
	            name: 'ResolutionUnit',
	            description: function description(value) {
	                if (value === 2) {
	                    return 'inches';
	                }
	                if (value === 3) {
	                    return 'centimeters';
	                }
	                return 'Unknown';
	            } },
	
	        0x012d: 'TransferFunction',
	        0x0131: 'Software',
	        0x0132: 'DateTime',
	        0x013b: 'Artist',
	        0x013e: 'WhitePoint',
	        0x013f: 'PrimaryChromaticities',
	        0x0201: 'JPEGInterchangeFormat',
	        0x0202: 'JPEGInterchangeFormatLength',
	        0x0211: 'YCbCrCoefficients',
	        0x0212: 'YCbCrSubSampling',
	        0x0213: {
	            name: 'YCbCrPositioning',
	            description: function description(value) {
	                if (value === 1) {
	                    return 'centered';
	                }
	                if (value === 2) {
	                    return 'co-sited';
	                }
	                return 'undefined ' + value;
	            } },
	
	        0x0214: 'ReferenceBlackWhite',
	        0x8298: {
	            name: 'Copyright',
	            description: function description(value) {return value.join('; ');} },
	
	        0x8769: 'Exif IFD Pointer',
	        0x8825: 'GPS Info IFD Pointer' };});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./tag-names-utils'));} else {var mod = { exports: {} };factory(mod.exports, global.tagNamesUtils);global.tagNamesExifIfd = mod.exports;}})(this, function (exports, _tagNamesUtils) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.default =
	
	
	
	
	
	    {
	        0x829a: 'ExposureTime',
	        0x829d: 'FNumber',
	        0x8822: {
	            'name': 'ExposureProgram',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Undefined';
	                } else if (value === 1) {
	                    return 'Manual';
	                } else if (value === 2) {
	                    return 'Normal program';
	                } else if (value === 3) {
	                    return 'Aperture priority';
	                } else if (value === 4) {
	                    return 'Shutter priority';
	                } else if (value === 5) {
	                    return 'Creative program';
	                } else if (value === 6) {
	                    return 'Action program';
	                } else if (value === 7) {
	                    return 'Portrait mode';
	                } else if (value === 8) {
	                    return 'Landscape mode';
	                }
	                return 'Unknown';
	            } },
	
	        0x8824: 'SpectralSensitivity',
	        0x8827: 'ISOSpeedRatings',
	        0x8828: {
	            'name': 'OECF',
	            'description': function description() {return '[Raw OECF table data]';} },
	
	        0x9000: {
	            'name': 'ExifVersion',
	            'description': function description(value) {return (0, _tagNamesUtils.getStringValue)(value);} },
	
	        0x9003: 'DateTimeOriginal',
	        0x9004: 'DateTimeDigitized',
	        0x9101: {
	            'name': 'ComponentsConfiguration',
	            'description': function description(value) {
	                return value.map(function (character) {
	                    if (character === 0x31) {
	                        return 'Y';
	                    } else if (character === 0x32) {
	                        return 'Cb';
	                    } else if (character === 0x33) {
	                        return 'Cr';
	                    } else if (character === 0x34) {
	                        return 'R';
	                    } else if (character === 0x35) {
	                        return 'G';
	                    } else if (character === 0x36) {
	                        return 'B';
	                    }
	                }).join('');
	            } },
	
	        0x9102: 'CompressedBitsPerPixel',
	        0x9201: 'ShutterSpeedValue',
	        0x9202: 'ApertureValue',
	        0x9203: 'BrightnessValue',
	        0x9204: 'ExposureBiasValue',
	        0x9205: 'MaxApertureValue',
	        0x9206: 'SubjectDistance',
	        0x9207: {
	            'name': 'MeteringMode',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'Average';
	                } else if (value === 2) {
	                    return 'CenterWeightedAverage';
	                } else if (value === 3) {
	                    return 'Spot';
	                } else if (value === 4) {
	                    return 'MultiSpot';
	                } else if (value === 5) {
	                    return 'Pattern';
	                } else if (value === 6) {
	                    return 'Partial';
	                } else if (value === 255) {
	                    return 'Other';
	                }
	                return 'Unknown';
	            } },
	
	        0x9208: {
	            'name': 'LightSource',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'Daylight';
	                } else if (value === 2) {
	                    return 'Fluorescent';
	                } else if (value === 3) {
	                    return 'Tungsten (incandescent light)';
	                } else if (value === 4) {
	                    return 'Flash';
	                } else if (value === 9) {
	                    return 'Fine weather';
	                } else if (value === 10) {
	                    return 'Cloudy weather';
	                } else if (value === 11) {
	                    return 'Shade';
	                } else if (value === 12) {
	                    return 'Daylight fluorescent (D 5700 – 7100K)';
	                } else if (value === 13) {
	                    return 'Day white fluorescent (N 4600 – 5400K)';
	                } else if (value === 14) {
	                    return 'Cool white fluorescent (W 3900 – 4500K)';
	                } else if (value === 15) {
	                    return 'White fluorescent (WW 3200 – 3700K)';
	                } else if (value === 17) {
	                    return 'Standard light A';
	                } else if (value === 18) {
	                    return 'Standard light B';
	                } else if (value === 19) {
	                    return 'Standard light C';
	                } else if (value === 20) {
	                    return 'D55';
	                } else if (value === 21) {
	                    return 'D65';
	                } else if (value === 22) {
	                    return 'D75';
	                } else if (value === 23) {
	                    return 'D50';
	                } else if (value === 24) {
	                    return 'ISO studio tungsten';
	                } else if (value === 255) {
	                    return 'Other light source';
	                }
	                return 'Unknown';
	            } },
	
	        0x9209: {
	            'name': 'Flash',
	            'description': function description(value) {
	                if (value === 0x00) {
	                    return 'Flash did not fire';
	                } else if (value === 0x01) {
	                    return 'Flash fired';
	                } else if (value === 0x05) {
	                    return 'Strobe return light not detected';
	                } else if (value === 0x07) {
	                    return 'Strobe return light detected';
	                } else if (value === 0x09) {
	                    return 'Flash fired, compulsory flash mode';
	                } else if (value === 0x0d) {
	                    return 'Flash fired, compulsory flash mode, return light not detected';
	                } else if (value === 0x0f) {
	                    return 'Flash fired, compulsory flash mode, return light detected';
	                } else if (value === 0x10) {
	                    return 'Flash did not fire, compulsory flash mode';
	                } else if (value === 0x18) {
	                    return 'Flash did not fire, auto mode';
	                } else if (value === 0x19) {
	                    return 'Flash fired, auto mode';
	                } else if (value === 0x1d) {
	                    return 'Flash fired, auto mode, return light not detected';
	                } else if (value === 0x1f) {
	                    return 'Flash fired, auto mode, return light detected';
	                } else if (value === 0x20) {
	                    return 'No flash function';
	                } else if (value === 0x41) {
	                    return 'Flash fired, red-eye reduction mode';
	                } else if (value === 0x45) {
	                    return 'Flash fired, red-eye reduction mode, return light not detected';
	                } else if (value === 0x47) {
	                    return 'Flash fired, red-eye reduction mode, return light detected';
	                } else if (value === 0x49) {
	                    return 'Flash fired, compulsory flash mode, red-eye reduction mode';
	                } else if (value === 0x4d) {
	                    return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
	                } else if (value === 0x4f) {
	                    return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
	                } else if (value === 0x59) {
	                    return 'Flash fired, auto mode, red-eye reduction mode';
	                } else if (value === 0x5d) {
	                    return 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
	                } else if (value === 0x5f) {
	                    return 'Flash fired, auto mode, return light detected, red-eye reduction mode';
	                }
	                return 'Unknown';
	            } },
	
	        0x920a: 'FocalLength',
	        0x9214: {
	            'name': 'SubjectArea',
	            'description': function description(value) {
	                if (value.length === 2) {
	                    return 'Location; X: ' + value[0] + ', Y: ' + value[1];
	                } else if (value.length === 3) {
	                    return 'Circle; X: ' + value[0] + ', Y: ' + value[1] + ', diameter: ' + value[2];
	                } else if (value.length === 4) {
	                    return 'Rectangle; X: ' + value[0] + ', Y: ' + value[1] + ', width: ' + value[2] + ', height: ' + value[3];
	                }
	                return 'Unknown';
	            } },
	
	        0x927c: {
	            'name': 'MakerNote',
	            'description': function description() {return '[Raw maker note data]';} },
	
	        0x9286: {
	            'name': 'UserComment',
	            'description': _tagNamesUtils.getEncodedString },
	
	        0x9290: 'SubSecTime',
	        0x9291: 'SubSecTimeOriginal',
	        0x9292: 'SubSecTimeDigitized',
	        0xa000: {
	            'name': 'FlashpixVersion',
	            'description': function description(value) {return value.map(function (charCode) {return String.fromCharCode(charCode);}).join('');} },
	
	        0xa001: {
	            'name': 'ColorSpace',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'sRGB';
	                } else if (value === 0xffff) {
	                    return 'Uncalibrated';
	                }
	                return 'Unknown';
	            } },
	
	        0xa002: 'PixelXDimension',
	        0xa003: 'PixelYDimension',
	        0xa004: 'RelatedSoundFile',
	        0xa005: 'Interoperability IFD Pointer',
	        0xa20b: 'FlashEnergy',
	        0xa20c: {
	            'name': 'SpatialFrequencyResponse',
	            'description': function description() {return '[Raw SFR table data]';} },
	
	        0xa20e: 'FocalPlaneXResolution',
	        0xa20f: 'FocalPlaneYResolution',
	        0xa210: {
	            'name': 'FocalPlaneResolutionUnit',
	            'description': function description(value) {
	                if (value === 2) {
	                    return 'inches';
	                } else if (value === 3) {
	                    return 'centimeters';
	                }
	                return 'Unknown';
	            } },
	
	        0xa214: {
	            'name': 'SubjectLocation',
	            'description': function description(_ref) {var _ref2 = _slicedToArray(_ref, 2),x = _ref2[0],y = _ref2[1];return 'X: ' + x + ', Y: ' + y;} },
	
	        0xa215: 'ExposureIndex',
	        0xa217: {
	            'name': 'SensingMethod',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'Undefined';
	                } else if (value === 2) {
	                    return 'One-chip color area sensor';
	                } else if (value === 3) {
	                    return 'Two-chip color area sensor';
	                } else if (value === 4) {
	                    return 'Three-chip color area sensor';
	                } else if (value === 5) {
	                    return 'Color sequential area sensor';
	                } else if (value === 7) {
	                    return 'Trilinear sensor';
	                } else if (value === 8) {
	                    return 'Color sequential linear sensor';
	                }
	                return 'Unknown';
	            } },
	
	        0xa300: {
	            'name': 'FileSource',
	            'description': function description(value) {
	                if (value === 3) {
	                    return 'DSC';
	                }
	                return 'Unknown';
	            } },
	
	        0xa301: {
	            'name': 'SceneType',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'A directly photographed image';
	                }
	                return 'Unknown';
	            } },
	
	        0xa302: {
	            'name': 'CFAPattern',
	            'description': function description() {return '[Raw CFA pattern table data]';} },
	
	        0xa401: {
	            'name': 'CustomRendered',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Normal process';
	                } else if (value === 1) {
	                    return 'Custom process';
	                }
	                return 'Unknown';
	            } },
	
	        0xa402: {
	            'name': 'ExposureMode',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Auto exposure';
	                } else if (value === 1) {
	                    return 'Manual exposure';
	                } else if (value === 2) {
	                    return 'Auto bracket';
	                }
	                return 'Unknown';
	            } },
	
	        0xa403: {
	            'name': 'WhiteBalance',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Auto white balance';
	                } else if (value === 1) {
	                    return 'Manual white balance';
	                }
	                return 'Unknown';
	            } },
	
	        0xa404: {
	            'name': 'DigitalZoomRatio',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Digital zoom was not used';
	                }
	                return value;
	            } },
	
	        0xa405: {
	            'name': 'FocalLengthIn35mmFilm',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Unknown';
	                }
	                return value;
	            } },
	
	        0xa406: {
	            'name': 'SceneCaptureType',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Standard';
	                } else if (value === 1) {
	                    return 'Landscape';
	                } else if (value === 2) {
	                    return 'Portrait';
	                } else if (value === 3) {
	                    return 'Night scene';
	                }
	                return 'Unknown';
	            } },
	
	        0xa407: {
	            'name': 'GainControl',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'None';
	                } else if (value === 1) {
	                    return 'Low gain up';
	                } else if (value === 2) {
	                    return 'High gain up';
	                } else if (value === 3) {
	                    return 'Low gain down';
	                } else if (value === 4) {
	                    return 'High gain down';
	                }
	                return 'Unknown';
	            } },
	
	        0xa408: {
	            'name': 'Contrast',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Normal';
	                } else if (value === 1) {
	                    return 'Soft';
	                } else if (value === 2) {
	                    return 'Hard';
	                }
	                return 'Unknown';
	            } },
	
	        0xa409: {
	            'name': 'Saturation',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Normal';
	                } else if (value === 1) {
	                    return 'Low saturation';
	                } else if (value === 2) {
	                    return 'High saturation';
	                }
	                return 'Unknown';
	            } },
	
	        0xa40a: {
	            'name': 'Sharpness',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Normal';
	                } else if (value === 1) {
	                    return 'Soft';
	                } else if (value === 2) {
	                    return 'Hard';
	                }
	                return 'Unknown';
	            } },
	
	        0xa40b: {
	            'name': 'DeviceSettingDescription',
	            'description': function description() {return '[Raw device settings table data]';} },
	
	        0xa40c: {
	            'name': 'SubjectDistanceRange',
	            'description': function description(value) {
	                if (value === 1) {
	                    return 'Macro';
	                } else if (value === 2) {
	                    return 'Close view';
	                } else if (value === 3) {
	                    return 'Distant view';
	                }
	                return 'Unknown';
	            } },
	
	        0xa420: 'ImageUniqueID' };});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.tagNamesUtils = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.
	
	
	
	    getStringValue = getStringValue;exports.
	
	
	
	    getEncodedString = getEncodedString;exports.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	    getCharacterArray = getCharacterArray; /* This Source Code Form is subject to the terms of the Mozilla Public
	                                            * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                            * file, You can obtain one at https://mozilla.org/MPL/2.0/. */function getStringValue(value) {return value.map(function (charCode) {return String.fromCharCode(charCode);}).join('');}function getEncodedString(value) {if (value.length >= 8) {var encoding = getStringValue(value.slice(0, 8));if (encoding === 'ASCII\x00\x00\x00') {return getStringValue(value.slice(8));} else if (encoding === 'JIS\x00\x00\x00\x00\x00') {return '[JIS encoded text]';} else if (encoding === 'UNICODE\x00') {return '[Unicode encoded text]';} else if (encoding === '\x00\x00\x00\x00\x00\x00\x00\x00') {return '[Undefined encoding]';}}return 'Undefined';}function getCharacterArray(string) {return string.split('').map(function (character) {return character.charCodeAt(0);});}});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./tag-names-utils'));} else {var mod = { exports: {} };factory(mod.exports, global.tagNamesUtils);global.tagNamesGpsIfd = mod.exports;}})(this, function (exports, _tagNamesUtils) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =
	
	
	
	
	
	    {
	        0x0000: {
	            'name': 'GPSVersionID',
	            'description': function description(value) {
	                if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
	                    return 'Version 2.2';
	                }
	                return 'Unknown';
	            } },
	
	        0x0001: {
	            'name': 'GPSLatitudeRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'N') {
	                    return 'North latitude';
	                } else if (ref === 'S') {
	                    return 'South latitude';
	                }
	                return 'Unknown';
	            } },
	
	        0x0002: {
	            'name': 'GPSLatitude',
	            'description': function description(value) {
	                return value[0] + value[1] / 60 + value[2] / 3600;
	            } },
	
	        0x0003: {
	            'name': 'GPSLongitudeRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'E') {
	                    return 'East longitude';
	                } else if (ref === 'W') {
	                    return 'West longitude';
	                }
	                return 'Unknown';
	            } },
	
	        0x0004: {
	            'name': 'GPSLongitude',
	            'description': function description(value) {
	                return value[0] + value[1] / 60 + value[2] / 3600;
	            } },
	
	        0x0005: {
	            'name': 'GPSAltitudeRef',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Sea level';
	                } else if (value === 1) {
	                    return 'Sea level reference (negative value)';
	                }
	                return 'Unknown';
	            } },
	
	        0x0006: {
	            'name': 'GPSAltitude',
	            'description': function description(value) {
	                return value + ' m';
	            } },
	
	        0x0007: {
	            'name': 'GPSTimeStamp',
	            'description': function description(value) {
	                return value.map(function (num) {
	                    if (('' + num).length === 1) {
	                        return '0' + num;
	                    }
	                    return num;
	                }).join(':');
	            } },
	
	        0x0008: 'GPSSatellites',
	        0x0009: {
	            'name': 'GPSStatus',
	            'description': function description(value) {
	                var status = value.join('');
	                if (status === 'A') {
	                    return 'Measurement in progress';
	                } else if (status === 'V') {
	                    return 'Measurement Interoperability';
	                }
	                return 'Unknown';
	            } },
	
	        0x000a: {
	            'name': 'GPSMeasureMode',
	            'description': function description(value) {
	                var mode = value.join('');
	                if (mode === '2') {
	                    return '2-dimensional measurement';
	                } else if (mode === '3') {
	                    return '3-dimensional measurement';
	                }
	                return 'Unknown';
	            } },
	
	        0x000b: 'GPSDOP',
	        0x000c: {
	            'name': 'GPSSpeedRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'K') {
	                    return 'Kilometers per hour';
	                } else if (ref === 'M') {
	                    return 'Miles per hour';
	                } else if (ref === 'N') {
	                    return 'Knots';
	                }
	                return 'Unknown';
	            } },
	
	        0x000d: 'GPSSpeed',
	        0x000e: {
	            'name': 'GPSTrackRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'T') {
	                    return 'True direction';
	                } else if (ref === 'M') {
	                    return 'Magnetic direction';
	                }
	                return 'Unknown';
	            } },
	
	        0x000f: 'GPSTrack',
	        0x0010: {
	            'name': 'GPSImgDirectionRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'T') {
	                    return 'True direction';
	                } else if (ref === 'M') {
	                    return 'Magnetic direction';
	                }
	                return 'Unknown';
	            } },
	
	        0x0011: 'GPSImgDirection',
	        0x0012: 'GPSMapDatum',
	        0x0013: {
	            'name': 'GPSDestLatitudeRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'N') {
	                    return 'North latitude';
	                } else if (ref === 'S') {
	                    return 'South latitude';
	                }
	                return 'Unknown';
	            } },
	
	        0x0014: {
	            'name': 'GPSDestLatitude',
	            'description': function description(value) {
	                return value[0] + value[1] / 60 + value[2] / 3600;
	            } },
	
	        0x0015: {
	            'name': 'GPSDestLongitudeRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'E') {
	                    return 'East longitude';
	                } else if (ref === 'W') {
	                    return 'West longitude';
	                }
	                return 'Unknown';
	            } },
	
	        0x0016: {
	            'name': 'GPSDestLongitude',
	            'description': function description(value) {
	                return value[0] + value[1] / 60 + value[2] / 3600;
	            } },
	
	        0x0017: {
	            'name': 'GPSDestBearingRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'T') {
	                    return 'True direction';
	                } else if (ref === 'M') {
	                    return 'Magnetic direction';
	                }
	                return 'Unknown';
	            } },
	
	        0x0018: 'GPSDestBearing',
	        0x0019: {
	            'name': 'GPSDestDistanceRef',
	            'description': function description(value) {
	                var ref = value.join('');
	                if (ref === 'K') {
	                    return 'Kilometers';
	                } else if (ref === 'M') {
	                    return 'Miles';
	                } else if (ref === 'N') {
	                    return 'Knots';
	                }
	                return 'Unknown';
	            } },
	
	        0x001a: 'GPSDestDistance',
	        0x001b: {
	            'name': 'GPSProcessingMethod',
	            'description': _tagNamesUtils.getEncodedString },
	
	        0x001c: {
	            'name': 'GPSAreaInformation',
	            'description': _tagNamesUtils.getEncodedString },
	
	        0x001d: 'GPSDateStamp',
	        0x001e: {
	            'name': 'GPSDifferential',
	            'description': function description(value) {
	                if (value === 0) {
	                    return 'Measurement without differential correction';
	                } else if (value === 1) {
	                    return 'Differential correction applied';
	                }
	                return 'Unknown';
	            } } };});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.tagNamesInteroperabilityIfd = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =
	
	
	
	  {
	    0x0001: 'InteroperabilityIndex' };});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./iptc-tag-names'));} else {var mod = { exports: {} };factory(mod.exports, global.iptcTagNames);global.iptcTags = mod.exports;}})(this, function (exports, _iptcTagNames) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _iptcTagNames2 = _interopRequireDefault(_iptcTagNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	
	
	
	    var BYTES_8BIM = 0x3842494d; /* This Source Code Form is subject to the terms of the Mozilla Public
	                                  * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                  * file, You can obtain one at https://mozilla.org/MPL/2.0/. */var BYTES_8BIM_SIZE = 4;var RESOURCE_BLOCK_HEADER_SIZE = BYTES_8BIM_SIZE + 8;
	    var NAA_RESOURCE_BLOCK_TYPE = 0x0404;
	    var TAG_HEADER_SIZE = 5;exports.default =
	
	    {
	        read: read };
	
	
	    function read(dataView, dataOffset) {
	        try {var _getNaaResourceBlock =
	            getNaaResourceBlock(dataView, dataOffset),naaBlock = _getNaaResourceBlock.naaBlock,newDataOffset = _getNaaResourceBlock.dataOffset;
	            return parseTags(dataView, naaBlock, newDataOffset);
	        } catch (error) {
	            return {};
	        }
	    }
	
	    function getNaaResourceBlock(dataView, dataOffset) {
	        while (dataOffset + RESOURCE_BLOCK_HEADER_SIZE <= dataView.byteLength) {
	            var resourceBlock = getResourceBlock(dataView, dataOffset);
	            if (isNaaResourceBlock(resourceBlock)) {
	                return { naaBlock: resourceBlock, dataOffset: dataOffset };
	            }
	            dataOffset += RESOURCE_BLOCK_HEADER_SIZE + resourceBlock.size + getBlockPadding(resourceBlock.size);
	        }
	        throw new Error('No IPTC NAA resource block.');
	    }
	
	    function getResourceBlock(dataView, dataOffset) {
	        var RESOURCE_BLOCK_SIZE_OFFSET = 10;
	
	        if (dataView.getUint32(dataOffset, false) !== BYTES_8BIM) {
	            throw new Error('Not an IPTC resource block.');
	        }
	
	        return {
	            type: dataView.getUint16(dataOffset + BYTES_8BIM_SIZE, false),
	            size: dataView.getUint16(dataOffset + RESOURCE_BLOCK_SIZE_OFFSET, false) };
	
	    }
	
	    function isNaaResourceBlock(resourceBlock) {
	        return resourceBlock.type === NAA_RESOURCE_BLOCK_TYPE;
	    }
	
	    function getBlockPadding(blockSize) {
	        if (blockSize % 2 !== 0) {
	            return 1;
	        }
	        return 0;
	    }
	
	    function parseTags(dataView, naaBlock, dataOffset) {
	        var tags = {};
	
	        dataOffset += RESOURCE_BLOCK_HEADER_SIZE;
	        var endOfBlockOffset = dataOffset + naaBlock['size'];
	
	        while (dataOffset < endOfBlockOffset && dataOffset < dataView.byteLength) {var _readTag =
	            readTag(dataView, dataOffset, tags),tag = _readTag.tag,tagSize = _readTag.tagSize;
	
	            if (tags[tag.name] === undefined || tag['repeatable'] === undefined) {
	                tags[tag.name] = {
	                    value: tag.value,
	                    description: tag.description };
	
	            } else {
	                if (!(tags[tag.name] instanceof Array)) {
	                    tags[tag.name] = [{
	                        value: tags[tag.name].value,
	                        description: tags[tag.name].description }];
	
	                }
	                tags[tag.name].push({
	                    value: tag.value,
	                    description: tag.description });
	
	            }
	
	            dataOffset += TAG_HEADER_SIZE + tagSize;
	        }
	
	        return tags;
	    }
	
	    function readTag(dataView, dataOffset, tags) {
	        var TAG_CODE_OFFSET = 1;
	        var TAG_SIZE_OFFSET = 3;
	
	        var tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET, false);
	        var tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET, false);
	        var tagValue = getTagValue(dataView, dataOffset + TAG_HEADER_SIZE, tagSize);
	        var tag = void 0;
	
	        if (_iptcTagNames2.default['iptc'][tagCode] !== undefined) {
	            var tagName = void 0,tagDescription = void 0;
	
	            if (_iptcTagNames2.default['iptc'][tagCode]['name'] !== undefined &&
	            _iptcTagNames2.default['iptc'][tagCode]['description'] !== undefined) {
	                tagName = _iptcTagNames2.default['iptc'][tagCode]['name'];
	                tagDescription = _iptcTagNames2.default['iptc'][tagCode]['description'](tagValue, tags);
	            } else {
	                if (_iptcTagNames2.default['iptc'][tagCode]['name'] !== undefined) {
	                    tagName = _iptcTagNames2.default['iptc'][tagCode]['name'];
	                } else {
	                    tagName = _iptcTagNames2.default['iptc'][tagCode];
	                }
	                if (tagValue instanceof Array) {
	                    tagDescription = tagValue.map(function (charCode) {return String.fromCharCode(charCode);}).join('');
	                } else {
	                    tagDescription = tagValue;
	                }
	            }
	            tag = {
	                name: tagName,
	                value: tagValue,
	                description: tagDescription };
	
	            if (_iptcTagNames2.default['iptc'][tagCode]['repeatable'] !== undefined) {
	                tag['repeatable'] = true;
	            }
	        } else {
	            tag = {
	                name: 'undefined-' + tagCode,
	                value: tagValue,
	                description: tagValue };
	
	        }
	
	        return { tag: tag, tagSize: tagSize };
	    }
	
	    function getTagValue(dataView, offset, size) {
	        var value = [];
	
	        for (var valueIndex = 0; valueIndex < size; valueIndex++) {
	            value.push(dataView.getUint8(offset + valueIndex));
	        }
	
	        return value;
	    }});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./tag-names-utils'));} else {var mod = { exports: {} };factory(mod.exports, global.tagNamesUtils);global.iptcTagNames = mod.exports;}})(this, function (exports, _tagNamesUtils) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =
	
	
	
	
	
	    {
	        'iptc': {
	            0x015a: {
	                'name': 'Coded Character Set',
	                'description': function description(value) {
	                    var string = (0, _tagNamesUtils.getStringValue)(value);
	                    if (string === '\x1b%G') {
	                        return 'UTF-8';
	                    } else if (string === '\x1b%/G') {
	                        return 'UTF-8 Level 1';
	                    } else if (string === '\x1b%/H') {
	                        return 'UTF-8 Level 2';
	                    } else if (string === '\x1b%/I') {
	                        return 'UTF-8 Level 3';
	                    }
	                    return 'Unknown';
	                } },
	
	            0x0200: {
	                'name': 'Record Version',
	                'description': function description(value) {
	                    return ((value[0] << 8) + value[1]).toString();
	                } },
	
	            0x0203: 'Object Type Reference',
	            0x0204: 'Object Attribute Reference',
	            0x0205: 'Object Name',
	            0x0207: 'Edit Status',
	            0x0208: {
	                'name': 'Editorial Update',
	                'description': function description(value) {
	                    if ((0, _tagNamesUtils.getStringValue)(value) === '01') {
	                        return 'Additional Language';
	                    }
	                    return 'Unknown';
	                } },
	
	            0x020a: 'Urgency',
	            0x020c: {
	                'name': 'Subject Reference',
	                'repeatable': true,
	                'description': function description(value) {
	                    var parts = (0, _tagNamesUtils.getStringValue)(value).split(':');
	                    return parts[2] + (parts[3] ? '/' + parts[3] : '') + (parts[4] ? '/' + parts[4] : '');
	                } },
	
	            0x020f: 'Category',
	            0x0214: {
	                'name': 'Supplemental Category',
	                'repeatable': true },
	
	            0x0216: 'Fixture Identifier',
	            0x0219: {
	                'name': 'Keywords',
	                'repeatable': true },
	
	            0x021a: {
	                'name': 'Content Location Code',
	                'repeatable': true },
	
	            0x021b: {
	                'name': 'Content Location Name',
	                'repeatable': true },
	
	            0x021e: 'Release Date',
	            0x0223: 'Release Time',
	            0x0225: 'Expiration Date',
	            0x0226: 'Expiration Time',
	            0x0228: 'Special Instructions',
	            0x022a: {
	                'name': 'Action Advised',
	                'description': function description(value) {
	                    var string = (0, _tagNamesUtils.getStringValue)(value);
	                    if (string === '01') {
	                        return 'Object Kill';
	                    } else if (string === '02') {
	                        return 'Object Replace';
	                    } else if (string === '03') {
	                        return 'Object Append';
	                    } else if (string === '04') {
	                        return 'Object Reference';
	                    }
	                    return 'Unknown';
	                } },
	
	            0x022d: {
	                'name': 'Reference Service',
	                'repeatable': true },
	
	            0x022f: {
	                'name': 'Reference Date',
	                'repeatable': true },
	
	            0x0232: {
	                'name': 'Reference Number',
	                'repeatable': true },
	
	            0x0237: {
	                'name': 'Date Created',
	                'description': getCreationDate },
	
	            0x023c: {
	                'name': 'Time Created',
	                'description': getCreationTime },
	
	            0x023e: {
	                'name': 'Digital Creation Date',
	                'description': getCreationDate },
	
	            0x023f: {
	                'name': 'Digital Creation Time',
	                'description': getCreationTime },
	
	            0x0241: 'Originating Program',
	            0x0246: 'Program Version',
	            0x024b: {
	                'name': 'Object Cycle',
	                'description': function description(value) {
	                    var string = (0, _tagNamesUtils.getStringValue)(value);
	                    if (string === 'a') {
	                        return 'morning';
	                    } else if (string === 'p') {
	                        return 'evening';
	                    } else if (string === 'b') {
	                        return 'both';
	                    }
	                    return 'Unknown';
	                } },
	
	            0x0250: {
	                'name': 'By-line',
	                'repeatable': true },
	
	            0x0255: {
	                'name': 'By-line Title',
	                'repeatable': true },
	
	            0x025a: 'City',
	            0x025c: 'Sub-location',
	            0x025f: 'Province/State',
	            0x0264: 'Country/Primary Location Code',
	            0x0265: 'Country/Primary Location Name',
	            0x0267: 'Original Transmission Reference',
	            0x0269: 'Headline',
	            0x026e: 'Credit',
	            0x0273: 'Source',
	            0x0274: 'Copyright Notice',
	            0x0276: {
	                'name': 'Contact',
	                'repeatable': true },
	
	            0x0278: 'Caption/Abstract',
	            0x027a: {
	                'name': 'Writer/Editor',
	                'repeatable': true },
	
	            0x027d: {
	                'name': 'Rasterized Caption',
	                'description': function description(value) {return value;} },
	
	            0x0282: 'Image Type',
	            0x0283: {
	                'name': 'Image Orientation',
	                'description': function description(value) {
	                    var string = (0, _tagNamesUtils.getStringValue)(value);
	                    if (string === 'P') {
	                        return 'Portrait';
	                    } else if (string === 'L') {
	                        return 'Landscape';
	                    } else if (string === 'S') {
	                        return 'Square';
	                    }
	                    return 'Unknown';
	                } },
	
	            0x0287: 'Language Identifier',
	            0x0296: {
	                'name': 'Audio Type',
	                'description': function description(value) {
	                    var stringValue = (0, _tagNamesUtils.getStringValue)(value);
	                    var character0 = stringValue.charAt(0);
	                    var character1 = stringValue.charAt(1);
	                    var description = '';
	
	                    if (character0 === '1') {
	                        description += 'Mono';
	                    } else if (character0 === '2') {
	                        description += 'Stereo';
	                    }
	
	                    if (character1 === 'A') {
	                        description += ', actuality';
	                    } else if (character1 === 'C') {
	                        description += ', question and answer session';
	                    } else if (character1 === 'M') {
	                        description += ', music, transmitted by itself';
	                    } else if (character1 === 'Q') {
	                        description += ', response to a question';
	                    } else if (character1 === 'R') {
	                        description += ', raw sound';
	                    } else if (character1 === 'S') {
	                        description += ', scener';
	                    } else if (character1 === 'V') {
	                        description += ', voicer';
	                    } else if (character1 === 'W') {
	                        description += ', wrap';
	                    }
	
	                    if (description !== '') {
	                        return description;
	                    }
	                    return stringValue;
	                } },
	
	            0x0297: {
	                'name': 'Audio Sampling Rate',
	                'description': function description(value) {return parseInt((0, _tagNamesUtils.getStringValue)(value), 10) + ' Hz';} },
	
	            0x0298: {
	                'name': 'Audio Sampling Resolution',
	                'description': function description(value) {
	                    var bits = parseInt((0, _tagNamesUtils.getStringValue)(value), 10);
	                    return bits + (bits === 1 ? ' bit' : ' bits');
	                } },
	
	            0x0299: {
	                'name': 'Audio Duration',
	                'description': function description(value) {
	                    var duration = (0, _tagNamesUtils.getStringValue)(value);
	                    if (duration.length >= 6) {
	                        return duration.substr(0, 2) + ':' + duration.substr(2, 2) + ':' + duration.substr(4, 2);
	                    }
	                    return duration;
	                } },
	
	            0x029a: 'Audio Outcue',
	            0x02c8: {
	                'name': 'ObjectData Preview File Format',
	                'description': function description(value) {
	                    var stringValue = (0, _tagNamesUtils.getStringValue)(value);
	                    if (stringValue === '00') {
	                        return 'No ObjectData';
	                    } else if (stringValue === '01') {
	                        return 'IPTC-NAA Digital Newsphoto Parameter Record';
	                    } else if (stringValue === '02') {
	                        return 'IPTC7901 Recommended Message Format';
	                    } else if (stringValue === '03') {
	                        return 'Tagged Image File Format (Adobe/Aldus Image data)';
	                    } else if (stringValue === '04') {
	                        return 'Illustrator (Adobe Graphics data)';
	                    } else if (stringValue === '05') {
	                        return 'AppleSingle (Apple Computer Inc)';
	                    } else if (stringValue === '06') {
	                        return 'NAA 89-3 (ANPA 1312)';
	                    } else if (stringValue === '07') {
	                        return 'MacBinary II';
	                    } else if (stringValue === '08') {
	                        return 'IPTC Unstructured Character Oriented File Format (UCOFF)';
	                    } else if (stringValue === '09') {
	                        return 'United Press International ANPA 1312 variant';
	                    } else if (stringValue === '10') {
	                        return 'United Press International Down-Load Message';
	                    } else if (stringValue === '11') {
	                        return 'JPEG File Interchange (JFIF)';
	                    } else if (stringValue === '12') {
	                        return 'Photo-CD Image-Pac (Eastman Kodak)';
	                    } else if (stringValue === '13') {
	                        return 'Microsoft Bit Mapped Graphics File [*.BMP]';
	                    } else if (stringValue === '14') {
	                        return 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
	                    } else if (stringValue === '15') {
	                        return 'Audio plus Moving Video [*.AVI] (Microsoft)';
	                    } else if (stringValue === '16') {
	                        return 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
	                    } else if (stringValue === '17') {
	                        return 'Compressed Binary File [*.ZIP] (PKWare Inc)';
	                    } else if (stringValue === '18') {
	                        return 'Audio Interchange File Format AIFF (Apple Computer Inc)';
	                    } else if (stringValue === '19') {
	                        return 'RIFF Wave (Microsoft Corporation)';
	                    } else if (stringValue === '20') {
	                        return 'Freehand (Macromedia/Aldus)';
	                    } else if (stringValue === '21') {
	                        return 'Hypertext Markup Language "HTML" (The Internet Society)';
	                    } else if (stringValue === '22') {
	                        return 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
	                    } else if (stringValue === '23') {
	                        return 'MPEG 2 Audio Layer 3, ISO/IEC';
	                    } else if (stringValue === '24') {
	                        return 'Portable Document File (*.PDF) Adobe';
	                    } else if (stringValue === '25') {
	                        return 'News Industry Text Format (NITF)';
	                    } else if (stringValue === '26') {
	                        return 'Tape Archive (*.TAR)';
	                    } else if (stringValue === '27') {
	                        return 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
	                    } else if (stringValue === '28') {
	                        return 'Ritzaus Bureau NITF version (RBNITF DTD)';
	                    } else if (stringValue === '29') {
	                        return 'Corel Draw [*.CDR]';
	                    }
	                    return 'Unknown format ' + stringValue;
	                } },
	
	            0x02c9: {
	                'name': 'ObjectData Preview File Format Version',
	                'description': function description(value, tags) {
	                    // Format ID, Version ID, Version Description
	                    var formatVersions = {
	                        '00': { '00': '1' },
	                        '01': { '01': '1', '02': '2', '03': '3', '04': '4' },
	                        '02': { '04': '4' },
	                        '03': { '01': '5.0', '02': '6.0' },
	                        '04': { '01': '1.40' },
	                        '05': { '01': '2' },
	                        '06': { '01': '1' },
	                        '11': { '01': '1.02' },
	                        '20': { '01': '3.1', '02': '4.0', '03': '5.0', '04': '5.5' },
	                        '21': { '02': '2.0' } };
	
	                    var stringValue = (0, _tagNamesUtils.getStringValue)(value);
	
	                    if (tags['ObjectData Preview File Format']) {
	                        var objectDataPreviewFileFormat = (0, _tagNamesUtils.getStringValue)(tags['ObjectData Preview File Format'].value);
	                        if (formatVersions[objectDataPreviewFileFormat] &&
	                        formatVersions[objectDataPreviewFileFormat][stringValue]) {
	                            return formatVersions[objectDataPreviewFileFormat][stringValue];
	                        }
	                    }
	
	                    return stringValue;
	                } },
	
	            0x02ca: 'ObjectData Preview Data' } };
	
	
	
	    function getCreationDate(value) {
	        var date = (0, _tagNamesUtils.getStringValue)(value);
	
	        if (date.length >= 8) {
	            return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
	        }
	
	        return date;
	    }
	
	    function getCreationTime(value) {
	        var time = (0, _tagNamesUtils.getStringValue)(value);
	        var parsedTime = time;
	
	        if (time.length >= 6) {
	            parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);
	            if (time.length === 11) {
	                parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
	            }
	        }
	
	        return parsedTime;
	    }});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./utils'), require('./xmp-tag-names'));} else {var mod = { exports: {} };factory(mod.exports, global.utils, global.xmpTagNames);global.xmpTags = mod.exports;}})(this, function (exports, _utils, _xmpTagNames) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _xmpTagNames2 = _interopRequireDefault(_xmpTagNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.default =
	
	
	
	
	
	
	    {
	        read: read };
	
	
	    function read(dataView, dataOffset, metadataSize) {
	        try {
	            var doc = getDocument(dataView, dataOffset, metadataSize);
	            var rdf = getRDF(doc);
	
	            return parseXMPObject(convertToObject(rdf, true));
	        } catch (error) {
	            return {};
	        }
	    }
	
	    function getDocument(dataView, dataOffset, metadataSize) {
	        if (typeof DOMParser === 'undefined') {
	            console.warn('Warning: DOMParser is not available. If you\'re using Node.js you probably want to do this:\n  1. Install a DOM parser, e.g. xmldom: npm install --save xmldom\n  2. Require that at the top of your script: global.DOMParser = require(\'xmldom\').DOMParser;\nSee an example of this in the ExifReader example directory.'); // eslint-disable-line no-console
	            throw new Error();
	        }
	
	        var domParser = new DOMParser();
	        var xmlSource = (0, _utils.getStringFromDataView)(dataView, dataOffset, metadataSize);
	        var doc = domParser.parseFromString(xmlSource, 'application/xml');
	
	        if (doc.documentElement.nodeName === 'parsererror') {
	            throw new Error();
	        }
	
	        return doc;
	    }
	
	    function getRDF(node) {
	        for (var i = 0; i < node.childNodes.length; i++) {
	            if (node.childNodes[i].tagName === 'x:xmpmeta') {
	                return getRDF(node.childNodes[i]);
	            }
	            if (node.childNodes[i].tagName === 'rdf:RDF') {
	                return node.childNodes[i];
	            }
	        }
	
	        throw new Error();
	    }
	
	    function convertToObject(node) {var isTopNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        var childNodes = getChildNodes(node);
	
	        if (hasTextOnlyContent(childNodes)) {
	            if (isTopNode) {
	                return {};
	            }
	            return getTextValue(childNodes[0]);
	        }
	
	        return getElementsFromNodes(childNodes);
	    }
	
	    function getChildNodes(node) {
	        var elements = [];
	
	        for (var i = 0; i < node.childNodes.length; i++) {
	            elements.push(node.childNodes[i]);
	        }
	
	        return elements;
	    }
	
	    function hasTextOnlyContent(nodes) {
	        return nodes.length === 1 && nodes[0].nodeName === '#text';
	    }
	
	    function getTextValue(node) {
	        return node.nodeValue;
	    }
	
	    function getElementsFromNodes(nodes) {
	        var elements = {};
	
	        nodes.forEach(function (node) {
	            if (isElement(node)) {
	                var nodeElement = getElementFromNode(node);
	
	                if (elements[node.nodeName] !== undefined) {
	                    if (!Array.isArray(elements[node.nodeName])) {
	                        elements[node.nodeName] = [elements[node.nodeName]];
	                    }
	                    elements[node.nodeName].push(nodeElement);
	                } else {
	                    elements[node.nodeName] = nodeElement;
	                }
	            }
	        });
	
	        return elements;
	    }
	
	    function isElement(node) {
	        return node.nodeName && node.nodeName !== '#text';
	    }
	
	    function getElementFromNode(node) {
	        return {
	            attributes: getAttributes(node),
	            value: convertToObject(node) };
	
	    }
	
	    function getAttributes(element) {
	        var attributes = {};
	
	        for (var i = 0; i < element.attributes.length; i++) {
	            attributes[element.attributes[i].nodeName] = element.attributes[i].value;
	        }
	
	        return attributes;
	    }
	
	    function parseXMPObject(xmpObject) {
	        var tags = {};
	
	        if (typeof xmpObject === 'string') {
	            return xmpObject;
	        }
	
	        for (var nodeName in xmpObject) {
	            var nodes = xmpObject[nodeName];
	
	            if (!Array.isArray(nodes)) {
	                nodes = [nodes];
	            }
	
	            nodes.forEach(function (node) {
	                _extends(tags, parseNodeAttributesAsTags(node.attributes));
	                _extends(tags, parseNodeChildrenAsTags(node.value));
	            });
	        }
	
	        return tags;
	    }
	
	    function parseNodeAttributesAsTags(attributes) {
	        var tags = {};
	
	        if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) !== 'object') {
	            return tags;
	        }
	
	        for (var name in attributes) {
	            if (isTagAttribute(name)) {
	                tags[getLocalName(name)] = {
	                    value: attributes[name],
	                    attributes: {},
	                    description: getDescription(attributes[name], name) };
	
	            }
	        }
	
	        return tags;
	    }
	
	    function isTagAttribute(name) {
	        return name !== 'rdf:parseType' && !isNamespaceDefinition(name);
	    }
	
	    function isNamespaceDefinition(name) {
	        return name.split(':')[0] === 'xmlns';
	    }
	
	    function getLocalName(name) {
	        return name.split(':')[1];
	    }
	
	    function getDescription(value) {var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	        if (Array.isArray(value)) {
	            return getDescriptionOfArray(value);
	        }
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	            return getDescriptionOfObject(value);
	        }
	
	        try {
	            if (name && typeof _xmpTagNames2.default[name] === 'function') {
	                return _xmpTagNames2.default[name](value);
	            }
	            return decodeURIComponent(escape(value));
	        } catch (error) {
	            return value;
	        }
	    }
	
	    function getDescriptionOfArray(value) {
	        return value.map(function (item) {
	            if (item.value !== undefined) {
	                return getDescription(item.value);
	            }
	            return getDescription(item);
	        }).join(', ');
	    }
	
	    function getDescriptionOfObject(value) {
	        var descriptions = [];
	
	        for (var key in value) {
	            descriptions.push(getClearTextKey(key) + ': ' + value[key].value);
	        }
	
	        return descriptions.join('; ');
	    }
	
	    function getClearTextKey(key) {
	        if (key === 'CiAdrCity') {
	            return 'CreatorCity';
	        }
	        if (key === 'CiAdrCtry') {
	            return 'CreatorCountry';
	        }
	        if (key === 'CiAdrExtadr') {
	            return 'CreatorAddress';
	        }
	        if (key === 'CiAdrPcode') {
	            return 'CreatorPostalCode';
	        }
	        if (key === 'CiAdrRegion') {
	            return 'CreatorRegion';
	        }
	        if (key === 'CiEmailWork') {
	            return 'CreatorWorkEmail';
	        }
	        if (key === 'CiTelWork') {
	            return 'CreatorWorkPhone';
	        }
	        if (key === 'CiUrlWork') {
	            return 'CreatorWorkUrl';
	        }
	        return key;
	    }
	
	    function parseNodeChildrenAsTags(children) {
	        var tags = {};
	
	        if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== 'object') {
	            return tags;
	        }
	
	        for (var name in children) {
	            if (!isNamespaceDefinition(name)) {
	                tags[getLocalName(name)] = parseNodeAsTag(children[name], name);
	            }
	        }
	
	        return tags;
	    }
	
	    function parseNodeAsTag(node, name) {
	        if (hasNestedSimpleRdfDescription(node)) {
	            return parseNodeAsSimpleRdfDescription(node, name);
	        } else if (hasNestedStructureRdfDescription(node)) {
	            return parseNodeAsStructureRdfDescription(node, name);
	        } else if (isCompactStructure(node)) {
	            return parseNodeAsCompactStructure(node, name);
	        } else if (isArray(node)) {
	            return parseNodeAsArray(node, name);
	        }
	        return parseNodeAsSimpleValue(node, name);
	    }
	
	    function hasNestedSimpleRdfDescription(node) {
	        return node.attributes['rdf:parseType'] === 'Resource' && node.value['rdf:value'] !== undefined ||
	        node.value['rdf:Description'] !== undefined && node.value['rdf:Description'].value['rdf:value'] !== undefined;
	    }
	
	    function parseNodeAsSimpleRdfDescription(node, name) {
	        var attributes = parseNodeAttributes(node);
	
	        if (node.value['rdf:Description'] !== undefined) {
	            node = node.value['rdf:Description'];
	        }
	
	        _extends(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));
	
	        var value = parseRdfValue(node);
	
	        return {
	            value: value,
	            attributes: attributes,
	            description: getDescription(value, name) };
	
	    }
	
	    function parseNodeAttributes(node) {
	        var attributes = {};
	
	        for (var name in node.attributes) {
	            if (name !== 'rdf:parseType' && name !== 'rdf:resource' && !isNamespaceDefinition(name)) {
	                attributes[getLocalName(name)] = node.attributes[name];
	            }
	        }
	
	        return attributes;
	    }
	
	    function parseNodeChildrenAsAttributes(node) {
	        var attributes = {};
	
	        for (var name in node.value) {
	            if (name !== 'rdf:value' && !isNamespaceDefinition(name)) {
	                attributes[getLocalName(name)] = node.value[name].value;
	            }
	        }
	
	        return attributes;
	    }
	
	    function parseRdfValue(node) {
	        return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
	    }
	
	    function hasNestedStructureRdfDescription(node) {
	        return node.attributes['rdf:parseType'] === 'Resource' ||
	        node.value['rdf:Description'] !== undefined && node.value['rdf:Description'].value['rdf:value'] === undefined;
	    }
	
	    function parseNodeAsStructureRdfDescription(node, name) {
	        var tag = {
	            value: {},
	            attributes: {} };
	
	
	        if (node.value['rdf:Description'] !== undefined) {
	            _extends(tag.value, parseNodeAttributesAsTags(node.value['rdf:Description'].attributes));
	            _extends(tag.attributes, parseNodeAttributes(node));
	            node = node.value['rdf:Description'];
	        }
	
	        _extends(tag.value, parseNodeChildrenAsTags(node.value));
	
	        tag.description = getDescription(tag.value, name);
	
	        return tag;
	    }
	
	    function isCompactStructure(node) {
	        return Object.keys(node.value).length === 0 &&
	        node.attributes['rdf:resource'] === undefined;
	    }
	
	    function parseNodeAsCompactStructure(node, name) {
	        var value = parseNodeAttributesAsTags(node.attributes);
	
	        return {
	            value: value,
	            attributes: {},
	            description: getDescription(value, name) };
	
	    }
	
	    function isArray(node) {
	        return getArrayChild(node.value) !== undefined;
	    }
	
	    function getArrayChild(value) {
	        return value['rdf:Bag'] || value['rdf:Seq'] || value['rdf:Alt'];
	    }
	
	    function parseNodeAsArray(node, name) {
	        var items = getArrayChild(node.value).value['rdf:li'];
	        var attributes = parseNodeAttributes(node);
	        var value = [];
	
	        if (!Array.isArray(items)) {
	            items = [items];
	        }
	
	        items.forEach(function (item) {
	            value.push(parseArrayValue(item));
	        });
	
	        return {
	            value: value,
	            attributes: attributes,
	            description: getDescription(value, name) };
	
	    }
	
	    function parseArrayValue(item) {
	        if (hasNestedSimpleRdfDescription(item)) {
	            return parseNodeAsSimpleRdfDescription(item);
	        }
	
	        if (hasNestedArrayValue(item)) {
	            return parseNodeChildrenAsTags(item.value);
	        }
	
	        return {
	            value: item.value,
	            attributes: parseNodeAttributes(item),
	            description: getDescription(item.value) };
	
	    }
	
	    function hasNestedArrayValue(node) {
	        return node.attributes['rdf:parseType'] === 'Resource';
	    }
	
	    function parseNodeAsSimpleValue(node, name) {
	        var value = getURIValue(node) || parseXMPObject(node.value);
	
	        return {
	            value: value,
	            attributes: parseNodeAttributes(node),
	            description: getDescription(value, name) };
	
	    }
	
	    function getURIValue(node) {
	        return node.attributes && node.attributes['rdf:resource'];
	    }});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.xmpTagNames = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.default =
	
	
	
	    {
	        'tiff:Orientation': function tiffOrientation(value) {
	            if (value === '1') {
	                return 'Horizontal (normal)';
	            }
	            if (value === '2') {
	                return 'Mirror horizontal';
	            }
	            if (value === '3') {
	                return 'Rotate 180';
	            }
	            if (value === '4') {
	                return 'Mirror vertical';
	            }
	            if (value === '5') {
	                return 'Mirror horizontal and rotate 270 CW';
	            }
	            if (value === '6') {
	                return 'Rotate 90 CW';
	            }
	            if (value === '7') {
	                return 'Mirror horizontal and rotate 90 CW';
	            }
	            if (value === '8') {
	                return 'Rotate 270 CW';
	            }
	            return value;
	        },
	        'exif:GPSLatitude': calculateGPSValue,
	        'exif:GPSLongitude': calculateGPSValue };
	
	
	    function calculateGPSValue(value) {var _value$split =
	        value.split(','),_value$split2 = _slicedToArray(_value$split, 2),degreesString = _value$split2[0],minutesString = _value$split2[1];
	        if (degreesString !== undefined && minutesString !== undefined) {
	            var degrees = parseFloat(degreesString);
	            var minutes = parseFloat(minutesString);
	            var ref = minutesString.charAt(minutesString.length - 1);
	            if (!Number.isNaN(degrees) && !Number.isNaN(minutes)) {
	                return '' + (degrees + minutes / 60) + ref;
	            }
	        }
	        return value;
	    }});

/***/ })
/******/ ])
});
;
//# sourceMappingURL=exif-reader.js.map