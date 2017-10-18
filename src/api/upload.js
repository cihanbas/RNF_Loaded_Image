
import RNFetchBlob from 'react-native-fetch-blob';
let upload = (data) => {
    return RNFetchBlob.fetch('POST', 'http://212.58.13.195:3000', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        },
        data
    ) .uploadProgress({ interval : 250 },(written, total) => {
        console.log('uploaded', written / total)
    })
};

export {upload}