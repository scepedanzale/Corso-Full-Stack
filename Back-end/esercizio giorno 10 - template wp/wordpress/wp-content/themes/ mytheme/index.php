<?php get_header(); ?>

    <h1>Primo template wordpress</h1>

    <div class="container">
        <div class="row">
            <?php
                if ( have_posts() ) :
                    while ( have_posts() ) : the_post();
                    ?><div class="col"><?php
                        the_title('<h3 class="bg-body-tertiary text-secondary">', '</h3>');
                        the_post_thumbnail();
                        the_excerpt();
                    ?></div><?php
                    endwhile;
                else :
                    _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
                endif;
            ?>
        </div>
    </div>

<?php get_footer(); ?>