import cloudinary from 'cloudinary-core';

const cl = new cloudinary.Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, secure: true });

const cloudinaryUrl = (url, config) => {
  if (url.includes("cloudinary")) {
    const urlArray = url.split("/");
    const uploadIndex = urlArray.indexOf("upload");

    url = urlArray
      .slice(0, uploadIndex + 1)
      .concat(config)
      .concat(urlArray.slice(uploadIndex + 1))
      .join("/");
  }
  return url;
};

export {
  cl,
  cloudinaryUrl
};