// Đặt thời gian đích
const targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Tính toán ngày, giờ, phút, giây còn lại
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị thời gian còn lại
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Nếu đã đến thời điểm đích, dừng đồng hồ đếm ngược
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerText = "EXPIRED";
  }
}

// Cập nhật đồng hồ đếm ngược mỗi giây
const timer = setInterval(updateCountdown, 1000);
