<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>
 	<div class="row" ng-init="tab.setTab(XXXXX)">
	    <?php include 'navigation.html';?>
	</div>
	<div class="col-centre row">
    	<div class="col-lg-11 col-md-11 col-sm-11">
			<div id="primary" class="content-area">
				<div id="content" class="site-content" role="main">
					<?php if ( have_posts() ) : ?>

						<?php /* The loop */ ?>
						<?php while ( have_posts() ) : the_post(); ?>
							<?php get_template_part( 'content', get_post_format() ); ?>
						<?php endwhile; ?>

						<?php twentythirteen_paging_nav(); ?>

					<?php else : ?>
						<?php get_template_part( 'content', 'none' ); ?>
					<?php endif; ?>

				</div><!-- #content -->
			</div><!-- #primary -->
		</div>
	</div>


<?php get_footer(); ?>
