import { useState, useRef, useEffect, useCallback } from 'react';
import Styles from './Chat.module.css';
import Button from '@mui/material/Button';
import { Message } from '../Message/Message';
import { deleteMessage, getMessage, sendMessage } from '../../api/GreenApi/GreenApi';

export const Chat = ({form}) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const chatRef = useRef(null);

  const sendHandler = () => {
    sendMessage(form.idInstance, form.apiTokenInstance, `${form.phone}@c.us`, text);
    setMessages(prev => [...prev, {
      text: text,
      from: false
    }]);
    setText('');
    setTimeout(() => chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    }), 0);
  }

  const getData = useCallback(() => {
    getMessage(form.idInstance, form.apiTokenInstance).then(res => {
      if (res) {
        deleteMessage(form.idInstance, form.apiTokenInstance, res.receiptId)
        if (res.body.senderData && res.body.messageData && res.body.senderData.chatId === `${form.phone}@c.us` && res.body.messageData.typeMessage === 'textMessage') {
          setMessages(prev => [...prev, {
            text: res.body.messageData.textMessageData.textMessage,
            from: true
          }]);
          setTimeout(() => chatRef.current.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth"
          }), 0);
        }
      }
    })
  }, [form.apiTokenInstance, form.idInstance, form.phone]);

  useEffect(() => {
    const interval = setInterval(() => getData(), 5000);
    return () => {
      clearInterval(interval)
    }
  }, [getData])

  return <div className={Styles.container}>
    <h2>Номер: +{form.phone}</h2>
    <div ref={chatRef} className={Styles.chat}>
      {messages.map((msg, index) => {
        return <Message msg={msg} index={index} chatRef={chatRef}/>
      })}
    </div>
    <div className={Styles.actionsWrap}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className={Styles.input}
        placeholder='Введите сообщение...'
      />
      <Button 
        variant="outlined"
        className={Styles.button}
        onClick={sendHandler}
      >
        SEND
      </Button>
    </div>
  </div>
}