const urlApi = "https://api.escuelajs.co/api/v1/auth/login";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = Object.fromEntries(new FormData(form));
  const errors = {};
  if (!email) errors.email = "Vui lòng nhập email";
  if (!password) errors.password = "Vui lòng nhập password";

  const errorsElList = form.querySelectorAll(".error");
  errorsElList.forEach((errorsEl) => (errorsEl.innerHTML = ""));
  if (Object.keys(errors).length) {
    Object.keys(errors).forEach((key) => {
      const errorEl = form.querySelector(`.error-${key}`);
      if (errorEl) errorEl.innerHTML = errors[key];
    });
  } else {
    const postData = async (data) => {
      try {
        const response = await fetch(urlApi, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Đăng nhập thành công", result);
        } else if (response.status === 401) {
          const errorEl = form.querySelector(`.error-global`);
          if (errorEl)
            errorEl.innerHTML = "Email hoặc mật khẩu không chính xác.";
        } else {
          const errorEl = form.querySelector(`.error-global`);
          if (errorEl)
            errorEl.innerHTML = "Đăng nhập thất bại, vui lòng thử lại.";
        }
      } catch (error) {
        const errorEl = form.querySelector(`.error-global`);
        if (errorEl)
          errorEl.innerHTML = "Đã xảy ra lỗi, vui lòng kiểm tra kết nối.";
      }
    };

    postData({ email, password }); // Gọi API với email và password
  }

  form.reset(); // Xóa dữ liệu form
});
