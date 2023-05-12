import Styles from './Message.module.css';

export const Message = ({msg, index}) => {
  const sideStyle = {};

  if (!msg.from) {
    sideStyle.marginLeft = 'auto'
    sideStyle.background = 'blue'
    sideStyle.color = 'white'
  } else {
    sideStyle.marginRight = 'auto'
    sideStyle.background = 'yellow'
    sideStyle.color = 'black'
  }

  if(index === 0) {
    sideStyle.marginTop = 'auto'
  }

  return <div 
    className={Styles.container}
    style={sideStyle}
  >
    {msg.text}
  </div>
}