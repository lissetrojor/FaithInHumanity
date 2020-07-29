fucntion splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: 200%,
    triggerElement: '.titletext',
    triggerHook: 0
  })
  .setPin('.titletext')
  .addIndicators()
  .addTo(controller);
}
splitScroll();
