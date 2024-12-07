import { useState } from "react";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // Để hiển thị ảnh trước khi upload

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Tạo URL từ file ảnh để hiển thị preview
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
  };

  const sendImage = async () => {
    if (!selectedImage) {
      console.error("Chưa có ảnh được chọn");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      setLoading(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Lỗi tải file ảnh");
      }

      const result = await response.json();
      console.log("Ảnh tải lên thành công:", result);
      setPreviewImage(null);
      setSelectedImage(null);
      setLoading(false);
    } catch (e) {
      console.error("Lỗi:", e);
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" name="image" onChange={handleImageChange} />
      <button onClick={sendImage} disabled={isLoading}>
        {isLoading ? "Loading...." : "Upload"}
      </button>
      <hr />
      {previewImage && (
        <img src={previewImage} alt="Preview" style={{ width: "300px" }} />
      )}
    </div>
  );
}
