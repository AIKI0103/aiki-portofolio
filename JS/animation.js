window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;

  const tl = gsap.timeline();

  // h2（サイト名）は常にアニメーション
  tl.to(".main-header h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  // PCのときだけメニューアニメーション実行
  if (!isMobile) {
    tl.to(
      ".main-header h3",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.5"
    ).to(
      ".main-header li",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
      },
      "-=0.4"
    );
  }
});

// スクロールトリガー登録
gsap.registerPlugin(ScrollTrigger);

// ストーリー画像のフェードインアニメーション
gsap.utils.toArray(".story img").forEach((img, i) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 50,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out",
  });
});

// 横スクロール背景テキスト（無限ループ）
gsap.to(".scroll-text", {
  x: "-100%",
  duration: 60,
  ease: "none",
  repeat: -1,
});
