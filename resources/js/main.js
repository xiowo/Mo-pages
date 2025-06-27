// 设置目标日期
const targetDate = new Date('June 7, 2026 00:00:00').getTime();

// 获取DOM元素
const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

// 倒计时函数
function updateCountdown() {
  // 获取当前时间
  const now = new Date().getTime();

  // 计算时间差
  const timeRemaining = targetDate - now;

  // 如果时间已到
  if (timeRemaining < 0) {
    dayElement.textContent = '00';
    hourElement.textContent = '00';
    minuteElement.textContent = '00';
    secondElement.textContent = '00';
    return;
  }

  // 计算天、时、分、秒
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 更新DOM元素（添加动画效果）
  updateTime(dayElement, days);
  updateTime(hourElement, hours);
  updateTime(minuteElement, minutes);
  updateTime(secondElement, seconds);
}

// 带动画效果的更新
// 直接更新DOM元素内容（无动画）
function updateTime(element, value) {
  const formattedValue = value < 10 ? `0${value}` : value;
  element.textContent = formattedValue;
}

// 初始调用
updateCountdown();

// 每秒更新一次
setInterval(updateCountdown, 1000);