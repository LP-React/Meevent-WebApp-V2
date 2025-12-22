import axios from "axios";

export const uploadToCloudinary = async (file: File, folderName: string): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rl8hm1rs");
    formData.append("folder", folderName);

    const res = await axios.post(
        "https://api.cloudinary.com/v1_1/diryo1oi1/image/upload",
        formData
    );

    return res.data.secure_url;
};
