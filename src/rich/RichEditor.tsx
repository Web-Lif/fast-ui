import React, { FC } from 'react';
import Editor, { Props } from 'rich-markdown-editor';
import { Zh_Cn } from './dictionary';

interface RichEditorProps extends Props {}

const RichEditor: FC<RichEditorProps> = ({
    dictionary = Zh_Cn,
    uploadImage = async (file: Blob | MediaSource) => URL.createObjectURL(file),
    ...restProps
}) => {
    return <Editor dictionary={dictionary} uploadImage={uploadImage} {...restProps} />;
};

export default RichEditor;
