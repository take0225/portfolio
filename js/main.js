$(function() {

 /*--------ハンバーガーメニュー----------------*/

 $('.hamburger').on('click', function() {
     $('#header').toggleClass("open");
 });
 
  // リンクをクリックした時にメニューを閉じる
 $('#nav a').on('click',function() {
     $('#header').removeClass("open");
 });


 /*-----------topページへ戻るボタン-----------------*/


 var pagetop = $('#page-top');   
 pagetop.hide();
 $(window).scroll(function () {
     if ($(this).scrollTop() > 700) {  //100pxスクロールしたら表示
         pagetop.fadeIn();
     } else {
         pagetop.fadeOut();
     }
 });
 pagetop.click(function () {
     $('body,html').animate({
         scrollTop: 0
     }, 500); //0.5秒かけてトップへ移動
     return false;
 });


 /*------ページ内リンクスクロール-----*/

   // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
   $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 500;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

});
