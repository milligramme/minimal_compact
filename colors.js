/**
 * color add
 * 
 * @param {Object} target Document or Application
 * @param {String} mode PROCESS/SPOT/REGISTRATION
 * @param {String} space CMYK/RGB/LAB
 * @param {Array} val 3 or 4 length array of number
 * @param {Name} s_name Swatch Name if undefined, calculate with space and val
 * 
 * @returns {Object} see below
 * if create return Color Object
 * if already exist in same name return Swatch Object
 * if parameter is invalid return Undefined
 */
function add_color_swatch (target, mode, space, val, s_name) {
  mode_u = mode.toUpperCase();
  space_u = space.toUpperCase();
  // 
  if (s_name === undefined) {
    var spa;
    switch(space_u){
      case "CMYK":
      case "RGB":
        spa = space_u.split(''); break;
      case "LAB":
        spa = space_u.toLowerCase().split('');
        spa[0] = spa[0].toUpperCase();
        break;
      default: ; break;
    }
    var arr = [];
    for (var i=0, iL=val.length; i < iL ; i++) {
      arr.push(spa[i] +"="+ val[i]);
    };
    s_name = arr.join(' ');
  };
  if (val.length !== arr.length) {return};
  
  // TODO validate value
  // cmyk 0...100 .each
  // rgb 0...255 .each
  // lab 0...100,-127...127,-127...127
  
  // if already exist in same name
  if (target.swatches.item(s_name) !== null) {return target.swatches.item(s_name);};
  var c = target.colors.add({
    model:ColorModel[mode_u], 
    space:ColorSpace[space_u], 
    colorValue:val, 
    name:s_name});
  return c;
}
