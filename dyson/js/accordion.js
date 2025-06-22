document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.faq__accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.closest('.faq__accordion-item');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq__accordion-item').forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const quantityElements = document.querySelectorAll('.product-card__quantity');

    quantityElements.forEach(quantityEl => {
        const minusBtn = quantityEl.querySelector('.product-card__minus');
        const plusBtn = quantityEl.querySelector('.product-card__plus');
        const valueEl = quantityEl.querySelector('span');

        let value = parseInt(valueEl.textContent);

        function updateButtons() {
            minusBtn.disabled = value <= 1;
        }

        plusBtn.addEventListener('click', () => {
            value++;
            valueEl.textContent = value;
            updateButtons();
        });

        minusBtn.addEventListener('click', () => {
            if (value > 1) {
                value--;
                valueEl.textContent = value;
                updateButtons();
            }
        });

        updateButtons();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.products-slider-wrapper');
    const slider = document.querySelector('.products-slider');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const counter = document.querySelector('.slider-counter');

    let currentPage = 0;
    const pageCount = document.querySelectorAll('.products-slider-page').length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentPage * (100 / pageCount)}%)`;
        counter.textContent = `${currentPage + 1} из ${pageCount}`;

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pageCount - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < pageCount - 1) {
            currentPage++;
            updateSlider();
        }
    });

    updateSlider();
});


document.addEventListener('DOMContentLoaded', function () {
    const sortToggle = document.querySelector('.products-sort__toggle');
    const sortDropdown = document.querySelector('.products-sort');
    const sortOptions = document.querySelectorAll('.products-sort__option');
    const sortText = document.querySelector('.products-sort__text');

    sortOptions[0].classList.add('selected');

    sortToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sortDropdown.classList.toggle('active');
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', function () {
            sortOptions.forEach(opt => opt.classList.remove('selected'));

            this.classList.add('selected');

            sortText.textContent = this.textContent.trim();

            sortDropdown.classList.remove('active');

            const sortValue = this.getAttribute('data-value');
            console.log('Выбрана сортировка:', sortValue);
        });
    });

    document.addEventListener('click', function (e) {
        if (!sortDropdown.contains(e.target)) {
            sortDropdown.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav');
    
    burgerIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});





