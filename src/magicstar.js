$(function(){
  
  //增加响应式支持
  $('head').append('<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">');
  
  //设置顶部菜单栏
  $.each($('#navList li a'), function(i, a){
    var $a = $(a);
    $a.attr('data-hover', $a.text());
  });
});