<?php
// Página Sobre mí - Información profesional de Gabriel Torrealba
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sobre mí - Información profesional de Gabriel Torrealba, Ingeniero de Sistemas.">
    <title>Sobre mí | Gabriel Torrealba</title>
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
                <a href="about.php" class="active">Sobre mí</a>
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
        <section class="section section-page-header">
            <div class="container animate-on-scroll">
                <h1>Sobre mí</h1>
                <p class="section-subtitle">
                    Conoce un poco más sobre mi perfil profesional y experiencia.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="container about-layout">
                <div class="about-text animate-on-scroll">
                    <p>
                        Gabriel Torrealba es Ingeniero de Sistemas titulado con interés en el desarrollo de aplicaciones web y
                        sistemas de gestión. Posee experiencia en el desarrollo de soluciones tecnológicas orientadas a mejorar
                        procesos administrativos y organizacionales.
                    </p>
                    <p>
                        Durante sus pasantías profesionales en la Corporación de Desarrollo Jacinto Lara (CORPOLARA), desarrolló
                        e implementó el sistema web SIGEVU, orientado a la gestión de beneficiarios, viviendas y proyectos urbanísticos.
                    </p>
                    <p>
                        Este sistema permitió migrar y gestionar más de 14.000 registros desde hojas de cálculo hacia una base de datos
                        relacional estructurada, mejorando significativamente la organización y el acceso a la información.
                    </p>
                    <p>
                        Gabriel se caracteriza por ser una persona responsable, puntual y comprometida con el aprendizaje constante,
                        con interés en aportar soluciones tecnológicas eficientes y seguir creciendo profesionalmente en el área del
                        desarrollo de software y la ingeniería de sistemas.
                    </p>
                </div>
                <aside class="about-aside animate-on-scroll delay-1">
                    <h2>Perfil profesional</h2>
                    <ul class="about-list">
                        <li>Ingeniero de Sistemas</li>
                        <li>Desarrollador Web</li>
                        <li>Orientado a la mejora de procesos</li>
                        <li>Enfoque en soluciones eficientes</li>
                        <li>Aprendizaje y mejora continua</li>
                    </ul>
                </aside>
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

