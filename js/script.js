
// ページ読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function () {

    // アニメーション用の図形を生成するJavaScript
    var container = document.getElementById("background-animation-container");
var shapes = ["image"];

// ハイビスカス画像の配列（好きなだけ追加OK）
var hibiscusImages = [
    "img/hibiscus1.png",
    "img/hibiscus2.png",
    "img/hibiscus3.png",
    "img/hibiscus4.png",
    "img/hibiscus5.png",
    "img/hibiscus6.png",
    "img/hibiscus7.png"
];

for (var i = 0; i < 30; i++) {
    var shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    var shape;
    var size = (Math.floor(Math.random() * 6) + 3) * 30; // 90〜180px
    var pastelColor = getRandomPastelColor();

    if (shapeType === "image") {
        shape = document.createElement("img");
        var randomImg = hibiscusImages[Math.floor(Math.random() * hibiscusImages.length)];
        shape.src = randomImg;
        shape.classList.add("ani-shape", "ani-image");
        shape.style.width = size + "px";
        shape.style.height = size + "px";
    } else {
        shape = document.createElement("div");
        shape.classList.add("ani-shape", "ani-" + shapeType);

        if (shapeType === "triangle") {
            shape.style.borderLeft = size / 2 + "px solid transparent";
            shape.style.borderRight = size / 2 + "px solid transparent";
            shape.style.borderBottom = size + "px solid " + pastelColor;
        } else {
            shape.style.width = size + "px";
            shape.style.height = size + "px";
            shape.style.backgroundColor = pastelColor;
        }
    }

    shape.style.left = Math.floor(Math.random() * 100) + "%";
    shape.style.animationDuration = (Math.random() * 8 + 12) + "s, " + (Math.random() * 5 + 2) + "s";
    shape.style.animationDelay = Math.floor(Math.random() * 5) + "s";

    container.appendChild(shape);
}


    // var container = document.getElementById("background-animation-container");
    // var shapes = ["circle", "square", "triangle"];

    // for (var i = 0; i < 30; i++) {
    //     var shapeType = shapes[Math.floor(Math.random() * shapes.length)];

    //     var shape = document.createElement("div");
    //     shape.classList.add("ani-shape", "ani-" + shapeType);

    //     var size = (Math.floor(Math.random() * 6) + 3) * 30; // サイズランダム（90〜180px）
    //     var pastelColor = getRandomPastelColor(); // パステルカラーを取得

    //     if (shapeType === "triangle") {
    //         shape.style.borderLeft = size / 2 + "px solid transparent";
    //         shape.style.borderRight = size / 2 + "px solid transparent";
    //         shape.style.borderBottom = size + "px solid " + pastelColor;
    //     } else {
    //         shape.style.width = size + "px";
    //         shape.style.height = size + "px";
    //         shape.style.backgroundColor = pastelColor;
    //     }

    //     shape.style.left = Math.floor(Math.random() * 100) + "%";
    //     shape.style.animationDuration = (Math.random() * 8 + 12) + "s"; // 浮遊速度（12〜20秒）
    //     shape.style.animationDelay = Math.floor(Math.random() * 5) + "s";

    //     // 回転アニメーション速度をランダムにする
    //     shape.style.animationDuration = shape.style.animationDuration + ", " + (Math.random() * 5 + 2) + "s"; // 回転速度

    //     container.appendChild(shape);
// }

    // MENU
    const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

menuToggle.addEventListener('click', function () {
    menuOverlay.classList.add('active');
});

closeMenu.addEventListener('click', function () {
    menuOverlay.classList.remove('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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



// 初期化関数を実行

setupFAQToggle();
});

// 背景図形パステルカラーをランダム生成
function getRandomPastelColor() {
    var hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`; // 彩度 70%、明度 80% で柔らかい色合いに
}

// メール問い合わせ送信後のメッセージ
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mailForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function (event) {
        // デフォルトの送信をキャンセル
        event.preventDefault();

        // 確認ダイアログを表示
        if (confirm('本当に送信してもよろしいですか？')) {
            // フォームデータを取得
            const formData = new FormData(form);

            // フォームを非表示にし、送信中メッセージを表示することもできます
            form.style.display = 'none';
            const loadingMessage = document.createElement('div');
            // loadingMessage.textContent = '送信中...';
            form.parentNode.insertBefore(loadingMessage, confirmationMessage);

            // Google Apps Scriptにフォームデータを送信
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        // 送信成功
                        form.reset(); // フォームをリセット
                        confirmationMessage.style.display = 'block'; // 成功メッセージを表示

                        // 必要に応じて、数秒後にメッセージを非表示にする
                        // setTimeout(() => {
                        //     confirmationMessage.style.display = 'none';
                        // }, 5000);
                    } else {
                        throw new Error('送信に失敗しました');
                    }
                })
                .catch(error => {
                    alert('エラーが発生しました: ' + error.message);
                });
        }
    });
});
