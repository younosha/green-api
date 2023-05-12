import axios from "axios"

axios.defaults.headers = {
  'Content-Type': 'application/json'
}

export const sendMessage = async (idInstance, apiTokenInstance, chatId, message) => {
  const response = await axios.post(
    `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, 
    {
      chatId,
      message
    }
  );

  return response.data;
}

export const deleteMessage = async (idInstance, apiTokenInstance, receiptId) => {
  const response = await axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`);
  return response.data;
}

export const getMessage = async (idInstance, apiTokenInstance) => {
  const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`);
  return response.data;
}