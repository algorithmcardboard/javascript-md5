$("document").ready(function(){
  console.log('in doc ready ', $('#imageFile'));
  var element = $('#imageFile');
  var rawElement = element[0];
  element.on('change', function(event){
    var file = rawElement.files[0];
    var reader = new FileReader();
    reader.onload = function(data){
      console.log('data is ', data);
      var binary = data.target.result;
      console.time('md5');
      console.log(faultylabs.MD5(binary));
      console.timeEnd('md5');
    };
    reader.readAsArrayBuffer(file);
  });
});
