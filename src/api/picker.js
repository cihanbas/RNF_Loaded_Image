const ImagePicker = require('react-native-image-picker');
const options = {
  title: 'Select image',
  customButtons: [
    {
      name: 'fb',
      title: 'Choose Photo from Facebook'
    }
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
let pick = (cb) => {
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {
        uri: response.uri
      };

      cb(source,response.data);
    }
  });
};
const test = () => {
  console.log("hello Kity ");
};

export  { pick };
