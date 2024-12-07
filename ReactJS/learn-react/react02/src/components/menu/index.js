export default function Menu() {
  const arrayMenu = [
    "Trang chủ",
    "Sản Phẩm",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ",
  ];
  return (
    <>
      <ul>
        {arrayMenu.map((item, index) => {
          console.log(item, index);
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
