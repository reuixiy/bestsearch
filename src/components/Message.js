import { Alert } from '@mui/material'

const Message = ({ message }) => {
  return <Alert severity={message.type}>{message.content}</Alert>
}

export default Message
