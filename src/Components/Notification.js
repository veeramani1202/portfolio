
import { notification } from "antd";
const AlertNotification = (type, title, message) => {
  return notification[type]({
    message: title,
    description: message,
  });
};
export default AlertNotification;
