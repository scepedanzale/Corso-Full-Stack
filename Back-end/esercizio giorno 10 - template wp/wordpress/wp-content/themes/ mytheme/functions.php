<?php

// Hook predefiniti di WP per inserire fogli di stile o script

// wp_enqueue_style
function load_bootstrap_css(){
    //carica lo stile css bootstrap
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');  // dico a wp cosa prendere lui saprà quando
    //wp_enqueue_style('custom-style', get_stylesheet_uri()); // legge eventuale file css custom -> va a leggere la cartella css dentro una cartella assets... e gli dico quale file
}


// wp_enqueue_script
function load_bootstrap_js(){
    // carica lo script js di bootstrap
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');
    wp_enqueue_script('custom-js', get_template_directory_uri().'/assets/js/custom-js.js');
}


add_action('wp_enqueue_scripts', 'load_bootstrap_css'); // hook per richiamare funzione
add_action('wp_enqueue_scripts', 'load_bootstrap_js');

function register_menus() {
    register_nav_menus(
        array(
            'primary-menu' => __( 'Primary Menu' ),
            'footer-menu'  => __( 'Footer Menu'),
            'sidebar-menu'  => __( 'Sidebar Menu'),
        )
    );
}

add_action('init', 'register_menus');

// Classe predefinita di Wordpress per la gestione diun menu con Bootstrap
class bootstrap_5_wp_nav_menu_walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        if ($depth > 0) {
            return;
        }
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"dropdown-menu\">\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        if (strcasecmp($item->attr_title, 'divider') == 0 && $depth === 1) {
            $output .= '<li class="dropdown-divider">';
            return;
        }
        elseif (strcasecmp($item->title, 'divider') == 0 && $depth === 1) {
            $output .= '<li class="dropdown-divider">';
            return;
        }

        if (strcasecmp($item->attr_title, 'dropdown-header') == 0 && $depth === 1) {
            $output .= '<li class="dropdown-header">' . esc_attr($item->title);
            return;
        }
        elseif (strcasecmp($item->title, 'dropdown-header') == 0 && $depth === 1) {
            $output .= '<li class="dropdown-header">' . esc_attr($item->title);
            return;
        }

        parent::start_el($output, $item, $depth, $args);
    }
}