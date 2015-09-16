<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'blogDigestalia');

/** MySQL database username */
define('DB_USER', 'wpDigestalia');

/** MySQL database password */
define('DB_PASSWORD', 'qwerty');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r@G;GIQ)n5WyOyA[ STfg:k3snKt#x6!EPYobld,-V0KbMA<24|j(*a9{]6fOg8H');
define('SECURE_AUTH_KEY',  'z*s^6g?2/,*vH+0b,Kq8n2;{!s^<(3ug2L*GEtj8,d|F-&U(N9^dds+ZsAExU0^)');
define('LOGGED_IN_KEY',    'HO`UVrS6)_sz DJd><j*$T3mddw?:FwzUvHhAyQqP5-V1D&=&U%7{=yA|F|Yq(z0');
define('NONCE_KEY',        'FE}v3(W8?.d:4&-*6^7#vX3zAiXi:@5L)W?t~v!/Ku0PSO+lVS*;}q07}H@Qgr)~');
define('AUTH_SALT',        'IcW_WVQb>+r[d|D93kM^M5|NC1lR8a#[{ @5}|EM|TEC&],RS_<bwn;|G3xqyX=Q');
define('SECURE_AUTH_SALT', 'B8sDBS#{]-+9q(6Ac>[#|Xi[HrI$*9+h+:|4FgFv]?Bg<h;JZ|qvN(c}YX?5Sol#');
define('LOGGED_IN_SALT',   '|T]EiDk428)|C1(-OgD-QV!v_F>(_g.T_Kk7j+t7iB@D.l}{sfF*#|-[+h^-^+S2');
define('NONCE_SALT',       'a4cF|lM.eT8Rz>07|LK*CD&>$s.[N=Lhanov]FT=lBi<-B9XKO9=7Az9UC4JVKUC');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

