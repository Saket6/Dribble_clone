import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

export const upload = async (file) => {
    console.log(file);
    const folder='Dribble User Avatars'
    const buffer = await file.arrayBuffer();
    const fileStream = Buffer.from(buffer);

    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "auto",folder:folder }, (error, result) => {
            if (error) {
                console.error("Error uploading to Cloudinary:");
                reject(error);
            } else {
                console.log("File uploaded to Cloudinary:");
                // console.log(result.secure_url);
                resolve(result);
            }
        }).end(fileStream);
    });

   return result;

    // return result;
}