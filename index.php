<?php
/**
* Plugin Name: Basic Gutenbery Block
* Description: Great starting place for creating a Gutenberg block.
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

    function blockHTML($attributes) {
        return <<<HTML
        <h3>This is what I said; {$attributes['newInfo']}</h3>
        HTML;
    }
}

$lookAtMe = new revealBox();
?>