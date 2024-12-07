

export default function DeleteProduct({ item, onReload }) {
    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc chắn muốn xóa")) {
            const response = await fetch(`http://localhost:3001/products/${item.id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                onReload();
                alert("Xóa sản phẩm thành công")
            }
        }

    }
    return (
        <div>
            <button className="btn_delete" onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
