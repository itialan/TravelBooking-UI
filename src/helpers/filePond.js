import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

export const setupFilePond = (element) => {
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
  );

  // Create a FilePond instance
  const pond = FilePond.create(element, {
    labelIdle: `Drag & Drop your image or <span class="filepond--label-action">Browse</span>`,
    imagePreviewHeight: 150,
  });

  // FilePond.setOptions({ itemInsertLocation: "after", imagePreviewHeight: '50px' });

  return pond;
};
