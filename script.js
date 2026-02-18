document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Modal Logic
    openModalBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });

    // Handle Form Submission
    const requestForm = document.getElementById('requestForm');
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your request has been sent.');
        modalOverlay.style.display = 'none';
        requestForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // 2. Логика калькулятора
    let currentStep = 1;
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    nextBtn.addEventListener('click', () => {
        if (currentStep < 3) {
            document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
            currentStep++;
            document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
            prevBtn.disabled = false;
            if(currentStep === 3) nextBtn.innerText = 'Calculate';
        } else {
            calculateResult();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
            currentStep--;
            document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
            nextBtn.innerText = 'Next Step';
            if(currentStep === 1) prevBtn.disabled = true;
        }
    });

    function calculateResult() {
        const p = parseInt(document.querySelector('input[name="platform"]:checked').value);
        const a = parseInt(document.querySelector('input[name="auth"]:checked').value);
        const d = parseInt(document.querySelector('input[name="design"]:checked').value);
        
        const total = p + a + d;
        const max = Math.round(total * 1.5);
        
        document.getElementById('priceRange').innerText = `$${total.toLocaleString()} — $${max.toLocaleString()}`;
        document.getElementById('calcResult').style.display = 'flex';
    }

    // 3. Обработка формы в калькуляторе
    document.getElementById('calcEmailForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Proposal sent! Check your email.');
        location.reload();
    });
});

// Глобальная функция для модалки
function toggleModal(show) {
    document.getElementById('modalOverlay').style.display = show ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalOverlay');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    // Открытие модального окна
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Клик вне окна закрывает его
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Мобильное меню
    menuToggle.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
    
    // Эмуляция отправки формы
    document.getElementById('requestForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your request has been sent.');
        modal.style.display = 'none';
    });
});