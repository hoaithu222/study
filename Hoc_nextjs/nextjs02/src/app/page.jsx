import DemoClient from "@/components/DemoClient";
import DemoServer from "@/components/DemoServer";
export const metadata = {
  title: "Trang chủ - 8",
  description: "Học lập trình không khó",
  keyword: "html-css,js,reactjs",
  openGraph: {
    title: "Trang chủ - F8",
  },
  icons: {
    icon: "https://fullstack-nodejs.fullstack.edu.vn/assets/f8_icon.png",
  },
};
export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <DemoClient>
        <DemoServer />
      </DemoClient>
    </div>
  );
}
