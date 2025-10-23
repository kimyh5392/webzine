<?php include_once("./inc/dochead.php"); ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<link rel="stylesheet" href="./assets/css/main.css">
</head>
<body>
    <!-- header -->
    <?php include_once("./inc/header.php"); ?>
    
    <!-- content -->
    <main id="content">
        
        <!-- jumbotron -->
        <div class="jumbotron">
            <div class="vol">
                <div class="inner">
                    <p><b>Vol.250</b> January 2026</p>
                </div>
            </div>
            <div class="jumbo-slider swiper">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide slide-1">
                        <div class="backdrop" style="background-image: url(./assets/images/main/bg_jumbo01.png);"></div>
                        <div class="container-fluid">
                            <div class="v-align">
                                <small>View &amp; Voices</small>
                                <h3><b>AI 에이전트 기술,</b><br> 어디까지 왔나?</h3>
                                <p>AI 에이전트는 지금 어디까지 왔고,<br> 우리는 어떤 미래를 준비해야 할까?</p>
                                <div class="btn-area">
                                    <a href="sub01.php" class="btn-more">자세히 보기 →</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide slide-2">
                        <div class="backdrop" style="background-image: url(./assets/images/main/bg_jumbo02.png);"></div>
                        <div class="container-fluid">
                            <div class="v-align">
                                <small>궁금한 이야기 Why?</small>
                                <h3><b>트럼프의 관세 집착,</b><br> 무엇을 노리는가?</h3>
                                <p>트럼프 전 미국 대통령의 관세 집착은 단순한 무역정책이 아니라,<br>  미국 사회의 불안과 국제질서의 균열을 상징한다.</p>
                                <div class="btn-area">
                                    <a href="javascript:;" class="btn-more">자세히 보기 →</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide slide-3">
                        <div class="backdrop" style="background-image: url(./assets/images/main/bg_jumbo03.png);"></div>
                        <div class="container-fluid">
                            <div class="v-align">
                                <small>Flow</small>
                                <h3><b>KOREA AI</b><br> 글로벌 3강을 향한 도전</h3>
                                <p>‘AI 글로벌 3강.’ 이재명 정부가 내세운 비전</p>
                                <div class="btn-area">
                                    <a href="javascript:;" class="btn-more">자세히 보기 →</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide slide-4">
                        <div class="backdrop" style="background-image: url(./assets/images/main/bg_jumbo04.png);"></div>
                        <div class="container-fluid">
                            <div class="v-align">
                                <small>Info</small>
                                <h3>It’s Hot,<br> <b>AI AGENT</b></h3>
                                <p>우리는 어떤 미래를 준비해야 할까?</p>
                                <div class="btn-area">
                                    <a href="javascript:;" class="btn-more">자세히 보기 →</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="controls">
                <button type="button" class="jumbo-prev"></button>
                <!-- jumbo-pagination -->
                <div class="jumbo-pagination"></div>
                <button type="button" class="jumbo-next"></button>
            </div>
        </div>
        
        <!-- industry -->
        <section class="industry effect">
            <div class="container-fluid">
                <div class="section-header">
                    <h3>Industry Spotlight</h3>
                </div>
                <div class="section-content">
                    <ul>
                        <li>
                            <a href="#">
                                <div class="backdrop" style="background-image: url(./assets/images/main/bg_industry_list01.png);"></div>
                                <img src="./assets/images/main/img_industry_list01.png" alt="" class="visible-sm">
                                <div class="summary">
                                    <div class="inner">
                                        <small>Info</small>
                                        <h3>It’s Hot, AI 에이전트!</h3>
                                        <div class="more"></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="backdrop" style="background-image: url(./assets/images/main/bg_industry_list02.png);"></div>
                                <img src="./assets/images/main/img_industry_list02.png" alt="" class="visible-sm">
                                <div class="summary">
                                    <div class="inner">
                                        <small>View &amp; Voices</small>
                                        <h3>AI 에이전트 산업의 지능을 확장하다</h3>
                                        <div class="more"></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="backdrop" style="background-image: url(./assets/images/main/bg_industry_list03.png);"></div>
                                <img src="./assets/images/main/img_industry_list03.png" alt="" class="visible-sm">
                                <div class="summary">
                                    <div class="inner">
                                        <small>Flow</small>
                                        <h3>한국 AI,<br> 글로벌 3강을 향한 도전</h3>
                                        <div class="more"></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="backdrop" style="background-image: url(./assets/images/main/bg_industry_list04.png);"></div>
                                <img src="./assets/images/main/img_industry_list04.png" alt="" class="visible-sm">
                                <div class="summary">
                                    <div class="inner">
                                        <small>Startup &amp; Tech</small>
                                        <h3>AI로 날개 단 웨어러블 로봇 <br> (주)엔젤로보틱스의 ‘워크온슈트’ IBK창공 1기</h3>
                                        <div class="more"></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- business -->
        <section class="business effect">
            <div class="container-fluid">
                <div class="section-header">
                    <h3>Business Context</h3>
                </div>
                <div class="section-content">
                    <div class="business-slider swiper">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <a href="#">
                                    <h4>Benchmark<br> Talk</h4>
                                    <figure>
                                        <img src="./assets/images/main/img_business01.png" alt="">
                                    </figure>
                                    <div class="summary">
                                        <p>스마트팩토리,<br> 기술과 사람이<br> 함께  성장한다.</p>
                                        <dl>
                                            <dt>엠아이큐브솔루션</dt>
                                            <dd><b>박문원 대표</b> 인터뷰</dd>
                                        </dl>
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h4>궁금한 이야기<br> Why?</h4>
                                    <figure>
                                        <img src="./assets/images/main/img_business02.png" alt="">
                                    </figure>
                                    <div class="summary">
                                        <p>트럼프 전 미국<br> 대통령의<br> 관세 집착</p>
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h4>Global<br> Shift</h4>
                                    <figure>
                                        <img src="./assets/images/main/img_business03.png" alt="">
                                    </figure>
                                    <div class="summary">
                                        <p>전기차 산업의<br> 지각 변동</p>
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h4>Monthly<br> Pick</h4>
                                    <figure>
                                        <img src="./assets/images/main/img_business04.png" alt="">
                                    </figure>
                                    <div class="summary">
                                        <p>한눈에 보는<br> 경제·산업 흐름</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="controls">
                        <button type="button" class="business-prev">
                            <img src="./assets/images/main/ico_business_prev.png" alt="">
                        </button>
                        <button type="button" class="business-next">
                            <img src="./assets/images/main/ico_business_next.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- ceos -->
        <section class="ceos effect">
            <div class="container-fluid">
                <div class="section-header">
                    <h3>For SEM Ceos</h3>
                </div>
                <div class="section-content">
                    <article class="act">
                        <div class="article-header">
                            <h4>Think<br> Act</h4>
                        </div>
                        <div class="article-content">
                            <a href="#" class="item-box">
                                <div class="item-img">
                                    <figure>
                                        <img src="./assets/images/main/img_ceos01.png" alt="">
                                    </figure>
                                </div>
                                <div class="details">
                                    <b>리더들은 스포츠계에서<br> 사업 성과를 위해<br> 무엇을 배울 수 있을까?</b>
                                    <p>사업과 10종 경기의 공통점은 무엇일까?</p>
                                    <div class="more"></div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <article class="guide">
                        <div class="article-content">
                            <a href="#" class="item-box">
                                <div class="item-img">
                                    <figure>
                                        <img src="./assets/images/main/img_ceos02.png" alt="">
                                    </figure>
                                </div>
                                <div class="details">
                                    <b>창업 중소기업이<br> 세금 1원도 안낸 비결</b>
                                    <p>이것이 비즈니스와 어떤 관련이 있을까?<br> 성과는 주로 특정 시장에서...</p>
                                    <div class="more"></div>
                                </div>
                            </a>
                        </div>
                        <div class="article-header">
                            <h4>Guide</h4>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        
    </main>
    
    <!-- footer -->
    <?php include_once("./inc/footer.php"); ?>
    <?php include_once("./inc/docfoot.php"); ?>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="./assets/js/main.js"></script>
</body>
</html>