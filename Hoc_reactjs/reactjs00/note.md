Cấu trúc Folder-File

src

- App.jsx
- .env
- assets
  - css
  - scss
  - fonts
  - images
- components
  - Component1
    - Component1.jsx
    - Component1.css
  - Component2
    - Component2.jsx
    - Component2.css
- page
  - Home
    - Home.jsx
    - Home .css
      - components
        - slide.jsx
        - bestSeller.jsx
  - About
    - About.jsx
    - About.css
- middlewares(middleware của web)

  - GuestMiddleware.jsx
  - AuthMiddleware.jsx

- routes

  - publicRoutes.js
  - privateRotes.js

- Layouts
  - DefaultLayout
    - DefaultLayout.jsx
    - DefaultLayout.css
    - Header.jsx
    - Footer.jsx
    - Sidebar.jsx
  - AuthLayout - AuthLayout.jsx - AuthLayout.css
- stores
  - store.jsx
  - slices
    - authSlice.js
    - productSlice.js
  - middlewares
    - useMiddleware.js
    - productMiddleware.js
- services (call api)

  - productService.js
  - useService.js

- utils(các hàm xủ lý)
  - urlUtils.js
  - clientUtils.js
- hooks (viết thêm các hook mới)
  - useClient.js
  - useTracking
