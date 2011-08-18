// logging.js

/**
 * @param {String} file_path  
 * @returns {Array} Return array of source text
 */
function import_source (file_path) {
  var file_obj = new File(file_path);
  file_obj.encoding = "UTF-8";
  file_obj.open('r');
  var ar = [];
  if (file_obj) {
    while(!file_obj.eof){
      ar.push(file_obj.readln());
    }
  };
  file_obj.close();
  return ar
}
/**
 * @param {String} file_path File Path 
 * @param {String} content Write
 * @param {String} mode 'w' writemode, 'e' editmode
 */
function export_source (file_path, content, mode) {
  if (mode === undefined) {mode = 'w'};
  if (mode === 'w' || mode === 'e') {
    var file_obj = new File(file_path);
    file_obj.encoding = "UTF-8";
    file_obj.open(mode);
    if (mode === 'e') {
      file_obj.seek(0,2);
    };
    if (file_obj) {
      file_obj.write(content);
    };
    file_obj.close();
  };
}