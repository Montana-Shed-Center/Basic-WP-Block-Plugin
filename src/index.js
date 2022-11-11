import "./index.scss";
import { registerBlockType } from '@wordpress/blocks';
import {TextControl} from "@wordpress/components";
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

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
    const blockProps = useBlockProps();
    const innerBlockProps = useInnerBlocksProps(blockProps);
    function saveValue(value) {
        props.setAttributes({newInfo: value});
    }

    return (
        <div>
            <div {...innerBlockProps}>
                <TextControl label="Enter Something" onChange={saveValue} value={props.attributes.newInfo} />
                <TextControl label="Enter New" onChange={saveValue} value={props.attributes.newInfo} />
            </div>
        </div>
    )
}