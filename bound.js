// bound.js

/**
 * @param {Object} obj FrameObject(TextFrame, Rectangle, Oval, Polygon...) 
 * @param {String} mode v:visibleBounds, g:geometricBounds
 * @returns {Array} [y1,x1,y2,x2]
 */
function get_bound (obj, mode) {
  if (!mode.match(/[gv]/)) {return};
  var bounds = mode === "v" ? obj.visibleBounds : obj.geometricBounds;
  return bounds;
}

/**
 * @param {Object} obj FrameObject(TextFrame, Rectangle, Oval, Polygon...) 
 * @param {String} mode v:visibleBounds, g:geometricBounds
 * @returns {Array} [width, height] 
 */
function get_size (obj, mode) {
  var tmp_bon = get_bound (obj, mode);
  if (tmp_bon === undefined) {return};
  var w = tmp_bon[3] - tmp_bon[1];
  var h = tmp_bon[2] - tmp_bon[0];
  return [w, h];
}

/**
 * @param {Object} obj FrameObject
 * @param {Number} value plus value to increase, minus value to decrease
 */
function inc_top (obj, value) {
  var bounds = get_bound(obj, 'g');
  obj.geometricBounds = [ bounds[0] - value, bounds[1], bounds[2], bounds[3] ];
}
/**
 * @param {Object} obj FrameObject
 * @param {Number} value plus value to increase, minus value to decrease
 */
function inc_left (obj, value) {
  var bounds = get_bound(obj, 'g');
  obj.geometricBounds = [ bounds[0], bounds[1] - value, bounds[2], bounds[3] ];
}
/**
 * @param {Object} obj FrameObject
 * @param {Number} value plus value to increase, minus value to decrease
 */
function inc_bottom (obj, value) {
  var bounds = get_bound(obj, 'g');
  obj.geometricBounds = [ bounds[0], bounds[1], bounds[2] + value, bounds[3] ];
}
/**
 * @param {Object} obj FrameObject
 * @param {Number} value plus value to increase, minus value to decrease
 */
function inc_right (obj, value) {
  var bounds = get_bound(obj, 'g');
  obj.geometricBounds = [ bounds[0], bounds[1], bounds[2], bounds[3] + value ];
}
