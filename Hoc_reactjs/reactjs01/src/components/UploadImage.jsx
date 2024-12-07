import { useEffect, useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState({});
  const [status, setStatus] = useState(false);
  //   const [selectedImage, setSelectedImage] = useState(null);

  // Hàm xử lý khi người dùng chọn ảnh
  const handleChangeImage = (e) => {
    if (!e.target.files[0]) return;

    const imageUrl = URL.createObjectURL(e.target.files[0]);
    // setSelectedImage(e.target.files[0]);
    setImage({ ...image, imagePreviewUrl: imageUrl, file: e.target.files[0] });
  };

  // Hàm gửi ảnh lên server
  const sendImage = async (file) => {
    if (!file) {
      console.log("Ảnh chưa được tải");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      setStatus(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Lỗi tải ảnh lên");
      }

      //   const result = await response.json();
      //   console.log(result);
      return response.json();
    } catch (e) {
      console.error(e);
    } finally {
      setStatus(false);
    }
  };
  const handleUploadFile = async () => {
    const output = await sendImage(image.file);
    if (!output) {
      return alert("Upload Failed");
    }
    console.log(output);
    setImage({ ...image, imagePreviewUrl: null, output }); // cập nhật state để hiển thị kết quả lên giao diên
  };

  // useEffect để dọn dẹp URL xem trước khi ảnh thay đổi
  useEffect(() => {
    return () => {
      if (image.imagePreviewUrl) {
        URL.revokeObjectURL(image.imagePreviewUrl); // Dọn dẹp URL object để tránh rò rỉ bộ nhớ
      }
    };
  }, [image.imagePreviewUrl]);

  return (
    <div>
      <input type="file" name="image" onChange={handleChangeImage} />
      <button onClick={handleUploadFile} disabled={status}>
        {status ? "Loading..." : "Upload"}
      </button>
      <hr />
      {image.imagePreviewUrl && (
        <img
          src={image.imagePreviewUrl}
          alt="Preview"
          style={{ width: "300px" }}
        />
      )}
      {image.output && (
        <>
          <p>Đã upload thành công</p>
          <p>
            <a href={image.output.location} target="_blank">
              {image.output.location}
            </a>
          </p>
        </>
      )}
    </div>
  );
}
