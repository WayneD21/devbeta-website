import QRCode from 'qrcode';
import logoDataUrl from '../assets/logo.png';

const getLogoQr = async (vietqrString) => {
  const qrOptions = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 0.92,
    margin: 1,
    scale: 6,
  };
  const canvas = document.createElement('canvas');
  await QRCode.toCanvas(canvas, vietqrString, qrOptions);

  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = logoDataUrl;

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const qrSize = canvas.width;
      const logoSize = qrSize * 0.3; // Logo chiếm khoảng 20% kích thước QR
      const x = (qrSize - logoSize) / 2;
      const y = (qrSize - logoSize) / 2;
      ctx.drawImage(image, x, y, logoSize, logoSize);
      resolve(canvas.toDataURL(qrOptions.type)); // Trả về Data URL của hình ảnh QR có logo
    };
    image.onerror = reject;
  });
};

const generateVietQR = ({ bankBin, accountNumber, transferContent, amount = null }) => {
  // --- Hàm tính CRC-16-CCITT ---
  function calculateCrc16Ccitt(data) {
    let crc = 0xffff;
    const polynomial = 0x1021;

    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ polynomial;
        } else {
          crc <<= 1;
        }
      }
    }
    return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
  }

  // --- Helper function to format TLV ---
  // Returns: "ID" + "Length (2 digits padded)" + "Value"
  function formatTLV(id, value) {
    const length = value.length.toString().padStart(2, '0');
    return `${id}${length}${value}`;
  }

  // --- Các thông tin cố định ---
  const payloadFormatIndicator = formatTLV('00', '01'); // ID 00: Payload Format Indicator (01: EMVCo QR V1)
  const pointOfInitiationMethod = formatTLV('01', '11'); // ID 01: Point of Initiation Method (11: Tĩnh)
  const currencyCode = formatTLV('53', '704'); // ID 53: Transaction Currency (704: VND)
  const countryCode = formatTLV('58', 'VN'); // ID 58: Country Code (VN: Vietnam)

  // --- Thông tin Merchant Account (ID 38) ---
  const napasGuid = formatTLV('00', 'A000000727'); // ID 00 (sub-field): Global Unique Identifier (NAPAS)

  // Sub-field 00: Acquirer ID (BIN ngân hàng) - nội dung cho trường 01
  const beneficiaryBankId = formatTLV('00', String(bankBin));

  // Sub-field 01: Merchant ID (Số tài khoản) - nội dung cho trường 01
  const beneficiaryAccountNumber = formatTLV('01', accountNumber);

  // Beneficiary Organization (ID 01) - TRƯỜNG BỊ THIẾU TRƯỚC ĐÂY
  // Đây là trường con của Merchant Account Information (ID 38)
  const beneficiaryOrganizationValue = beneficiaryBankId + beneficiaryAccountNumber;
  const beneficiaryOrganization = formatTLV('01', beneficiaryOrganizationValue);

  // Sub-field 02: Service Code (QR IBFT - Transfer to Account)
  const serviceCode = formatTLV('02', 'QRIBFTTA');

  // Combine sub-fields for Merchant Account Info.
  const merchantAccountInfoValue = napasGuid + beneficiaryOrganization + serviceCode; // Đã thêm beneficiaryOrganization
  const merchantAccountInfo = formatTLV('38', merchantAccountInfoValue);

  let transactionAmountField = '';
  if (amount && String(amount).trim() !== '') {
    // Nếu là QR động, hoặc số tiền được truyền vào, đặt nó ở cấp gốc
    // Lưu ý: Chuỗi gốc bạn cung cấp đặt 54 ở cấp gốc, nên ta sẽ làm theo
    transactionAmountField = formatTLV('54', String(amount));
  }

  // --- Thông tin Additional Data (ID 62) ---
  let additionalDataSubfields = '';

  if (transferContent) {
    // ID 08: Purpose of Transaction (Nội dung chuyển khoản)
    const purposeOfTransaction = formatTLV('08', transferContent);
    additionalDataSubfields += purposeOfTransaction;
  }

  // Combine sub-fields for Additional Data.
  const additionalData = formatTLV('62', additionalDataSubfields);

  // --- Xây dựng chuỗi trước CRC ---
  const dataForCrc =
    payloadFormatIndicator +
    pointOfInitiationMethod +
    merchantAccountInfo +
    currencyCode +
    transactionAmountField +
    countryCode +
    additionalData +
    '6304'; // Thêm tag 6304 rỗng để tính CRC

  // --- Tính CRC và thêm vào chuỗi ---
  const crc = calculateCrc16Ccitt(dataForCrc);
  const finalVietQR = dataForCrc + crc;

  return finalVietQR;
};

// Hàm tạo ảnh QR từ chuỗi trên
export const base64BankQR = async (options) => {
  const qrString = generateVietQR(options);
  return await getLogoQr(qrString);
};

export const base64BinanceQR = async (qrString) => {
  return await getLogoQr(qrString);
};

export const base64QR = async (url) => {
  return await getLogoQr(url);
};
