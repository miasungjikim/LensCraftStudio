document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; // 초기 슬라이드 인덱스

    const slides = document.querySelectorAll('.slide'); // 모든 슬라이드
    const dots = document.querySelectorAll('.dot'); // 모든 동그라미
    const slideBox = document.querySelector('.slide-box'); // 슬라이드 박스

    // 전체 슬라이드 너비를 설정
    slideBox.style.width = `${100 * slides.length}vw`; // 슬라이드의 개수만큼 총 너비 설정

    // 이전 버튼 클릭 시
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    // 다음 버튼 클릭 시
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // 동그라미 클릭 시 슬라이드 이동
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // 슬라이드 업데이트 함수
    function updateSlider() {
        // 슬라이드 위치 이동
        slideBox.style.transform = `translateX(-${100 * currentIndex}vw)`;

        // 동그라미 색상 변경
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // 첫 번째 슬라이드 표시
    updateSlider();

    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
    
});





// pricingpage (button)
// 각 버튼을 클릭하면 관련 패키지 내용이 보이게 하는 기능
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".package_toggle");
    const allPackages = document.querySelectorAll(".packages_content");

    // 초기 설정: 첫 번째 버튼 활성화
    buttons[0].classList.add("active");
    allPackages.forEach(packageContent => packageContent.classList.remove("active"));
    document.querySelector(".wedding_packages").classList.add("active");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetClass = this.getAttribute("data-target");
            const targetPackage = document.querySelector(`.${targetClass}`);

            // 모든 패키지 숨기기
            allPackages.forEach(packageContent => {
                packageContent.classList.remove("active");
            });

            // 해당 패키지만 보이기
            targetPackage.classList.add("active");

            // 모든 버튼 스타일 초기화
            buttons.forEach(btn => btn.classList.remove("active"));

            // 클릭한 버튼 활성화
            this.classList.add("active");
        });
    });
});

//pricing page
function toggle_other_field() {
    var subject_select = document.getElementById("subject");
    var other_input = document.getElementById("other_subject");

    if (subject_select.value === "Other") {
        other_input.style.display = "block";
        other_input.setAttribute("required", "true");
    } else {
        other_input.style.display = "none";
        other_input.removeAttribute("required");
    }
}


