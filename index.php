<?php
/**
* Plugin Name: Box Reveal Plugin
* Description: When clicked or tapped details appear.
* Author: Mark Tank
* Author URL: https/linkedin.com
* Version: 1.0.0
*/

if( ! defined('ABSPATH') ) Exit;

class revealBox {
    function __construct() {
        add_action('init', array($this, 'initateBlock'));
    }
 
    function initateBlock() {
        register_block_type( __DIR__, array(
            'render_callback' => array($this, 'blockHTML')
        ));
    }

    function blockHTML() {
        return 'Front End';
    }
}

$lookAtMe = new revealBox();
?>