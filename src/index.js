import "./index.scss";
import { registerBlockType } from '@wordpress/blocks';
import {TextControl} from "@wordpress/components";

registerBlockType( 'brpnamespace/basicblockplugin', {
    category: "text",
    attributes: {
        newInfo: {type: "string"}
    },
    edit: EditFunc,
    save: () => {
        return null;
    }
} );

function EditFunc(props) {

    function saveValue(value) {
        props.setAttributes({newInfo: value});
    }

    return (
        <div>
            <TextControl label="Enter Something" onChange={saveValue} value={props.attributes.newInfo} />
        </div>
    )
}