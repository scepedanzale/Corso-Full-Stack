<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="<?php bloginfo('charset')?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 
        // Invece di includere il link di bootstrap nel modo classico
        // utilizzo il file functions.php
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> 
    -->
    <title><?php wp_title(); ?></title>
    <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>" type="text/css" />
    <?php wp_head(); ?>  <!-- Hook che gestisce i caricamenti nell'header della pagina -->
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-md bg-white">
            <div class="container-fluid">
                <a class="navbar-brand text-body-tertiary fw-bold tracking-widest" href="<?php esc_url( home_url('/') ); ?>"><?php bloginfo( 'name' ); ?></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary-menu', /* nome posizione tema in cui viene registrato il menu di navigazione */
                            'container' => false, /* se impostare un contenitore intorno al menu */
                            'menu_class' => '', /*  specificare una classe CSS da applicare all'elemento <ul> che contiene il menu di navigazione. */
                            'fallback_cb' => '__return_false',  /* specifica la funzione di fallback che WordPress dovrebbe utilizzare nel caso in cui non sia stato assegnato un menu alla posizione specificata  */
                            'items_wrap' => '<ul id="%1$s" class="navbar-nav me-auto mb-2 mb-md-0 %2$s">%3$s</ul>',
                            'depth' => 2,   /* il livello di profondità massimo */
                            'walker' => new bootstrap_5_wp_nav_menu_walker()
                        ));
                    ?>
                </div>
            </div>
        </nav>
    </header>