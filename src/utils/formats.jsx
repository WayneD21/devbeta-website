import dayjs from "dayjs";

export const formatNumber = (n, format = ' ') => {
  if (!n) {
    return n;
  }
  return n
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, format);
};

export const discountByPercentage = (price, discount) => {
  if (price < 0 || discount < 0) {
    throw new Error('Price and discount must be greater than 0');
  }
  const priceAfterDiscount = price - (price * discount) / 100;
  const discountPrice = price * (discount / 100);
  return {
    priceAfterDiscount,
    discountPrice,
  };
};

export const formatAmount = (n) => {
  if (!n) {
    return n;
  }
  return (
    <>
      <span>
        {formatNumber(n, '.')}
        <span style={{ fontSize: 14, marginLeft: 2 }}>₫</span>
      </span>
    </>
  );
};

export const formatDateTime = (timestamp) => {
  if(typeof timestamp == "number"){
    if (String(timestamp).length==10){
      timestamp = timestamp*1000
    }
  }
  const i18nextLng = window.localStorage.getItem("i18nextLng");
  return dayjs(timestamp).format(i18nextLng == 'vi' ? 'HH:mm DD/MM/YYYY' : 'YYYY/MM/DD HH:mm');
};

export class DateTime {
  constructor(timeZone = 'Asia/Ho_Chi_Minh', locales = 'vi-vn') {
    this.timeZone = timeZone;
    this.locales = locales;
  }

  timestamp() {
    const newDateTime = new Date().toLocaleString('en-US', { timeZone: this.timeZone });
    return Date.parse(newDateTime) / 1000;
  }

  date() {
    return new Date().toLocaleDateString(this.locales, { timeZone: this.timeZone });
  }

  time() {
    return new Date().toLocaleTimeString(this.locales, { timeZone: this.timeZone });
  }
}
