var esc = require('xml-escape');

module.exports.attr = attr;
module.exports.tagClose = tagClose;
module.exports.tag = tag;

/**
 * @param {array} _ an array of attributes
 * @returns {string}
 */
function attr(attributes) {
    if (!Object.keys(attributes).length) return '';
    return ' ' + Object.keys(attributes).map(function(key) {
        return key + '="' + esc(attributes[key]) + '"';
    }).join(' ');
}

/**
 * @param {string} el element name
 * @param {array} attributes array of pairs
 * @returns {string}
 */
function tagClose(el, attributes) {
    return '<' + el + attr(attributes) + '/>';
}

/**
 * @param {string} el element name
 * @param {string} contents innerXML
 * @param {array} attributes array of pairs
 * @returns {string}
 */
function tag(el, attributes, contents) {
    if (Array.isArray(attributes) || typeof attributes === 'string') {
        contents = attributes;
        attributes = {};
    }
    if (Array.isArray(contents)) contents = '\n' + contents.map(function(content) {
        return '  ' + content;
    }).join('\n') + '\n';
    return '<' + el + attr(attributes) + '>' + contents + '</' + el + '>';
}
