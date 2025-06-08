// animation.js
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // h2を表示（サイト名）
  tl.to(".main-header h2", {
    opacity : 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })

  // h3（INDEX）を表示
  .to(".main-header h3", {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, "-=0.5") // 前のアニメーションと0.5秒重ねる

  // 各リンク（h4）を順番に表示
  .to(".main-header h4", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2 // 順に出現
  }, "-=0.4");
});

// スクロールトリガーを使用して、ストーリー画像のアニメーションを設定
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".story img").forEach((img, i) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%", // 要素が画面に入ったとき
      toggleActions: "play none none none"
    },
    opacity:1,
    y: 50,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out"
  });
});

// 横スクロールする背景 テキスト（無限ループ）
gsap.to(".scroll-text", {
  x: "-100%",         // 画面外まで移動
  duration: 60,       // ゆっくり動かす（数字を変えるとスピード変わる）
  ease: "none",       // 均一な速度で
  repeat: -1          // 無限ループ
});
