<?php 

// get posts - orderby start_date
$posts = get_posts(array(
	'post_type'			=> 'event',
	'posts_per_page'	=> -1,
	'meta_key'			=> 'start_date',
	'orderby'			=> 'meta_value_num',
	'order'				=> 'DESC'
));

// WP Query - orderby featured
$the_query = new WP_Query(array(
	'post_type'			=> 'event',
	'posts_per_page'	=> -1,
	'meta_key'			=> 'featured',
	'orderby'			=> 'meta_value_num',
	'order'				=> 'DESC'
));
