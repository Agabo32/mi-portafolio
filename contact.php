<?php
// Página de contacto - Información y formulario de contacto de Gabriel Torrealba
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contacto de Gabriel Torrealba, Ingeniero de Sistemas y Desarrollador Web.">
    <title>Contacto | Gabriel Torrealba</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="navbar">
        <div class="container nav-content">
            <div class="logo">
                <a href="index.php">GT</a>
            </div>
            <nav id="mainNav" class="nav-links">
                <a href="index.php">Inicio</a>
                <a href="about.php">Sobre mí</a>
                <a href="skills.php">Tecnologías</a>
                <a href="contact.php" class="active">Contacto</a>
            </nav>
            <button class="nav-toggle" id="navToggle" aria-label="Abrir menú">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <main>
        <section class="section section-page-header">
            <div class="container animate-on-scroll">
                <h1>Contacto</h1>
                <p class="section-subtitle">
                    Puedes comunicarte conmigo a través de los siguientes medios o completar el formulario.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="container contact-layout">
                <div class="contact-info animate-on-scroll">
                    <h2>Información de contacto</h2>
                    <ul class="contact-list">
                        <li><strong>Teléfono:</strong> 0412-555-6516</li>
                        <li><strong>Correo:</strong> <a href="mailto:gabrielalejandro321804@gmail.com">gabrielalejandro321804@gmail.com</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/Agabo32" target="_blank" rel="noopener noreferrer">github.com/Agabo32</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gabriel-torrealba-48a4612ba" target="_blank" rel="noopener noreferrer">Gabriel Torrealba</a></li>
                        <li>
                            <strong>Dirección:</strong><br>
                            Av. 20 entre 16 y 17<br>
                            Barrio Bolívar Libertador<br>
                            Quíbor, Estado Lara<br>
                            Venezuela
                        </li>
                    </ul>
                </div>

                <div class="contact-form-wrapper animate-on-scroll delay-1">
                    <h2>Envíame un mensaje</h2>
                    <form id="contactForm" class="contact-form" novalidate>
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="name" placeholder="Tu nombre completo">
                            <span class="form-error" id="nameError"></span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com">
                            <span class="form-error" id="emailError"></span>
                        </div>

                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje"></textarea>
                            <span class="form-error" id="messageError"></span>
                        </div>

                        <button type="submit" class="btn primary-btn">Enviar mensaje</button>
                        <p class="form-success" id="formSuccess" aria-live="polite"></p>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <p>© 2025 Gabriel Torrealba</p>
            <p>Ingeniero de Sistemas | Desarrollador Web</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>

