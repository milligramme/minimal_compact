// doc.js 

/**
 * @param {Boolean} addnew If true when no document create document
 * @param {Boolean} visible Default is true, if false document create hidden mode
 * @returns {Object} document
 */
function def_doc (addnew, visible) {
  var doc;
  if (visible === undefined) {visible = true;};
  if (!addnew) {
    doc = app.documents[0];
  }
  else{
    doc = app.documents.length === 0 ? app.documents.add(visible): app.documents[0];
  }
  return doc;
}

/**
 * @param {Object} doc Document
 * @returns {Object} [width, height]
 * @example
 * $.writeln(get_doc_info(doc_obj).toSource());
 * $.writeln(get_doc_info(doc_obj)['size']);
 */
function get_doc_info (doc) {
  var doc_pref = doc.documentPreferences;
  var doc_info = {};
  doc_info['size'] = [doc_pref.pageWidth, doc_pref.pageHeight];
  doc_info['facing'] = doc_pref.facingPages;
  doc_info['colomn_dir'] = doc_pref.columnDirection === HorizontalOrVertical.HORIZONTAL ? "H" : "V"; 
  doc_info['pages'] = doc_pref.pagesPerDocument;
  switch(doc_pref.pageBinding){
    case 1819570786: /*PageBindingOptions.LEFT_TO_RIGHT*/ doc_info['binding'] = "L";break;
    case 1920232546: /*PageBindingOptions.RIGHT_TO_LEFT*/doc_info['binding'] = "R";break;
    default: /*PageBindingOptions.DEFAULT_VALUE*/doc_info['binding'] = "D"; break;
  }  
  return doc_info;
}
