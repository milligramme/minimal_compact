// style.js

/**
 * @param {Object} target Parent Object App, Document
 * @param {String} style_type characterStyles, paragraphStyles,,.,
 * @param {String} name Name to find
 * @returns {Array} [True, parent] if exist, [false, null] if not
 * @example
 * var result = [
 *   check_style_exist (app.documents[0],'characterStyles','bold'),
 *   check_style_exist (app.documents[0],'paragraphStyles','base'),
 *   check_style_exist (app.documents[0],'objectStyles','anchor'),
 *   check_style_exist (app.documents[0],'tableStyles','main'),
 *   check_style_exist (app.documents[0],'cellStyles','head')
 * ];
 * $.writeln(result);
 *
 */
function check_style_exist (target, style_type, name) {
  // if not belongs to style group
  var exist;
  exist = (target[style_type].itemByName(name) !== null);
  
  // if not exist in root, search in group
  if ( !exist ) {
    var style_group = style_type.replace(/Styles/,"StyleGroups");
    if(target[style_group].length === 0) return;
    var style_ingroup = target[style_group].everyItem()[style_type].itemByName(name);
    if (style_ingroup !== null) {
      return [true, style_ingroup.parent.name];
    }
    else {
      return [false, null];
    }
  };
  
  return [exist, "root"];
}
