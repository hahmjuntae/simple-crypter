const CryptoJS = window.CryptoJS;

const secretKey = process.env.SECRET_KEY; // .env 파일에서 secretKey를 불러옵니다.

const encryptText = () => {
  const inputText = document.getElementById('inputText').value;
  const encrypted = CryptoJS.AES.encrypt(inputText, secretKey).toString();
  document.getElementById('output').innerText = encrypted;
  copyToClipboard(encrypted);
};

const decryptText = () => {
  const inputText = document.getElementById('inputText').value;
  const decrypted = CryptoJS.AES.decrypt(inputText, secretKey);
  document.getElementById('output').innerText = decrypted.toString(CryptoJS.enc.Utf8);
  copyToClipboard(decrypted.toString(CryptoJS.enc.Utf8));
};

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('Copied to clipboard!'))
    .catch((err) => console.error('Error in copying text: ', err));
};

document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
