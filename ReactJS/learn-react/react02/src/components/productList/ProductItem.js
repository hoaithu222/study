export default function ProductItem(props) {
  const { item } = props;
  return (
    <>
      <div className="product__item">
        <img
          src={item.image}
          alt={item.name}
          className="product__image"
          style={{ width: "150px" }}
        />
        <h3 className="product__name">{item.name}</h3>
        <div className="product__price">Giá : {item.price}</div>
      </div>
    </>
  );
}
