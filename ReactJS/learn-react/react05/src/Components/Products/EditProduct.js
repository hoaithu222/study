import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';


export default function EditProducts({ item, onReload }) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(item);
    const [dataCategories, setDataCategories] = useState([]);

    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:3001/categories");
            if (!response.ok) {
                throw new Error("Lỗi khi lấy danh sách danh mục");
            }
            const data = await response.json();  // Fix json() usage
            setDataCategories(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setShowModal(true);
        console.log(item)
    }

    function closeModal() {
        setShowModal(false);
    }

    const handlePostProduct = async (data) => {
        try {
            const response = await fetch(`http://localhost:3001/products/${item.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setShowModal(false);
                onReload();
                alert("Sửa sản phẩm thành công");
            } else {

            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePostProduct(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <button onClick={openModal}>Chỉnh sửa</button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu đề</td>
                                <td>
                                    <input type="text" name="title" onChange={handleChange} value={data.title} required />
                                </td>
                            </tr>
                            {
                                dataCategories.length > 0 && (
                                    <tr>
                                        <td>Danh Mục</td>
                                        <td>
                                            <select name="category" onChange={handleChange} value={data.category} >
                                                <option value="">Chọn danh mục</option>
                                                {dataCategories.map((item) => (
                                                    <option value={item.id} key={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type="text" name="price" onChange={handleChange} value={data.price} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type="text" name="discountPercentage" onChange={handleChange} value={data.discountPercentage} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type="text" name="stock" onChange={handleChange} value={data.stock} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type="text" name="thumbnail" onChange={handleChange} value={data.thumbnail} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea rows={4} name="description" onChange={handleChange} value={data.description}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" onClick={closeModal}>Hủy</button>
                                    <input type="submit" value="Cập nhập" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </div>
    );
}
