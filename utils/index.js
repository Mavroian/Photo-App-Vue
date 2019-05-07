/* global AWS */
const bucketName = "react.sprint";
const identityPoolId = "ap-northeast-1:131db146-e5b9-4f7b-8b58-d0c59e2deeaf";
const AWS = require("aws-sdk");

// students: ap-northeast-1:131db146-e5b9-4f7b-8b58-d0c59e2deeaf
AWS.config.update({
  region: "ap-northeast-1",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId
  })
});

const bucket = new AWS.S3({
  params: {
    Bucket: bucketName
  }
});

export function listObjects() {
  console.log("listing objects");
  const listObjects = new Promise((resolve) => {
    bucket.listObjects((error, data) => {
      if (error) {
        console.error("error: ", error);
        return;
      }

      resolve(data.Contents);
    });
  });

  return listObjects;
}

export function getSingleObject(key) {
  const getSingleObject = new Promise((resolve) => {
    bucket.getObject(
      {
        Bucket: bucketName,
        Key: key
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data.Body.toString("base64"));
      }
    );
  });

  return getSingleObject;
}

function deleteObject(key) {
  bucket.deleteObject({ Bucket: bucketName, Key: key }, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log("data", data); // successful response
  });
}

export function saveObject(file) {
  const saveObject = new Promise((resolve) => {
    let x = bucket.putObject(
      {
        Key: file.name,
        Body: file,
        ACL: "public-read"
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data);
      }
    );
    x.on("httpUploadProgress", function(progress) {
      let x = document.getElementById("progressbar");
      x.value = (progress.loaded / progress.total) * 100;
    });
  });

  return saveObject;
}
