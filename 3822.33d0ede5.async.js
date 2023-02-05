(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[3822],{69843:function(module,__unused_webpack_exports,__webpack_require__){eval(`module.exports = {
    ResizeSensor: __webpack_require__(86087),
    ElementQueries: __webpack_require__(86456)
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk4NDMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxLQUFvQjtBQUM5QyxvQkFBb0IsbUJBQU8sQ0FBQyxLQUFzQjtBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9jc3MtZWxlbWVudC1xdWVyaWVzL2luZGV4LmpzP2FlNGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUmVzaXplU2Vuc29yOiByZXF1aXJlKCcuL3NyYy9SZXNpemVTZW5zb3InKSxcbiAgICBFbGVtZW50UXVlcmllczogcmVxdWlyZSgnLi9zcmMvRWxlbWVudFF1ZXJpZXMnKVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///69843
`)},86456:function(module,exports,__webpack_require__){"use strict";eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(86087)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }

            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(selector)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensorInstance = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\\s\\t]*([^,\\n]*?)((?:\\[[\\s\\t]*?(?:min|max)-(?:width|height)[\\s\\t]*?[~$\\^]?=[\\s\\t]*?"[^"]*?"[\\s\\t]*?])+)([^,\\n\\s\\{]*)/mgi;
        var attrRegex = /\\[[\\s\\t]*?(min|max)-(width|height)[\\s\\t]*?[~$\\^]?=[\\s\\t]*?"([^"]*?)"[\\s\\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        if(rules[i].styleSheet.hasOwnProperty("cssRules")) {
                            readRules(rules[i].styleSheet.cssRules);
                        }
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = element && window.getComputedStyle(element, null);
                var animationName = styles && styles.getPropertyValue('animation-name');
                var requiresSetup = animationName && (-1 !== animationName.indexOf('element-queries'));

                if (requiresSetup) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensorInstance) {
            //responsive image

            element.resizeSensorInstance.detach();
            delete element.resizeSensorInstance;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1lbGVtZW50LXF1ZXJpZXMvc3JjL0VsZW1lbnRRdWVyaWVzLmpzPzM4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCBNYXJjIEouIFNjaG1pZHQuIFNlZSB0aGUgTElDRU5TRSBmaWxlIGF0IHRoZSB0b3AtbGV2ZWxcbiAqIGRpcmVjdG9yeSBvZiB0aGlzIGRpc3RyaWJ1dGlvbiBhbmQgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjai9jc3MtZWxlbWVudC1xdWVyaWVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UuXG4gKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWycuL1Jlc2l6ZVNlbnNvci5qcyddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCcuL1Jlc2l6ZVNlbnNvci5qcycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkVsZW1lbnRRdWVyaWVzID0gZmFjdG9yeShyb290LlJlc2l6ZVNlbnNvcik7XG4gICAgICAgIHJvb3QuRWxlbWVudFF1ZXJpZXMubGlzdGVuKCk7XG4gICAgfVxufSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uIChSZXNpemVTZW5zb3IpIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHZhciBFbGVtZW50UXVlcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy88c3R5bGU+IGVsZW1lbnQgd2l0aCBvdXIgZHluYW1pY2FsbHkgY3JlYXRlZCBzdHlsZXNcbiAgICAgICAgdmFyIGNzc1N0eWxlRWxlbWVudDtcblxuICAgICAgICAvL2FsbCBydWxlcyBmb3VuZCBmb3IgZWxlbWVudCBxdWVyaWVzXG4gICAgICAgIHZhciBhbGxRdWVyaWVzID0ge307XG5cbiAgICAgICAgLy9hc3NvY2lhdGlvbiBtYXAgdG8gaWRlbnRpZnkgd2hpY2ggc2VsZWN0b3IgYmVsb25ncyB0byBhIGVsZW1lbnQgZnJvbSB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQuXG4gICAgICAgIHZhciBpZFRvU2VsZWN0b3JNYXBwaW5nID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRFbVNpemUoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZm9udFNpemUpIHx8IDE2O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBlbGVtZW50IHNpemVcbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB7d2lkdGgsIGhlaWdodH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChyZWN0LndpZHRoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQocmVjdC5oZWlnaHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQGNvcHlyaWdodCBodHRwczovL2dpdGh1Yi5jb20vTXIwZ3JvZy9lbGVtZW50LXF1ZXJ5L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gY29udmVydFRvUHgoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJzID0gdmFsdWUuc3BsaXQoL1xcZC8pO1xuICAgICAgICAgICAgdmFyIHVuaXRzID0gbnVtYmVyc1tudW1iZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHhcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKiBnZXRFbVNpemUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKiBnZXRFbVNpemUoKTtcbiAgICAgICAgICAgICAgICAvLyBWaWV3cG9ydCB1bml0cyFcbiAgICAgICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gaHR0cDovL3F1aXJrc21vZGUub3JnL21vYmlsZS90YWJsZVZpZXdwb3J0Lmh0bWxcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvSGVpZ2h0IGdldHMgdXMgdGhlIG1vc3QgcmVsaWFibGUgaW5mb1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2d1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAxMDA7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZoXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAqIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLyAxMDA7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZtaW5cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidm1heFwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdncgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLyAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaG9vc2VyID0gTWF0aFt1bml0cyA9PT0gXCJ2bWluXCIgPyBcIm1pblwiIDogXCJtYXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAqIGNob29zZXIodncsIHZoKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gZm9yIG5vdywgbm90IHN1cHBvcnRpbmcgcGh5c2ljYWwgdW5pdHMgKHNpbmNlIHRoZXkgYXJlIGp1c3QgYSBzZXQgbnVtYmVyIG9mIHB4KVxuICAgICAgICAgICAgICAgIC8vIG9yIGV4L2NoIChnZXR0aW5nIGFjY3VyYXRlIG1lYXN1cmVtZW50cyBpcyBoYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU2V0dXBJbmZvcm1hdGlvbihlbGVtZW50LCBpZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBrZXksIG9wdGlvbiwgZWxlbWVudFNpemUsIHZhbHVlLCBhY3R1YWxWYWx1ZSwgYXR0clZhbHVlcywgYXR0clZhbHVlLCBhdHRyTmFtZTtcblxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBbJ21pbi13aWR0aCcsICdtaW4taGVpZ2h0JywgJ21heC13aWR0aCcsICdtYXgtaGVpZ2h0J107XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXh0cmFjdHMgdGhlIGNvbXB1dGVkIHdpZHRoL2hlaWdodCBhbmQgc2V0cyB0byBtaW4vbWF4LSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IGN1cnJlbnQgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTaXplID0gZ2V0RWxlbWVudFNpemUodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGFsbFF1ZXJpZXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsUXVlcmllc1tpZF0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gYWxsUXVlcmllc1tpZF1ba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnZlcnRUb1B4KHRoaXMuZWxlbWVudCwgb3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxWYWx1ZSA9IG9wdGlvbi5wcm9wZXJ0eSA9PT0gJ3dpZHRoJyA/IGVsZW1lbnRTaXplLndpZHRoIDogZWxlbWVudFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IG9wdGlvbi5tb2RlICsgJy0nICsgb3B0aW9uLnByb3BlcnR5O1xuICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLm1vZGUgPT09ICdtaW4nICYmIGFjdHVhbFZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgKz0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5tb2RlID09PSAnbWF4JyAmJiBhY3R1YWxWYWx1ZSA8PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0clZhbHVlICs9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0clZhbHVlc1thdHRyTmFtZV0pIGF0dHJWYWx1ZXNbYXR0ck5hbWVdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgJiYgLTEgPT09ICgnICcgKyBhdHRyVmFsdWVzW2F0dHJOYW1lXSArICcgJykuaW5kZXhPZignICcgKyBhdHRyVmFsdWUgKyAnICcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWVzW2F0dHJOYW1lXSArPSAnICcgKyBhdHRyVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGspKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0clZhbHVlc1thdHRyaWJ1dGVzW2tdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzW2tdLCBhdHRyVmFsdWVzW2F0dHJpYnV0ZXNba11dLnN1YnN0cigxKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXNba10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIGlkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzZXR1cEVsZW1lbnQoZWxlbWVudCwgaWQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5lbGVtZW50UXVlcmllc1NldHVwSW5mb3JtYXRpb24pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnRRdWVyaWVzU2V0dXBJbmZvcm1hdGlvbiA9IG5ldyBTZXR1cEluZm9ybWF0aW9uKGVsZW1lbnQsIGlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmVsZW1lbnRRdWVyaWVzU2Vuc29yKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50UXVlcmllc1NlbnNvciA9IG5ldyBSZXNpemVTZW5zb3IoZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnRRdWVyaWVzU2V0dXBJbmZvcm1hdGlvbi5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHJ1bGVzIHRvIHRoZSBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIG9uY2UgcmVzaXplZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlIG1pbnxtYXhcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHdpZHRofGhlaWdodFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHF1ZXVlUXVlcnkoc2VsZWN0b3IsIG1vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihhbGxRdWVyaWVzW3NlbGVjdG9yXSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgYWxsUXVlcmllc1tzZWxlY3Rvcl0gPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgYW5pbWF0aW9uIHRvIHRyaWdnZXIgYW5pbWF0aW9uc3RhcnQgZXZlbnQsIHNvIHdlIGtub3cgZXhhY3RseSB3aGVuIGEgZWxlbWVudCBhcHBlYXJzIGluIHRoZSBET01cblxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGlkVG9TZWxlY3Rvck1hcHBpbmcubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNzc1N0eWxlRWxlbWVudC5pbm5lckhUTUwgKz0gJ1xcbicgKyBzZWxlY3RvciArICcge2FuaW1hdGlvbjogMC4xcyBlbGVtZW50LXF1ZXJpZXM7fSc7XG4gICAgICAgICAgICAgICAgY3NzU3R5bGVFbGVtZW50LmlubmVySFRNTCArPSAnXFxuJyArIHNlbGVjdG9yICsgJyA+IC5yZXNpemUtc2Vuc29yIHttaW4td2lkdGg6ICcraWQrJ3B4O30nO1xuICAgICAgICAgICAgICAgIGlkVG9TZWxlY3Rvck1hcHBpbmcucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFsbFF1ZXJpZXNbc2VsZWN0b3JdLnB1c2goe1xuICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRRdWVyeShjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSBxdWVyeSA9IChjb250YWluZXIpID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChjb250YWluZXIpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghcXVlcnkgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAkJCkgcXVlcnkgPSAkJDtcbiAgICAgICAgICAgIGlmICghcXVlcnkgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBqUXVlcnkpIHF1ZXJ5ID0galF1ZXJ5O1xuXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ05vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwsIGpRdWVyeSBvciBNb290b29sc1xcJ3MgJCQgZm91bmQuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGFuaW1hdGlvblN0YXJ0IGRpZG4ndCBjYXRjaCBhIG5ldyBlbGVtZW50IGluIHRoZSBET00sIHdlIGNhbiBtYW51YWxseSBzZWFyY2ggZm9yIGl0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBmaW5kRWxlbWVudFF1ZXJpZXNFbGVtZW50cyhjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IGdldFF1ZXJ5KGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHNlbGVjdG9yIGluIGFsbFF1ZXJpZXMpIGlmIChhbGxRdWVyaWVzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGVsZW1lbnRzIGJhc2VkIG9uIHRoZSBleHRyYWN0IHF1ZXJ5IHNlbGVjdG9yIGZyb20gdGhlIGVsZW1lbnQgcXVlcnkgcnVsZVxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHF1ZXJ5KHNlbGVjdG9yLCBjb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBFbGVtZW50KGVsZW1lbnRzW2ldLCBzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaFJlc3BvbnNpdmVJbWFnZShlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIHZhciBydWxlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0SW1hZ2VJZCA9IDA7XG4gICAgICAgICAgICB2YXIgbGFzdEFjdGl2ZUltYWdlID0gLTE7XG4gICAgICAgICAgICB2YXIgbG9hZGVkSW1hZ2VzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbltpXS50YWdOYW1lICYmIGVsZW1lbnQuY2hpbGRyZW5baV0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGVsZW1lbnQuY2hpbGRyZW5baV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5XaWR0aCA9IGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0QXR0cmlidXRlKCdtaW4td2lkdGgnKSB8fCBlbGVtZW50LmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4td2lkdGgnKTtcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgbWluSGVpZ2h0ID0gZWxlbWVudC5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ21pbi1oZWlnaHQnKSB8fCBlbGVtZW50LmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4taGVpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSBlbGVtZW50LmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSB8fCBlbGVtZW50LmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgndXJsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKHNyYyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogbWluV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZUlkID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RBY3RpdmVJbWFnZSA9IGRlZmF1bHRJbWFnZUlkO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VUb0Rpc3BsYXkgPSBmYWxzZSwgaTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSBpbiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZXNbaV0ubWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoID4gcnVsZXNbaV0ubWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVRvRGlzcGxheSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWltYWdlVG9EaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbm8gcnVsZSBtYXRjaGVkLCBzaG93IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0Rpc3BsYXkgPSBkZWZhdWx0SW1hZ2VJZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGFzdEFjdGl2ZUltYWdlICE9PSBpbWFnZVRvRGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICAvL2ltYWdlIGNoYW5nZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9hZGVkSW1hZ2VzW2ltYWdlVG9EaXNwbGF5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWFnZSBoYXMgbm90IGJlZW4gbG9hZGVkIHlldCwgd2UgbmVlZCB0byBsb2FkIHRoZSBpbWFnZSBmaXJzdCBpbiBtZW1vcnkgdG8gcHJldmVudCBmbGFzaCBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ubyBjb250ZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ltYWdlVG9EaXNwbGF5XS5zcmMgPSBzb3VyY2VzW2ltYWdlVG9EaXNwbGF5XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2xhc3RBY3RpdmVJbWFnZV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpbWFnZVRvRGlzcGxheV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZXNbaW1hZ2VUb0Rpc3BsYXldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVJbWFnZSA9IGltYWdlVG9EaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc291cmNlc1tpbWFnZVRvRGlzcGxheV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltsYXN0QWN0aXZlSW1hZ2VdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpbWFnZVRvRGlzcGxheV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0QWN0aXZlSW1hZ2UgPSBpbWFnZVRvRGlzcGxheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBzdXJlIGZvciBpbml0aWFsIGNoZWNrIGNhbGwgdGhlIC5zcmMgaXMgc2V0IGNvcnJlY3RseVxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltpbWFnZVRvRGlzcGxheV0uc3JjID0gc291cmNlc1tpbWFnZVRvRGlzcGxheV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvckluc3RhbmNlID0gbmV3IFJlc2l6ZVNlbnNvcihlbGVtZW50LCBjaGVjayk7XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFJlc3BvbnNpdmVJbWFnZXMoKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSBnZXRRdWVyeSgpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBxdWVyeSgnW2RhdGEtcmVzcG9uc2l2ZS1pbWFnZV0sW3Jlc3BvbnNpdmUtaW1hZ2VdJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIGF0dGFjaFJlc3BvbnNpdmVJbWFnZShlbGVtZW50c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVnZXggPSAvLD9bXFxzXFx0XSooW14sXFxuXSo/KSgoPzpcXFtbXFxzXFx0XSo/KD86bWlufG1heCktKD86d2lkdGh8aGVpZ2h0KVtcXHNcXHRdKj9bfiRcXF5dPz1bXFxzXFx0XSo/XCJbXlwiXSo/XCJbXFxzXFx0XSo/XSkrKShbXixcXG5cXHNcXHtdKikvbWdpO1xuICAgICAgICB2YXIgYXR0clJlZ2V4ID0gL1xcW1tcXHNcXHRdKj8obWlufG1heCktKHdpZHRofGhlaWdodClbXFxzXFx0XSo/W34kXFxeXT89W1xcc1xcdF0qP1wiKFteXCJdKj8pXCJbXFxzXFx0XSo/XS9tZ2k7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RRdWVyeShjc3MpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCwgc21hdGNoLCBhdHRycywgYXR0ck1hdGNoO1xuXG4gICAgICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvJy9nLCAnXCInKTtcbiAgICAgICAgICAgIHdoaWxlIChudWxsICE9PSAobWF0Y2ggPSByZWdleC5leGVjKGNzcykpKSB7XG4gICAgICAgICAgICAgICAgc21hdGNoID0gbWF0Y2hbMV0gKyBtYXRjaFszXTtcbiAgICAgICAgICAgICAgICBhdHRycyA9IG1hdGNoWzJdO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG51bGwgIT09IChhdHRyTWF0Y2ggPSBhdHRyUmVnZXguZXhlYyhhdHRycykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlUXVlcnkoc21hdGNoLCBhdHRyTWF0Y2hbMV0sIGF0dHJNYXRjaFsyXSwgYXR0ck1hdGNoWzNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtDc3NSdWxlW118U3RyaW5nfSBydWxlc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcmVhZFJ1bGVzKHJ1bGVzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAnJztcblxuICAgICAgICAgICAgaWYgKCFydWxlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcnVsZXMpIHtcbiAgICAgICAgICAgICAgICBydWxlcyA9IHJ1bGVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKC0xICE9PSBydWxlcy5pbmRleE9mKCdtaW4td2lkdGgnKSB8fCAtMSAhPT0gcnVsZXMuaW5kZXhPZignbWF4LXdpZHRoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdFF1ZXJ5KHJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gcnVsZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgxID09PSBydWxlc1tpXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHJ1bGVzW2ldLnNlbGVjdG9yVGV4dCB8fCBydWxlc1tpXS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBzZWxlY3Rvci5pbmRleE9mKCdtaW4taGVpZ2h0JykgfHwgLTEgIT09IHNlbGVjdG9yLmluZGV4T2YoJ21heC1oZWlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RRdWVyeShzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC0xICE9PSBzZWxlY3Rvci5pbmRleE9mKCdtaW4td2lkdGgnKSB8fCAtMSAhPT0gc2VsZWN0b3IuaW5kZXhPZignbWF4LXdpZHRoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0UXVlcnkoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDQgPT09IHJ1bGVzW2ldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRSdWxlcyhydWxlc1tpXS5jc3NSdWxlcyB8fCBydWxlc1tpXS5ydWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMyA9PT0gcnVsZXNbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocnVsZXNbaV0uc3R5bGVTaGVldC5oYXNPd25Qcm9wZXJ0eShcImNzc1J1bGVzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFJ1bGVzKHJ1bGVzW2ldLnN0eWxlU2hlZXQuY3NzUnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZmF1bHRDc3NJbmplY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWFyY2hlcyBhbGwgY3NzIHJ1bGVzIGFuZCBzZXR1cHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCBlbGVtZW50cyB3aXRoIGVsZW1lbnQgcXVlcnkgcnVsZXMuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvblN0YXJ0ID0gJ2FuaW1hdGlvbnN0YXJ0JztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlWyd3ZWJraXRBbmltYXRpb25OYW1lJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RhcnQgPSAnd2Via2l0QW5pbWF0aW9uU3RhcnQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlWydNb3pBbmltYXRpb25OYW1lJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RhcnQgPSAnbW96YW5pbWF0aW9uc3RhcnQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlWydPQW5pbWF0aW9uTmFtZSddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblN0YXJ0ID0gJ29hbmltYXRpb25zdGFydCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25TdGFydCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSBlbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gc3R5bGVzICYmIHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tbmFtZScpO1xuICAgICAgICAgICAgICAgIHZhciByZXF1aXJlc1NldHVwID0gYW5pbWF0aW9uTmFtZSAmJiAoLTEgIT09IGFuaW1hdGlvbk5hbWUuaW5kZXhPZignZWxlbWVudC1xdWVyaWVzJykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVzU2V0dXApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50UXVlcmllc1NlbnNvciA9IG5ldyBSZXNpemVTZW5zb3IoZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZWxlbWVudFF1ZXJpZXNTZXR1cEluZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50UXVlcmllc1NldHVwSW5mb3JtYXRpb24uY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Vuc29yU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5yZXNpemVTZW5zb3IsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBzZW5zb3JTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWluLXdpZHRoJyk7XG4gICAgICAgICAgICAgICAgICAgIGlkID0gcGFyc2VJbnQoaWQucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgICAgICAgICBzZXR1cEVsZW1lbnQoZS50YXJnZXQsIGlkVG9TZWxlY3Rvck1hcHBpbmdbaWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFkZWZhdWx0Q3NzSW5qZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjc3NTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGNzc1N0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgICAgICBjc3NTdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gJ1tyZXNwb25zaXZlLWltYWdlXSA+IGltZywgW2RhdGEtcmVzcG9uc2l2ZS1pbWFnZV0ge292ZXJmbG93OiBoaWRkZW47IHBhZGRpbmc6IDA7IH0gW3Jlc3BvbnNpdmUtaW1hZ2VdID4gaW1nLCBbZGF0YS1yZXNwb25zaXZlLWltYWdlXSA+IGltZyB7d2lkdGg6IDEwMCU7fSc7XG5cbiAgICAgICAgICAgICAgICAvL3NhZmFyaSB3YW50cyBhdCBsZWFzdCBvbmUgcnVsZSBpbiBrZXlmcmFtZXMgdG8gc3RhcnQgd29ya2luZ1xuICAgICAgICAgICAgICAgIGNzc1N0eWxlRWxlbWVudC5pbm5lckhUTUwgKz0gJ1xcbkBrZXlmcmFtZXMgZWxlbWVudC1xdWVyaWVzIHsgMCUgeyB2aXNpYmlsaXR5OiBpbmhlcml0OyB9IH0nO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoY3NzU3R5bGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q3NzSW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5ocmVmICYmIDAgPT09IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLmhyZWYuaW5kZXhPZignZmlsZTovLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDc3NFbGVtZW50UXVlcmllczogdW5hYmxlIHRvIHBhcnNlIGxvY2FsIGNzcyBmaWxlcywgXCIgKyBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRSdWxlcyhkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5jc3NSdWxlcyB8fCBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5ydWxlcyB8fCBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5jc3NUZXh0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaW5kUmVzcG9uc2l2ZUltYWdlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbyB0aHJvdWdoIGFsbCBjb2xsZWN0ZWQgcnVsZXMgKHJlYWRSdWxlcygpKSBhbmQgYXR0YWNoIHRoZSByZXNpemUtbGlzdGVuZXIuXG4gICAgICAgICAqIE5vdCBuZWNlc3NhcnkgdG8gY2FsbCBpdCBtYW51YWxseSwgc2luY2Ugd2UgZGV0ZWN0IGF1dG9tYXRpY2FsbHkgd2hlbiBuZXcgZWxlbWVudHNcbiAgICAgICAgICogYXJlIGF2YWlsYWJsZSBpbiB0aGUgRE9NLiBIb3dldmVyLCBzb21ldGltZXMgaGFuZHkgZm9yIGRpcnR5IERPTSBtb2RpZmljYXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgb25seSBlbGVtZW50cyBvZiB0aGUgY29udGFpbmVyIGFyZSBjb25zaWRlcmVkIChkb2N1bWVudC5ib2R5IGlmIG5vdCBzZXQpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpbmRFbGVtZW50UXVlcmllc0VsZW1lbnRzID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgZmluZEVsZW1lbnRRdWVyaWVzRWxlbWVudHMoY29udGFpbmVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBFbGVtZW50UXVlcmllcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEVsZW1lbnRRdWVyaWVzLmluc3RhbmNlLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBzZW5zb3IgYW5kIGVsZW1lbnRxdWVyeSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIEVsZW1lbnRRdWVyaWVzLmRldGFjaCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmVsZW1lbnRRdWVyaWVzU2V0dXBJbmZvcm1hdGlvbikge1xuICAgICAgICAgICAgLy9lbGVtZW50IHF1ZXJpZXNcbiAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudFF1ZXJpZXNTZW5zb3IuZGV0YWNoKCk7XG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5lbGVtZW50UXVlcmllc1NldHVwSW5mb3JtYXRpb247XG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5lbGVtZW50UXVlcmllc1NlbnNvcjtcblxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucmVzaXplU2Vuc29ySW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vcmVzcG9uc2l2ZSBpbWFnZVxuXG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvckluc3RhbmNlLmRldGFjaCgpO1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQucmVzaXplU2Vuc29ySW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWxlbWVudFF1ZXJpZXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFFbGVtZW50UXVlcmllcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRWxlbWVudFF1ZXJpZXMuaW5zdGFuY2UgPSBuZXcgRWxlbWVudFF1ZXJpZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEVsZW1lbnRRdWVyaWVzLmluc3RhbmNlLmluaXQoKTtcbiAgICB9O1xuXG4gICAgdmFyIGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvKiBNb3ppbGxhLCBDaHJvbWUsIE9wZXJhICovXG4gICAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBTYWZhcmksIGlDYWIsIEtvbnF1ZXJvciAqL1xuICAgICAgICBlbHNlIGlmICgvS0hUTUx8V2ViS2l0fGlDYWIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICB2YXIgRE9NTG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgvbG9hZGVkfGNvbXBsZXRlL2kudGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKERPTUxvYWRUaW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIC8qIE90aGVyIHdlYiBicm93c2VycyAqL1xuICAgICAgICBlbHNlIHdpbmRvdy5vbmxvYWQgPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgRWxlbWVudFF1ZXJpZXMuZmluZEVsZW1lbnRRdWVyaWVzRWxlbWVudHMgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgIEVsZW1lbnRRdWVyaWVzLmluc3RhbmNlLmZpbmRFbGVtZW50UXVlcmllc0VsZW1lbnRzKGNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIEVsZW1lbnRRdWVyaWVzLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tTG9hZGVkKEVsZW1lbnRRdWVyaWVzLmluaXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRWxlbWVudFF1ZXJpZXM7XG5cbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///86456
`)},86087:function(module,exports,__webpack_require__){"use strict";eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
            ? self
            : Function('return this')();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame ||
        globalWindow.mozRequestAnimationFrame ||
        globalWindow.webkitRequestAnimationFrame ||
        function (fn) {
            return globalWindow.setTimeout(fn, 20);
        };

    var cancelAnimationFrame = globalWindow.cancelAnimationFrame ||
        globalWindow.mozCancelAnimationFrame ||
        globalWindow.webkitCancelAnimationFrame ||
        function (timer) {
            globalWindow.clearTimeout(timer);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */
    function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        //Is used when checking in reset() only for invisible elements
        var lastAnimationFrameForInvisibleCheck = 0;

        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function(sizeInfo) {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call(this, sizeInfo);
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';

            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s',
            };

            setStyle(element.resizeSensor, style);

            var expand = document.createElement('div');
            expand.className = 'resize-sensor-expand';
            setStyle(expand, style);

            var expandChild = document.createElement('div');
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);

            var shrink = document.createElement('div');
            shrink.className = 'resize-sensor-shrink';
            setStyle(shrink, style);

            var shrinkChild = document.createElement('div');
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, { width: '200%', height: '200%' });
            shrink.appendChild(shrinkChild);

            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);

            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
                element.style.position = 'relative';
            }

            var dirty = false;

            //last request animation frame id used in onscroll event
            var rafId = 0;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrameForInvisibleCheck = 0;

            var resetExpandShrink = function () {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                expandChild.style.width = (width + 10) + 'px';
                expandChild.style.height = (height + 10) + 'px';

                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;

                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };

            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrameForInvisibleCheck){
                            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                                lastAnimationFrameForInvisibleCheck = 0;
                                reset();
                            });
                        }

                        return;
                    } else {
                        // Stop checking
                        initialHiddenCheck = false;
                    }
                }

                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = size.width;
                lastHeight = size.height;

                if (element.resizedAttached) {
                    element.resizedAttached.call(size);
                }
            };

            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

            // Fix for custom Elements and invisible elements
            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
            });
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (!lastAnimationFrameForInvisibleCheck) {
                cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
                lastAnimationFrameForInvisibleCheck = 0;
            }
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function (mutations) {
            for (var i in mutations) {
                if (mutations.hasOwnProperty(i)) {
                    var items = mutations[i].addedNodes;
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].resizeSensor) {
                            ResizeSensor.reset(items[j]);
                        }
                    }
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    return ResizeSensor;

}));
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODYwODcuanMiLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRCxRQUFRLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUN2QixNQUFNLEtBQUssRUFJTjtBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQyxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQywrQkFBK0I7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9jc3MtZWxlbWVudC1xdWVyaWVzL3NyYy9SZXNpemVTZW5zb3IuanM/ZWE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IE1hcmMgSi4gU2NobWlkdC4gU2VlIHRoZSBMSUNFTlNFIGZpbGUgYXQgdGhlIHRvcC1sZXZlbFxuICogZGlyZWN0b3J5IG9mIHRoaXMgZGlzdHJpYnV0aW9uIGFuZCBhdFxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcmNqL2Nzcy1lbGVtZW50LXF1ZXJpZXMvYmxvYi9tYXN0ZXIvTElDRU5TRS5cbiAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUmVzaXplU2Vuc29yID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgZG9lcyBub3QgdGhyb3cgaW4gYSBTU1IgKFNlcnZlciBTaWRlIFJlbmRlcmluZykgc2l0dWF0aW9uXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TZW1hbnRpYy1PcmcvU2VtYW50aWMtVUkvaXNzdWVzLzM4NTVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWFyY2ovY3NzLWVsZW1lbnQtcXVlcmllcy9pc3N1ZXMvMjU3XG4gICAgdmFyIGdsb2JhbFdpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICAgICAgICA/IHdpbmRvd1xuICAgICAgICA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoXG4gICAgICAgICAgICA/IHNlbGZcbiAgICAgICAgICAgIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAvLyBPbmx5IHVzZWQgZm9yIHRoZSBkaXJ0eSBjaGVja2luZywgc28gdGhlIGV2ZW50IGNhbGxiYWNrIGNvdW50IGlzIGxpbWl0ZWQgdG8gbWF4IDEgY2FsbCBwZXIgZnBzIHBlciBzZW5zb3IuXG4gICAgLy8gSW4gY29tYmluYXRpb24gd2l0aCB0aGUgZXZlbnQgYmFzZWQgcmVzaXplIHNlbnNvciB0aGlzIHNhdmVzIGNwdSB0aW1lLCBiZWNhdXNlIHRoZSBzZW5zb3IgaXMgdG9vIGZhc3QgYW5kXG4gICAgLy8gd291bGQgZ2VuZXJhdGUgdG9vIG1hbnkgdW5uZWNlc3NhcnkgZXZlbnRzLlxuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWxXaW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIGdsb2JhbFdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgZ2xvYmFsV2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxXaW5kb3cuc2V0VGltZW91dChmbiwgMjApO1xuICAgICAgICB9O1xuXG4gICAgdmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZ2xvYmFsV2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIGdsb2JhbFdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBnbG9iYWxXaW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgICBnbG9iYWxXaW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfTtcblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciBlYWNoIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50KHMpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259ICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb3JFYWNoRWxlbWVudChlbGVtZW50cywgY2FsbGJhY2spe1xuICAgICAgICB2YXIgZWxlbWVudHNUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnRzKTtcbiAgICAgICAgdmFyIGlzQ29sbGVjdGlvblR5cGVkID0gKCdbb2JqZWN0IEFycmF5XScgPT09IGVsZW1lbnRzVHlwZVxuICAgICAgICAgICAgfHwgKCdbb2JqZWN0IE5vZGVMaXN0XScgPT09IGVsZW1lbnRzVHlwZSlcbiAgICAgICAgICAgIHx8ICgnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nID09PSBlbGVtZW50c1R5cGUpXG4gICAgICAgICAgICB8fCAoJ1tvYmplY3QgT2JqZWN0XScgPT09IGVsZW1lbnRzVHlwZSlcbiAgICAgICAgICAgIHx8ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGpRdWVyeSAmJiBlbGVtZW50cyBpbnN0YW5jZW9mIGpRdWVyeSkgLy9qcXVlcnlcbiAgICAgICAgICAgIHx8ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIEVsZW1lbnRzICYmIGVsZW1lbnRzIGluc3RhbmNlb2YgRWxlbWVudHMpIC8vbW9vdG9vbHNcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAoaXNDb2xsZWN0aW9uVHlwZWQpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXQgZWxlbWVudCBzaXplXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fSB7d2lkdGgsIGhlaWdodH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChyZWN0LndpZHRoKSxcbiAgICAgICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IENTUyBzdHlsZXMgdG8gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsYXNzIGZvciBkaW1lbnNpb24gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W118RWxlbWVudHN8alF1ZXJ5fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHZhciBSZXNpemVTZW5zb3IgPSBmdW5jdGlvbihlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICAvL0lzIHVzZWQgd2hlbiBjaGVja2luZyBpbiByZXNldCgpIG9ubHkgZm9yIGludmlzaWJsZSBlbGVtZW50c1xuICAgICAgICB2YXIgbGFzdEFuaW1hdGlvbkZyYW1lRm9ySW52aXNpYmxlQ2hlY2sgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEV2ZW50UXVldWUoKSB7XG4gICAgICAgICAgICB2YXIgcSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5hZGQgPSBmdW5jdGlvbihldikge1xuICAgICAgICAgICAgICAgIHEucHVzaChldik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgIHRoaXMuY2FsbCA9IGZ1bmN0aW9uKHNpemVJbmZvKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgaiA9IHEubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHFbaV0uY2FsbCh0aGlzLCBzaXplSW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbihldikge1xuICAgICAgICAgICAgICAgIHZhciBuZXdRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihpID0gMCwgaiA9IHEubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHFbaV0gIT09IGV2KSBuZXdRdWV1ZS5wdXNoKHFbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxID0gbmV3UXVldWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259ICAgIHJlc2l6ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaFJlc2l6ZUV2ZW50KGVsZW1lbnQsIHJlc2l6ZWQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVzaXplZEF0dGFjaGVkKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZXNpemVkQXR0YWNoZWQuYWRkKHJlc2l6ZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5yZXNpemVkQXR0YWNoZWQgPSBuZXcgRXZlbnRRdWV1ZSgpO1xuICAgICAgICAgICAgZWxlbWVudC5yZXNpemVkQXR0YWNoZWQuYWRkKHJlc2l6ZWQpO1xuXG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudC5yZXNpemVTZW5zb3IuZGlyID0gJ2x0cic7XG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvci5jbGFzc05hbWUgPSAncmVzaXplLXNlbnNvcic7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAnMHB4JyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgekluZGV4OiAnLTEnLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3R5bGVDaGlsZCA9IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICcwcycsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzZXRTdHlsZShlbGVtZW50LnJlc2l6ZVNlbnNvciwgc3R5bGUpO1xuXG4gICAgICAgICAgICB2YXIgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBleHBhbmQuY2xhc3NOYW1lID0gJ3Jlc2l6ZS1zZW5zb3ItZXhwYW5kJztcbiAgICAgICAgICAgIHNldFN0eWxlKGV4cGFuZCwgc3R5bGUpO1xuXG4gICAgICAgICAgICB2YXIgZXhwYW5kQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNldFN0eWxlKGV4cGFuZENoaWxkLCBzdHlsZUNoaWxkKTtcbiAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRDaGlsZCk7XG5cbiAgICAgICAgICAgIHZhciBzaHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNocmluay5jbGFzc05hbWUgPSAncmVzaXplLXNlbnNvci1zaHJpbmsnO1xuICAgICAgICAgICAgc2V0U3R5bGUoc2hyaW5rLCBzdHlsZSk7XG5cbiAgICAgICAgICAgIHZhciBzaHJpbmtDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2V0U3R5bGUoc2hyaW5rQ2hpbGQsIHN0eWxlQ2hpbGQpO1xuICAgICAgICAgICAgc2V0U3R5bGUoc2hyaW5rQ2hpbGQsIHsgd2lkdGg6ICcyMDAlJywgaGVpZ2h0OiAnMjAwJScgfSk7XG4gICAgICAgICAgICBzaHJpbmsuYXBwZW5kQ2hpbGQoc2hyaW5rQ2hpbGQpO1xuXG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvci5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgICAgICAgICAgZWxlbWVudC5yZXNpemVTZW5zb3IuYXBwZW5kQ2hpbGQoc2hyaW5rKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5yZXNpemVTZW5zb3IpO1xuXG4gICAgICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gY29tcHV0ZWRTdHlsZSA/IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoJ2Fic29sdXRlJyAhPT0gcG9zaXRpb24gJiYgJ3JlbGF0aXZlJyAhPT0gcG9zaXRpb24gJiYgJ2ZpeGVkJyAhPT0gcG9zaXRpb24gJiYgJ3N0aWNreScgIT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvL2xhc3QgcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgaWQgdXNlZCBpbiBvbnNjcm9sbCBldmVudFxuICAgICAgICAgICAgdmFyIHJhZklkID0gMDtcbiAgICAgICAgICAgIHZhciBzaXplID0gZ2V0RWxlbWVudFNpemUoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgbGFzdFdpZHRoID0gMDtcbiAgICAgICAgICAgIHZhciBsYXN0SGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIHZhciBpbml0aWFsSGlkZGVuQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lRm9ySW52aXNpYmxlQ2hlY2sgPSAwO1xuXG4gICAgICAgICAgICB2YXIgcmVzZXRFeHBhbmRTaHJpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBleHBhbmRDaGlsZC5zdHlsZS53aWR0aCA9ICh3aWR0aCArIDEwKSArICdweCc7XG4gICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCArIDEwKSArICdweCc7XG5cbiAgICAgICAgICAgICAgICBleHBhbmQuc2Nyb2xsTGVmdCA9IHdpZHRoICsgMTA7XG4gICAgICAgICAgICAgICAgZXhwYW5kLnNjcm9sbFRvcCA9IGhlaWdodCArIDEwO1xuXG4gICAgICAgICAgICAgICAgc2hyaW5rLnNjcm9sbExlZnQgPSB3aWR0aCArIDEwO1xuICAgICAgICAgICAgICAgIHNocmluay5zY3JvbGxUb3AgPSBoZWlnaHQgKyAxMDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxIaWRkZW5DaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW52aXNpYmxlID0gZWxlbWVudC5vZmZzZXRXaWR0aCA9PT0gMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaW4gbmV4dCBmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0QW5pbWF0aW9uRnJhbWVGb3JJbnZpc2libGVDaGVjayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lRm9ySW52aXNpYmxlQ2hlY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lRm9ySW52aXNpYmxlQ2hlY2sgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGNoZWNraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsSGlkZGVuQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0RXhwYW5kU2hyaW5rKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudC5yZXNpemVTZW5zb3IucmVzZXRTZW5zb3IgPSByZXNldDtcblxuICAgICAgICAgICAgdmFyIG9uUmVzaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJhZklkID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICghZGlydHkpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGxhc3RXaWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGFzdEhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVzaXplZEF0dGFjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVzaXplZEF0dGFjaGVkLmNhbGwoc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGdldEVsZW1lbnRTaXplKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGRpcnR5ID0gc2l6ZS53aWR0aCAhPT0gbGFzdFdpZHRoIHx8IHNpemUuaGVpZ2h0ICE9PSBsYXN0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpcnR5ICYmICFyYWZJZCkge1xuICAgICAgICAgICAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShvblJlc2l6ZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbihlbCwgbmFtZSwgY2IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGNiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhZGRFdmVudChleHBhbmQsICdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgICAgICAgICBhZGRFdmVudChzaHJpbmssICdzY3JvbGwnLCBvblNjcm9sbCk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBmb3IgY3VzdG9tIEVsZW1lbnRzIGFuZCBpbnZpc2libGUgZWxlbWVudHNcbiAgICAgICAgICAgIGxhc3RBbmltYXRpb25GcmFtZUZvckludmlzaWJsZUNoZWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lRm9ySW52aXNpYmxlQ2hlY2sgPSAwO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvckVhY2hFbGVtZW50KGVsZW1lbnQsIGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgYXR0YWNoUmVzaXplRXZlbnQoZWxlbSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRldGFjaCA9IGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgICAgICAvLyBjbGVhbiB1cCB0aGUgdW5maW5pc2hlZCBhbmltYXRpb24gZnJhbWUgdG8gcHJldmVudCBhIHBvdGVudGlhbCBlbmRsZXNzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvZiByZXNldFxuICAgICAgICAgICAgaWYgKCFsYXN0QW5pbWF0aW9uRnJhbWVGb3JJbnZpc2libGVDaGVjaykge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxhc3RBbmltYXRpb25GcmFtZUZvckludmlzaWJsZUNoZWNrKTtcbiAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uRnJhbWVGb3JJbnZpc2libGVDaGVjayA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXNpemVTZW5zb3IuZGV0YWNoKGVsZW1lbnQsIGV2KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlc2l6ZVNlbnNvci5yZXNldFNlbnNvcigpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBSZXNpemVTZW5zb3IucmVzZXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGZvckVhY2hFbGVtZW50KGVsZW1lbnQsIGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgZWxlbS5yZXNpemVTZW5zb3IucmVzZXRTZW5zb3IoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFJlc2l6ZVNlbnNvci5kZXRhY2ggPSBmdW5jdGlvbihlbGVtZW50LCBldikge1xuICAgICAgICBmb3JFYWNoRWxlbWVudChlbGVtZW50LCBmdW5jdGlvbihlbGVtKXtcbiAgICAgICAgICAgIGlmICghZWxlbSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYoZWxlbS5yZXNpemVkQXR0YWNoZWQgJiYgdHlwZW9mIGV2ID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAgICAgICAgIGVsZW0ucmVzaXplZEF0dGFjaGVkLnJlbW92ZShldik7XG4gICAgICAgICAgICAgICAgaWYoZWxlbS5yZXNpemVkQXR0YWNoZWQubGVuZ3RoKCkpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtLnJlc2l6ZVNlbnNvcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLmNvbnRhaW5zKGVsZW0ucmVzaXplU2Vuc29yKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0ucmVzaXplU2Vuc29yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVsZW0ucmVzaXplU2Vuc29yO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtLnJlc2l6ZWRBdHRhY2hlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtc1tqXS5yZXNpemVTZW5zb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNpemVTZW5zb3IucmVzZXQoaXRlbXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZXNpemVTZW5zb3I7XG5cbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///86087
`)},93822:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnchorType": function() { return /* binding */ AnchorType; },
/* harmony export */   "Bottom": function() { return /* binding */ Bottom; },
/* harmony export */   "BottomResizable": function() { return /* binding */ BottomResizable; },
/* harmony export */   "CenterType": function() { return /* binding */ CenterType; },
/* harmony export */   "Centered": function() { return /* binding */ Centered; },
/* harmony export */   "CenteredVertically": function() { return /* binding */ CenteredVertically; },
/* harmony export */   "Custom": function() { return /* binding */ Custom; },
/* harmony export */   "Fill": function() { return /* binding */ Fill; },
/* harmony export */   "Fixed": function() { return /* binding */ Fixed; },
/* harmony export */   "Info": function() { return /* binding */ Info; },
/* harmony export */   "Layer": function() { return /* binding */ Layer; },
/* harmony export */   "Left": function() { return /* binding */ Left; },
/* harmony export */   "LeftResizable": function() { return /* binding */ LeftResizable; },
/* harmony export */   "Options": function() { return /* binding */ Options; },
/* harmony export */   "Positioned": function() { return /* binding */ Positioned; },
/* harmony export */   "ResizeHandlePlacement": function() { return /* binding */ ResizeHandlePlacement; },
/* harmony export */   "ResizeType": function() { return /* binding */ ResizeType; },
/* harmony export */   "Right": function() { return /* binding */ Right; },
/* harmony export */   "RightResizable": function() { return /* binding */ RightResizable; },
/* harmony export */   "SSR": function() { return /* binding */ SSR; },
/* harmony export */   "Top": function() { return /* binding */ Top; },
/* harmony export */   "TopResizable": function() { return /* binding */ TopResizable; },
/* harmony export */   "Type": function() { return /* binding */ Type; },
/* harmony export */   "ViewPort": function() { return /* binding */ ViewPort; },
/* harmony export */   "anchoredProps": function() { return /* binding */ anchoredProps; },
/* harmony export */   "enabledSsrSupport": function() { return /* binding */ enabledSsrSupport; },
/* harmony export */   "resizableProps": function() { return /* binding */ resizableProps; },
/* harmony export */   "useCurrentSpace": function() { return /* binding */ useCurrentSpace; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69843);
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_element_queries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".spaces-centered,.spaces-centered-vertically{position:relative;top:50%;transform:translateY(-50%)}.spaces-centered{text-align:center}.spaces-clearfix:after{content:\\"\\";display:table;clear:both}.spaces-resize-handle{position:absolute;z-index:9999;background:transparent}.spaces-resize-handle:before{content:\\"\\";position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}.spaces-resize-handle:after{content:\\"\\";position:absolute;z-index:1}.spaces-touch-handle{position:absolute;z-index:9998;pointer-events:all;background:transparent}.spaces-resize-handle.resize-left:before{cursor:w-resize}.spaces-resize-handle.resize-top-left:before{cursor:nw-resize}.spaces-resize-handle.resize-right:before{cursor:e-resize}.spaces-resize-handle.resize-top-right:before{cursor:ne-resize}.spaces-resize-handle.resize-top:before{cursor:n-resize}.spaces-resize-handle.resize-bottom:before{cursor:s-resize}.spaces-resize-handle.resize-bottom-left:before{cursor:sw-resize}.spaces-resize-handle.resize-bottom-right:before{cursor:se-resize}.spaces-space{overflow:hidden;touch-action:none;box-sizing:border-box}.spaces-resizing .spaces-space{transition:none!important}.spaces-space .spaces-space-inner{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box}.spaces-space.scrollable .spaces-space-inner{overflow:auto;touch-action:auto}";
styleInject(css_248z);

/*! *****************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
/* global Reflect, Promise */\r
\r
var extendStatics = function(d, b) {\r
    extendStatics = Object.setPrototypeOf ||\r
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r
    return extendStatics(d, b);\r
};\r
\r
function __extends(d, b) {\r
    if (typeof b !== "function" && b !== null)\r
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");\r
    extendStatics(d, b);\r
    function __() { this.constructor = d; }\r
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r
}\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};\r
\r
function __rest(s, e) {\r
    var t = {};\r
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r
        t[p] = s[p];\r
    if (s != null && typeof Object.getOwnPropertySymbols === "function")\r
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r
                t[p[i]] = s[p[i]];\r
        }\r
    return t;\r
}\r
\r
function __spreadArray(to, from, pack) {\r
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r
        if (ar || !(i in from)) {\r
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r
            ar[i] = from[i];\r
        }\r
    }\r
    return to.concat(ar || Array.prototype.slice.call(from));\r
}

var Type;\r
(function (Type) {\r
    Type["ViewPort"] = "viewport";\r
    Type["Fixed"] = "fixed";\r
    Type["Fill"] = "fill";\r
    Type["Positioned"] = "positioned";\r
    Type["Anchored"] = "anchored";\r
    Type["Custom"] = "custom";\r
})(Type || (Type = {}));\r
var AnchorType;\r
(function (AnchorType) {\r
    AnchorType["Left"] = "anchor-left";\r
    AnchorType["Right"] = "anchor-right";\r
    AnchorType["Top"] = "anchor-top";\r
    AnchorType["Bottom"] = "anchor-bottom";\r
})(AnchorType || (AnchorType = {}));\r
var Orientation;\r
(function (Orientation) {\r
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";\r
    Orientation[Orientation["Vertical"] = 1] = "Vertical";\r
})(Orientation || (Orientation = {}));\r
var ResizeType;\r
(function (ResizeType) {\r
    ResizeType["All"] = "resize-all";\r
    ResizeType["Left"] = "resize-left";\r
    ResizeType["Right"] = "resize-right";\r
    ResizeType["Top"] = "resize-top";\r
    ResizeType["Bottom"] = "resize-bottom";\r
    ResizeType["TopLeft"] = "resize-topleft";\r
    ResizeType["TopRight"] = "resize-topright";\r
    ResizeType["BottomLeft"] = "resize-bottomleft";\r
    ResizeType["BottomRight"] = "resize-bottomright";\r
})(ResizeType || (ResizeType = {}));\r
var ResizeHandlePlacement;\r
(function (ResizeHandlePlacement) {\r
    ResizeHandlePlacement["OverlayInside"] = "overlay-inside";\r
    ResizeHandlePlacement["Inside"] = "inside";\r
    ResizeHandlePlacement["OverlayBoundary"] = "overlay-boundary";\r
})(ResizeHandlePlacement || (ResizeHandlePlacement = {}));\r
var CenterType;\r
(function (CenterType) {\r
    CenterType["None"] = "none";\r
    CenterType["Vertical"] = "vertical";\r
    CenterType["HorizontalVertical"] = "horizontalVertical";\r
})(CenterType || (CenterType = {}));\r
var MoveEvent;\r
(function (MoveEvent) {\r
    MoveEvent["Mouse"] = "mousemove";\r
    MoveEvent["Touch"] = "touchmove";\r
})(MoveEvent || (MoveEvent = {}));\r
var EndEvent;\r
(function (EndEvent) {\r
    EndEvent["Mouse"] = "mouseup";\r
    EndEvent["Touch"] = "touchend";\r
})(EndEvent || (EndEvent = {}));

function omit(object) {\r
    var keys = [];\r
    for (var _i = 1; _i < arguments.length; _i++) {\r
        keys[_i - 1] = arguments[_i];\r
    }\r
    var keySet = Object.create(null);\r
    keys.forEach(function (key) {\r
        keySet[key] = true;\r
    });\r
    var result = Object.create(null);\r
    Object.keys(object).forEach(function (key) {\r
        if (!keySet[key]) {\r
            result[key] = object[key];\r
        }\r
    });\r
    return result;\r
}\r
function shortuuid() {\r
    var firstPart = (Math.random() * 46656) | 0;\r
    var secondPart = (Math.random() * 46656) | 0;\r
    return ("000" + firstPart.toString(36)).slice(-3) + ("000" + secondPart.toString(36)).slice(-3);\r
}\r
function getSizeString(size) {\r
    return typeof size === "string" ? size : size + "px";\r
}\r
function css(size, dontAddCalc) {\r
    if (size.size === 0 && size.adjusted.length === 0 && size.resized === 0) {\r
        return "0px";\r
    }\r
    var parts = [];\r
    if (size.size !== undefined) {\r
        parts.push(getSizeString(size.size));\r
    }\r
    size.adjusted.forEach(function (l) { return parts.push(getSizeString(l)); });\r
    if (size.resized !== 0) {\r
        parts.push(getSizeString(size.resized));\r
    }\r
    if (parts.length === 0) {\r
        return undefined;\r
    }\r
    if (parts.length === 1) {\r
        return parts[0];\r
    }\r
    if (dontAddCalc) {\r
        return parts.join(" + ");\r
    }\r
    return "calc(" + parts.join(" + ") + ")";\r
}\r
function coalesce() {\r
    var args = [];\r
    for (var _i = 0; _i < arguments.length; _i++) {\r
        args[_i] = arguments[_i];\r
    }\r
    return args.find(function (x) { return x !== null && x !== undefined; });\r
}\r
function adjustmentsEqual(item1, item2) {\r
    if (item1.length !== item2.length) {\r
        return false;\r
    }\r
    for (var i = 0, len = item1.length; i < len; i++) {\r
        if (item1[i] !== item2[i]) {\r
            return false;\r
        }\r
    }\r
    return true;\r
}\r
function throttle(callback, limit) {\r
    var wait = false; // Initially, we're not waiting\r
    return function () {\r
        var args = [];\r
        for (var _i = 0; _i < arguments.length; _i++) {\r
            args[_i] = arguments[_i];\r
        }\r
        // We return a throttled function\r
        if (!wait) {\r
            // If we're not waiting\r
            callback.apply(void 0, args); // Execute users function\r
            wait = true; // Prevent future invocations\r
            setTimeout(function () {\r
                // After a period of time\r
                wait = false; // And allow future invocations\r
            }, limit);\r
        }\r
    };\r
}\r
function styleDefinition(space) {\r
    var cssElements = [];\r
    var style = {\r
        position: space.position,\r
        left: css(space.left),\r
        top: css(space.top),\r
        right: css(space.right),\r
        bottom: css(space.bottom),\r
        width: css(space.width),\r
        height: css(space.height),\r
        zIndex: space.zIndex,\r
    };\r
    var cssString = [];\r
    if (style.position) {\r
        cssString.push("position: " + style.position + ";");\r
    }\r
    if (style.left) {\r
        cssString.push("left: " + style.left + ";");\r
    }\r
    if (style.top) {\r
        cssString.push("top: " + style.top + ";");\r
    }\r
    if (style.right) {\r
        cssString.push("right: " + style.right + ";");\r
    }\r
    if (style.bottom) {\r
        cssString.push("bottom: " + style.bottom + ";");\r
    }\r
    if (style.width) {\r
        cssString.push("width: " + style.width + ";");\r
    }\r
    if (style.height) {\r
        cssString.push("height: " + style.height + ";");\r
    }\r
    if (style.zIndex) {\r
        cssString.push("z-index: " + style.zIndex + ";");\r
    }\r
    if (space.allowOverflow) {\r
        cssString.push("overflow: visible;");\r
    }\r
    if (cssString.length > 0) {\r
        cssElements.push("#" + space.id + " { " + cssString.join(" ") + " }");\r
    }\r
    if (space.scrollable) {\r
        cssElements.push("#" + space.id + " > .spaces-space-inner { overflow: auto; touch-action: auto; }");\r
    }\r
    var nhandleOffset = 0;\r
    var handleSize = space.handleSize + "px";\r
    var touchHandleSize = "-" + (space.touchHandleSize / 2 - space.handleSize / 2) + "px";\r
    var negativeTouchHandleSize = space.touchHandleSize / 2 - space.handleSize / 2 + "px";\r
    switch (space.handlePlacement) {\r
        case ResizeHandlePlacement.Inside:\r
        case ResizeHandlePlacement.OverlayInside:\r
            nhandleOffset = space.handleSize;\r
            if (space.type === Type.Positioned) {\r
                nhandleOffset = 0;\r
            }\r
            break;\r
        case ResizeHandlePlacement.OverlayBoundary:\r
            nhandleOffset = space.handleSize / 2;\r
            break;\r
    }\r
    var handleOffset = nhandleOffset + "px";\r
    var addHandleCss = function (id, pos) {\r
        var styles = [];\r
        if (pos.left)\r
            styles.push("left: " + pos.left);\r
        if (pos.top)\r
            styles.push("top: " + pos.top);\r
        if (pos.right)\r
            styles.push("right: " + pos.right);\r
        if (pos.bottom)\r
            styles.push("bottom: " + pos.bottom);\r
        if (pos.width)\r
            styles.push("width: " + pos.width);\r
        if (pos.height)\r
            styles.push("height: " + pos.height);\r
        cssElements.push("#" + space.id + "-" + id + " { " + styles.join("; ") + "}");\r
    };\r
    var widthOrHeightSpecified = function () {\r
        return space.type === Type.Positioned\r
            ? space.width.size && space.height.size\r
            : space.orientation == Orientation.Horizontal\r
                ? space.width.size\r
                : space.height.size;\r
    };\r
    if (space.canResizeLeft) {\r
        if (space.anchor) {\r
            addHandleCss("ml", {\r
                right: "calc(" + css(space.right, true) + " + " + css(space.width) + " - " + handleOffset + ")",\r
                top: "0",\r
                bottom: "0",\r
                width: handleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("ml", {\r
                left: "calc(" + css(space.left, true) + " - " + handleOffset + ")",\r
                top: css(space.top),\r
                bottom: css(space.bottom),\r
                width: handleSize,\r
                height: css(space.height),\r
            });\r
        }\r
        addHandleCss("ml:after", {\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeTop) {\r
        if (space.anchor) {\r
            addHandleCss("mt", {\r
                left: "0",\r
                right: "0",\r
                bottom: "calc(" + css(space.bottom) + " + " + css(space.height) + " - " + handleOffset + ")",\r
                height: handleSize,\r
            });\r
            addHandleCss("mt:after", {\r
                top: touchHandleSize,\r
                bottom: touchHandleSize,\r
                left: touchHandleSize,\r
                width: css(space.width),\r
                right: touchHandleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("mt", {\r
                top: "calc(" + css(space.top, true) + " - " + handleOffset + ")",\r
                left: css(space.left),\r
                right: css(space.right),\r
                width: css(space.width),\r
                height: handleSize,\r
            });\r
            if (widthOrHeightSpecified()) {\r
                addHandleCss("mt:after", {\r
                    top: touchHandleSize,\r
                    bottom: touchHandleSize,\r
                    left: touchHandleSize,\r
                    width: "calc(" + css(space.width, true) + " - " + handleOffset + ") + " + negativeTouchHandleSize,\r
                    right: touchHandleSize,\r
                });\r
            }\r
            else {\r
                addHandleCss("mt:after", {\r
                    top: touchHandleSize,\r
                    bottom: touchHandleSize,\r
                    left: touchHandleSize,\r
                    width: css(space.width),\r
                    right: touchHandleSize,\r
                });\r
            }\r
        }\r
    }\r
    if (space.canResizeRight) {\r
        if (widthOrHeightSpecified()) {\r
            addHandleCss("mr", {\r
                left: "calc(" + css(space.left, true) + " + " + css(space.width, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                top: css(space.top),\r
                bottom: css(space.bottom),\r
                width: handleSize,\r
                height: css(space.height),\r
            });\r
        }\r
        else {\r
            addHandleCss("mr", {\r
                right: "calc(" + css(space.right, true) + " - " + handleOffset + ")",\r
                top: css(space.top),\r
                bottom: css(space.bottom),\r
                width: handleSize,\r
                height: css(space.height),\r
            });\r
        }\r
        addHandleCss("mr:after", {\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeBottom) {\r
        if (widthOrHeightSpecified()) {\r
            addHandleCss("mb", {\r
                top: "calc(" + css(space.top, true) + " + " + css(space.height, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                left: css(space.left),\r
                right: css(space.right),\r
                width: css(space.width),\r
                height: handleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("mb", {\r
                bottom: "calc(" + css(space.bottom, true) + " - " + handleOffset + ")",\r
                left: css(space.left),\r
                right: css(space.right),\r
                width: css(space.width),\r
                height: handleSize,\r
            });\r
        }\r
        addHandleCss("mb:after", {\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeTopLeft) {\r
        addHandleCss("mtl", {\r
            left: "calc(" + css(space.left, true) + " - " + handleOffset + ")",\r
            top: css(space.top),\r
            width: handleSize,\r
            height: handleSize,\r
        });\r
        addHandleCss("mtl:after", {\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeTopRight) {\r
        if (widthOrHeightSpecified()) {\r
            addHandleCss("mtr", {\r
                left: "calc(" + css(space.left, true) + " + " + css(space.width, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                top: css(space.top),\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("mtr", {\r
                right: "calc(" + css(space.right, true) + " - " + handleOffset + ")",\r
                top: css(space.top),\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        addHandleCss("mtr:after", {\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeBottomLeft) {\r
        if (widthOrHeightSpecified()) {\r
            addHandleCss("mbl", {\r
                top: "calc(" + css(space.top, true) + " + " + css(space.height, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                left: css(space.left),\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("mbl", {\r
                bottom: "calc(" + css(space.bottom, true) + " - " + handleOffset + ")",\r
                left: css(space.left),\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        addHandleCss("mbl:after", {\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
        });\r
    }\r
    if (space.canResizeBottomRight) {\r
        if (widthOrHeightSpecified()) {\r
            addHandleCss("mbr", {\r
                left: "calc(" + css(space.left, true) + " + " + css(space.width, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                top: "calc(" + css(space.top, true) + " + " + css(space.height, true) + " - " + handleSize + " + " + handleOffset + ")",\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        else {\r
            addHandleCss("mbr", {\r
                right: "calc(" + css(space.right, true) + " - " + handleOffset + ")",\r
                bottom: "calc(" + css(space.bottom, true) + " - " + handleOffset + ")",\r
                width: handleSize,\r
                height: handleSize,\r
            });\r
        }\r
        addHandleCss("mbr:after", {\r
            top: touchHandleSize,\r
            bottom: touchHandleSize,\r
            left: touchHandleSize,\r
            right: touchHandleSize,\r
        });\r
    }\r
    return cssElements.join(" ");\r
}\r
function updateStyleDefinition(space) {\r
    var definition = styleDefinition(space);\r
    if (!isServer()) {\r
        var existing = document.getElementById("style_" + space.id);\r
        if (existing) {\r
            if (existing.innerHTML !== definition) {\r
                existing.innerHTML = definition;\r
            }\r
        }\r
        else {\r
            var newStyle = document.createElement("style");\r
            newStyle.id = "style_" + space.id;\r
            newStyle.innerHTML = definition;\r
            document.head.appendChild(newStyle);\r
        }\r
    }\r
    else {\r
        space.ssrStyle = definition;\r
    }\r
}\r
function removeStyleDefinition(space) {\r
    var existing = document.getElementById("style_" + space.id);\r
    if (existing) {\r
        document.head.removeChild(existing);\r
    }\r
}\r
function isServer() {\r
    if (typeof document !== "undefined") {\r
        if (document) {\r
            return false;\r
        }\r
    }\r
    return true;\r
}

function isHorizontal(resizeType) {\r
    return resizeType === ResizeType.Left || resizeType === ResizeType.Right;\r
}\r
function createSideAdjuster(rect, resizeType, dimensionToAdjust, space, originalX, originalY) {\r
    var negater = resizeType === ResizeType.Right || resizeType === ResizeType.Bottom ? function (val) { return -val; } : function (val) { return val; };\r
    var candidateOppositeDimensionToAdjust = isHorizontal(resizeType) ? space.width : space.height;\r
    var offset1 = dimensionToAdjust.resized;\r
    var offset2 = candidateOppositeDimensionToAdjust.resized;\r
    var size = isHorizontal(resizeType) ? rect.width : rect.height;\r
    var minimumAdjust = coalesce(space.minimumSize, 20) - size + 0;\r
    var maximumAdjust = space.maximumSize ? space.maximumSize - size + 0 : undefined;\r
    return function (currentX, currentY) {\r
        var adjustment = (isHorizontal(resizeType) ? originalX : originalY) - (isHorizontal(resizeType) ? currentX : currentY);\r
        var dimensionResized = negater(adjustment);\r
        if (space.type !== Type.Positioned) {\r
            dimensionResized = Math.max(negater(adjustment), minimumAdjust);\r
            if (dimensionResized < minimumAdjust) {\r
                dimensionResized = minimumAdjust;\r
            }\r
            if (typeof maximumAdjust === "number") {\r
                if (dimensionResized > maximumAdjust) {\r
                    dimensionResized = maximumAdjust;\r
                }\r
            }\r
        }\r
        if (dimensionToAdjust.size !== undefined) {\r
            dimensionToAdjust.resized = negater(-adjustment) + offset1;\r
            if (candidateOppositeDimensionToAdjust.size) {\r
                candidateOppositeDimensionToAdjust.resized = negater(adjustment) + offset2;\r
            }\r
        }\r
        else {\r
            candidateOppositeDimensionToAdjust.resized = dimensionResized + offset2;\r
        }\r
    };\r
}\r
function createAdjuster(resizeType, space, originalX, originalY) {\r
    var rect = space.element.getBoundingClientRect();\r
    switch (resizeType) {\r
        case ResizeType.Left:\r
            return createSideAdjuster(rect, resizeType, space.left, space, originalX, originalY);\r
        case ResizeType.Right:\r
            return createSideAdjuster(rect, resizeType, space.right, space, originalX, originalY);\r
        case ResizeType.Bottom:\r
            return createSideAdjuster(rect, resizeType, space.bottom, space, originalX, originalY);\r
        case ResizeType.Top:\r
            return createSideAdjuster(rect, resizeType, space.top, space, originalX, originalY);\r
        case ResizeType.TopLeft:\r
            var topAdjuster_1 = createSideAdjuster(rect, ResizeType.Top, space.top, space, originalX, originalY);\r
            var leftAdjuster_1 = createSideAdjuster(rect, ResizeType.Left, space.left, space, originalX, originalY);\r
            return function (x, y) {\r
                topAdjuster_1(x, y);\r
                leftAdjuster_1(x, y);\r
            };\r
        case ResizeType.TopRight:\r
            var top1Adjuster_1 = createSideAdjuster(rect, ResizeType.Top, space.top, space, originalX, originalY);\r
            var rightAdjuster_1 = createSideAdjuster(rect, ResizeType.Right, space.right, space, originalX, originalY);\r
            return function (x, y) {\r
                top1Adjuster_1(x, y);\r
                rightAdjuster_1(x, y);\r
            };\r
        case ResizeType.BottomLeft:\r
            var bottomAdjuster_1 = createSideAdjuster(rect, ResizeType.Bottom, space.bottom, space, originalX, originalY);\r
            var left1Adjuster_1 = createSideAdjuster(rect, ResizeType.Left, space.left, space, originalX, originalY);\r
            return function (x, y) {\r
                bottomAdjuster_1(x, y);\r
                left1Adjuster_1(x, y);\r
            };\r
        case ResizeType.BottomRight:\r
            var bottom1Adjuster_1 = createSideAdjuster(rect, ResizeType.Bottom, space.bottom, space, originalX, originalY);\r
            var right1Adjuster_1 = createSideAdjuster(rect, ResizeType.Right, space.right, space, originalX, originalY);\r
            return function (x, y) {\r
                bottom1Adjuster_1(x, y);\r
                right1Adjuster_1(x, y);\r
            };\r
        default:\r
            throw "Resize type " + resizeType + " not supported";\r
    }\r
}\r
function createResize(store) {\r
    return {\r
        startResize: function (e, resizeType, space, endEvent, moveEvent, getCoords, onResizeEnd) {\r
            if (space.onResizeStart) {\r
                var result = space.onResizeStart(resizeType);\r
                if (typeof result === "boolean" && !result) {\r
                    return;\r
                }\r
            }\r
            var originalCoords = getCoords(e);\r
            var adjuster = createAdjuster(resizeType, space, originalCoords.x, originalCoords.y);\r
            space.resizing = true;\r
            space.updateParent();\r
            var lastX = 0;\r
            var lastY = 0;\r
            var moved = false;\r
            var resize = function (currentX, currentY) {\r
                adjuster(currentX, currentY);\r
                store.updateStyles(space);\r
            };\r
            var withPreventDefault = function (e) {\r
                moved = true;\r
                var newCoords = getCoords(e);\r
                lastX = newCoords.x;\r
                lastY = newCoords.y;\r
                e.preventDefault();\r
                {\r
                    window.requestAnimationFrame(function () {\r
                        if (space.resizing) {\r
                            resize(lastX, lastY);\r
                        }\r
                    });\r
                }\r
            };\r
            var removeListener = function () {\r
                space.resizing = false;\r
                if (moved) {\r
                    resize(lastX, lastY);\r
                }\r
                window.removeEventListener(moveEvent, withPreventDefault);\r
                window.removeEventListener(endEvent, removeListener);\r
                space.updateParent();\r
                var resizeEnd = onResizeEnd || space.onResizeEnd;\r
                if (resizeEnd) {\r
                    var currentRect = space.element.getBoundingClientRect();\r
                    resizeEnd(Math.floor(isHorizontal(resizeType) ? currentRect.width : currentRect.height), currentRect, resizeType);\r
                }\r
            };\r
            window.addEventListener(moveEvent, withPreventDefault);\r
            window.addEventListener(endEvent, removeListener);\r
        },\r
    };\r
}

function createDrag(store) {\r
    function onMove(space, originalX, originalY, x, y) {\r
        var adjustmentX = -(originalX - x);\r
        var adjustmentY = -(originalY - y);\r
        space.left.adjusted = [adjustmentX];\r
        space.top.adjusted = [adjustmentY];\r
        if (space.right.size) {\r
            space.right.adjusted = [-adjustmentX];\r
        }\r
        if (space.bottom.size) {\r
            space.bottom.adjusted = [-adjustmentY];\r
        }\r
        store.updateStyles(space);\r
    }\r
    return {\r
        startDrag: function (e, space, endEvent, moveEvent, getCoords, onDragEnd) {\r
            if (space.element) {\r
                var coords = getCoords(e);\r
                var adjustedLeft = space.left.adjusted.length === 0 ? 0 : space.left.adjusted[0];\r
                var adjustedTop = space.top.adjusted.length === 0 ? 0 : space.top.adjusted[0];\r
                var originalMouseX_1 = coords.x - adjustedLeft;\r
                var originalMouseY_1 = coords.y - adjustedTop;\r
                var lastX_1 = 0;\r
                var lastY_1 = 0;\r
                var moved_1 = false;\r
                var mouseMove_1 = function (x, y) { return onMove(space, originalMouseX_1, originalMouseY_1, x, y); };\r
                var throttledMouseMove_1 = throttle(mouseMove_1, 5);\r
                var withPreventDefault_1 = function (e) {\r
                    moved_1 = true;\r
                    var newCoords = getCoords(e);\r
                    lastX_1 = newCoords.x;\r
                    lastY_1 = newCoords.y;\r
                    e.preventDefault();\r
                    throttledMouseMove_1(lastX_1, lastY_1);\r
                };\r
                var removeListener_1 = function () {\r
                    var _a;\r
                    if (moved_1) {\r
                        mouseMove_1(lastX_1, lastY_1);\r
                    }\r
                    window.removeEventListener(moveEvent, withPreventDefault_1);\r
                    window.removeEventListener(endEvent, removeListener_1);\r
                    if (onDragEnd) {\r
                        var parentInfo = (space.parentId && ((_a = store.getSpace(space.parentId)) === null || _a === void 0 ? void 0 : _a.element.getBoundingClientRect())) || {\r
                            left: 0,\r
                            top: 0,\r
                            right: 0,\r
                            bottom: 0,\r
                            width: 0,\r
                            height: 0,\r
                        };\r
                        var info = (function (_a) {\r
                            var left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom, width = _a.width, height = _a.height;\r
                            return ({ left: left, top: top, right: right, bottom: bottom, width: width, height: height });\r
                        })(space.element.getBoundingClientRect());\r
                        onDragEnd(__assign(__assign({}, info), {\r
                            left: info.left - parentInfo.left,\r
                            top: info.top - parentInfo.top,\r
                        }), moved_1);\r
                    }\r
                };\r
                window.addEventListener(moveEvent, withPreventDefault_1);\r
                window.addEventListener(endEvent, removeListener_1);\r
            }\r
        },\r
    };\r
}

var spaceDefaults = {\r
    id: "",\r
    zIndex: 0,\r
    scrollable: false,\r
    resizing: false,\r
    allowOverflow: false,\r
    centerContent: "none",\r
    dimension: { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0, toJSON: function () { return ""; } },\r
    handleSize: 5,\r
    touchHandleSize: 5,\r
    handlePlacement: ResizeHandlePlacement.OverlayInside,\r
    adjustLeft: function () { return false; },\r
    adjustRight: function () { return false; },\r
    adjustTop: function () { return false; },\r
    adjustBottom: function () { return false; },\r
    adjustEdge: function () { return false; },\r
    anchoredChildren: function () { return []; },\r
};\r
var anchorTypes = [AnchorType.Left, AnchorType.Top, AnchorType.Right, AnchorType.Bottom];\r
function getPosition(type) {\r
    if (type === Type.ViewPort) {\r
        return "fixed";\r
    }\r
    if (type === Type.Fixed) {\r
        return "relative";\r
    }\r
    return "absolute";\r
}\r
function getOrientation(anchor) {\r
    return anchor === AnchorType.Bottom || anchor === AnchorType.Top ? Orientation.Vertical : Orientation.Horizontal;\r
}\r
function anchorUpdates(space) {\r
    return [\r
        {\r
            anchor: AnchorType.Left,\r
            update: space.adjustLeft,\r
        },\r
        {\r
            anchor: AnchorType.Top,\r
            update: space.adjustTop,\r
        },\r
        {\r
            anchor: AnchorType.Right,\r
            update: space.adjustRight,\r
        },\r
        {\r
            anchor: AnchorType.Bottom,\r
            update: space.adjustBottom,\r
        },\r
    ];\r
}\r
function sizeInfoDefault(size) {\r
    return { size: size, adjusted: [], resized: 0 };\r
}\r
function createStore() {\r
    var spaces = [];\r
    var setSpaces = function (newSpaces) {\r
        spaces = newSpaces;\r
    };\r
    var getSpace = function (id) {\r
        return getSpaces().find(function (s) { return s.id === id; });\r
    };\r
    var getSpaces = function () { return spaces; };\r
    var recalcSpaces = function (parent) {\r
        var onlyUnique = function (value, index, self) {\r
            return self.indexOf(value) === index;\r
        };\r
        var addDefaultOrders = function (spaces) {\r
            var result = [];\r
            anchorTypes.forEach(function (t) {\r
                var anchoredSpaces = spaces.filter(function (s) { return s.anchor !== undefined && s.anchor === t; });\r
                var zIndices = anchoredSpaces.map(function (s) { return s.zIndex; }).filter(onlyUnique);\r
                zIndices.forEach(function (i) {\r
                    var anchoredSpacesInLayer = anchoredSpaces.filter(function (s) { return s.zIndex === i; });\r
                    var orderedSpaces = anchoredSpacesInLayer.filter(function (c) { return c.order !== undefined; });\r
                    var unorderedSpaces = anchoredSpacesInLayer.filter(function (c) { return c.order === undefined; });\r
                    var maxOrder = orderedSpaces.length > 0 ? orderedSpaces.map(function (a) { return a.order; }).reduce(function (a, b) { return Math.max(a, b); }) : 0;\r
                    result = __spreadArray(__spreadArray([], result, true), __spreadArray(__spreadArray([], orderedSpaces, true), unorderedSpaces.map(function (c, idx) { return (__assign(__assign({}, c), { order: maxOrder + idx + 1 })); }), true), true);\r
                });\r
            });\r
            return __spreadArray(__spreadArray([], result, true), spaces.filter(function (s) { return s.anchor === undefined; }), true);\r
        };\r
        var orderedSpaces = addDefaultOrders(parent.children);\r
        var _loop_1 = function () {\r
            var space = orderedSpaces[i];\r
            var changed = false;\r
            if (space.type === Type.Fill) {\r
                anchorUpdates(space).forEach(function (info) {\r
                    var adjusted = [];\r
                    var anchoredSpaces = parent.anchoredChildren(orderedSpaces, info.anchor, space.zIndex);\r
                    anchoredSpaces.forEach(function (as) {\r
                        if (as.orientation === Orientation.Vertical) {\r
                            if (as.height.size) {\r
                                adjusted.push(as.height.size);\r
                            }\r
                            if (as.height.resized) {\r
                                adjusted.push(as.height.resized);\r
                            }\r
                        }\r
                        else {\r
                            if (as.width.size) {\r
                                adjusted.push(as.width.size);\r
                            }\r
                            if (as.width.resized) {\r
                                adjusted.push(as.width.resized);\r
                            }\r
                        }\r
                    });\r
                    if (info.update(adjusted)) {\r
                        changed = true;\r
                    }\r
                });\r
            }\r
            else if (space.type === Type.Anchored) {\r
                var adjusted_1 = [];\r
                var anchoredSpaces = parent\r
                    .anchoredChildren(orderedSpaces, space.anchor, space.zIndex)\r
                    .filter(function (s) { return s.id !== space.id && s.order <= space.order; });\r
                anchoredSpaces.forEach(function (as) {\r
                    if (as.orientation === Orientation.Vertical) {\r
                        if (as.height.size) {\r
                            adjusted_1.push(as.height.size);\r
                        }\r
                        if (as.height.resized) {\r
                            adjusted_1.push(as.height.resized);\r
                        }\r
                    }\r
                    else {\r
                        if (as.width.size) {\r
                            adjusted_1.push(as.width.size);\r
                        }\r
                        if (as.width.resized) {\r
                            adjusted_1.push(as.width.resized);\r
                        }\r
                    }\r
                });\r
                if (space.adjustEdge(adjusted_1)) {\r
                    changed = true;\r
                }\r
            }\r
            if (changed) {\r
                updateStyleDefinition(space);\r
            }\r
        };\r
        for (var i = 0, len = orderedSpaces.length; i < len; i++) {\r
            _loop_1();\r
        }\r
    };\r
    var store = {\r
        getSpaces: getSpaces,\r
        getSpace: getSpace,\r
        addSpace: function (space) {\r
            getSpaces().push(space);\r
            if (space.parentId) {\r
                var parentSpace = getSpace(space.parentId);\r
                if (parentSpace) {\r
                    parentSpace.children.push(space);\r
                    recalcSpaces(parentSpace);\r
                }\r
            }\r
            updateStyleDefinition(space);\r
        },\r
        removeSpace: function (space) {\r
            setSpaces(getSpaces().filter(function (s) { return s.id !== space.id; }));\r
            if (space.parentId) {\r
                var parentSpace = getSpace(space.parentId);\r
                if (parentSpace) {\r
                    parentSpace.children = parentSpace.children.filter(function (s) { return s.id !== space.id; });\r
                    recalcSpaces(parentSpace);\r
                }\r
            }\r
            removeStyleDefinition(space);\r
        },\r
        updateStyles: function (space) {\r
            if (space.parentId) {\r
                var parent_1 = getSpace(space.parentId);\r
                if (parent_1) {\r
                    recalcSpaces(parent_1);\r
                }\r
            }\r
            updateStyleDefinition(space);\r
        },\r
        updateSpace: function (space, props) {\r
            var type = props.type, anchor = props.anchor, order = props.order, zIndex = props.zIndex, scrollable = props.scrollable, position = props.position, centerContent = props.centerContent, minimumSize = props.minimumSize, maximumSize = props.maximumSize, handleSize = props.handleSize, touchHandleSize = props.touchHandleSize, handlePlacement = props.handlePlacement, allowOverflow = props.allowOverflow;\r
            var canResizeLeft = (position && position.leftResizable) || false;\r
            var canResizeRight = (position && position.rightResizable) || false;\r
            var canResizeTop = (position && position.topResizable) || false;\r
            var canResizeBottom = (position && position.bottomResizable) || false;\r
            var canResizeTopLeft = (position && position.topLeftResizable) || false;\r
            var canResizeTopRight = (position && position.topRightResizable) || false;\r
            var canResizeBottomLeft = (position && position.bottomLeftResizable) || false;\r
            var canResizeBottomRight = (position && position.bottomRightResizable) || false;\r
            var changed = false;\r
            if (space.type !== type) {\r
                space.type = type;\r
                space.position = getPosition(type);\r
                changed = true;\r
            }\r
            if (space.anchor !== anchor) {\r
                space.anchor = anchor;\r
                space.orientation = getOrientation(anchor);\r
                changed = true;\r
                if (type === Type.Anchored) {\r
                    if (anchor === AnchorType.Left) {\r
                        space.adjustEdge = space.adjustLeft;\r
                    }\r
                    else if (anchor === AnchorType.Top) {\r
                        space.adjustEdge = space.adjustTop;\r
                    }\r
                    else if (anchor === AnchorType.Right) {\r
                        space.adjustEdge = space.adjustRight;\r
                    }\r
                    else if (anchor === AnchorType.Bottom) {\r
                        space.adjustEdge = space.adjustBottom;\r
                    }\r
                }\r
            }\r
            if (space.left.size !== (position && position.left)) {\r
                space.left.size = position && position.left;\r
                space.left.resized = 0;\r
                space.left.adjusted = [];\r
                changed = true;\r
            }\r
            if (space.right.size !== (position && position.right)) {\r
                space.right.size = position && position.right;\r
                space.right.resized = 0;\r
                space.right.adjusted = [];\r
                changed = true;\r
            }\r
            if (space.top.size !== (position && position.top)) {\r
                space.top.size = position && position.top;\r
                space.top.resized = 0;\r
                space.top.adjusted = [];\r
                changed = true;\r
            }\r
            if (space.bottom.size !== (position && position.bottom)) {\r
                space.bottom.size = position && position.bottom;\r
                space.bottom.resized = 0;\r
                space.bottom.adjusted = [];\r
                changed = true;\r
            }\r
            if (space.width.size !== (position && position.width)) {\r
                space.width.size = position && position.width;\r
                space.width.resized = 0;\r
                space.width.adjusted = [];\r
                changed = true;\r
            }\r
            if (space.height.size !== (position && position.height)) {\r
                space.height.size = position && position.height;\r
                space.height.resized = 0;\r
                space.height.adjusted = [];\r
                changed = true;\r
            }\r
            if (coalesce(space.order, 0) !== coalesce(order, 0)) {\r
                space.order = coalesce(order, 0);\r
                changed = true;\r
            }\r
            if (coalesce(space.zIndex, 0) !== coalesce(zIndex, 0)) {\r
                space.zIndex = coalesce(zIndex, 0);\r
                changed = true;\r
            }\r
            if (coalesce(space.scrollable, false) !== coalesce(scrollable, false)) {\r
                space.scrollable = coalesce(scrollable, false);\r
                changed = true;\r
            }\r
            if (space.minimumSize !== minimumSize) {\r
                space.minimumSize = minimumSize;\r
                changed = true;\r
            }\r
            if (space.maximumSize !== maximumSize) {\r
                space.maximumSize = maximumSize;\r
                changed = true;\r
            }\r
            if (coalesce(space.centerContent, CenterType.None) !== coalesce(centerContent, CenterType.None)) {\r
                space.centerContent = coalesce(centerContent, CenterType.None);\r
                changed = true;\r
            }\r
            if (space.handleSize !== handleSize) {\r
                space.handleSize = handleSize || spaceDefaults.handleSize;\r
                changed = true;\r
            }\r
            if (space.touchHandleSize !== touchHandleSize) {\r
                space.touchHandleSize = touchHandleSize || spaceDefaults.touchHandleSize;\r
                changed = true;\r
            }\r
            if (space.handlePlacement !== handlePlacement) {\r
                space.handlePlacement = handlePlacement || spaceDefaults.handlePlacement;\r
                changed = true;\r
            }\r
            if (space.canResizeBottom !== canResizeBottom) {\r
                space.canResizeBottom = canResizeBottom;\r
                changed = true;\r
            }\r
            if (space.canResizeTop !== canResizeTop) {\r
                space.canResizeTop = canResizeTop;\r
                changed = true;\r
            }\r
            if (space.canResizeLeft !== canResizeLeft) {\r
                space.canResizeLeft = canResizeLeft;\r
                changed = true;\r
            }\r
            if (space.canResizeRight !== canResizeRight) {\r
                space.canResizeRight = canResizeRight;\r
                changed = true;\r
            }\r
            if (space.canResizeTopLeft !== canResizeTopLeft) {\r
                space.canResizeTopLeft = canResizeTopLeft;\r
                changed = true;\r
            }\r
            if (space.canResizeTopRight !== canResizeTopRight) {\r
                space.canResizeTopRight = canResizeTopRight;\r
                changed = true;\r
            }\r
            if (space.canResizeBottomLeft !== canResizeBottomLeft) {\r
                space.canResizeBottomLeft = canResizeBottomLeft;\r
                changed = true;\r
            }\r
            if (space.canResizeBottomRight !== canResizeBottomRight) {\r
                space.canResizeBottomRight = canResizeBottomRight;\r
                changed = true;\r
            }\r
            if (space.allowOverflow !== allowOverflow) {\r
                space.allowOverflow = allowOverflow || spaceDefaults.allowOverflow;\r
                changed = true;\r
            }\r
            if (changed) {\r
                if (space.parentId) {\r
                    var parentSpace = getSpace(space.parentId);\r
                    if (parentSpace) {\r
                        recalcSpaces(parentSpace);\r
                    }\r
                }\r
                updateStyleDefinition(space);\r
            }\r
        },\r
        createSpace: function () { return ({}); },\r
        startMouseResize: function () { return null; },\r
        startTouchResize: function () { return null; },\r
        startMouseDrag: function () { return null; },\r
        startTouchDrag: function () { return null; },\r
    };\r
    var resize = createResize(store);\r
    var drag = createDrag(store);\r
    store.createSpace = function (parentId, props, update) {\r
        var position = props.position, anchor = props.anchor, type = props.type, commonProps = __rest(props, ["position", "anchor", "type"]);\r
        var canResizeLeft = (position && position.rightResizable) || false;\r
        var canResizeRight = (position && position.leftResizable) || false;\r
        var canResizeTop = (position && position.bottomResizable) || false;\r
        var canResizeBottom = (position && position.topResizable) || false;\r
        var canResizeTopLeft = (position && position.topLeftResizable) || false;\r
        var canResizeTopRight = (position && position.topRightResizable) || false;\r
        var canResizeBottomLeft = (position && position.bottomLeftResizable) || false;\r
        var canResizeBottomRight = (position && position.bottomRightResizable) || false;\r
        var newSpace = __assign(__assign(__assign({}, spaceDefaults), commonProps), {\r
            store: store,\r
            update: update,\r
            updateParent: function () {\r
                if (parentId) {\r
                    var parentSpace = store.getSpace(parentId);\r
                    if (parentSpace) {\r
                        parentSpace.update();\r
                    }\r
                }\r
            },\r
            parentId: parentId,\r
            children: [],\r
            anchor: anchor,\r
            type: type,\r
            orientation: getOrientation(anchor),\r
            position: getPosition(type),\r
            left: sizeInfoDefault(position && position.left),\r
            right: sizeInfoDefault(position && position.right),\r
            top: sizeInfoDefault(position && position.top),\r
            bottom: sizeInfoDefault(position && position.bottom),\r
            width: sizeInfoDefault(position && position.width),\r
            height: sizeInfoDefault(position && position.height),\r
            canResizeLeft: canResizeLeft,\r
            canResizeRight: canResizeRight,\r
            canResizeTop: canResizeTop,\r
            canResizeBottom: canResizeBottom,\r
            canResizeTopLeft: canResizeTopLeft,\r
            canResizeTopRight: canResizeTopRight,\r
            canResizeBottomLeft: canResizeBottomLeft,\r
            canResizeBottomRight: canResizeBottomRight,\r
        });\r
        newSpace.anchoredChildren = function (children, chanchor, zIndex) {\r
            return children.filter(function (s) { return s.type === Type.Anchored && s.anchor === chanchor && s.zIndex === zIndex; });\r
        };\r
        newSpace.adjustLeft = function (adjusted) {\r
            if (adjustmentsEqual(newSpace.left.adjusted, adjusted)) {\r
                return false;\r
            }\r
            newSpace.left.adjusted = adjusted;\r
            return true;\r
        };\r
        newSpace.adjustRight = function (adjusted) {\r
            if (adjustmentsEqual(newSpace.right.adjusted, adjusted)) {\r
                return false;\r
            }\r
            newSpace.right.adjusted = adjusted;\r
            return true;\r
        };\r
        newSpace.adjustTop = function (adjusted) {\r
            if (adjustmentsEqual(newSpace.top.adjusted, adjusted)) {\r
                return false;\r
            }\r
            newSpace.top.adjusted = adjusted;\r
            return true;\r
        };\r
        newSpace.adjustBottom = function (adjusted) {\r
            if (adjustmentsEqual(newSpace.bottom.adjusted, adjusted)) {\r
                return false;\r
            }\r
            newSpace.bottom.adjusted = adjusted;\r
            return true;\r
        };\r
        if (type === Type.Anchored) {\r
            if (anchor === AnchorType.Left) {\r
                newSpace.adjustEdge = newSpace.adjustLeft;\r
            }\r
            else if (anchor === AnchorType.Top) {\r
                newSpace.adjustEdge = newSpace.adjustTop;\r
            }\r
            else if (anchor === AnchorType.Right) {\r
                newSpace.adjustEdge = newSpace.adjustRight;\r
            }\r
            else if (anchor === AnchorType.Bottom) {\r
                newSpace.adjustEdge = newSpace.adjustBottom;\r
            }\r
        }\r
        return newSpace;\r
    };\r
    store.startMouseResize = function (resizeType, space, event, onResizeEnd) {\r
        resize.startResize(event, resizeType, space, EndEvent.Mouse, MoveEvent.Mouse, function (e) { return ({\r
            x: e.clientX,\r
            y: e.clientY,\r
        }); }, onResizeEnd);\r
    };\r
    store.startTouchResize = function (resizeType, space, event, onResizeEnd) {\r
        resize.startResize(event, resizeType, space, EndEvent.Touch, MoveEvent.Touch, function (e) { return ({\r
            x: e.touches[0].clientX,\r
            y: e.touches[0].clientY,\r
        }); }, onResizeEnd);\r
    };\r
    store.startMouseDrag = function (space, event, onDragEnd) {\r
        drag.startDrag(event, space, EndEvent.Mouse, MoveEvent.Mouse, function (e) { return ({\r
            x: e.clientX,\r
            y: e.clientY,\r
        }); }, onDragEnd);\r
    };\r
    store.startTouchDrag = function (space, event, onDragEnd) {\r
        drag.startDrag(event, space, EndEvent.Touch, MoveEvent.Touch, function (e) { return ({\r
            x: e.touches[0].clientX,\r
            y: e.touches[0].clientY,\r
        }); }, onDragEnd);\r
    };\r
    return store;\r
}

// WORKAROUND for React18 strict mode\r
// https://blog.ag-grid.com/avoiding-react-18-double-mount/\r
var useEffectOnce = function (effect) {\r
    var destroyFunc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\r
    var effectCalled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\r
    var renderAfterCalled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\r
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); _a[0]; var setVal = _a[1];\r
    if (effectCalled.current) {\r
        renderAfterCalled.current = true;\r
    }\r
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\r
        // only execute the effect first time around\r
        if (!effectCalled.current) {\r
            destroyFunc.current = effect();\r
            effectCalled.current = true;\r
        }\r
        // this forces one render after the effect is run\r
        setVal(function (val) { return val + 1; });\r
        return function () {\r
            // if the comp didn't render since the useEffect was called,\r
            // we know it's the dummy React cycle\r
            if (!renderAfterCalled.current) {\r
                return;\r
            }\r
            if (destroyFunc.current) {\r
                destroyFunc.current();\r
            }\r
        };\r
    }, []);\r
};\r
var ParentContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);\r
var DOMRectContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);\r
var LayerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);\r
var OptionsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\r
var currentStore = createStore();\r
var commonProps = {\r
    id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,\r
    className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,\r
    style: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.object, prop_types__WEBPACK_IMPORTED_MODULE_2__.array]),\r
    as: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,\r
    centerContent: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([CenterType.None, CenterType.Vertical, CenterType.HorizontalVertical]),\r
    zIndex: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    scrollable: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,\r
    trackSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,\r
    allowOverflow: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,\r
    handleRender: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onTouchMove: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
};\r
function useForceUpdate() {\r
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), setTick = _a[1];\r
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {\r
        setTick(function (tick) { return tick + 1; });\r
    }, []);\r
}\r
function useUniqueId() {\r
    if (SSR_SUPPORT_ENABLED) {\r
        if (react__WEBPACK_IMPORTED_MODULE_0__.version.startsWith("18")) {\r
            return "s" + react__WEBPACK_IMPORTED_MODULE_0__.useId().replace(/\\:/g, "");\r
        }\r
        if (react__WEBPACK_IMPORTED_MODULE_0__.unstable_useOpaqueIdentifier) {\r
            return "s" + react__WEBPACK_IMPORTED_MODULE_0__.unstable_useOpaqueIdentifier().replace(/\\:/g, "");\r
        }\r
    }\r
    return "s" + shortuuid();\r
}\r
function useSpace(props) {\r
    var store = currentStore;\r
    var update = useForceUpdate();\r
    var parent = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ParentContext);\r
    var layer = react__WEBPACK_IMPORTED_MODULE_0__.useContext(LayerContext);\r
    var debug = react__WEBPACK_IMPORTED_MODULE_0__.useContext(OptionsContext).debug;\r
    var uniqueId = useUniqueId();\r
    var spaceId = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.id || uniqueId)[0];\r
    var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\r
    var resizeSensor = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\r
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(), domRect = _a[0], setDomRect = _a[1];\r
    var space = store.getSpace(spaceId);\r
    if (debug) {\r
        console.table(store.getSpaces());\r
    }\r
    var parsedProps = __assign(__assign({}, props), {\r
        id: spaceId,\r
        zIndex: coalesce(props.zIndex, layer),\r
    });\r
    if (!space) {\r
        space = store.createSpace(parent, parsedProps, update);\r
        store.addSpace(space);\r
    }\r
    else {\r
        store.updateSpace(space, parsedProps);\r
    }\r
    var resizeHandles = useSpaceResizeHandles(store, space);\r
    useEffectOnce(function () {\r
        var rect = elementRef.current ? elementRef.current.getBoundingClientRect() : new DOMRect();\r
        space.dimension = __assign(__assign({}, rect), {\r
            left: Math.floor(rect.left),\r
            top: Math.floor(rect.top),\r
            right: Math.floor(rect.right),\r
            bottom: Math.floor(rect.bottom),\r
            width: Math.floor(rect.width),\r
            height: Math.floor(rect.height),\r
            x: Math.floor(rect.x),\r
            y: Math.floor(rect.y),\r
        });\r
        setDomRect(space.dimension);\r
        if (props.trackSize) {\r
            resizeSensor.current = new css_element_queries__WEBPACK_IMPORTED_MODULE_1__.ResizeSensor(elementRef.current, function (size) {\r
                space.dimension = __assign(__assign({}, rect), {\r
                    width: Math.floor(size.width),\r
                    height: Math.floor(size.height),\r
                });\r
                setDomRect(space.dimension);\r
            });\r
        }\r
        return function () {\r
            resizeSensor.current && resizeSensor.current.detach();\r
            store.removeSpace(space);\r
        };\r
    });\r
    return { space: space, resizeHandles: resizeHandles, domRect: domRect, elementRef: elementRef };\r
}\r
var resizeSetup = [\r
    { id: "ml", className: "resize-left", resizeType: ResizeType.Left, condition: function (space) { return space.canResizeLeft; } },\r
    { id: "mr", className: "resize-right", resizeType: ResizeType.Right, condition: function (space) { return space.canResizeRight; } },\r
    { id: "mt", className: "resize-top", resizeType: ResizeType.Top, condition: function (space) { return space.canResizeTop; } },\r
    { id: "mb", className: "resize-bottom", resizeType: ResizeType.Bottom, condition: function (space) { return space.canResizeBottom; } },\r
    { id: "mtl", className: "resize-top-left", resizeType: ResizeType.TopLeft, condition: function (space) { return space.canResizeTopLeft; } },\r
    { id: "mtr", className: "resize-top-right", resizeType: ResizeType.TopRight, condition: function (space) { return space.canResizeTopRight; } },\r
    {\r
        id: "mbl",\r
        className: "resize-bottom-left",\r
        resizeType: ResizeType.BottomLeft,\r
        condition: function (space) { return space.canResizeBottomLeft; },\r
    },\r
    {\r
        id: "mbr",\r
        className: "resize-bottom-right",\r
        resizeType: ResizeType.BottomRight,\r
        condition: function (space) { return space.canResizeBottomRight; },\r
    },\r
];\r
function useSpaceResizeHandles(store, space) {\r
    var mouseHandles = [];\r
    var setupResizeHandle = function (id, className, resizeType) {\r
        mouseHandles.push({\r
            id: space.id + "-" + id,\r
            key: id,\r
            className: "spaces-resize-handle " + className,\r
            onMouseDown: function (event) { return store.startMouseResize(resizeType, space, event); },\r
            onTouchStart: function (event) { return store.startTouchResize(resizeType, space, event); },\r
        });\r
    };\r
    resizeSetup.forEach(function (resizeItem) {\r
        if (resizeItem.condition(space)) {\r
            setupResizeHandle(resizeItem.id, resizeItem.className, resizeItem.resizeType);\r
        }\r
    });\r
    return {\r
        mouseHandles: mouseHandles,\r
    };\r
}\r
function useCurrentSpace() {\r
    var store = currentStore;\r
    var spaceId = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ParentContext);\r
    var space = spaceId ? store.getSpace(spaceId) : undefined;\r
    var domRect = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DOMRectContext);\r
    var layer = react__WEBPACK_IMPORTED_MODULE_0__.useContext(LayerContext);\r
    var onMouseDrag = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e, onDragEnd) { return (space ? store.startMouseDrag(space, e, onDragEnd) : null); }, [spaceId]);\r
    var onTouchDrag = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (e, onDragEnd) { return (space ? store.startTouchDrag(space, e, onDragEnd) : null); }, [spaceId]);\r
    var onForceUpdate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () { return (space ? store.updateStyles(space) : null); }, [spaceId]);\r
    var defaults = { width: 0, height: 0, x: 0, y: 0 };\r
    var size = __assign(__assign({}, defaults), domRect);\r
    return {\r
        size: size,\r
        layer: layer || 0,\r
        startMouseDrag: onMouseDrag,\r
        startTouchDrag: onTouchDrag,\r
        forceUpdate: onForceUpdate,\r
    };\r
}\r
var SSR_SUPPORT_ENABLED = false;\r
function enabledSsrSupport() {\r
    SSR_SUPPORT_ENABLED = true;\r
}

var Centered = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spaces-centered" }, props.children); };

var CenteredVertically = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spaces-centered-vertically" }, props.children); };

function applyCentering(children, centerType) {\r
    switch (centerType) {\r
        case CenterType.Vertical:\r
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CenteredVertically, null, children);\r
        case CenterType.HorizontalVertical:\r
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Centered, null, children);\r
    }\r
    return children;\r
}\r
var Space = /** @class */ (function (_super) {\r
    __extends(Space, _super);\r
    function Space() {\r
        return _super !== null && _super.apply(this, arguments) || this;\r
    }\r
    Space.prototype.render = function () {\r
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpaceInner, __assign({}, this.props, { wrapperInstance: this }));\r
    };\r
    return Space;\r
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));\r
var SpaceInner = function (props) {\r
    var _a;\r
    var idToUse = (_a = props.id) !== null && _a !== void 0 ? _a : props.wrapperInstance["_react_spaces_uniqueid"];\r
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(SSR_SUPPORT_ENABLED ? true : false), initialRender = _b[0], setInitialRender = _b[1];\r
    var uniqueId = useUniqueId();\r
    if (!idToUse) {\r
        props.wrapperInstance["_react_spaces_uniqueid"] = uniqueId;\r
        idToUse = props.wrapperInstance["_react_spaces_uniqueid"];\r
    }\r
    var style = props.style, className = props.className, onClick = props.onClick, onDoubleClick = props.onDoubleClick, onMouseDown = props.onMouseDown, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseMove = props.onMouseMove, onTouchStart = props.onTouchStart, onTouchMove = props.onTouchMove, onTouchEnd = props.onTouchEnd, children = props.children, handleRender = props.handleRender;\r
    var events = {\r
        onClick: onClick,\r
        onDoubleClick: onDoubleClick,\r
        onMouseDown: onMouseDown,\r
        onMouseEnter: onMouseEnter,\r
        onMouseLeave: onMouseLeave,\r
        onMouseMove: onMouseMove,\r
        onTouchStart: onTouchStart,\r
        onTouchMove: onTouchMove,\r
        onTouchEnd: onTouchEnd,\r
    };\r
    var _c = useSpace(__assign(__assign({}, props), { id: idToUse })), space = _c.space, domRect = _c.domRect, elementRef = _c.elementRef, resizeHandles = _c.resizeHandles;\r
    if (SSR_SUPPORT_ENABLED && !isServer()) {\r
        var preRenderedStyle = document.getElementById("style_" + idToUse + "_ssr");\r
        if (preRenderedStyle) {\r
            space.ssrStyle = preRenderedStyle.innerHTML;\r
        }\r
        updateStyleDefinition(space);\r
    }\r
    useEffectOnce(function () {\r
        space.element = elementRef.current;\r
        if (SSR_SUPPORT_ENABLED) {\r
            if (initialRender) {\r
                setInitialRender(false);\r
            }\r
        }\r
    });\r
    var userClasses = className ? className.split(" ").map(function (c) { return c.trim(); }) : [];\r
    var outerClasses = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], ["spaces-space", space.children.find(function (s) { return s.resizing; }) ? "spaces-resizing" : undefined], false), [space.type === Type.Fixed ? "spaces-fixedsize-layout" : undefined], false), [space.type === Type.ViewPort ? "spaces-fullpage-layout" : undefined], false), userClasses.map(function (c) { return c + "-container"; }), true).filter(function (c) { return c; });\r
    var innerClasses = __spreadArray(__spreadArray([], ["spaces-space-inner"], false), userClasses, true);\r
    var innerStyle = style;\r
    if (space.handlePlacement === ResizeHandlePlacement.Inside) {\r
        innerStyle = __assign(__assign({}, style), {\r
            left: space.anchor === AnchorType.Right ? space.handleSize : undefined,\r
            right: space.anchor === AnchorType.Left ? space.handleSize : undefined,\r
            top: space.anchor === AnchorType.Bottom ? space.handleSize : undefined,\r
            bottom: space.anchor === AnchorType.Top ? space.handleSize : undefined,\r
        });\r
    }\r
    var centeredContent = applyCentering(children, props.centerContent);\r
    var outerProps = __assign({\r
        id: space.id,\r
        ref: elementRef,\r
        className: outerClasses.join(" "),\r
    }, events);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\r
        resizeHandles.mouseHandles.map(function (handleProps) { return (handleRender === null || handleRender === void 0 ? void 0 : handleRender(handleProps)) || react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({}, handleProps)); }),\r
        SSR_SUPPORT_ENABLED && space.ssrStyle && initialRender && react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", { id: "style_" + space.id + "_ssr" }, space.ssrStyle),\r
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.as || "div", outerProps, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: innerClasses.join(" "), style: innerStyle },\r
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ParentContext.Provider, { value: space.id },\r
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(LayerContext.Provider, { value: undefined },\r
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(DOMRectContext.Provider, { value: domRect }, centeredContent)))))));\r
};

var resizableProps = __assign(__assign({}, commonProps), {\r
    size: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]).isRequired,\r
    order: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    handleSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    touchHandleSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    handlePlacement: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([ResizeHandlePlacement.Inside, ResizeHandlePlacement.OverlayBoundary, ResizeHandlePlacement.OverlayInside]),\r
    handleRender: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    minimumSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    maximumSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,\r
    onResizeStart: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
    onResizeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,\r
});\r
var anchoredProps = __assign(__assign({}, resizableProps), {\r
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,\r
});\r
var LeftResizable = function (_a) {\r
    var children = _a.children, size = _a.size, props = __rest(_a, ["children", "size"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Anchored, anchor: AnchorType.Left, position: { left: 0, top: 0, bottom: 0, rightResizable: true, width: size } }), children));\r
};\r
LeftResizable.propTypes = resizableProps;\r
var Left = function (_a) {\r
    var size = _a.size, children = _a.children, resizable = _a.resizable, commonProps = __rest(_a, ["size", "children", "resizable"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.Anchored, anchor: AnchorType.Left, position: { left: 0, top: 0, bottom: 0, rightResizable: resizable, width: size } }), children));\r
};\r
Left.propTypes = anchoredProps;\r
var TopResizable = function (_a) {\r
    var children = _a.children, size = _a.size, props = __rest(_a, ["children", "size"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Anchored, anchor: AnchorType.Top, position: { left: 0, top: 0, right: 0, bottomResizable: true, height: size } }), children));\r
};\r
TopResizable.propTypes = resizableProps;\r
var Top = function (_a) {\r
    var size = _a.size, children = _a.children, resizable = _a.resizable, commonProps = __rest(_a, ["size", "children", "resizable"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.Anchored, anchor: AnchorType.Top, position: { left: 0, top: 0, right: 0, bottomResizable: resizable, height: size } }), children));\r
};\r
Top.propTypes = anchoredProps;\r
var RightResizable = function (_a) {\r
    var children = _a.children, size = _a.size, props = __rest(_a, ["children", "size"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Anchored, anchor: AnchorType.Right, position: { bottom: 0, top: 0, right: 0, leftResizable: true, width: size } }), children));\r
};\r
RightResizable.propTypes = resizableProps;\r
var Right = function (_a) {\r
    var size = _a.size, children = _a.children, resizable = _a.resizable, commonProps = __rest(_a, ["size", "children", "resizable"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.Anchored, anchor: AnchorType.Right, position: { bottom: 0, top: 0, right: 0, leftResizable: resizable, width: size } }), children));\r
};\r
Right.propTypes = anchoredProps;\r
var BottomResizable = function (_a) {\r
    var children = _a.children, size = _a.size, props = __rest(_a, ["children", "size"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Anchored, anchor: AnchorType.Bottom, position: { bottom: 0, left: 0, right: 0, topResizable: true, height: size } }), children));\r
};\r
BottomResizable.propTypes = resizableProps;\r
var Bottom = function (_a) {\r
    var size = _a.size, children = _a.children, resizable = _a.resizable, commonProps = __rest(_a, ["size", "children", "resizable"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.Anchored, anchor: AnchorType.Bottom, position: { bottom: 0, left: 0, right: 0, topResizable: resizable, height: size } }), children));\r
};\r
Bottom.propTypes = anchoredProps;

var customProps = omit(__assign(__assign({}, anchoredProps), {\r
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([Type.Positioned, Type.Fill, Type.Anchored]),\r
    anchor: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([AnchorType.Left, AnchorType.Top, AnchorType.Right, AnchorType.Bottom]),\r
    anchorSize: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    left: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    top: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    right: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    width: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    height: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    resizeTypes: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,\r
}), "size");\r
var Custom = function (_a) {\r
    var children = _a.children, type = _a.type, left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom, width = _a.width, height = _a.height, anchorSize = _a.anchorSize, anchor = _a.anchor, resizable = _a.resizable, resizeTypes = _a.resizeTypes, props = __rest(_a, ["children", "type", "left", "top", "right", "bottom", "width", "height", "anchorSize", "anchor", "resizable", "resizeTypes"]);\r
    var position;\r
    type = type || Type.Fill;\r
    if (type === Type.Positioned) {\r
        position = {\r
            left: left,\r
            top: top,\r
            right: right,\r
            bottom: bottom,\r
            width: width,\r
            height: height,\r
            leftResizable: resizeTypes && (resizeTypes.includes(ResizeType.Left) || resizeTypes.includes(ResizeType.All)),\r
            topResizable: resizeTypes && (resizeTypes.includes(ResizeType.Top) || resizeTypes.includes(ResizeType.All)),\r
            rightResizable: resizeTypes && (resizeTypes.includes(ResizeType.Right) || resizeTypes.includes(ResizeType.All)),\r
            bottomResizable: resizeTypes && (resizeTypes.includes(ResizeType.Bottom) || resizeTypes.includes(ResizeType.All)),\r
            topLeftResizable: resizeTypes && (resizeTypes.includes(ResizeType.TopLeft) || resizeTypes.includes(ResizeType.All)),\r
            topRightResizable: resizeTypes && (resizeTypes.includes(ResizeType.TopRight) || resizeTypes.includes(ResizeType.All)),\r
            bottomLeftResizable: resizeTypes && (resizeTypes.includes(ResizeType.BottomLeft) || resizeTypes.includes(ResizeType.All)),\r
            bottomRightResizable: resizeTypes && (resizeTypes.includes(ResizeType.BottomRight) || resizeTypes.includes(ResizeType.All)),\r
        };\r
    }\r
    else {\r
        if (anchor === AnchorType.Left) {\r
            position = { left: 0, top: 0, bottom: 0, width: anchorSize, rightResizable: resizable };\r
            type = Type.Anchored;\r
        }\r
        else if (anchor === AnchorType.Right) {\r
            position = { right: 0, top: 0, bottom: 0, width: anchorSize, leftResizable: resizable };\r
            type = Type.Anchored;\r
        }\r
        else if (anchor === AnchorType.Top) {\r
            position = { left: 0, top: 0, right: 0, height: anchorSize, bottomResizable: resizable };\r
            type = Type.Anchored;\r
        }\r
        else if (anchor === AnchorType.Bottom) {\r
            position = { left: 0, bottom: 0, right: 0, height: anchorSize, topResizable: resizable };\r
            type = Type.Anchored;\r
        }\r
        else {\r
            position = {\r
                left: 0,\r
                top: 0,\r
                bottom: 0,\r
                right: 0,\r
            };\r
            type = Type.Fill;\r
        }\r
    }\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: type, anchor: anchor, position: position }), children));\r
};\r
Custom.propTypes = customProps;

var Fill = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Fill, position: { left: 0, top: 0, right: 0, bottom: 0 } }), props.children)); };\r
Fill.propTypes = commonProps;

var Fixed = function (_a) {\r
    var width = _a.width, height = _a.height, children = _a.children, commonProps = __rest(_a, ["width", "height", "children"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.Fixed, position: { width: width, height: height } }), children));\r
};\r
Fixed.propTypes = __assign(__assign({}, commonProps), {\r
    width: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    height: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]).isRequired,\r
});

var Layer = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LayerContext.Provider, { value: props.zIndex }, props.children); };\r
Layer.propTypes = {\r
    zIndex: prop_types__WEBPACK_IMPORTED_MODULE_2__.number.isRequired,\r
};

var Positioned = function (_a) {\r
    var left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom, width = _a.width, height = _a.height, resizable = _a.resizable, props = __rest(_a, ["left", "top", "right", "bottom", "width", "height", "resizable"]);\r
    var resizeTypes = resizable || [];\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, props, { type: Type.Positioned, position: {\r
            left: left,\r
            top: top,\r
            right: right,\r
            bottom: bottom,\r
            leftResizable: resizeTypes.includes(ResizeType.Left) || resizeTypes.includes(ResizeType.All),\r
            topResizable: resizeTypes.includes(ResizeType.Top) || resizeTypes.includes(ResizeType.All),\r
            rightResizable: resizeTypes.includes(ResizeType.Right) || resizeTypes.includes(ResizeType.All),\r
            bottomResizable: resizeTypes.includes(ResizeType.Bottom) || resizeTypes.includes(ResizeType.All),\r
            topLeftResizable: resizeTypes.includes(ResizeType.TopLeft) || resizeTypes.includes(ResizeType.All),\r
            topRightResizable: resizeTypes.includes(ResizeType.TopRight) || resizeTypes.includes(ResizeType.All),\r
            bottomLeftResizable: resizeTypes.includes(ResizeType.BottomLeft) || resizeTypes.includes(ResizeType.All),\r
            bottomRightResizable: resizeTypes.includes(ResizeType.BottomRight) || resizeTypes.includes(ResizeType.All),\r
            width: width,\r
            height: height,\r
        } }), props.children));\r
};\r
Positioned.propTypes = __assign(__assign({}, commonProps), {\r
    left: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    top: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    right: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    width: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    height: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,\r
});

/**\r
 * @deprecated use useCurrentSpace() hook instead\r
 */\r
var Info = function (props) {\r
    var domRect = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DOMRectContext);\r
    if (domRect) {\r
        return props.children(domRect);\r
    }\r
    return props.children({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0, toJSON: function () { return ""; } });\r
};

var ViewPort = function (_a) {\r
    var left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom, children = _a.children, commonProps = __rest(_a, ["left", "top", "right", "bottom", "children"]);\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, __assign({}, commonProps, { type: Type.ViewPort, position: { left: left || 0, top: top || 0, right: right || 0, bottom: bottom || 0 } }), children));\r
};\r
ViewPort.propTypes = __assign(__assign({}, commonProps), {\r
    left: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    top: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    right: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.number]),\r
});

var SSR = function (_a) {\r
    var children = _a.children;\r
    enabledSsrSupport();\r
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\r
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", { dangerouslySetInnerHTML: { __html: css_248z } }),\r
        children));\r
};

var Options = function (_a) {\r
    var children = _a.children, opts = __rest(_a, ["children"]);\r
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(OptionsContext.Provider, { value: opts }, children);\r
};


//# sourceMappingURL=index.js.map
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLGVBQWUsbUJBQW1CO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFD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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsVUFBVSxJQUFJO0FBQ2pELHdDQUF3QyxjQUFjO0FBQ3RELHdDQUF3QyxjQUFjO0FBQ3RELHNDQUFzQyxjQUFjO0FBQ3BELHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dC11aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGFjZXMvZGlzdC9lcy9pbmRleC5qcz9jNzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlc2l6ZVNlbnNvciB9IGZyb20gJ2Nzcy1lbGVtZW50LXF1ZXJpZXMnO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBjc3NfMjQ4eiA9IFwiLnNwYWNlcy1jZW50ZXJlZCwuc3BhY2VzLWNlbnRlcmVkLXZlcnRpY2FsbHl7cG9zaXRpb246cmVsYXRpdmU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0uc3BhY2VzLWNlbnRlcmVke3RleHQtYWxpZ246Y2VudGVyfS5zcGFjZXMtY2xlYXJmaXg6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9LnNwYWNlcy1yZXNpemUtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5OTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5zcGFjZXMtcmVzaXplLWhhbmRsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDt6LWluZGV4OjJ9LnNwYWNlcy1yZXNpemUtaGFuZGxlOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxfS5zcGFjZXMtdG91Y2gtaGFuZGxle3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5ODtwb2ludGVyLWV2ZW50czphbGw7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uc3BhY2VzLXJlc2l6ZS1oYW5kbGUucmVzaXplLWxlZnQ6YmVmb3Jle2N1cnNvcjp3LXJlc2l6ZX0uc3BhY2VzLXJlc2l6ZS1oYW5kbGUucmVzaXplLXRvcC1sZWZ0OmJlZm9yZXtjdXJzb3I6bnctcmVzaXplfS5zcGFjZXMtcmVzaXplLWhhbmRsZS5yZXNpemUtcmlnaHQ6YmVmb3Jle2N1cnNvcjplLXJlc2l6ZX0uc3BhY2VzLXJlc2l6ZS1oYW5kbGUucmVzaXplLXRvcC1yaWdodDpiZWZvcmV7Y3Vyc29yOm5lLXJlc2l6ZX0uc3BhY2VzLXJlc2l6ZS1oYW5kbGUucmVzaXplLXRvcDpiZWZvcmV7Y3Vyc29yOm4tcmVzaXplfS5zcGFjZXMtcmVzaXplLWhhbmRsZS5yZXNpemUtYm90dG9tOmJlZm9yZXtjdXJzb3I6cy1yZXNpemV9LnNwYWNlcy1yZXNpemUtaGFuZGxlLnJlc2l6ZS1ib3R0b20tbGVmdDpiZWZvcmV7Y3Vyc29yOnN3LXJlc2l6ZX0uc3BhY2VzLXJlc2l6ZS1oYW5kbGUucmVzaXplLWJvdHRvbS1yaWdodDpiZWZvcmV7Y3Vyc29yOnNlLXJlc2l6ZX0uc3BhY2VzLXNwYWNle292ZXJmbG93OmhpZGRlbjt0b3VjaC1hY3Rpb246bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNwYWNlcy1yZXNpemluZyAuc3BhY2VzLXNwYWNle3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9LnNwYWNlcy1zcGFjZSAuc3BhY2VzLXNwYWNlLWlubmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3BhY2VzLXNwYWNlLnNjcm9sbGFibGUgLnNwYWNlcy1zcGFjZS1pbm5lcntvdmVyZmxvdzphdXRvO3RvdWNoLWFjdGlvbjphdXRvfVwiO1xuc3R5bGVJbmplY3QoY3NzXzI0OHopO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxuXG52YXIgVHlwZTtcclxuKGZ1bmN0aW9uIChUeXBlKSB7XHJcbiAgICBUeXBlW1wiVmlld1BvcnRcIl0gPSBcInZpZXdwb3J0XCI7XHJcbiAgICBUeXBlW1wiRml4ZWRcIl0gPSBcImZpeGVkXCI7XHJcbiAgICBUeXBlW1wiRmlsbFwiXSA9IFwiZmlsbFwiO1xyXG4gICAgVHlwZVtcIlBvc2l0aW9uZWRcIl0gPSBcInBvc2l0aW9uZWRcIjtcclxuICAgIFR5cGVbXCJBbmNob3JlZFwiXSA9IFwiYW5jaG9yZWRcIjtcclxuICAgIFR5cGVbXCJDdXN0b21cIl0gPSBcImN1c3RvbVwiO1xyXG59KShUeXBlIHx8IChUeXBlID0ge30pKTtcclxudmFyIEFuY2hvclR5cGU7XHJcbihmdW5jdGlvbiAoQW5jaG9yVHlwZSkge1xyXG4gICAgQW5jaG9yVHlwZVtcIkxlZnRcIl0gPSBcImFuY2hvci1sZWZ0XCI7XHJcbiAgICBBbmNob3JUeXBlW1wiUmlnaHRcIl0gPSBcImFuY2hvci1yaWdodFwiO1xyXG4gICAgQW5jaG9yVHlwZVtcIlRvcFwiXSA9IFwiYW5jaG9yLXRvcFwiO1xyXG4gICAgQW5jaG9yVHlwZVtcIkJvdHRvbVwiXSA9IFwiYW5jaG9yLWJvdHRvbVwiO1xyXG59KShBbmNob3JUeXBlIHx8IChBbmNob3JUeXBlID0ge30pKTtcclxudmFyIE9yaWVudGF0aW9uO1xyXG4oZnVuY3Rpb24gKE9yaWVudGF0aW9uKSB7XHJcbiAgICBPcmllbnRhdGlvbltPcmllbnRhdGlvbltcIkhvcml6b250YWxcIl0gPSAwXSA9IFwiSG9yaXpvbnRhbFwiO1xyXG4gICAgT3JpZW50YXRpb25bT3JpZW50YXRpb25bXCJWZXJ0aWNhbFwiXSA9IDFdID0gXCJWZXJ0aWNhbFwiO1xyXG59KShPcmllbnRhdGlvbiB8fCAoT3JpZW50YXRpb24gPSB7fSkpO1xyXG52YXIgUmVzaXplVHlwZTtcclxuKGZ1bmN0aW9uIChSZXNpemVUeXBlKSB7XHJcbiAgICBSZXNpemVUeXBlW1wiQWxsXCJdID0gXCJyZXNpemUtYWxsXCI7XHJcbiAgICBSZXNpemVUeXBlW1wiTGVmdFwiXSA9IFwicmVzaXplLWxlZnRcIjtcclxuICAgIFJlc2l6ZVR5cGVbXCJSaWdodFwiXSA9IFwicmVzaXplLXJpZ2h0XCI7XHJcbiAgICBSZXNpemVUeXBlW1wiVG9wXCJdID0gXCJyZXNpemUtdG9wXCI7XHJcbiAgICBSZXNpemVUeXBlW1wiQm90dG9tXCJdID0gXCJyZXNpemUtYm90dG9tXCI7XHJcbiAgICBSZXNpemVUeXBlW1wiVG9wTGVmdFwiXSA9IFwicmVzaXplLXRvcGxlZnRcIjtcclxuICAgIFJlc2l6ZVR5cGVbXCJUb3BSaWdodFwiXSA9IFwicmVzaXplLXRvcHJpZ2h0XCI7XHJcbiAgICBSZXNpemVUeXBlW1wiQm90dG9tTGVmdFwiXSA9IFwicmVzaXplLWJvdHRvbWxlZnRcIjtcclxuICAgIFJlc2l6ZVR5cGVbXCJCb3R0b21SaWdodFwiXSA9IFwicmVzaXplLWJvdHRvbXJpZ2h0XCI7XHJcbn0pKFJlc2l6ZVR5cGUgfHwgKFJlc2l6ZVR5cGUgPSB7fSkpO1xyXG52YXIgUmVzaXplSGFuZGxlUGxhY2VtZW50O1xyXG4oZnVuY3Rpb24gKFJlc2l6ZUhhbmRsZVBsYWNlbWVudCkge1xyXG4gICAgUmVzaXplSGFuZGxlUGxhY2VtZW50W1wiT3ZlcmxheUluc2lkZVwiXSA9IFwib3ZlcmxheS1pbnNpZGVcIjtcclxuICAgIFJlc2l6ZUhhbmRsZVBsYWNlbWVudFtcIkluc2lkZVwiXSA9IFwiaW5zaWRlXCI7XHJcbiAgICBSZXNpemVIYW5kbGVQbGFjZW1lbnRbXCJPdmVybGF5Qm91bmRhcnlcIl0gPSBcIm92ZXJsYXktYm91bmRhcnlcIjtcclxufSkoUmVzaXplSGFuZGxlUGxhY2VtZW50IHx8IChSZXNpemVIYW5kbGVQbGFjZW1lbnQgPSB7fSkpO1xyXG52YXIgQ2VudGVyVHlwZTtcclxuKGZ1bmN0aW9uIChDZW50ZXJUeXBlKSB7XHJcbiAgICBDZW50ZXJUeXBlW1wiTm9uZVwiXSA9IFwibm9uZVwiO1xyXG4gICAgQ2VudGVyVHlwZVtcIlZlcnRpY2FsXCJdID0gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgQ2VudGVyVHlwZVtcIkhvcml6b250YWxWZXJ0aWNhbFwiXSA9IFwiaG9yaXpvbnRhbFZlcnRpY2FsXCI7XHJcbn0pKENlbnRlclR5cGUgfHwgKENlbnRlclR5cGUgPSB7fSkpO1xyXG52YXIgTW92ZUV2ZW50O1xyXG4oZnVuY3Rpb24gKE1vdmVFdmVudCkge1xyXG4gICAgTW92ZUV2ZW50W1wiTW91c2VcIl0gPSBcIm1vdXNlbW92ZVwiO1xyXG4gICAgTW92ZUV2ZW50W1wiVG91Y2hcIl0gPSBcInRvdWNobW92ZVwiO1xyXG59KShNb3ZlRXZlbnQgfHwgKE1vdmVFdmVudCA9IHt9KSk7XHJcbnZhciBFbmRFdmVudDtcclxuKGZ1bmN0aW9uIChFbmRFdmVudCkge1xyXG4gICAgRW5kRXZlbnRbXCJNb3VzZVwiXSA9IFwibW91c2V1cFwiO1xyXG4gICAgRW5kRXZlbnRbXCJUb3VjaFwiXSA9IFwidG91Y2hlbmRcIjtcclxufSkoRW5kRXZlbnQgfHwgKEVuZEV2ZW50ID0ge30pKTtcblxuZnVuY3Rpb24gb21pdChvYmplY3QpIHtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGtleXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKCFrZXlTZXRba2V5XSkge1xyXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IG9iamVjdFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBzaG9ydHV1aWQoKSB7XHJcbiAgICB2YXIgZmlyc3RQYXJ0ID0gKE1hdGgucmFuZG9tKCkgKiA0NjY1NikgfCAwO1xyXG4gICAgdmFyIHNlY29uZFBhcnQgPSAoTWF0aC5yYW5kb20oKSAqIDQ2NjU2KSB8IDA7XHJcbiAgICByZXR1cm4gKFwiMDAwXCIgKyBmaXJzdFBhcnQudG9TdHJpbmcoMzYpKS5zbGljZSgtMykgKyAoXCIwMDBcIiArIHNlY29uZFBhcnQudG9TdHJpbmcoMzYpKS5zbGljZSgtMyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2l6ZVN0cmluZyhzaXplKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHNpemUgPT09IFwic3RyaW5nXCIgPyBzaXplIDogc2l6ZSArIFwicHhcIjtcclxufVxyXG5mdW5jdGlvbiBjc3Moc2l6ZSwgZG9udEFkZENhbGMpIHtcclxuICAgIGlmIChzaXplLnNpemUgPT09IDAgJiYgc2l6ZS5hZGp1c3RlZC5sZW5ndGggPT09IDAgJiYgc2l6ZS5yZXNpemVkID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiMHB4XCI7XHJcbiAgICB9XHJcbiAgICB2YXIgcGFydHMgPSBbXTtcclxuICAgIGlmIChzaXplLnNpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhcnRzLnB1c2goZ2V0U2l6ZVN0cmluZyhzaXplLnNpemUpKTtcclxuICAgIH1cclxuICAgIHNpemUuYWRqdXN0ZWQuZm9yRWFjaChmdW5jdGlvbiAobCkgeyByZXR1cm4gcGFydHMucHVzaChnZXRTaXplU3RyaW5nKGwpKTsgfSk7XHJcbiAgICBpZiAoc2l6ZS5yZXNpemVkICE9PSAwKSB7XHJcbiAgICAgICAgcGFydHMucHVzaChnZXRTaXplU3RyaW5nKHNpemUucmVzaXplZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvbnRBZGRDYWxjKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCIgKyBcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJjYWxjKFwiICsgcGFydHMuam9pbihcIiArIFwiKSArIFwiKVwiO1xyXG59XHJcbmZ1bmN0aW9uIGNvYWxlc2NlKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyZ3MuZmluZChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkanVzdG1lbnRzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XHJcbiAgICBpZiAoaXRlbTEubGVuZ3RoICE9PSBpdGVtMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbTEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoaXRlbTFbaV0gIT09IGl0ZW0yW2ldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgbGltaXQpIHtcclxuICAgIHZhciB3YWl0ID0gZmFsc2U7IC8vIEluaXRpYWxseSwgd2UncmUgbm90IHdhaXRpbmdcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlIHJldHVybiBhIHRocm90dGxlZCBmdW5jdGlvblxyXG4gICAgICAgIGlmICghd2FpdCkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3Qgd2FpdGluZ1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpOyAvLyBFeGVjdXRlIHVzZXJzIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHdhaXQgPSB0cnVlOyAvLyBQcmV2ZW50IGZ1dHVyZSBpbnZvY2F0aW9uc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFmdGVyIGEgcGVyaW9kIG9mIHRpbWVcclxuICAgICAgICAgICAgICAgIHdhaXQgPSBmYWxzZTsgLy8gQW5kIGFsbG93IGZ1dHVyZSBpbnZvY2F0aW9uc1xyXG4gICAgICAgICAgICB9LCBsaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZURlZmluaXRpb24oc3BhY2UpIHtcclxuICAgIHZhciBjc3NFbGVtZW50cyA9IFtdO1xyXG4gICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzcGFjZS5wb3NpdGlvbixcclxuICAgICAgICBsZWZ0OiBjc3Moc3BhY2UubGVmdCksXHJcbiAgICAgICAgdG9wOiBjc3Moc3BhY2UudG9wKSxcclxuICAgICAgICByaWdodDogY3NzKHNwYWNlLnJpZ2h0KSxcclxuICAgICAgICBib3R0b206IGNzcyhzcGFjZS5ib3R0b20pLFxyXG4gICAgICAgIHdpZHRoOiBjc3Moc3BhY2Uud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogY3NzKHNwYWNlLmhlaWdodCksXHJcbiAgICAgICAgekluZGV4OiBzcGFjZS56SW5kZXgsXHJcbiAgICB9O1xyXG4gICAgdmFyIGNzc1N0cmluZyA9IFtdO1xyXG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgY3NzU3RyaW5nLnB1c2goXCJwb3NpdGlvbjogXCIgKyBzdHlsZS5wb3NpdGlvbiArIFwiO1wiKTtcclxuICAgIH1cclxuICAgIGlmIChzdHlsZS5sZWZ0KSB7XHJcbiAgICAgICAgY3NzU3RyaW5nLnB1c2goXCJsZWZ0OiBcIiArIHN0eWxlLmxlZnQgKyBcIjtcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGUudG9wKSB7XHJcbiAgICAgICAgY3NzU3RyaW5nLnB1c2goXCJ0b3A6IFwiICsgc3R5bGUudG9wICsgXCI7XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0eWxlLnJpZ2h0KSB7XHJcbiAgICAgICAgY3NzU3RyaW5nLnB1c2goXCJyaWdodDogXCIgKyBzdHlsZS5yaWdodCArIFwiO1wiKTtcclxuICAgIH1cclxuICAgIGlmIChzdHlsZS5ib3R0b20pIHtcclxuICAgICAgICBjc3NTdHJpbmcucHVzaChcImJvdHRvbTogXCIgKyBzdHlsZS5ib3R0b20gKyBcIjtcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGUud2lkdGgpIHtcclxuICAgICAgICBjc3NTdHJpbmcucHVzaChcIndpZHRoOiBcIiArIHN0eWxlLndpZHRoICsgXCI7XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0eWxlLmhlaWdodCkge1xyXG4gICAgICAgIGNzc1N0cmluZy5wdXNoKFwiaGVpZ2h0OiBcIiArIHN0eWxlLmhlaWdodCArIFwiO1wiKTtcclxuICAgIH1cclxuICAgIGlmIChzdHlsZS56SW5kZXgpIHtcclxuICAgICAgICBjc3NTdHJpbmcucHVzaChcInotaW5kZXg6IFwiICsgc3R5bGUuekluZGV4ICsgXCI7XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYWNlLmFsbG93T3ZlcmZsb3cpIHtcclxuICAgICAgICBjc3NTdHJpbmcucHVzaChcIm92ZXJmbG93OiB2aXNpYmxlO1wiKTtcclxuICAgIH1cclxuICAgIGlmIChjc3NTdHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNzc0VsZW1lbnRzLnB1c2goXCIjXCIgKyBzcGFjZS5pZCArIFwiIHsgXCIgKyBjc3NTdHJpbmcuam9pbihcIiBcIikgKyBcIiB9XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYWNlLnNjcm9sbGFibGUpIHtcclxuICAgICAgICBjc3NFbGVtZW50cy5wdXNoKFwiI1wiICsgc3BhY2UuaWQgKyBcIiA+IC5zcGFjZXMtc3BhY2UtaW5uZXIgeyBvdmVyZmxvdzogYXV0bzsgdG91Y2gtYWN0aW9uOiBhdXRvOyB9XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5oYW5kbGVPZmZzZXQgPSAwO1xyXG4gICAgdmFyIGhhbmRsZVNpemUgPSBzcGFjZS5oYW5kbGVTaXplICsgXCJweFwiO1xyXG4gICAgdmFyIHRvdWNoSGFuZGxlU2l6ZSA9IFwiLVwiICsgKHNwYWNlLnRvdWNoSGFuZGxlU2l6ZSAvIDIgLSBzcGFjZS5oYW5kbGVTaXplIC8gMikgKyBcInB4XCI7XHJcbiAgICB2YXIgbmVnYXRpdmVUb3VjaEhhbmRsZVNpemUgPSBzcGFjZS50b3VjaEhhbmRsZVNpemUgLyAyIC0gc3BhY2UuaGFuZGxlU2l6ZSAvIDIgKyBcInB4XCI7XHJcbiAgICBzd2l0Y2ggKHNwYWNlLmhhbmRsZVBsYWNlbWVudCkge1xyXG4gICAgICAgIGNhc2UgUmVzaXplSGFuZGxlUGxhY2VtZW50Lkluc2lkZTpcclxuICAgICAgICBjYXNlIFJlc2l6ZUhhbmRsZVBsYWNlbWVudC5PdmVybGF5SW5zaWRlOlxyXG4gICAgICAgICAgICBuaGFuZGxlT2Zmc2V0ID0gc3BhY2UuaGFuZGxlU2l6ZTtcclxuICAgICAgICAgICAgaWYgKHNwYWNlLnR5cGUgPT09IFR5cGUuUG9zaXRpb25lZCkge1xyXG4gICAgICAgICAgICAgICAgbmhhbmRsZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNpemVIYW5kbGVQbGFjZW1lbnQuT3ZlcmxheUJvdW5kYXJ5OlxyXG4gICAgICAgICAgICBuaGFuZGxlT2Zmc2V0ID0gc3BhY2UuaGFuZGxlU2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdmFyIGhhbmRsZU9mZnNldCA9IG5oYW5kbGVPZmZzZXQgKyBcInB4XCI7XHJcbiAgICB2YXIgYWRkSGFuZGxlQ3NzID0gZnVuY3Rpb24gKGlkLCBwb3MpIHtcclxuICAgICAgICB2YXIgc3R5bGVzID0gW107XHJcbiAgICAgICAgaWYgKHBvcy5sZWZ0KVxyXG4gICAgICAgICAgICBzdHlsZXMucHVzaChcImxlZnQ6IFwiICsgcG9zLmxlZnQpO1xyXG4gICAgICAgIGlmIChwb3MudG9wKVxyXG4gICAgICAgICAgICBzdHlsZXMucHVzaChcInRvcDogXCIgKyBwb3MudG9wKTtcclxuICAgICAgICBpZiAocG9zLnJpZ2h0KVxyXG4gICAgICAgICAgICBzdHlsZXMucHVzaChcInJpZ2h0OiBcIiArIHBvcy5yaWdodCk7XHJcbiAgICAgICAgaWYgKHBvcy5ib3R0b20pXHJcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKFwiYm90dG9tOiBcIiArIHBvcy5ib3R0b20pO1xyXG4gICAgICAgIGlmIChwb3Mud2lkdGgpXHJcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKFwid2lkdGg6IFwiICsgcG9zLndpZHRoKTtcclxuICAgICAgICBpZiAocG9zLmhlaWdodClcclxuICAgICAgICAgICAgc3R5bGVzLnB1c2goXCJoZWlnaHQ6IFwiICsgcG9zLmhlaWdodCk7XHJcbiAgICAgICAgY3NzRWxlbWVudHMucHVzaChcIiNcIiArIHNwYWNlLmlkICsgXCItXCIgKyBpZCArIFwiIHsgXCIgKyBzdHlsZXMuam9pbihcIjsgXCIpICsgXCJ9XCIpO1xyXG4gICAgfTtcclxuICAgIHZhciB3aWR0aE9ySGVpZ2h0U3BlY2lmaWVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzcGFjZS50eXBlID09PSBUeXBlLlBvc2l0aW9uZWRcclxuICAgICAgICAgICAgPyBzcGFjZS53aWR0aC5zaXplICYmIHNwYWNlLmhlaWdodC5zaXplXHJcbiAgICAgICAgICAgIDogc3BhY2Uub3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgPyBzcGFjZS53aWR0aC5zaXplXHJcbiAgICAgICAgICAgICAgICA6IHNwYWNlLmhlaWdodC5zaXplO1xyXG4gICAgfTtcclxuICAgIGlmIChzcGFjZS5jYW5SZXNpemVMZWZ0KSB7XHJcbiAgICAgICAgaWYgKHNwYWNlLmFuY2hvcikge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtbFwiLCB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLnJpZ2h0LCB0cnVlKSArIFwiICsgXCIgKyBjc3Moc3BhY2Uud2lkdGgpICsgXCIgLSBcIiArIGhhbmRsZU9mZnNldCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtbFwiLCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBcImNhbGMoXCIgKyBjc3Moc3BhY2UubGVmdCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNzcyhzcGFjZS50b3ApLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjc3Moc3BhY2UuYm90dG9tKSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjc3Moc3BhY2UuaGVpZ2h0KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEhhbmRsZUNzcyhcIm1sOmFmdGVyXCIsIHtcclxuICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3BhY2UuY2FuUmVzaXplVG9wKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlLmFuY2hvcikge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmJvdHRvbSkgKyBcIiArIFwiICsgY3NzKHNwYWNlLmhlaWdodCkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtdDphZnRlclwiLCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNzcyhzcGFjZS53aWR0aCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZEhhbmRsZUNzcyhcIm10XCIsIHtcclxuICAgICAgICAgICAgICAgIHRvcDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLnRvcCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjc3Moc3BhY2UubGVmdCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogY3NzKHNwYWNlLnJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjc3Moc3BhY2Uud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlQ3NzKFwibXQ6YWZ0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLndpZHRoLCB0cnVlKSArIFwiIC0gXCIgKyBoYW5kbGVPZmZzZXQgKyBcIikgKyBcIiArIG5lZ2F0aXZlVG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZEhhbmRsZUNzcyhcIm10OmFmdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNzcyhzcGFjZS53aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNwYWNlLmNhblJlc2l6ZVJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtclwiLCB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBcImNhbGMoXCIgKyBjc3Moc3BhY2UubGVmdCwgdHJ1ZSkgKyBcIiArIFwiICsgY3NzKHNwYWNlLndpZHRoLCB0cnVlKSArIFwiIC0gXCIgKyBoYW5kbGVTaXplICsgXCIgKyBcIiArIGhhbmRsZU9mZnNldCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBjc3Moc3BhY2UudG9wKSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY3NzKHNwYWNlLmJvdHRvbSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY3NzKHNwYWNlLmhlaWdodCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWRkSGFuZGxlQ3NzKFwibXJcIiwge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiY2FsYyhcIiArIGNzcyhzcGFjZS5yaWdodCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNzcyhzcGFjZS50b3ApLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjc3Moc3BhY2UuYm90dG9tKSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjc3Moc3BhY2UuaGVpZ2h0KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEhhbmRsZUNzcyhcIm1yOmFmdGVyXCIsIHtcclxuICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3BhY2UuY2FuUmVzaXplQm90dG9tKSB7XHJcbiAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtYlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IFwiY2FsYyhcIiArIGNzcyhzcGFjZS50b3AsIHRydWUpICsgXCIgKyBcIiArIGNzcyhzcGFjZS5oZWlnaHQsIHRydWUpICsgXCIgLSBcIiArIGhhbmRsZVNpemUgKyBcIiArIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjc3Moc3BhY2UubGVmdCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogY3NzKHNwYWNlLnJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjc3Moc3BhY2Uud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZEhhbmRsZUNzcyhcIm1iXCIsIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmJvdHRvbSwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjc3Moc3BhY2UubGVmdCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogY3NzKHNwYWNlLnJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjc3Moc3BhY2Uud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkSGFuZGxlQ3NzKFwibWI6YWZ0ZXJcIiwge1xyXG4gICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzcGFjZS5jYW5SZXNpemVUb3BMZWZ0KSB7XHJcbiAgICAgICAgYWRkSGFuZGxlQ3NzKFwibXRsXCIsIHtcclxuICAgICAgICAgICAgbGVmdDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmxlZnQsIHRydWUpICsgXCIgLSBcIiArIGhhbmRsZU9mZnNldCArIFwiKVwiLFxyXG4gICAgICAgICAgICB0b3A6IGNzcyhzcGFjZS50b3ApLFxyXG4gICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZEhhbmRsZUNzcyhcIm10bDphZnRlclwiLCB7XHJcbiAgICAgICAgICAgIHRvcDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICBib3R0b206IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYWNlLmNhblJlc2l6ZVRvcFJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtdHJcIiwge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmxlZnQsIHRydWUpICsgXCIgKyBcIiArIGNzcyhzcGFjZS53aWR0aCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlU2l6ZSArIFwiICsgXCIgKyBoYW5kbGVPZmZzZXQgKyBcIilcIixcclxuICAgICAgICAgICAgICAgIHRvcDogY3NzKHNwYWNlLnRvcCksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtdHJcIiwge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiY2FsYyhcIiArIGNzcyhzcGFjZS5yaWdodCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNzcyhzcGFjZS50b3ApLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRIYW5kbGVDc3MoXCJtdHI6YWZ0ZXJcIiwge1xyXG4gICAgICAgICAgICB0b3A6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0b3VjaEhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzcGFjZS5jYW5SZXNpemVCb3R0b21MZWZ0KSB7XHJcbiAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtYmxcIiwge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBcImNhbGMoXCIgKyBjc3Moc3BhY2UudG9wLCB0cnVlKSArIFwiICsgXCIgKyBjc3Moc3BhY2UuaGVpZ2h0LCB0cnVlKSArIFwiIC0gXCIgKyBoYW5kbGVTaXplICsgXCIgKyBcIiArIGhhbmRsZU9mZnNldCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogY3NzKHNwYWNlLmxlZnQpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWRkSGFuZGxlQ3NzKFwibWJsXCIsIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmJvdHRvbSwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjc3Moc3BhY2UubGVmdCksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEhhbmRsZUNzcyhcIm1ibDphZnRlclwiLCB7XHJcbiAgICAgICAgICAgIHRvcDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICBib3R0b206IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYWNlLmNhblJlc2l6ZUJvdHRvbVJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHdpZHRoT3JIZWlnaHRTcGVjaWZpZWQoKSkge1xyXG4gICAgICAgICAgICBhZGRIYW5kbGVDc3MoXCJtYnJcIiwge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmxlZnQsIHRydWUpICsgXCIgKyBcIiArIGNzcyhzcGFjZS53aWR0aCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlU2l6ZSArIFwiICsgXCIgKyBoYW5kbGVPZmZzZXQgKyBcIilcIixcclxuICAgICAgICAgICAgICAgIHRvcDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLnRvcCwgdHJ1ZSkgKyBcIiArIFwiICsgY3NzKHNwYWNlLmhlaWdodCwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlU2l6ZSArIFwiICsgXCIgKyBoYW5kbGVPZmZzZXQgKyBcIilcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZEhhbmRsZUNzcyhcIm1iclwiLCB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCJjYWxjKFwiICsgY3NzKHNwYWNlLnJpZ2h0LCB0cnVlKSArIFwiIC0gXCIgKyBoYW5kbGVPZmZzZXQgKyBcIilcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogXCJjYWxjKFwiICsgY3NzKHNwYWNlLmJvdHRvbSwgdHJ1ZSkgKyBcIiAtIFwiICsgaGFuZGxlT2Zmc2V0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEhhbmRsZUNzcyhcIm1icjphZnRlclwiLCB7XHJcbiAgICAgICAgICAgIHRvcDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICBib3R0b206IHRvdWNoSGFuZGxlU2l6ZSxcclxuICAgICAgICAgICAgbGVmdDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgICAgICByaWdodDogdG91Y2hIYW5kbGVTaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNzc0VsZW1lbnRzLmpvaW4oXCIgXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlRGVmaW5pdGlvbihzcGFjZSkge1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSBzdHlsZURlZmluaXRpb24oc3BhY2UpO1xyXG4gICAgaWYgKCFpc1NlcnZlcigpKSB7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHlsZV9cIiArIHNwYWNlLmlkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nLmlubmVySFRNTCAhPT0gZGVmaW5pdGlvbikge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcuaW5uZXJIVE1MID0gZGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5ld1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBuZXdTdHlsZS5pZCA9IFwic3R5bGVfXCIgKyBzcGFjZS5pZDtcclxuICAgICAgICAgICAgbmV3U3R5bGUuaW5uZXJIVE1MID0gZGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3BhY2Uuc3NyU3R5bGUgPSBkZWZpbml0aW9uO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRGVmaW5pdGlvbihzcGFjZSkge1xyXG4gICAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHlsZV9cIiArIHNwYWNlLmlkKTtcclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzU2VydmVyKCkge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cblxuZnVuY3Rpb24gaXNIb3Jpem9udGFsKHJlc2l6ZVR5cGUpIHtcclxuICAgIHJldHVybiByZXNpemVUeXBlID09PSBSZXNpemVUeXBlLkxlZnQgfHwgcmVzaXplVHlwZSA9PT0gUmVzaXplVHlwZS5SaWdodDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgcmVzaXplVHlwZSwgZGltZW5zaW9uVG9BZGp1c3QsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSkge1xyXG4gICAgdmFyIG5lZ2F0ZXIgPSByZXNpemVUeXBlID09PSBSZXNpemVUeXBlLlJpZ2h0IHx8IHJlc2l6ZVR5cGUgPT09IFJlc2l6ZVR5cGUuQm90dG9tID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gLXZhbDsgfSA6IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbDsgfTtcclxuICAgIHZhciBjYW5kaWRhdGVPcHBvc2l0ZURpbWVuc2lvblRvQWRqdXN0ID0gaXNIb3Jpem9udGFsKHJlc2l6ZVR5cGUpID8gc3BhY2Uud2lkdGggOiBzcGFjZS5oZWlnaHQ7XHJcbiAgICB2YXIgb2Zmc2V0MSA9IGRpbWVuc2lvblRvQWRqdXN0LnJlc2l6ZWQ7XHJcbiAgICB2YXIgb2Zmc2V0MiA9IGNhbmRpZGF0ZU9wcG9zaXRlRGltZW5zaW9uVG9BZGp1c3QucmVzaXplZDtcclxuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsKHJlc2l6ZVR5cGUpID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0O1xyXG4gICAgdmFyIG1pbmltdW1BZGp1c3QgPSBjb2FsZXNjZShzcGFjZS5taW5pbXVtU2l6ZSwgMjApIC0gc2l6ZSArIDA7XHJcbiAgICB2YXIgbWF4aW11bUFkanVzdCA9IHNwYWNlLm1heGltdW1TaXplID8gc3BhY2UubWF4aW11bVNpemUgLSBzaXplICsgMCA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudFgsIGN1cnJlbnRZKSB7XHJcbiAgICAgICAgdmFyIGFkanVzdG1lbnQgPSAoaXNIb3Jpem9udGFsKHJlc2l6ZVR5cGUpID8gb3JpZ2luYWxYIDogb3JpZ2luYWxZKSAtIChpc0hvcml6b250YWwocmVzaXplVHlwZSkgPyBjdXJyZW50WCA6IGN1cnJlbnRZKTtcclxuICAgICAgICB2YXIgZGltZW5zaW9uUmVzaXplZCA9IG5lZ2F0ZXIoYWRqdXN0bWVudCk7XHJcbiAgICAgICAgaWYgKHNwYWNlLnR5cGUgIT09IFR5cGUuUG9zaXRpb25lZCkge1xyXG4gICAgICAgICAgICBkaW1lbnNpb25SZXNpemVkID0gTWF0aC5tYXgobmVnYXRlcihhZGp1c3RtZW50KSwgbWluaW11bUFkanVzdCk7XHJcbiAgICAgICAgICAgIGlmIChkaW1lbnNpb25SZXNpemVkIDwgbWluaW11bUFkanVzdCkge1xyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uUmVzaXplZCA9IG1pbmltdW1BZGp1c3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhpbXVtQWRqdXN0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9uUmVzaXplZCA+IG1heGltdW1BZGp1c3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25SZXNpemVkID0gbWF4aW11bUFkanVzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGltZW5zaW9uVG9BZGp1c3Quc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvblRvQWRqdXN0LnJlc2l6ZWQgPSBuZWdhdGVyKC1hZGp1c3RtZW50KSArIG9mZnNldDE7XHJcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGVPcHBvc2l0ZURpbWVuc2lvblRvQWRqdXN0LnNpemUpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZU9wcG9zaXRlRGltZW5zaW9uVG9BZGp1c3QucmVzaXplZCA9IG5lZ2F0ZXIoYWRqdXN0bWVudCkgKyBvZmZzZXQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGVPcHBvc2l0ZURpbWVuc2lvblRvQWRqdXN0LnJlc2l6ZWQgPSBkaW1lbnNpb25SZXNpemVkICsgb2Zmc2V0MjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUFkanVzdGVyKHJlc2l6ZVR5cGUsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSkge1xyXG4gICAgdmFyIHJlY3QgPSBzcGFjZS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgc3dpdGNoIChyZXNpemVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLkxlZnQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgcmVzaXplVHlwZSwgc3BhY2UubGVmdCwgc3BhY2UsIG9yaWdpbmFsWCwgb3JpZ2luYWxZKTtcclxuICAgICAgICBjYXNlIFJlc2l6ZVR5cGUuUmlnaHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgcmVzaXplVHlwZSwgc3BhY2UucmlnaHQsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLkJvdHRvbTpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVNpZGVBZGp1c3RlcihyZWN0LCByZXNpemVUeXBlLCBzcGFjZS5ib3R0b20sIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLlRvcDpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVNpZGVBZGp1c3RlcihyZWN0LCByZXNpemVUeXBlLCBzcGFjZS50b3AsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLlRvcExlZnQ6XHJcbiAgICAgICAgICAgIHZhciB0b3BBZGp1c3Rlcl8xID0gY3JlYXRlU2lkZUFkanVzdGVyKHJlY3QsIFJlc2l6ZVR5cGUuVG9wLCBzcGFjZS50b3AsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0QWRqdXN0ZXJfMSA9IGNyZWF0ZVNpZGVBZGp1c3RlcihyZWN0LCBSZXNpemVUeXBlLkxlZnQsIHNwYWNlLmxlZnQsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgdG9wQWRqdXN0ZXJfMSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGxlZnRBZGp1c3Rlcl8xKHgsIHkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUmVzaXplVHlwZS5Ub3BSaWdodDpcclxuICAgICAgICAgICAgdmFyIHRvcDFBZGp1c3Rlcl8xID0gY3JlYXRlU2lkZUFkanVzdGVyKHJlY3QsIFJlc2l6ZVR5cGUuVG9wLCBzcGFjZS50b3AsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHZhciByaWdodEFkanVzdGVyXzEgPSBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgUmVzaXplVHlwZS5SaWdodCwgc3BhY2UucmlnaHQsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgdG9wMUFkanVzdGVyXzEoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICByaWdodEFkanVzdGVyXzEoeCwgeSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLkJvdHRvbUxlZnQ6XHJcbiAgICAgICAgICAgIHZhciBib3R0b21BZGp1c3Rlcl8xID0gY3JlYXRlU2lkZUFkanVzdGVyKHJlY3QsIFJlc2l6ZVR5cGUuQm90dG9tLCBzcGFjZS5ib3R0b20sIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0MUFkanVzdGVyXzEgPSBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgUmVzaXplVHlwZS5MZWZ0LCBzcGFjZS5sZWZ0LCBzcGFjZSwgb3JpZ2luYWxYLCBvcmlnaW5hbFkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbUFkanVzdGVyXzEoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0MUFkanVzdGVyXzEoeCwgeSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBSZXNpemVUeXBlLkJvdHRvbVJpZ2h0OlxyXG4gICAgICAgICAgICB2YXIgYm90dG9tMUFkanVzdGVyXzEgPSBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgUmVzaXplVHlwZS5Cb3R0b20sIHNwYWNlLmJvdHRvbSwgc3BhY2UsIG9yaWdpbmFsWCwgb3JpZ2luYWxZKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0MUFkanVzdGVyXzEgPSBjcmVhdGVTaWRlQWRqdXN0ZXIocmVjdCwgUmVzaXplVHlwZS5SaWdodCwgc3BhY2UucmlnaHQsIHNwYWNlLCBvcmlnaW5hbFgsIG9yaWdpbmFsWSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tMUFkanVzdGVyXzEoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICByaWdodDFBZGp1c3Rlcl8xKHgsIHkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IFwiUmVzaXplIHR5cGUgXCIgKyByZXNpemVUeXBlICsgXCIgbm90IHN1cHBvcnRlZFwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc2l6ZShzdG9yZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGFydFJlc2l6ZTogZnVuY3Rpb24gKGUsIHJlc2l6ZVR5cGUsIHNwYWNlLCBlbmRFdmVudCwgbW92ZUV2ZW50LCBnZXRDb29yZHMsIG9uUmVzaXplRW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5vblJlc2l6ZVN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gc3BhY2Uub25SZXNpemVTdGFydChyZXNpemVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcImJvb2xlYW5cIiAmJiAhcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbENvb3JkcyA9IGdldENvb3JkcyhlKTtcclxuICAgICAgICAgICAgdmFyIGFkanVzdGVyID0gY3JlYXRlQWRqdXN0ZXIocmVzaXplVHlwZSwgc3BhY2UsIG9yaWdpbmFsQ29vcmRzLngsIG9yaWdpbmFsQ29vcmRzLnkpO1xyXG4gICAgICAgICAgICBzcGFjZS5yZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwYWNlLnVwZGF0ZVBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFggPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFkgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uIChjdXJyZW50WCwgY3VycmVudFkpIHtcclxuICAgICAgICAgICAgICAgIGFkanVzdGVyKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTdHlsZXMoc3BhY2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgd2l0aFByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdDb29yZHMgPSBnZXRDb29yZHMoZSk7XHJcbiAgICAgICAgICAgICAgICBsYXN0WCA9IG5ld0Nvb3Jkcy54O1xyXG4gICAgICAgICAgICAgICAgbGFzdFkgPSBuZXdDb29yZHMueTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYWNlLnJlc2l6aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemUobGFzdFgsIGxhc3RZKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5yZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplKGxhc3RYLCBsYXN0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHdpdGhQcmV2ZW50RGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgcmVtb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgc3BhY2UudXBkYXRlUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzaXplRW5kID0gb25SZXNpemVFbmQgfHwgc3BhY2Uub25SZXNpemVFbmQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzaXplRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZWN0ID0gc3BhY2UuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVFbmQoTWF0aC5mbG9vcihpc0hvcml6b250YWwocmVzaXplVHlwZSkgPyBjdXJyZW50UmVjdC53aWR0aCA6IGN1cnJlbnRSZWN0LmhlaWdodCksIGN1cnJlbnRSZWN0LCByZXNpemVUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB3aXRoUHJldmVudERlZmF1bHQpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgcmVtb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyYWcoc3RvcmUpIHtcclxuICAgIGZ1bmN0aW9uIG9uTW92ZShzcGFjZSwgb3JpZ2luYWxYLCBvcmlnaW5hbFksIHgsIHkpIHtcclxuICAgICAgICB2YXIgYWRqdXN0bWVudFggPSAtKG9yaWdpbmFsWCAtIHgpO1xyXG4gICAgICAgIHZhciBhZGp1c3RtZW50WSA9IC0ob3JpZ2luYWxZIC0geSk7XHJcbiAgICAgICAgc3BhY2UubGVmdC5hZGp1c3RlZCA9IFthZGp1c3RtZW50WF07XHJcbiAgICAgICAgc3BhY2UudG9wLmFkanVzdGVkID0gW2FkanVzdG1lbnRZXTtcclxuICAgICAgICBpZiAoc3BhY2UucmlnaHQuc2l6ZSkge1xyXG4gICAgICAgICAgICBzcGFjZS5yaWdodC5hZGp1c3RlZCA9IFstYWRqdXN0bWVudFhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3BhY2UuYm90dG9tLnNpemUpIHtcclxuICAgICAgICAgICAgc3BhY2UuYm90dG9tLmFkanVzdGVkID0gWy1hZGp1c3RtZW50WV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JlLnVwZGF0ZVN0eWxlcyhzcGFjZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXJ0RHJhZzogZnVuY3Rpb24gKGUsIHNwYWNlLCBlbmRFdmVudCwgbW92ZUV2ZW50LCBnZXRDb29yZHMsIG9uRHJhZ0VuZCkge1xyXG4gICAgICAgICAgICBpZiAoc3BhY2UuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IGdldENvb3JkcyhlKTtcclxuICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZExlZnQgPSBzcGFjZS5sZWZ0LmFkanVzdGVkLmxlbmd0aCA9PT0gMCA/IDAgOiBzcGFjZS5sZWZ0LmFkanVzdGVkWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkanVzdGVkVG9wID0gc3BhY2UudG9wLmFkanVzdGVkLmxlbmd0aCA9PT0gMCA/IDAgOiBzcGFjZS50b3AuYWRqdXN0ZWRbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxNb3VzZVhfMSA9IGNvb3Jkcy54IC0gYWRqdXN0ZWRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTW91c2VZXzEgPSBjb29yZHMueSAtIGFkanVzdGVkVG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RYXzEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RZXzEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vdmVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBtb3VzZU1vdmVfMSA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBvbk1vdmUoc3BhY2UsIG9yaWdpbmFsTW91c2VYXzEsIG9yaWdpbmFsTW91c2VZXzEsIHgsIHkpOyB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRocm90dGxlZE1vdXNlTW92ZV8xID0gdGhyb3R0bGUobW91c2VNb3ZlXzEsIDUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhQcmV2ZW50RGVmYXVsdF8xID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZF8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q29vcmRzID0gZ2V0Q29vcmRzKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RYXzEgPSBuZXdDb29yZHMueDtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0WV8xID0gbmV3Q29vcmRzLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlZE1vdXNlTW92ZV8xKGxhc3RYXzEsIGxhc3RZXzEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMaXN0ZW5lcl8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW92ZWRfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZU1vdmVfMShsYXN0WF8xLCBsYXN0WV8xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB3aXRoUHJldmVudERlZmF1bHRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZW5kRXZlbnQsIHJlbW92ZUxpc3RlbmVyXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkRyYWdFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEluZm8gPSAoc3BhY2UucGFyZW50SWQgJiYgKChfYSA9IHN0b3JlLmdldFNwYWNlKHNwYWNlLnBhcmVudElkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKSB8fCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IF9hLmxlZnQsIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHsgbGVmdDogbGVmdCwgdG9wOiB0b3AsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b20sIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKHNwYWNlLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQoX19hc3NpZ24oX19hc3NpZ24oe30sIGluZm8pLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbmZvLmxlZnQgLSBwYXJlbnRJbmZvLmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGluZm8udG9wIC0gcGFyZW50SW5mby50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBtb3ZlZF8xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB3aXRoUHJldmVudERlZmF1bHRfMSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgcmVtb3ZlTGlzdGVuZXJfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxuXG52YXIgc3BhY2VEZWZhdWx0cyA9IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgekluZGV4OiAwLFxyXG4gICAgc2Nyb2xsYWJsZTogZmFsc2UsXHJcbiAgICByZXNpemluZzogZmFsc2UsXHJcbiAgICBhbGxvd092ZXJmbG93OiBmYWxzZSxcclxuICAgIGNlbnRlckNvbnRlbnQ6IFwibm9uZVwiLFxyXG4gICAgZGltZW5zaW9uOiB7IGxlZnQ6IDAsIHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCwgeDogMCwgeTogMCwgdG9KU09OOiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlwiOyB9IH0sXHJcbiAgICBoYW5kbGVTaXplOiA1LFxyXG4gICAgdG91Y2hIYW5kbGVTaXplOiA1LFxyXG4gICAgaGFuZGxlUGxhY2VtZW50OiBSZXNpemVIYW5kbGVQbGFjZW1lbnQuT3ZlcmxheUluc2lkZSxcclxuICAgIGFkanVzdExlZnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxyXG4gICAgYWRqdXN0UmlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxyXG4gICAgYWRqdXN0VG9wOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcclxuICAgIGFkanVzdEJvdHRvbTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXHJcbiAgICBhZGp1c3RFZGdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcclxuICAgIGFuY2hvcmVkQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxyXG59O1xyXG52YXIgYW5jaG9yVHlwZXMgPSBbQW5jaG9yVHlwZS5MZWZ0LCBBbmNob3JUeXBlLlRvcCwgQW5jaG9yVHlwZS5SaWdodCwgQW5jaG9yVHlwZS5Cb3R0b21dO1xyXG5mdW5jdGlvbiBnZXRQb3NpdGlvbih0eXBlKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gVHlwZS5WaWV3UG9ydCkge1xyXG4gICAgICAgIHJldHVybiBcImZpeGVkXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gVHlwZS5GaXhlZCkge1xyXG4gICAgICAgIHJldHVybiBcInJlbGF0aXZlXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJhYnNvbHV0ZVwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKGFuY2hvcikge1xyXG4gICAgcmV0dXJuIGFuY2hvciA9PT0gQW5jaG9yVHlwZS5Cb3R0b20gfHwgYW5jaG9yID09PSBBbmNob3JUeXBlLlRvcCA/IE9yaWVudGF0aW9uLlZlcnRpY2FsIDogT3JpZW50YXRpb24uSG9yaXpvbnRhbDtcclxufVxyXG5mdW5jdGlvbiBhbmNob3JVcGRhdGVzKHNwYWNlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5jaG9yOiBBbmNob3JUeXBlLkxlZnQsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogc3BhY2UuYWRqdXN0TGVmdCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5jaG9yOiBBbmNob3JUeXBlLlRvcCxcclxuICAgICAgICAgICAgdXBkYXRlOiBzcGFjZS5hZGp1c3RUb3AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFuY2hvcjogQW5jaG9yVHlwZS5SaWdodCxcclxuICAgICAgICAgICAgdXBkYXRlOiBzcGFjZS5hZGp1c3RSaWdodCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5jaG9yOiBBbmNob3JUeXBlLkJvdHRvbSxcclxuICAgICAgICAgICAgdXBkYXRlOiBzcGFjZS5hZGp1c3RCb3R0b20sXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbn1cclxuZnVuY3Rpb24gc2l6ZUluZm9EZWZhdWx0KHNpemUpIHtcclxuICAgIHJldHVybiB7IHNpemU6IHNpemUsIGFkanVzdGVkOiBbXSwgcmVzaXplZDogMCB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdmFyIHNwYWNlcyA9IFtdO1xyXG4gICAgdmFyIHNldFNwYWNlcyA9IGZ1bmN0aW9uIChuZXdTcGFjZXMpIHtcclxuICAgICAgICBzcGFjZXMgPSBuZXdTcGFjZXM7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFNwYWNlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNwYWNlcygpLmZpbmQoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0U3BhY2VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3BhY2VzOyB9O1xyXG4gICAgdmFyIHJlY2FsY1NwYWNlcyA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcclxuICAgICAgICB2YXIgb25seVVuaXF1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGFkZERlZmF1bHRPcmRlcnMgPSBmdW5jdGlvbiAoc3BhY2VzKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgYW5jaG9yVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcmVkU3BhY2VzID0gc3BhY2VzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5hbmNob3IgIT09IHVuZGVmaW5lZCAmJiBzLmFuY2hvciA9PT0gdDsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgekluZGljZXMgPSBhbmNob3JlZFNwYWNlcy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuekluZGV4OyB9KS5maWx0ZXIob25seVVuaXF1ZSk7XHJcbiAgICAgICAgICAgICAgICB6SW5kaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvcmVkU3BhY2VzSW5MYXllciA9IGFuY2hvcmVkU3BhY2VzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy56SW5kZXggPT09IGk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmRlcmVkU3BhY2VzID0gYW5jaG9yZWRTcGFjZXNJbkxheWVyLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5vcmRlciAhPT0gdW5kZWZpbmVkOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdW5vcmRlcmVkU3BhY2VzID0gYW5jaG9yZWRTcGFjZXNJbkxheWVyLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5vcmRlciA9PT0gdW5kZWZpbmVkOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4T3JkZXIgPSBvcmRlcmVkU3BhY2VzLmxlbmd0aCA+IDAgPyBvcmRlcmVkU3BhY2VzLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5vcmRlcjsgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBNYXRoLm1heChhLCBiKTsgfSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgcmVzdWx0LCB0cnVlKSwgX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBvcmRlcmVkU3BhY2VzLCB0cnVlKSwgdW5vcmRlcmVkU3BhY2VzLm1hcChmdW5jdGlvbiAoYywgaWR4KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGMpLCB7IG9yZGVyOiBtYXhPcmRlciArIGlkeCArIDEgfSkpOyB9KSwgdHJ1ZSksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCByZXN1bHQsIHRydWUpLCBzcGFjZXMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmFuY2hvciA9PT0gdW5kZWZpbmVkOyB9KSwgdHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgb3JkZXJlZFNwYWNlcyA9IGFkZERlZmF1bHRPcmRlcnMocGFyZW50LmNoaWxkcmVuKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNwYWNlID0gb3JkZXJlZFNwYWNlc1tpXTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNwYWNlLnR5cGUgPT09IFR5cGUuRmlsbCkge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yVXBkYXRlcyhzcGFjZSkuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNob3JlZFNwYWNlcyA9IHBhcmVudC5hbmNob3JlZENoaWxkcmVuKG9yZGVyZWRTcGFjZXMsIGluZm8uYW5jaG9yLCBzcGFjZS56SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcmVkU3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKGFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcy5vcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcy5oZWlnaHQuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdGVkLnB1c2goYXMuaGVpZ2h0LnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzLmhlaWdodC5yZXNpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0ZWQucHVzaChhcy5oZWlnaHQucmVzaXplZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXMud2lkdGguc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdGVkLnB1c2goYXMud2lkdGguc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXMud2lkdGgucmVzaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdGVkLnB1c2goYXMud2lkdGgucmVzaXplZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby51cGRhdGUoYWRqdXN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNwYWNlLnR5cGUgPT09IFR5cGUuQW5jaG9yZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZF8xID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yZWRTcGFjZXMgPSBwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAuYW5jaG9yZWRDaGlsZHJlbihvcmRlcmVkU3BhY2VzLCBzcGFjZS5hbmNob3IsIHNwYWNlLnpJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkICE9PSBzcGFjZS5pZCAmJiBzLm9yZGVyIDw9IHNwYWNlLm9yZGVyOyB9KTtcclxuICAgICAgICAgICAgICAgIGFuY2hvcmVkU3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKGFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzLm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXMuaGVpZ2h0LnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdGVkXzEucHVzaChhcy5oZWlnaHQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzLmhlaWdodC5yZXNpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RlZF8xLnB1c2goYXMuaGVpZ2h0LnJlc2l6ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXMud2lkdGguc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0ZWRfMS5wdXNoKGFzLndpZHRoLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcy53aWR0aC5yZXNpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RlZF8xLnB1c2goYXMud2lkdGgucmVzaXplZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGFjZS5hZGp1c3RFZGdlKGFkanVzdGVkXzEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0eWxlRGVmaW5pdGlvbihzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvcmRlcmVkU3BhY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIHN0b3JlID0ge1xyXG4gICAgICAgIGdldFNwYWNlczogZ2V0U3BhY2VzLFxyXG4gICAgICAgIGdldFNwYWNlOiBnZXRTcGFjZSxcclxuICAgICAgICBhZGRTcGFjZTogZnVuY3Rpb24gKHNwYWNlKSB7XHJcbiAgICAgICAgICAgIGdldFNwYWNlcygpLnB1c2goc3BhY2UpO1xyXG4gICAgICAgICAgICBpZiAoc3BhY2UucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTcGFjZSA9IGdldFNwYWNlKHNwYWNlLnBhcmVudElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRTcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYWNlLmNoaWxkcmVuLnB1c2goc3BhY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2FsY1NwYWNlcyhwYXJlbnRTcGFjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlU3R5bGVEZWZpbml0aW9uKHNwYWNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVNwYWNlOiBmdW5jdGlvbiAoc3BhY2UpIHtcclxuICAgICAgICAgICAgc2V0U3BhY2VzKGdldFNwYWNlcygpLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCAhPT0gc3BhY2UuaWQ7IH0pKTtcclxuICAgICAgICAgICAgaWYgKHNwYWNlLnBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3BhY2UgPSBnZXRTcGFjZShzcGFjZS5wYXJlbnRJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50U3BhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFjZS5jaGlsZHJlbiA9IHBhcmVudFNwYWNlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCAhPT0gc3BhY2UuaWQ7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2FsY1NwYWNlcyhwYXJlbnRTcGFjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlU3R5bGVEZWZpbml0aW9uKHNwYWNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVN0eWxlczogZnVuY3Rpb24gKHNwYWNlKSB7XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5wYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gZ2V0U3BhY2Uoc3BhY2UucGFyZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjYWxjU3BhY2VzKHBhcmVudF8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cGRhdGVTdHlsZURlZmluaXRpb24oc3BhY2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlU3BhY2U6IGZ1bmN0aW9uIChzcGFjZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlLCBhbmNob3IgPSBwcm9wcy5hbmNob3IsIG9yZGVyID0gcHJvcHMub3JkZXIsIHpJbmRleCA9IHByb3BzLnpJbmRleCwgc2Nyb2xsYWJsZSA9IHByb3BzLnNjcm9sbGFibGUsIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sIGNlbnRlckNvbnRlbnQgPSBwcm9wcy5jZW50ZXJDb250ZW50LCBtaW5pbXVtU2l6ZSA9IHByb3BzLm1pbmltdW1TaXplLCBtYXhpbXVtU2l6ZSA9IHByb3BzLm1heGltdW1TaXplLCBoYW5kbGVTaXplID0gcHJvcHMuaGFuZGxlU2l6ZSwgdG91Y2hIYW5kbGVTaXplID0gcHJvcHMudG91Y2hIYW5kbGVTaXplLCBoYW5kbGVQbGFjZW1lbnQgPSBwcm9wcy5oYW5kbGVQbGFjZW1lbnQsIGFsbG93T3ZlcmZsb3cgPSBwcm9wcy5hbGxvd092ZXJmbG93O1xyXG4gICAgICAgICAgICB2YXIgY2FuUmVzaXplTGVmdCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi5sZWZ0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGNhblJlc2l6ZVJpZ2h0ID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLnJpZ2h0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGNhblJlc2l6ZVRvcCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi50b3BSZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgY2FuUmVzaXplQm90dG9tID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLmJvdHRvbVJlc2l6YWJsZSkgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBjYW5SZXNpemVUb3BMZWZ0ID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLnRvcExlZnRSZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgY2FuUmVzaXplVG9wUmlnaHQgPSAocG9zaXRpb24gJiYgcG9zaXRpb24udG9wUmlnaHRSZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgY2FuUmVzaXplQm90dG9tTGVmdCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi5ib3R0b21MZWZ0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGNhblJlc2l6ZUJvdHRvbVJpZ2h0ID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLmJvdHRvbVJpZ2h0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNwYWNlLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICAgICAgc3BhY2UucG9zaXRpb24gPSBnZXRQb3NpdGlvbih0eXBlKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5hbmNob3IgIT09IGFuY2hvcikge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuYW5jaG9yID0gYW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhY2Uub3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbihhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gVHlwZS5BbmNob3JlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZS5hZGp1c3RFZGdlID0gc3BhY2UuYWRqdXN0TGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYW5jaG9yID09PSBBbmNob3JUeXBlLlRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZS5hZGp1c3RFZGdlID0gc3BhY2UuYWRqdXN0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UuYWRqdXN0RWRnZSA9IHNwYWNlLmFkanVzdFJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuQm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlLmFkanVzdEVkZ2UgPSBzcGFjZS5hZGp1c3RCb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5sZWZ0LnNpemUgIT09IChwb3NpdGlvbiAmJiBwb3NpdGlvbi5sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UubGVmdC5zaXplID0gcG9zaXRpb24gJiYgcG9zaXRpb24ubGVmdDtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmxlZnQucmVzaXplZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5sZWZ0LmFkanVzdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2UucmlnaHQuc2l6ZSAhPT0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLnJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UucmlnaHQuc2l6ZSA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc3BhY2UucmlnaHQucmVzaXplZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5yaWdodC5hZGp1c3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLnRvcC5zaXplICE9PSAocG9zaXRpb24gJiYgcG9zaXRpb24udG9wKSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UudG9wLnNpemUgPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi50b3A7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS50b3AucmVzaXplZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS50b3AuYWRqdXN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5ib3R0b20uc2l6ZSAhPT0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLmJvdHRvbSkpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmJvdHRvbS5zaXplID0gcG9zaXRpb24gJiYgcG9zaXRpb24uYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuYm90dG9tLnJlc2l6ZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuYm90dG9tLmFkanVzdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2Uud2lkdGguc2l6ZSAhPT0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLndpZHRoKSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2Uud2lkdGguc2l6ZSA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgc3BhY2Uud2lkdGgucmVzaXplZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS53aWR0aC5hZGp1c3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmhlaWdodC5zaXplICE9PSAocG9zaXRpb24gJiYgcG9zaXRpb24uaGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuaGVpZ2h0LnNpemUgPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5oZWlnaHQucmVzaXplZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5oZWlnaHQuYWRqdXN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2FsZXNjZShzcGFjZS5vcmRlciwgMCkgIT09IGNvYWxlc2NlKG9yZGVyLCAwKSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2Uub3JkZXIgPSBjb2FsZXNjZShvcmRlciwgMCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29hbGVzY2Uoc3BhY2UuekluZGV4LCAwKSAhPT0gY29hbGVzY2UoekluZGV4LCAwKSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuekluZGV4ID0gY29hbGVzY2UoekluZGV4LCAwKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2FsZXNjZShzcGFjZS5zY3JvbGxhYmxlLCBmYWxzZSkgIT09IGNvYWxlc2NlKHNjcm9sbGFibGUsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2Uuc2Nyb2xsYWJsZSA9IGNvYWxlc2NlKHNjcm9sbGFibGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5taW5pbXVtU2l6ZSAhPT0gbWluaW11bVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLm1pbmltdW1TaXplID0gbWluaW11bVNpemU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2UubWF4aW11bVNpemUgIT09IG1heGltdW1TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5tYXhpbXVtU2l6ZSA9IG1heGltdW1TaXplO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvYWxlc2NlKHNwYWNlLmNlbnRlckNvbnRlbnQsIENlbnRlclR5cGUuTm9uZSkgIT09IGNvYWxlc2NlKGNlbnRlckNvbnRlbnQsIENlbnRlclR5cGUuTm9uZSkpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmNlbnRlckNvbnRlbnQgPSBjb2FsZXNjZShjZW50ZXJDb250ZW50LCBDZW50ZXJUeXBlLk5vbmUpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmhhbmRsZVNpemUgIT09IGhhbmRsZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmhhbmRsZVNpemUgPSBoYW5kbGVTaXplIHx8IHNwYWNlRGVmYXVsdHMuaGFuZGxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS50b3VjaEhhbmRsZVNpemUgIT09IHRvdWNoSGFuZGxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UudG91Y2hIYW5kbGVTaXplID0gdG91Y2hIYW5kbGVTaXplIHx8IHNwYWNlRGVmYXVsdHMudG91Y2hIYW5kbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmhhbmRsZVBsYWNlbWVudCAhPT0gaGFuZGxlUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5oYW5kbGVQbGFjZW1lbnQgPSBoYW5kbGVQbGFjZW1lbnQgfHwgc3BhY2VEZWZhdWx0cy5oYW5kbGVQbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2UuY2FuUmVzaXplQm90dG9tICE9PSBjYW5SZXNpemVCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmNhblJlc2l6ZUJvdHRvbSA9IGNhblJlc2l6ZUJvdHRvbTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5jYW5SZXNpemVUb3AgIT09IGNhblJlc2l6ZVRvcCkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuY2FuUmVzaXplVG9wID0gY2FuUmVzaXplVG9wO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmNhblJlc2l6ZUxlZnQgIT09IGNhblJlc2l6ZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmNhblJlc2l6ZUxlZnQgPSBjYW5SZXNpemVMZWZ0O1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmNhblJlc2l6ZVJpZ2h0ICE9PSBjYW5SZXNpemVSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuY2FuUmVzaXplUmlnaHQgPSBjYW5SZXNpemVSaWdodDtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5jYW5SZXNpemVUb3BMZWZ0ICE9PSBjYW5SZXNpemVUb3BMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5jYW5SZXNpemVUb3BMZWZ0ID0gY2FuUmVzaXplVG9wTGVmdDtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGFjZS5jYW5SZXNpemVUb3BSaWdodCAhPT0gY2FuUmVzaXplVG9wUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmNhblJlc2l6ZVRvcFJpZ2h0ID0gY2FuUmVzaXplVG9wUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2UuY2FuUmVzaXplQm90dG9tTGVmdCAhPT0gY2FuUmVzaXplQm90dG9tTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgc3BhY2UuY2FuUmVzaXplQm90dG9tTGVmdCA9IGNhblJlc2l6ZUJvdHRvbUxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2UuY2FuUmVzaXplQm90dG9tUmlnaHQgIT09IGNhblJlc2l6ZUJvdHRvbVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZS5jYW5SZXNpemVCb3R0b21SaWdodCA9IGNhblJlc2l6ZUJvdHRvbVJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwYWNlLmFsbG93T3ZlcmZsb3cgIT09IGFsbG93T3ZlcmZsb3cpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmFsbG93T3ZlcmZsb3cgPSBhbGxvd092ZXJmbG93IHx8IHNwYWNlRGVmYXVsdHMuYWxsb3dPdmVyZmxvdztcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UucGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3BhY2UgPSBnZXRTcGFjZShzcGFjZS5wYXJlbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudFNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2FsY1NwYWNlcyhwYXJlbnRTcGFjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3R5bGVEZWZpbml0aW9uKHNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlU3BhY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7fSk7IH0sXHJcbiAgICAgICAgc3RhcnRNb3VzZVJlc2l6ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcclxuICAgICAgICBzdGFydFRvdWNoUmVzaXplOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxyXG4gICAgICAgIHN0YXJ0TW91c2VEcmFnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxyXG4gICAgICAgIHN0YXJ0VG91Y2hEcmFnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxyXG4gICAgfTtcclxuICAgIHZhciByZXNpemUgPSBjcmVhdGVSZXNpemUoc3RvcmUpO1xyXG4gICAgdmFyIGRyYWcgPSBjcmVhdGVEcmFnKHN0b3JlKTtcclxuICAgIHN0b3JlLmNyZWF0ZVNwYWNlID0gZnVuY3Rpb24gKHBhcmVudElkLCBwcm9wcywgdXBkYXRlKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sIGFuY2hvciA9IHByb3BzLmFuY2hvciwgdHlwZSA9IHByb3BzLnR5cGUsIGNvbW1vblByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwb3NpdGlvblwiLCBcImFuY2hvclwiLCBcInR5cGVcIl0pO1xyXG4gICAgICAgIHZhciBjYW5SZXNpemVMZWZ0ID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLnJpZ2h0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICB2YXIgY2FuUmVzaXplUmlnaHQgPSAocG9zaXRpb24gJiYgcG9zaXRpb24ubGVmdFJlc2l6YWJsZSkgfHwgZmFsc2U7XHJcbiAgICAgICAgdmFyIGNhblJlc2l6ZVRvcCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi5ib3R0b21SZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgIHZhciBjYW5SZXNpemVCb3R0b20gPSAocG9zaXRpb24gJiYgcG9zaXRpb24udG9wUmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICB2YXIgY2FuUmVzaXplVG9wTGVmdCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi50b3BMZWZ0UmVzaXphYmxlKSB8fCBmYWxzZTtcclxuICAgICAgICB2YXIgY2FuUmVzaXplVG9wUmlnaHQgPSAocG9zaXRpb24gJiYgcG9zaXRpb24udG9wUmlnaHRSZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgIHZhciBjYW5SZXNpemVCb3R0b21MZWZ0ID0gKHBvc2l0aW9uICYmIHBvc2l0aW9uLmJvdHRvbUxlZnRSZXNpemFibGUpIHx8IGZhbHNlO1xyXG4gICAgICAgIHZhciBjYW5SZXNpemVCb3R0b21SaWdodCA9IChwb3NpdGlvbiAmJiBwb3NpdGlvbi5ib3R0b21SaWdodFJlc2l6YWJsZSkgfHwgZmFsc2U7XHJcbiAgICAgICAgdmFyIG5ld1NwYWNlID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIHNwYWNlRGVmYXVsdHMpLCBjb21tb25Qcm9wcyksIHtcclxuICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxyXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICAgICAgdXBkYXRlUGFyZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3BhY2UgPSBzdG9yZS5nZXRTcGFjZShwYXJlbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudFNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYWNlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIGFuY2hvcjogYW5jaG9yLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogZ2V0T3JpZW50YXRpb24oYW5jaG9yKSxcclxuICAgICAgICAgICAgcG9zaXRpb246IGdldFBvc2l0aW9uKHR5cGUpLFxyXG4gICAgICAgICAgICBsZWZ0OiBzaXplSW5mb0RlZmF1bHQocG9zaXRpb24gJiYgcG9zaXRpb24ubGVmdCksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBzaXplSW5mb0RlZmF1bHQocG9zaXRpb24gJiYgcG9zaXRpb24ucmlnaHQpLFxyXG4gICAgICAgICAgICB0b3A6IHNpemVJbmZvRGVmYXVsdChwb3NpdGlvbiAmJiBwb3NpdGlvbi50b3ApLFxyXG4gICAgICAgICAgICBib3R0b206IHNpemVJbmZvRGVmYXVsdChwb3NpdGlvbiAmJiBwb3NpdGlvbi5ib3R0b20pLFxyXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUluZm9EZWZhdWx0KHBvc2l0aW9uICYmIHBvc2l0aW9uLndpZHRoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplSW5mb0RlZmF1bHQocG9zaXRpb24gJiYgcG9zaXRpb24uaGVpZ2h0KSxcclxuICAgICAgICAgICAgY2FuUmVzaXplTGVmdDogY2FuUmVzaXplTGVmdCxcclxuICAgICAgICAgICAgY2FuUmVzaXplUmlnaHQ6IGNhblJlc2l6ZVJpZ2h0LFxyXG4gICAgICAgICAgICBjYW5SZXNpemVUb3A6IGNhblJlc2l6ZVRvcCxcclxuICAgICAgICAgICAgY2FuUmVzaXplQm90dG9tOiBjYW5SZXNpemVCb3R0b20sXHJcbiAgICAgICAgICAgIGNhblJlc2l6ZVRvcExlZnQ6IGNhblJlc2l6ZVRvcExlZnQsXHJcbiAgICAgICAgICAgIGNhblJlc2l6ZVRvcFJpZ2h0OiBjYW5SZXNpemVUb3BSaWdodCxcclxuICAgICAgICAgICAgY2FuUmVzaXplQm90dG9tTGVmdDogY2FuUmVzaXplQm90dG9tTGVmdCxcclxuICAgICAgICAgICAgY2FuUmVzaXplQm90dG9tUmlnaHQ6IGNhblJlc2l6ZUJvdHRvbVJpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ld1NwYWNlLmFuY2hvcmVkQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4sIGNoYW5jaG9yLCB6SW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy50eXBlID09PSBUeXBlLkFuY2hvcmVkICYmIHMuYW5jaG9yID09PSBjaGFuY2hvciAmJiBzLnpJbmRleCA9PT0gekluZGV4OyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1NwYWNlLmFkanVzdExlZnQgPSBmdW5jdGlvbiAoYWRqdXN0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKGFkanVzdG1lbnRzRXF1YWwobmV3U3BhY2UubGVmdC5hZGp1c3RlZCwgYWRqdXN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3U3BhY2UubGVmdC5hZGp1c3RlZCA9IGFkanVzdGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1NwYWNlLmFkanVzdFJpZ2h0ID0gZnVuY3Rpb24gKGFkanVzdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGp1c3RtZW50c0VxdWFsKG5ld1NwYWNlLnJpZ2h0LmFkanVzdGVkLCBhZGp1c3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdTcGFjZS5yaWdodC5hZGp1c3RlZCA9IGFkanVzdGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1NwYWNlLmFkanVzdFRvcCA9IGZ1bmN0aW9uIChhZGp1c3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoYWRqdXN0bWVudHNFcXVhbChuZXdTcGFjZS50b3AuYWRqdXN0ZWQsIGFkanVzdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1NwYWNlLnRvcC5hZGp1c3RlZCA9IGFkanVzdGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1NwYWNlLmFkanVzdEJvdHRvbSA9IGZ1bmN0aW9uIChhZGp1c3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoYWRqdXN0bWVudHNFcXVhbChuZXdTcGFjZS5ib3R0b20uYWRqdXN0ZWQsIGFkanVzdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1NwYWNlLmJvdHRvbS5hZGp1c3RlZCA9IGFkanVzdGVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0eXBlID09PSBUeXBlLkFuY2hvcmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3BhY2UuYWRqdXN0RWRnZSA9IG5ld1NwYWNlLmFkanVzdExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYW5jaG9yID09PSBBbmNob3JUeXBlLlRvcCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3BhY2UuYWRqdXN0RWRnZSA9IG5ld1NwYWNlLmFkanVzdFRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NwYWNlLmFkanVzdEVkZ2UgPSBuZXdTcGFjZS5hZGp1c3RSaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuQm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTcGFjZS5hZGp1c3RFZGdlID0gbmV3U3BhY2UuYWRqdXN0Qm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTcGFjZTtcclxuICAgIH07XHJcbiAgICBzdG9yZS5zdGFydE1vdXNlUmVzaXplID0gZnVuY3Rpb24gKHJlc2l6ZVR5cGUsIHNwYWNlLCBldmVudCwgb25SZXNpemVFbmQpIHtcclxuICAgICAgICByZXNpemUuc3RhcnRSZXNpemUoZXZlbnQsIHJlc2l6ZVR5cGUsIHNwYWNlLCBFbmRFdmVudC5Nb3VzZSwgTW92ZUV2ZW50Lk1vdXNlLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICB5OiBlLmNsaWVudFksXHJcbiAgICAgICAgfSk7IH0sIG9uUmVzaXplRW5kKTtcclxuICAgIH07XHJcbiAgICBzdG9yZS5zdGFydFRvdWNoUmVzaXplID0gZnVuY3Rpb24gKHJlc2l6ZVR5cGUsIHNwYWNlLCBldmVudCwgb25SZXNpemVFbmQpIHtcclxuICAgICAgICByZXNpemUuc3RhcnRSZXNpemUoZXZlbnQsIHJlc2l6ZVR5cGUsIHNwYWNlLCBFbmRFdmVudC5Ub3VjaCwgTW92ZUV2ZW50LlRvdWNoLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgeDogZS50b3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgICAgIHk6IGUudG91Y2hlc1swXS5jbGllbnRZLFxyXG4gICAgICAgIH0pOyB9LCBvblJlc2l6ZUVuZCk7XHJcbiAgICB9O1xyXG4gICAgc3RvcmUuc3RhcnRNb3VzZURyYWcgPSBmdW5jdGlvbiAoc3BhY2UsIGV2ZW50LCBvbkRyYWdFbmQpIHtcclxuICAgICAgICBkcmFnLnN0YXJ0RHJhZyhldmVudCwgc3BhY2UsIEVuZEV2ZW50Lk1vdXNlLCBNb3ZlRXZlbnQuTW91c2UsIGZ1bmN0aW9uIChlKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICB4OiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WSxcclxuICAgICAgICB9KTsgfSwgb25EcmFnRW5kKTtcclxuICAgIH07XHJcbiAgICBzdG9yZS5zdGFydFRvdWNoRHJhZyA9IGZ1bmN0aW9uIChzcGFjZSwgZXZlbnQsIG9uRHJhZ0VuZCkge1xyXG4gICAgICAgIGRyYWcuc3RhcnREcmFnKGV2ZW50LCBzcGFjZSwgRW5kRXZlbnQuVG91Y2gsIE1vdmVFdmVudC5Ub3VjaCwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIHg6IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WSxcclxuICAgICAgICB9KTsgfSwgb25EcmFnRW5kKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cblxuLy8gV09SS0FST1VORCBmb3IgUmVhY3QxOCBzdHJpY3QgbW9kZVxyXG4vLyBodHRwczovL2Jsb2cuYWctZ3JpZC5jb20vYXZvaWRpbmctcmVhY3QtMTgtZG91YmxlLW1vdW50L1xyXG52YXIgdXNlRWZmZWN0T25jZSA9IGZ1bmN0aW9uIChlZmZlY3QpIHtcclxuICAgIHZhciBkZXN0cm95RnVuYyA9IHVzZVJlZigpO1xyXG4gICAgdmFyIGVmZmVjdENhbGxlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICB2YXIgcmVuZGVyQWZ0ZXJDYWxsZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoMCk7IF9hWzBdOyB2YXIgc2V0VmFsID0gX2FbMV07XHJcbiAgICBpZiAoZWZmZWN0Q2FsbGVkLmN1cnJlbnQpIHtcclxuICAgICAgICByZW5kZXJBZnRlckNhbGxlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gb25seSBleGVjdXRlIHRoZSBlZmZlY3QgZmlyc3QgdGltZSBhcm91bmRcclxuICAgICAgICBpZiAoIWVmZmVjdENhbGxlZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRlc3Ryb3lGdW5jLmN1cnJlbnQgPSBlZmZlY3QoKTtcclxuICAgICAgICAgICAgZWZmZWN0Q2FsbGVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzIGZvcmNlcyBvbmUgcmVuZGVyIGFmdGVyIHRoZSBlZmZlY3QgaXMgcnVuXHJcbiAgICAgICAgc2V0VmFsKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCArIDE7IH0pO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wIGRpZG4ndCByZW5kZXIgc2luY2UgdGhlIHVzZUVmZmVjdCB3YXMgY2FsbGVkLFxyXG4gICAgICAgICAgICAvLyB3ZSBrbm93IGl0J3MgdGhlIGR1bW15IFJlYWN0IGN5Y2xlXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyQWZ0ZXJDYWxsZWQuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZXN0cm95RnVuYy5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95RnVuYy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG59O1xyXG52YXIgUGFyZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxudmFyIERPTVJlY3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG52YXIgTGF5ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG52YXIgT3B0aW9uc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxudmFyIGN1cnJlbnRTdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XHJcbnZhciBjb21tb25Qcm9wcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gICAgYXM6IFByb3BUeXBlcy5hbnksXHJcbiAgICBjZW50ZXJDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW0NlbnRlclR5cGUuTm9uZSwgQ2VudGVyVHlwZS5WZXJ0aWNhbCwgQ2VudGVyVHlwZS5Ib3Jpem9udGFsVmVydGljYWxdKSxcclxuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNjcm9sbGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdHJhY2tTaXplOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFsbG93T3ZlcmZsb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaGFuZGxlUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Eb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uTW91c2VNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uVG91Y2hTdGFydDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblRvdWNoTW92ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblRvdWNoRW5kOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XHJcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSgwKSwgc2V0VGljayA9IF9hWzFdO1xyXG4gICAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRUaWNrKGZ1bmN0aW9uICh0aWNrKSB7IHJldHVybiB0aWNrICsgMTsgfSk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlVW5pcXVlSWQoKSB7XHJcbiAgICBpZiAoU1NSX1NVUFBPUlRfRU5BQkxFRCkge1xyXG4gICAgICAgIGlmIChSZWFjdC52ZXJzaW9uLnN0YXJ0c1dpdGgoXCIxOFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJzXCIgKyBSZWFjdC51c2VJZCgpLnJlcGxhY2UoL1xcOi9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFJlYWN0LnVuc3RhYmxlX3VzZU9wYXF1ZUlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwic1wiICsgUmVhY3QudW5zdGFibGVfdXNlT3BhcXVlSWRlbnRpZmllcigpLnJlcGxhY2UoL1xcOi9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJzXCIgKyBzaG9ydHV1aWQoKTtcclxufVxyXG5mdW5jdGlvbiB1c2VTcGFjZShwcm9wcykge1xyXG4gICAgdmFyIHN0b3JlID0gY3VycmVudFN0b3JlO1xyXG4gICAgdmFyIHVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XHJcbiAgICB2YXIgcGFyZW50ID0gUmVhY3QudXNlQ29udGV4dChQYXJlbnRDb250ZXh0KTtcclxuICAgIHZhciBsYXllciA9IFJlYWN0LnVzZUNvbnRleHQoTGF5ZXJDb250ZXh0KTtcclxuICAgIHZhciBkZWJ1ZyA9IFJlYWN0LnVzZUNvbnRleHQoT3B0aW9uc0NvbnRleHQpLmRlYnVnO1xyXG4gICAgdmFyIHVuaXF1ZUlkID0gdXNlVW5pcXVlSWQoKTtcclxuICAgIHZhciBzcGFjZUlkID0gUmVhY3QudXNlU3RhdGUocHJvcHMuaWQgfHwgdW5pcXVlSWQpWzBdO1xyXG4gICAgdmFyIGVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIHZhciByZXNpemVTZW5zb3IgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKCksIGRvbVJlY3QgPSBfYVswXSwgc2V0RG9tUmVjdCA9IF9hWzFdO1xyXG4gICAgdmFyIHNwYWNlID0gc3RvcmUuZ2V0U3BhY2Uoc3BhY2VJZCk7XHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgICBjb25zb2xlLnRhYmxlKHN0b3JlLmdldFNwYWNlcygpKTtcclxuICAgIH1cclxuICAgIHZhciBwYXJzZWRQcm9wcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHtcclxuICAgICAgICBpZDogc3BhY2VJZCxcclxuICAgICAgICB6SW5kZXg6IGNvYWxlc2NlKHByb3BzLnpJbmRleCwgbGF5ZXIpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXNwYWNlKSB7XHJcbiAgICAgICAgc3BhY2UgPSBzdG9yZS5jcmVhdGVTcGFjZShwYXJlbnQsIHBhcnNlZFByb3BzLCB1cGRhdGUpO1xyXG4gICAgICAgIHN0b3JlLmFkZFNwYWNlKHNwYWNlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0b3JlLnVwZGF0ZVNwYWNlKHNwYWNlLCBwYXJzZWRQcm9wcyk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzaXplSGFuZGxlcyA9IHVzZVNwYWNlUmVzaXplSGFuZGxlcyhzdG9yZSwgc3BhY2UpO1xyXG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50UmVmLmN1cnJlbnQgPyBlbGVtZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBuZXcgRE9NUmVjdCgpO1xyXG4gICAgICAgIHNwYWNlLmRpbWVuc2lvbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZWN0KSwge1xyXG4gICAgICAgICAgICBsZWZ0OiBNYXRoLmZsb29yKHJlY3QubGVmdCksXHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5mbG9vcihyZWN0LnRvcCksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLmZsb29yKHJlY3QucmlnaHQpLFxyXG4gICAgICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxyXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5mbG9vcihyZWN0LndpZHRoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0KSxcclxuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihyZWN0LngpLFxyXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKHJlY3QueSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RG9tUmVjdChzcGFjZS5kaW1lbnNpb24pO1xyXG4gICAgICAgIGlmIChwcm9wcy50cmFja1NpemUpIHtcclxuICAgICAgICAgICAgcmVzaXplU2Vuc29yLmN1cnJlbnQgPSBuZXcgUmVzaXplU2Vuc29yKGVsZW1lbnRSZWYuY3VycmVudCwgZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlLmRpbWVuc2lvbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZWN0KSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLmZsb29yKHNpemUud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogTWF0aC5mbG9vcihzaXplLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldERvbVJlY3Qoc3BhY2UuZGltZW5zaW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZVNlbnNvci5jdXJyZW50ICYmIHJlc2l6ZVNlbnNvci5jdXJyZW50LmRldGFjaCgpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZW1vdmVTcGFjZShzcGFjZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3BhY2U6IHNwYWNlLCByZXNpemVIYW5kbGVzOiByZXNpemVIYW5kbGVzLCBkb21SZWN0OiBkb21SZWN0LCBlbGVtZW50UmVmOiBlbGVtZW50UmVmIH07XHJcbn1cclxudmFyIHJlc2l6ZVNldHVwID0gW1xyXG4gICAgeyBpZDogXCJtbFwiLCBjbGFzc05hbWU6IFwicmVzaXplLWxlZnRcIiwgcmVzaXplVHlwZTogUmVzaXplVHlwZS5MZWZ0LCBjb25kaXRpb246IGZ1bmN0aW9uIChzcGFjZSkgeyByZXR1cm4gc3BhY2UuY2FuUmVzaXplTGVmdDsgfSB9LFxyXG4gICAgeyBpZDogXCJtclwiLCBjbGFzc05hbWU6IFwicmVzaXplLXJpZ2h0XCIsIHJlc2l6ZVR5cGU6IFJlc2l6ZVR5cGUuUmlnaHQsIGNvbmRpdGlvbjogZnVuY3Rpb24gKHNwYWNlKSB7IHJldHVybiBzcGFjZS5jYW5SZXNpemVSaWdodDsgfSB9LFxyXG4gICAgeyBpZDogXCJtdFwiLCBjbGFzc05hbWU6IFwicmVzaXplLXRvcFwiLCByZXNpemVUeXBlOiBSZXNpemVUeXBlLlRvcCwgY29uZGl0aW9uOiBmdW5jdGlvbiAoc3BhY2UpIHsgcmV0dXJuIHNwYWNlLmNhblJlc2l6ZVRvcDsgfSB9LFxyXG4gICAgeyBpZDogXCJtYlwiLCBjbGFzc05hbWU6IFwicmVzaXplLWJvdHRvbVwiLCByZXNpemVUeXBlOiBSZXNpemVUeXBlLkJvdHRvbSwgY29uZGl0aW9uOiBmdW5jdGlvbiAoc3BhY2UpIHsgcmV0dXJuIHNwYWNlLmNhblJlc2l6ZUJvdHRvbTsgfSB9LFxyXG4gICAgeyBpZDogXCJtdGxcIiwgY2xhc3NOYW1lOiBcInJlc2l6ZS10b3AtbGVmdFwiLCByZXNpemVUeXBlOiBSZXNpemVUeXBlLlRvcExlZnQsIGNvbmRpdGlvbjogZnVuY3Rpb24gKHNwYWNlKSB7IHJldHVybiBzcGFjZS5jYW5SZXNpemVUb3BMZWZ0OyB9IH0sXHJcbiAgICB7IGlkOiBcIm10clwiLCBjbGFzc05hbWU6IFwicmVzaXplLXRvcC1yaWdodFwiLCByZXNpemVUeXBlOiBSZXNpemVUeXBlLlRvcFJpZ2h0LCBjb25kaXRpb246IGZ1bmN0aW9uIChzcGFjZSkgeyByZXR1cm4gc3BhY2UuY2FuUmVzaXplVG9wUmlnaHQ7IH0gfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJtYmxcIixcclxuICAgICAgICBjbGFzc05hbWU6IFwicmVzaXplLWJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgICAgcmVzaXplVHlwZTogUmVzaXplVHlwZS5Cb3R0b21MZWZ0LFxyXG4gICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gKHNwYWNlKSB7IHJldHVybiBzcGFjZS5jYW5SZXNpemVCb3R0b21MZWZ0OyB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCJtYnJcIixcclxuICAgICAgICBjbGFzc05hbWU6IFwicmVzaXplLWJvdHRvbS1yaWdodFwiLFxyXG4gICAgICAgIHJlc2l6ZVR5cGU6IFJlc2l6ZVR5cGUuQm90dG9tUmlnaHQsXHJcbiAgICAgICAgY29uZGl0aW9uOiBmdW5jdGlvbiAoc3BhY2UpIHsgcmV0dXJuIHNwYWNlLmNhblJlc2l6ZUJvdHRvbVJpZ2h0OyB9LFxyXG4gICAgfSxcclxuXTtcclxuZnVuY3Rpb24gdXNlU3BhY2VSZXNpemVIYW5kbGVzKHN0b3JlLCBzcGFjZSkge1xyXG4gICAgdmFyIG1vdXNlSGFuZGxlcyA9IFtdO1xyXG4gICAgdmFyIHNldHVwUmVzaXplSGFuZGxlID0gZnVuY3Rpb24gKGlkLCBjbGFzc05hbWUsIHJlc2l6ZVR5cGUpIHtcclxuICAgICAgICBtb3VzZUhhbmRsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBzcGFjZS5pZCArIFwiLVwiICsgaWQsXHJcbiAgICAgICAgICAgIGtleTogaWQsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzcGFjZXMtcmVzaXplLWhhbmRsZSBcIiArIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gc3RvcmUuc3RhcnRNb3VzZVJlc2l6ZShyZXNpemVUeXBlLCBzcGFjZSwgZXZlbnQpOyB9LFxyXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gc3RvcmUuc3RhcnRUb3VjaFJlc2l6ZShyZXNpemVUeXBlLCBzcGFjZSwgZXZlbnQpOyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJlc2l6ZVNldHVwLmZvckVhY2goZnVuY3Rpb24gKHJlc2l6ZUl0ZW0pIHtcclxuICAgICAgICBpZiAocmVzaXplSXRlbS5jb25kaXRpb24oc3BhY2UpKSB7XHJcbiAgICAgICAgICAgIHNldHVwUmVzaXplSGFuZGxlKHJlc2l6ZUl0ZW0uaWQsIHJlc2l6ZUl0ZW0uY2xhc3NOYW1lLCByZXNpemVJdGVtLnJlc2l6ZVR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb3VzZUhhbmRsZXM6IG1vdXNlSGFuZGxlcyxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdXNlQ3VycmVudFNwYWNlKCkge1xyXG4gICAgdmFyIHN0b3JlID0gY3VycmVudFN0b3JlO1xyXG4gICAgdmFyIHNwYWNlSWQgPSBSZWFjdC51c2VDb250ZXh0KFBhcmVudENvbnRleHQpO1xyXG4gICAgdmFyIHNwYWNlID0gc3BhY2VJZCA/IHN0b3JlLmdldFNwYWNlKHNwYWNlSWQpIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIGRvbVJlY3QgPSBSZWFjdC51c2VDb250ZXh0KERPTVJlY3RDb250ZXh0KTtcclxuICAgIHZhciBsYXllciA9IFJlYWN0LnVzZUNvbnRleHQoTGF5ZXJDb250ZXh0KTtcclxuICAgIHZhciBvbk1vdXNlRHJhZyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlLCBvbkRyYWdFbmQpIHsgcmV0dXJuIChzcGFjZSA/IHN0b3JlLnN0YXJ0TW91c2VEcmFnKHNwYWNlLCBlLCBvbkRyYWdFbmQpIDogbnVsbCk7IH0sIFtzcGFjZUlkXSk7XHJcbiAgICB2YXIgb25Ub3VjaERyYWcgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZSwgb25EcmFnRW5kKSB7IHJldHVybiAoc3BhY2UgPyBzdG9yZS5zdGFydFRvdWNoRHJhZyhzcGFjZSwgZSwgb25EcmFnRW5kKSA6IG51bGwpOyB9LCBbc3BhY2VJZF0pO1xyXG4gICAgdmFyIG9uRm9yY2VVcGRhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiAoc3BhY2UgPyBzdG9yZS51cGRhdGVTdHlsZXMoc3BhY2UpIDogbnVsbCk7IH0sIFtzcGFjZUlkXSk7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIHg6IDAsIHk6IDAgfTtcclxuICAgIHZhciBzaXplID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRzKSwgZG9tUmVjdCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpemU6IHNpemUsXHJcbiAgICAgICAgbGF5ZXI6IGxheWVyIHx8IDAsXHJcbiAgICAgICAgc3RhcnRNb3VzZURyYWc6IG9uTW91c2VEcmFnLFxyXG4gICAgICAgIHN0YXJ0VG91Y2hEcmFnOiBvblRvdWNoRHJhZyxcclxuICAgICAgICBmb3JjZVVwZGF0ZTogb25Gb3JjZVVwZGF0ZSxcclxuICAgIH07XHJcbn1cclxudmFyIFNTUl9TVVBQT1JUX0VOQUJMRUQgPSBmYWxzZTtcclxuZnVuY3Rpb24gZW5hYmxlZFNzclN1cHBvcnQoKSB7XHJcbiAgICBTU1JfU1VQUE9SVF9FTkFCTEVEID0gdHJ1ZTtcclxufVxuXG52YXIgQ2VudGVyZWQgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3BhY2VzLWNlbnRlcmVkXCIgfSwgcHJvcHMuY2hpbGRyZW4pOyB9O1xuXG52YXIgQ2VudGVyZWRWZXJ0aWNhbGx5ID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNwYWNlcy1jZW50ZXJlZC12ZXJ0aWNhbGx5XCIgfSwgcHJvcHMuY2hpbGRyZW4pOyB9O1xuXG5mdW5jdGlvbiBhcHBseUNlbnRlcmluZyhjaGlsZHJlbiwgY2VudGVyVHlwZSkge1xyXG4gICAgc3dpdGNoIChjZW50ZXJUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBDZW50ZXJUeXBlLlZlcnRpY2FsOlxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDZW50ZXJlZFZlcnRpY2FsbHksIG51bGwsIGNoaWxkcmVuKTtcclxuICAgICAgICBjYXNlIENlbnRlclR5cGUuSG9yaXpvbnRhbFZlcnRpY2FsOlxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDZW50ZXJlZCwgbnVsbCwgY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcbnZhciBTcGFjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTcGFjZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNwYWNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VJbm5lciwgX19hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgd3JhcHBlckluc3RhbmNlOiB0aGlzIH0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3BhY2U7XHJcbn0oUmVhY3QuQ29tcG9uZW50KSk7XHJcbnZhciBTcGFjZUlubmVyID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgaWRUb1VzZSA9IChfYSA9IHByb3BzLmlkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBwcm9wcy53cmFwcGVySW5zdGFuY2VbXCJfcmVhY3Rfc3BhY2VzX3VuaXF1ZWlkXCJdO1xyXG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoU1NSX1NVUFBPUlRfRU5BQkxFRCA/IHRydWUgOiBmYWxzZSksIGluaXRpYWxSZW5kZXIgPSBfYlswXSwgc2V0SW5pdGlhbFJlbmRlciA9IF9iWzFdO1xyXG4gICAgdmFyIHVuaXF1ZUlkID0gdXNlVW5pcXVlSWQoKTtcclxuICAgIGlmICghaWRUb1VzZSkge1xyXG4gICAgICAgIHByb3BzLndyYXBwZXJJbnN0YW5jZVtcIl9yZWFjdF9zcGFjZXNfdW5pcXVlaWRcIl0gPSB1bmlxdWVJZDtcclxuICAgICAgICBpZFRvVXNlID0gcHJvcHMud3JhcHBlckluc3RhbmNlW1wiX3JlYWN0X3NwYWNlc191bmlxdWVpZFwiXTtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZSA9IHByb3BzLnN0eWxlLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLCBvbkRvdWJsZUNsaWNrID0gcHJvcHMub25Eb3VibGVDbGljaywgb25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93biwgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsIG9uTW91c2VNb3ZlID0gcHJvcHMub25Nb3VzZU1vdmUsIG9uVG91Y2hTdGFydCA9IHByb3BzLm9uVG91Y2hTdGFydCwgb25Ub3VjaE1vdmUgPSBwcm9wcy5vblRvdWNoTW92ZSwgb25Ub3VjaEVuZCA9IHByb3BzLm9uVG91Y2hFbmQsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGhhbmRsZVJlbmRlciA9IHByb3BzLmhhbmRsZVJlbmRlcjtcclxuICAgIHZhciBldmVudHMgPSB7XHJcbiAgICAgICAgb25DbGljazogb25DbGljayxcclxuICAgICAgICBvbkRvdWJsZUNsaWNrOiBvbkRvdWJsZUNsaWNrLFxyXG4gICAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcclxuICAgICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcclxuICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcclxuICAgICAgICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXHJcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXHJcbiAgICAgICAgb25Ub3VjaE1vdmU6IG9uVG91Y2hNb3ZlLFxyXG4gICAgICAgIG9uVG91Y2hFbmQ6IG9uVG91Y2hFbmQsXHJcbiAgICB9O1xyXG4gICAgdmFyIF9jID0gdXNlU3BhY2UoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBpZDogaWRUb1VzZSB9KSksIHNwYWNlID0gX2Muc3BhY2UsIGRvbVJlY3QgPSBfYy5kb21SZWN0LCBlbGVtZW50UmVmID0gX2MuZWxlbWVudFJlZiwgcmVzaXplSGFuZGxlcyA9IF9jLnJlc2l6ZUhhbmRsZXM7XHJcbiAgICBpZiAoU1NSX1NVUFBPUlRfRU5BQkxFRCAmJiAhaXNTZXJ2ZXIoKSkge1xyXG4gICAgICAgIHZhciBwcmVSZW5kZXJlZFN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHlsZV9cIiArIGlkVG9Vc2UgKyBcIl9zc3JcIik7XHJcbiAgICAgICAgaWYgKHByZVJlbmRlcmVkU3R5bGUpIHtcclxuICAgICAgICAgICAgc3BhY2Uuc3NyU3R5bGUgPSBwcmVSZW5kZXJlZFN0eWxlLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlU3R5bGVEZWZpbml0aW9uKHNwYWNlKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNwYWNlLmVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKFNTUl9TVVBQT1JUX0VOQUJMRUQpIHtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgdXNlckNsYXNzZXMgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pIDogW107XHJcbiAgICB2YXIgb3V0ZXJDbGFzc2VzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgW1wic3BhY2VzLXNwYWNlXCIsIHNwYWNlLmNoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMucmVzaXppbmc7IH0pID8gXCJzcGFjZXMtcmVzaXppbmdcIiA6IHVuZGVmaW5lZF0sIGZhbHNlKSwgW3NwYWNlLnR5cGUgPT09IFR5cGUuRml4ZWQgPyBcInNwYWNlcy1maXhlZHNpemUtbGF5b3V0XCIgOiB1bmRlZmluZWRdLCBmYWxzZSksIFtzcGFjZS50eXBlID09PSBUeXBlLlZpZXdQb3J0ID8gXCJzcGFjZXMtZnVsbHBhZ2UtbGF5b3V0XCIgOiB1bmRlZmluZWRdLCBmYWxzZSksIHVzZXJDbGFzc2VzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYyArIFwiLWNvbnRhaW5lclwiOyB9KSwgdHJ1ZSkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjOyB9KTtcclxuICAgIHZhciBpbm5lckNsYXNzZXMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIFtcInNwYWNlcy1zcGFjZS1pbm5lclwiXSwgZmFsc2UpLCB1c2VyQ2xhc3NlcywgdHJ1ZSk7XHJcbiAgICB2YXIgaW5uZXJTdHlsZSA9IHN0eWxlO1xyXG4gICAgaWYgKHNwYWNlLmhhbmRsZVBsYWNlbWVudCA9PT0gUmVzaXplSGFuZGxlUGxhY2VtZW50Lkluc2lkZSkge1xyXG4gICAgICAgIGlubmVyU3R5bGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3R5bGUpLCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHNwYWNlLmFuY2hvciA9PT0gQW5jaG9yVHlwZS5SaWdodCA/IHNwYWNlLmhhbmRsZVNpemUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBzcGFjZS5hbmNob3IgPT09IEFuY2hvclR5cGUuTGVmdCA/IHNwYWNlLmhhbmRsZVNpemUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRvcDogc3BhY2UuYW5jaG9yID09PSBBbmNob3JUeXBlLkJvdHRvbSA/IHNwYWNlLmhhbmRsZVNpemUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogc3BhY2UuYW5jaG9yID09PSBBbmNob3JUeXBlLlRvcCA/IHNwYWNlLmhhbmRsZVNpemUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgY2VudGVyZWRDb250ZW50ID0gYXBwbHlDZW50ZXJpbmcoY2hpbGRyZW4sIHByb3BzLmNlbnRlckNvbnRlbnQpO1xyXG4gICAgdmFyIG91dGVyUHJvcHMgPSBfX2Fzc2lnbih7XHJcbiAgICAgICAgaWQ6IHNwYWNlLmlkLFxyXG4gICAgICAgIHJlZjogZWxlbWVudFJlZixcclxuICAgICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3Nlcy5qb2luKFwiIFwiKSxcclxuICAgIH0sIGV2ZW50cyk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgcmVzaXplSGFuZGxlcy5tb3VzZUhhbmRsZXMubWFwKGZ1bmN0aW9uIChoYW5kbGVQcm9wcykgeyByZXR1cm4gKGhhbmRsZVJlbmRlciA9PT0gbnVsbCB8fCBoYW5kbGVSZW5kZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbmRsZVJlbmRlcihoYW5kbGVQcm9wcykpIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX19hc3NpZ24oe30sIGhhbmRsZVByb3BzKSk7IH0pLFxyXG4gICAgICAgIFNTUl9TVVBQT1JUX0VOQUJMRUQgJiYgc3BhY2Uuc3NyU3R5bGUgJiYgaW5pdGlhbFJlbmRlciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgeyBpZDogXCJzdHlsZV9cIiArIHNwYWNlLmlkICsgXCJfc3NyXCIgfSwgc3BhY2Uuc3NyU3R5bGUpLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHMuYXMgfHwgXCJkaXZcIiwgb3V0ZXJQcm9wcywgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogaW5uZXJDbGFzc2VzLmpvaW4oXCIgXCIpLCBzdHlsZTogaW5uZXJTdHlsZSB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhcmVudENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHNwYWNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheWVyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChET01SZWN0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogZG9tUmVjdCB9LCBjZW50ZXJlZENvbnRlbnQpKSkpKSkpO1xyXG59O1xuXG52YXIgcmVzaXphYmxlUHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29tbW9uUHJvcHMpLCB7XHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcclxuICAgIG9yZGVyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGFuZGxlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRvdWNoSGFuZGxlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhhbmRsZVBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtSZXNpemVIYW5kbGVQbGFjZW1lbnQuSW5zaWRlLCBSZXNpemVIYW5kbGVQbGFjZW1lbnQuT3ZlcmxheUJvdW5kYXJ5LCBSZXNpemVIYW5kbGVQbGFjZW1lbnQuT3ZlcmxheUluc2lkZV0pLFxyXG4gICAgaGFuZGxlUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG1pbmltdW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4aW11bVNpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJlc2l6ZVN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVzaXplRW5kOiBQcm9wVHlwZXMuZnVuYyxcclxufSk7XHJcbnZhciBhbmNob3JlZFByb3BzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc2l6YWJsZVByb3BzKSwge1xyXG4gICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxufSk7XHJcbnZhciBMZWZ0UmVzaXphYmxlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgc2l6ZSA9IF9hLnNpemUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcInNpemVcIl0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogVHlwZS5BbmNob3JlZCwgYW5jaG9yOiBBbmNob3JUeXBlLkxlZnQsIHBvc2l0aW9uOiB7IGxlZnQ6IDAsIHRvcDogMCwgYm90dG9tOiAwLCByaWdodFJlc2l6YWJsZTogdHJ1ZSwgd2lkdGg6IHNpemUgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuTGVmdFJlc2l6YWJsZS5wcm9wVHlwZXMgPSByZXNpemFibGVQcm9wcztcclxudmFyIExlZnQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzaXplID0gX2Euc2l6ZSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcmVzaXphYmxlID0gX2EucmVzaXphYmxlLCBjb21tb25Qcm9wcyA9IF9fcmVzdChfYSwgW1wic2l6ZVwiLCBcImNoaWxkcmVuXCIsIFwicmVzaXphYmxlXCJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgX19hc3NpZ24oe30sIGNvbW1vblByb3BzLCB7IHR5cGU6IFR5cGUuQW5jaG9yZWQsIGFuY2hvcjogQW5jaG9yVHlwZS5MZWZ0LCBwb3NpdGlvbjogeyBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHRSZXNpemFibGU6IHJlc2l6YWJsZSwgd2lkdGg6IHNpemUgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuTGVmdC5wcm9wVHlwZXMgPSBhbmNob3JlZFByb3BzO1xyXG52YXIgVG9wUmVzaXphYmxlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgc2l6ZSA9IF9hLnNpemUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcInNpemVcIl0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogVHlwZS5BbmNob3JlZCwgYW5jaG9yOiBBbmNob3JUeXBlLlRvcCwgcG9zaXRpb246IHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgYm90dG9tUmVzaXphYmxlOiB0cnVlLCBoZWlnaHQ6IHNpemUgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuVG9wUmVzaXphYmxlLnByb3BUeXBlcyA9IHJlc2l6YWJsZVByb3BzO1xyXG52YXIgVG9wID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgc2l6ZSA9IF9hLnNpemUsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHJlc2l6YWJsZSA9IF9hLnJlc2l6YWJsZSwgY29tbW9uUHJvcHMgPSBfX3Jlc3QoX2EsIFtcInNpemVcIiwgXCJjaGlsZHJlblwiLCBcInJlc2l6YWJsZVwiXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UsIF9fYXNzaWduKHt9LCBjb21tb25Qcm9wcywgeyB0eXBlOiBUeXBlLkFuY2hvcmVkLCBhbmNob3I6IEFuY2hvclR5cGUuVG9wLCBwb3NpdGlvbjogeyBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b21SZXNpemFibGU6IHJlc2l6YWJsZSwgaGVpZ2h0OiBzaXplIH0gfSksIGNoaWxkcmVuKSk7XHJcbn07XHJcblRvcC5wcm9wVHlwZXMgPSBhbmNob3JlZFByb3BzO1xyXG52YXIgUmlnaHRSZXNpemFibGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBzaXplID0gX2Euc2l6ZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwic2l6ZVwiXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UsIF9fYXNzaWduKHt9LCBwcm9wcywgeyB0eXBlOiBUeXBlLkFuY2hvcmVkLCBhbmNob3I6IEFuY2hvclR5cGUuUmlnaHQsIHBvc2l0aW9uOiB7IGJvdHRvbTogMCwgdG9wOiAwLCByaWdodDogMCwgbGVmdFJlc2l6YWJsZTogdHJ1ZSwgd2lkdGg6IHNpemUgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuUmlnaHRSZXNpemFibGUucHJvcFR5cGVzID0gcmVzaXphYmxlUHJvcHM7XHJcbnZhciBSaWdodCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHNpemUgPSBfYS5zaXplLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCByZXNpemFibGUgPSBfYS5yZXNpemFibGUsIGNvbW1vblByb3BzID0gX19yZXN0KF9hLCBbXCJzaXplXCIsIFwiY2hpbGRyZW5cIiwgXCJyZXNpemFibGVcIl0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBfX2Fzc2lnbih7fSwgY29tbW9uUHJvcHMsIHsgdHlwZTogVHlwZS5BbmNob3JlZCwgYW5jaG9yOiBBbmNob3JUeXBlLlJpZ2h0LCBwb3NpdGlvbjogeyBib3R0b206IDAsIHRvcDogMCwgcmlnaHQ6IDAsIGxlZnRSZXNpemFibGU6IHJlc2l6YWJsZSwgd2lkdGg6IHNpemUgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuUmlnaHQucHJvcFR5cGVzID0gYW5jaG9yZWRQcm9wcztcclxudmFyIEJvdHRvbVJlc2l6YWJsZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHNpemUgPSBfYS5zaXplLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJzaXplXCJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFR5cGUuQW5jaG9yZWQsIGFuY2hvcjogQW5jaG9yVHlwZS5Cb3R0b20sIHBvc2l0aW9uOiB7IGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcFJlc2l6YWJsZTogdHJ1ZSwgaGVpZ2h0OiBzaXplIH0gfSksIGNoaWxkcmVuKSk7XHJcbn07XHJcbkJvdHRvbVJlc2l6YWJsZS5wcm9wVHlwZXMgPSByZXNpemFibGVQcm9wcztcclxudmFyIEJvdHRvbSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHNpemUgPSBfYS5zaXplLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCByZXNpemFibGUgPSBfYS5yZXNpemFibGUsIGNvbW1vblByb3BzID0gX19yZXN0KF9hLCBbXCJzaXplXCIsIFwiY2hpbGRyZW5cIiwgXCJyZXNpemFibGVcIl0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBfX2Fzc2lnbih7fSwgY29tbW9uUHJvcHMsIHsgdHlwZTogVHlwZS5BbmNob3JlZCwgYW5jaG9yOiBBbmNob3JUeXBlLkJvdHRvbSwgcG9zaXRpb246IHsgYm90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgdG9wUmVzaXphYmxlOiByZXNpemFibGUsIGhlaWdodDogc2l6ZSB9IH0pLCBjaGlsZHJlbikpO1xyXG59O1xyXG5Cb3R0b20ucHJvcFR5cGVzID0gYW5jaG9yZWRQcm9wcztcblxudmFyIGN1c3RvbVByb3BzID0gb21pdChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYW5jaG9yZWRQcm9wcyksIHtcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbVHlwZS5Qb3NpdGlvbmVkLCBUeXBlLkZpbGwsIFR5cGUuQW5jaG9yZWRdKSxcclxuICAgIGFuY2hvcjogUHJvcFR5cGVzLm9uZU9mKFtBbmNob3JUeXBlLkxlZnQsIEFuY2hvclR5cGUuVG9wLCBBbmNob3JUeXBlLlJpZ2h0LCBBbmNob3JUeXBlLkJvdHRvbV0pLFxyXG4gICAgYW5jaG9yU2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgYm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByZXNpemVUeXBlczogUHJvcFR5cGVzLmFycmF5LFxyXG59KSwgXCJzaXplXCIpO1xyXG52YXIgQ3VzdG9tID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgdHlwZSA9IF9hLnR5cGUsIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBhbmNob3JTaXplID0gX2EuYW5jaG9yU2l6ZSwgYW5jaG9yID0gX2EuYW5jaG9yLCByZXNpemFibGUgPSBfYS5yZXNpemFibGUsIHJlc2l6ZVR5cGVzID0gX2EucmVzaXplVHlwZXMsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcInR5cGVcIiwgXCJsZWZ0XCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImFuY2hvclNpemVcIiwgXCJhbmNob3JcIiwgXCJyZXNpemFibGVcIiwgXCJyZXNpemVUeXBlc1wiXSk7XHJcbiAgICB2YXIgcG9zaXRpb247XHJcbiAgICB0eXBlID0gdHlwZSB8fCBUeXBlLkZpbGw7XHJcbiAgICBpZiAodHlwZSA9PT0gVHlwZS5Qb3NpdGlvbmVkKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBsZWZ0UmVzaXphYmxlOiByZXNpemVUeXBlcyAmJiAocmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5MZWZ0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCkpLFxyXG4gICAgICAgICAgICB0b3BSZXNpemFibGU6IHJlc2l6ZVR5cGVzICYmIChyZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLlRvcCkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpKSxcclxuICAgICAgICAgICAgcmlnaHRSZXNpemFibGU6IHJlc2l6ZVR5cGVzICYmIChyZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLlJpZ2h0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCkpLFxyXG4gICAgICAgICAgICBib3R0b21SZXNpemFibGU6IHJlc2l6ZVR5cGVzICYmIChyZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkJvdHRvbSkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpKSxcclxuICAgICAgICAgICAgdG9wTGVmdFJlc2l6YWJsZTogcmVzaXplVHlwZXMgJiYgKHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuVG9wTGVmdCkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpKSxcclxuICAgICAgICAgICAgdG9wUmlnaHRSZXNpemFibGU6IHJlc2l6ZVR5cGVzICYmIChyZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLlRvcFJpZ2h0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCkpLFxyXG4gICAgICAgICAgICBib3R0b21MZWZ0UmVzaXphYmxlOiByZXNpemVUeXBlcyAmJiAocmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5Cb3R0b21MZWZ0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCkpLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodFJlc2l6YWJsZTogcmVzaXplVHlwZXMgJiYgKHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuQm90dG9tUmlnaHQpIHx8IHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuQWxsKSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuTGVmdCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgbGVmdDogMCwgdG9wOiAwLCBib3R0b206IDAsIHdpZHRoOiBhbmNob3JTaXplLCByaWdodFJlc2l6YWJsZTogcmVzaXphYmxlIH07XHJcbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLkFuY2hvcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbmNob3IgPT09IEFuY2hvclR5cGUuUmlnaHQpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSB7IHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgd2lkdGg6IGFuY2hvclNpemUsIGxlZnRSZXNpemFibGU6IHJlc2l6YWJsZSB9O1xyXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5BbmNob3JlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYW5jaG9yID09PSBBbmNob3JUeXBlLlRvcCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgaGVpZ2h0OiBhbmNob3JTaXplLCBib3R0b21SZXNpemFibGU6IHJlc2l6YWJsZSB9O1xyXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5BbmNob3JlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYW5jaG9yID09PSBBbmNob3JUeXBlLkJvdHRvbSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHsgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCwgaGVpZ2h0OiBhbmNob3JTaXplLCB0b3BSZXNpemFibGU6IHJlc2l6YWJsZSB9O1xyXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5BbmNob3JlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5GaWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IHR5cGUsIGFuY2hvcjogYW5jaG9yLCBwb3NpdGlvbjogcG9zaXRpb24gfSksIGNoaWxkcmVuKSk7XHJcbn07XHJcbkN1c3RvbS5wcm9wVHlwZXMgPSBjdXN0b21Qcm9wcztcblxudmFyIEZpbGwgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgdHlwZTogVHlwZS5GaWxsLCBwb3NpdGlvbjogeyBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAgfSB9KSwgcHJvcHMuY2hpbGRyZW4pKTsgfTtcclxuRmlsbC5wcm9wVHlwZXMgPSBjb21tb25Qcm9wcztcblxudmFyIEZpeGVkID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBjb21tb25Qcm9wcyA9IF9fcmVzdChfYSwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJjaGlsZHJlblwiXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2UsIF9fYXNzaWduKHt9LCBjb21tb25Qcm9wcywgeyB0eXBlOiBUeXBlLkZpeGVkLCBwb3NpdGlvbjogeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0gfSksIGNoaWxkcmVuKSk7XHJcbn07XHJcbkZpeGVkLnByb3BUeXBlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb21tb25Qcm9wcyksIHtcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxyXG59KTtcblxudmFyIExheWVyID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExheWVyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogcHJvcHMuekluZGV4IH0sIHByb3BzLmNoaWxkcmVuKTsgfTtcclxuTGF5ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XG5cbnZhciBQb3NpdGlvbmVkID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgbGVmdCA9IF9hLmxlZnQsIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHJlc2l6YWJsZSA9IF9hLnJlc2l6YWJsZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImxlZnRcIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicmVzaXphYmxlXCJdKTtcclxuICAgIHZhciByZXNpemVUeXBlcyA9IHJlc2l6YWJsZSB8fCBbXTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IHR5cGU6IFR5cGUuUG9zaXRpb25lZCwgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgIGxlZnRSZXNpemFibGU6IHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuTGVmdCkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpLFxyXG4gICAgICAgICAgICB0b3BSZXNpemFibGU6IHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuVG9wKSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCksXHJcbiAgICAgICAgICAgIHJpZ2h0UmVzaXphYmxlOiByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLlJpZ2h0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJlc2l6YWJsZTogcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5Cb3R0b20pIHx8IHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuQWxsKSxcclxuICAgICAgICAgICAgdG9wTGVmdFJlc2l6YWJsZTogcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5Ub3BMZWZ0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCksXHJcbiAgICAgICAgICAgIHRvcFJpZ2h0UmVzaXphYmxlOiByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLlRvcFJpZ2h0KSB8fCByZXNpemVUeXBlcy5pbmNsdWRlcyhSZXNpemVUeXBlLkFsbCksXHJcbiAgICAgICAgICAgIGJvdHRvbUxlZnRSZXNpemFibGU6IHJlc2l6ZVR5cGVzLmluY2x1ZGVzKFJlc2l6ZVR5cGUuQm90dG9tTGVmdCkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodFJlc2l6YWJsZTogcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5Cb3R0b21SaWdodCkgfHwgcmVzaXplVHlwZXMuaW5jbHVkZXMoUmVzaXplVHlwZS5BbGwpLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIH0gfSksIHByb3BzLmNoaWxkcmVuKSk7XHJcbn07XHJcblBvc2l0aW9uZWQucHJvcFR5cGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbW1vblByb3BzKSwge1xyXG4gICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgYm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByZXNpemFibGU6IFByb3BUeXBlcy5hcnJheSxcclxufSk7XG5cbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2UgdXNlQ3VycmVudFNwYWNlKCkgaG9vayBpbnN0ZWFkXHJcbiAqL1xyXG52YXIgSW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIGRvbVJlY3QgPSBSZWFjdC51c2VDb250ZXh0KERPTVJlY3RDb250ZXh0KTtcclxuICAgIGlmIChkb21SZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKGRvbVJlY3QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCB4OiAwLCB5OiAwLCB0b0pTT046IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiXCI7IH0gfSk7XHJcbn07XG5cbnZhciBWaWV3UG9ydCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgY29tbW9uUHJvcHMgPSBfX3Jlc3QoX2EsIFtcImxlZnRcIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImNoaWxkcmVuXCJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgX19hc3NpZ24oe30sIGNvbW1vblByb3BzLCB7IHR5cGU6IFR5cGUuVmlld1BvcnQsIHBvc2l0aW9uOiB7IGxlZnQ6IGxlZnQgfHwgMCwgdG9wOiB0b3AgfHwgMCwgcmlnaHQ6IHJpZ2h0IHx8IDAsIGJvdHRvbTogYm90dG9tIHx8IDAgfSB9KSwgY2hpbGRyZW4pKTtcclxufTtcclxuVmlld1BvcnQucHJvcFR5cGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbW1vblByb3BzKSwge1xyXG4gICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgYm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbn0pO1xuXG52YXIgU1NSID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcclxuICAgIGVuYWJsZWRTc3JTdXBwb3J0KCk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBjc3NfMjQ4eiB9IH0pLFxyXG4gICAgICAgIGNoaWxkcmVuKSk7XHJcbn07XG5cbnZhciBPcHRpb25zID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgb3B0cyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IG9wdHMgfSwgY2hpbGRyZW4pO1xyXG59O1xuXG5leHBvcnQgeyBBbmNob3JUeXBlLCBCb3R0b20sIEJvdHRvbVJlc2l6YWJsZSwgQ2VudGVyVHlwZSwgQ2VudGVyZWQsIENlbnRlcmVkVmVydGljYWxseSwgQ3VzdG9tLCBGaWxsLCBGaXhlZCwgSW5mbywgTGF5ZXIsIExlZnQsIExlZnRSZXNpemFibGUsIE9wdGlvbnMsIFBvc2l0aW9uZWQsIFJlc2l6ZUhhbmRsZVBsYWNlbWVudCwgUmVzaXplVHlwZSwgUmlnaHQsIFJpZ2h0UmVzaXphYmxlLCBTU1IsIFRvcCwgVG9wUmVzaXphYmxlLCBUeXBlLCBWaWV3UG9ydCwgYW5jaG9yZWRQcm9wcywgZW5hYmxlZFNzclN1cHBvcnQsIHJlc2l6YWJsZVByb3BzLCB1c2VDdXJyZW50U3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///93822
`)}}]);
