import "./index.scss";
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'brpnamespace/boxrevealplugin', {
    category: "text",
    edit: () => {
        return <h1>Editor Block</h1>
    },
    save: () => {
        return null;
    }
} );

