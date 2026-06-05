// Script principal
// - Menú responsive
// - Scroll suave entre secciones
// - Animaciones al hacer scroll
// - Validación básica del formulario de contacto

(function () {
    'use strict';

    /**
     * Inicializar comportamiento del menú responsive
     */
    function initResponsiveMenu() {
        var navToggle = document.getElementById('navToggle');
        var mainNav = document.getElementById('mainNav');

        if (!navToggle || !mainNav) return;

        navToggle.addEventListener('click', function () {
            var isOpen = mainNav.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
        });

        // Cerrar el menú al hacer clic en un enlace (en móviles)
        mainNav.addEventListener('click', function (event) {
            if (event.target.tagName.toLowerCase() === 'a' && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                navToggle.classList.remove('open');
            }
        });
    }

    /**
     * Scroll suave para enlaces internos (#ancla)
     */
    function initSmoothScroll() {
        var links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);

                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /**
     * Animaciones al hacer scroll con IntersectionObserver
     */
    function initScrollAnimations() {
        var elements = document.querySelectorAll('.animate-on-scroll');

        if (!('IntersectionObserver' in window)) {
            elements.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /**
     * Validación sencilla del formulario de contacto
     */
    function initContactFormValidation() {
        var form = document.getElementById('contactForm');
        if (!form) return;

        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');
        var nameError = document.getElementById('nameError');
        var emailError = document.getElementById('emailError');
        var messageError = document.getElementById('messageError');
        var formSuccess = document.getElementById('formSuccess');

        function resetErrors() {
            [nameInput, emailInput, messageInput].forEach(function (input) {
                if (!input) return;
                input.classList.remove('error');
            });
            [nameError, emailError, messageError].forEach(function (label) {
                if (!label) return;
                label.textContent = '';
            });
            if (formSuccess) {
                formSuccess.textContent = '';
            }
        }

        function isValidEmail(value) {
            // Validación sencilla de email
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(value);
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            resetErrors();

            var hasError = false;

            if (!nameInput.value.trim()) {
                nameInput.classList.add('error');
                nameError.textContent = 'Por favor, ingresa tu nombre.';
                hasError = true;
            }

            if (!emailInput.value.trim()) {
                emailInput.classList.add('error');
                emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
                hasError = true;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailInput.classList.add('error');
                emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
                hasError = true;
            }

            if (!messageInput.value.trim()) {
                messageInput.classList.add('error');
                messageError.textContent = 'Por favor, escribe un mensaje.';
                hasError = true;
            }

            if (!hasError) {
                // En un entorno real, aquí podrías enviar el formulario con AJAX o procesarlo en PHP.
                form.reset();
                if (formSuccess) {
                    formSuccess.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
                }
            }
        });
    }

    /**
     * Inicialización general
     */
    document.addEventListener('DOMContentLoaded', function () {
        initResponsiveMenu();
        initSmoothScroll();
        initScrollAnimations();
        initContactFormValidation();
    });
})();

