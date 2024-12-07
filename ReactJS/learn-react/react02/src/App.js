import "./App.css";
// import Login from "./components/login/index";
// import Menu from "./components/menu/index";
// import ProductList from "./components/productList/index";
// import Country from "./components/countryList";
// import Lamp from "./components/Lamp";
// import Cart from "./components/cart";
import Modal from "./components/modal";

function App() {
  // let isLogin = false;
  // if (isLogin) {
  //   return (
  //     <>
  //       <div>thông tin người dùng và nút đăng xuất</div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div>Nút đăng nhập và nút đang ký</div>
  //     </>
  //   );
  // }
  // const isLogin = true;
  // return (
  //   <>
  //     {isLogin === true ? (
  //       <>
  //         <div>thông tin người dùng và nút đăng xuất</div>
  //       </>
  //     ) : (
  //       <>
  //         <div>Nút đăng nhập và nút đang ký</div>
  //       </>
  //     )}
  //     {isLogin && <div>AVATAR</div>}
  //   </>
  // );
  return (
    <>
      {/* <Menu /> */}
      {/* <ProductList /> */}
      {/* <Country /> */}
      {/* <Lamp /> */}
      {/* <Cart /> */}
      <Modal />
    </>
  );
}

export default App;
