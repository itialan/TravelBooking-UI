import React, { useState, memo } from 'react';
import clsx from 'clsx';

// FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import useStyles from './styles';

// FilePond: Register the plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const PostImage = ({ images, setImages, maxFiles, description }) => {
  const classes = useStyles();
  // const [images, setImages] = useState([]);

  console.log('PostImage rendered');

  return (
    <FilePond
      className={clsx({ [classes.myFilePond]: maxFiles >= 2 })}
      files={images}
      onupdatefiles={setImages}
      allowMultiple={true}
      maxFiles={maxFiles}
      accept='image/png, image/jpeg, image/gif'
      itemInsertLocation='after'
      imagePreviewHeight='150'
      labelIdle={description}
    />
  );
};

export default memo(PostImage);
