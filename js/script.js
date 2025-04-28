
// ページ読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {

    // アニメーション用の図形を生成するJavaScript
    var container = document.getElementById("background-animation-container");
    var shapes = ["circle", "square", "triangle"];

    for (var i = 0; i < 30; i++) {
        var shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        var shape = document.createElement("div");
        shape.classList.add("ani-shape", "ani-" + shapeType);

        var size = (Math.floor(Math.random() * 6) + 3) * 30; // サイズランダム（90〜180px）
        var pastelColor = getRandomPastelColor(); // パステルカラーを取得

        if (shapeType === "triangle") {
            shape.style.borderLeft = size / 2 + "px solid transparent";
            shape.style.borderRight = size / 2 + "px solid transparent";
            shape.style.borderBottom = size + "px solid " + pastelColor;
        } else {
            shape.style.width = size + "px";
            shape.style.height = size + "px";
            shape.style.backgroundColor = pastelColor;
        }

        shape.style.left = Math.floor(Math.random() * 100) + "%";
        shape.style.animationDuration = (Math.random() * 8 + 12) + "s"; // 浮遊速度（12〜20秒）
        shape.style.animationDelay = Math.floor(Math.random() * 5) + "s";

        // 回転アニメーション速度をランダムにする
        shape.style.animationDuration = shape.style.animationDuration + ", " + (Math.random() * 5 + 2) + "s"; // 回転速度

        container.appendChild(shape);
    }

    // MENU
    const menuToggle = document.getElementById('menuToggle');
            const closeMenu = document.getElementById('closeMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            
            menuToggle.addEventListener('click', function() {
                menuOverlay.classList.add('active');
            });
            
            closeMenu.addEventListener('click', function() {
                menuOverlay.classList.remove('active');
            });
            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    
                    // Close menu if open
                    menuOverlay.classList.remove('active');
                });
            });
            
            


    // // FAQトグル機能
    // function setupFAQToggle() {
    //     const questions = document.querySelectorAll('.faq-question');
    //     questions.forEach(question => {
    //         question.addEventListener('click', () => {
    //             const answer = question.nextElementSibling;
    //             if (answer.style.display === 'block') {
    //                 answer.style.display = 'none';
    //             } else {
    //                 answer.style.display = 'block';
    //             }
    //         });
    //     });
    // }

    // 初期化関数を実行

    setupFAQToggle();
});

// 背景図形パステルカラーをランダム生成
function getRandomPastelColor() {
    var hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`; // 彩度 70%、明度 80% で柔らかい色合いに
}