<?php include_once("./inc/dochead.php"); ?>
<link rel="stylesheet" href="./assets/css/sub.css">
</head>
<body>
    <?php include_once("./inc/header.php"); ?>
    <!-- Content -->
    <main id="content" class="card-event">
        <div class="page-header">
            <div class="container">
                <img src="./assets/images/sub/img_card_header.png" class="visible-lg" alt="">
                <img src="./assets/images/sub/img_card_header_sm.png" class="visible-sm" alt="">
            </div>
        </div>
        <div class="event-wrap">
            <div class="container">
                <p>
                    화면 속 카드를 뒤집어 같은 그림의 방울이를 찾아보세요.<br>
                    3쌍의 방울이 카드를 모두 짝지으면 성공!<br>
                    정답을 모두 맞춘 후 상품 받을 정보를 입력하면 이벤트에 자동 응모됩니다.
                </p>
                <div class="event">
                    <div class="card">
                        <ul class="cards">
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card01.png" alt="">
                                </div>
                            </li>
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card02.png" alt="">
                                </div>
                            </li>
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card03.png" alt="">
                                </div>
                            </li>
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card03.png" alt="">
                                </div>
                            </li>
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card01.png" alt="">
                                </div>
                            </li>
                            <li>
                                <img src="./assets/images/sub/img_card_frame.png" alt="">
                                <div class="view front">
                                    <img src="./assets/images/sub/img_card_font.png" alt="">
                                </div>
                                <div class="view back">
                                    <img src="./assets/images/sub/img_card02.png" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-area">
                        <a href="#" class="btn-event">이벤트 응모하기</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php include_once("./inc/footer.php"); ?>
    <?php include_once("./inc/docfoot.php"); ?>
    <script>
        const cards = document.querySelectorAll(".cards li");
        const content = document.querySelector("#content");

        let cardOne = null;
        let cardTwo = null;
        let disableDeck = false;
        let matchedPairs = 0;
        const totalPairs = cards.length / 2;

        function flipCard(e) {
            const clickedCard = e.currentTarget; // ⭐ li만 받기

            if (disableDeck) return;
            if (clickedCard === cardOne) return;

            clickedCard.classList.add("flip");

            if (!cardOne) {
                cardOne = clickedCard;
                return;
            }

            cardTwo = clickedCard;
            disableDeck = true;

            const cardOneImg = cardOne.querySelector(".back img").src;
            const cardTwoImg = cardTwo.querySelector(".back img").src;

            checkMatch(cardOneImg, cardTwoImg);
        }

        function checkMatch(img1, img2) {
            if (img1 === img2) {
                matchedPairs++;

                cardOne.removeEventListener("click", flipCard);
                cardTwo.removeEventListener("click", flipCard);

                resetTurn();

                // 🎉 모든 카드 매칭 성공
                if (matchedPairs === totalPairs) {
                    setTimeout(() => {
                        alert("🎉 성공! \n  이벤트 응모하기 버튼을 눌러주세요!");
                        if (content) {
                            content.classList.add("success"); // ✅ 여기
                        }
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    cardOne.classList.add("shake");
                    cardTwo.classList.add("shake");
                }, 300);

                setTimeout(() => {
                    cardOne.classList.remove("shake", "flip");
                    cardTwo.classList.remove("shake", "flip");
                    resetTurn();
                }, 600);
            }
        }

        function resetTurn() {
            cardOne = null;
            cardTwo = null;
            disableDeck = false;
        }

        cards.forEach(card => {
            card.addEventListener("click", flipCard);
        });
    </script>
</body>
</html>