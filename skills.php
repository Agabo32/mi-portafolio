<?php
// Página Tecnologías - Tecnologías y herramientas de Gabriel Torrealba
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Tecnologías y herramientas utilizadas por Gabriel Torrealba, Ingeniero de Sistemas y Desarrollador Web.">
    <title>Tecnologías | Gabriel Torrealba</title>
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
                <a href="skills.php" class="active">Tecnologías</a>
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
                <h1>Tecnologías</h1>
                <p class="section-subtitle">
                    Lenguajes, herramientas y tecnologías con las que trabajo.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="tech-grid">
                    <div class="card tech-card animate-on-scroll">
                        <h2>Lenguajes</h2>
                        <ul class="tech-list">
                            <li>PHP</li>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div class="card tech-card animate-on-scroll delay-1">
                        <h2>Frameworks y herramientas</h2>
                        <ul class="tech-list">
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>WordPress</li>
                            <li>Elementor</li>
                        </ul>
                    </div>

                    <div class="card tech-card animate-on-scroll delay-2">
                        <h2>Base de datos</h2>
                        <ul class="tech-list">
                            <li>MySQL</li>
                        </ul>
                    </div>

                    <div class="card tech-card animate-on-scroll delay-3">
                        <h2>Herramientas</h2>
                        <ul class="tech-list">
                            <li>Git</li>
                            <li>VS Code</li>
                            <li>XAMPP</li>
                            <li>Draw.io</li>
                        </ul>
                    </div>
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

