<?php 

// get posts - orderby start_date
$args = array(
	'post_type'			=> 'event',
	'posts_per_page'	=> -1,
	'meta_key'			=> 'start_date',
	'orderby'			=> 'meta_value_num',
	'order'				=> 'DESC'
);

$posts = get_posts( $args );

// WP Query - orderby featured
$args = array(
	'post_type'			=> 'event',
	'posts_per_page'	=> -1,
	'meta_key'			=> 'featured',
	'orderby'			=> 'meta_value_num',
	'order'				=> 'DESC'
);

$the_query = new WP_Query( $args );

//Orderby WordPress default page attribute 'order'
//Display posts sorted by 'menu_order' with a fallback to post 'title', in a descending order:

$args = array(
	'orderby' => 'menu_order title',
	'order'   => 'DESC',
);

$query = new WP_Query( $args );

//Reference link: https://codex.wordpress.org/Class_Reference/WP_Query