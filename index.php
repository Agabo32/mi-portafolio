<?php
// Página de inicio - Portafolio personal de Gabriel Torrealba
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portafolio profesional de Gabriel Torrealba, Ingeniero de Sistemas y Desarrollador Web.">
    <title>Inicio | Gabriel Torrealba - Ingeniero de Sistemas</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="navbar">
        <div class="container nav-content">
            <div class="logo">
                <a href="index.php">GT</a>
            </div>
            <nav id="mainNav" class="nav-links">
                <a href="index.php" class="active">Inicio</a>
                <a href="about.php">Sobre mí</a>
                <a href="skills.php">Tecnologías</a>
                <a href="contact.php">Contacto</a>
            </nav>
            <button class="nav-toggle" id="navToggle" aria-label="Abrir menú">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <main>
        <!-- Sección Hero -->
        <section class="hero section" id="inicio">
            <div class="container hero-content animate-on-scroll">
                <div class="hero-text">
                    <p class="hero-greeting">Hola, soy</p>
                    <h1 class="hero-name">Gabriel Torrealba</h1>
                    <h2 class="hero-title">Ingeniero de Sistemas | Desarrollador Web</h2>
                    <p class="hero-description">
                        Hola, mi nombre es Gabriel Torrealba, Ingeniero de Sistemas titulado especializado en desarrollo web.
                        Cuento con experiencia en el desarrollo e implementación de sistemas web, destacando la creación de un
                        sistema institucional para la Corporación de Desarrollo Jacinto Lara (CORPOLARA), optimizando la gestión
                        de más de 14.000 registros.
                    </p>
                    <p class="hero-description">
                        Soy una persona responsable, puntual y comprometida con el aprendizaje constante, con interés en aportar
                        soluciones tecnológicas eficientes y seguir creciendo profesionalmente en el área del desarrollo de
                        software y la ingeniería de sistemas.
                    </p>
                    <div class="hero-actions">
                        <a href="about.php" class="btn primary-btn">Ver sobre mí</a>
                        <a href="contact.php" class="btn secondary-btn">Contactarme</a>
                    </div>
                </div>
                <div class="hero-image animate-on-scroll delay-1">
                    <div class="hero-avatar-placeholder">
                        <img src="images/WhatsApp%20Image%202026-02-19%20at%2010.49.10%20PM.jpeg" alt="Fotografía de Gabriel Torrealba" />
                    </div>
                    <p class="hero-image-caption">
                        Ingeniero de Sistemas orientado al desarrollo de soluciones web eficientes y profesionales.
                    </p>
                </div>
            </div>
        </section>

        <!-- Sección resumen rápida -->
        <section class="section section-light" id="resumen">
            <div class="container grid-3">
                <div class="card highlight-card animate-on-scroll">
                    <h3>Desarrollo Web</h3>
                    <p>
                        Experiencia en el diseño e implementación de sistemas web enfocados en la mejora de procesos administrativos.
                    </p>
                </div>
                <div class="card highlight-card animate-on-scroll delay-1">
                    <h3>Gestión de Datos</h3>
                    <p>
                        Migración y organización de grandes volúmenes de información hacia bases de datos relacionales estructuradas.
                    </p>
                </div>
                <div class="card highlight-card animate-on-scroll delay-2">
                    <h3>Compromiso Profesional</h3>
                    <p>
                        Enfoque en el aprendizaje continuo y la entrega de soluciones tecnológicas confiables y escalables.
                    </p>
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

