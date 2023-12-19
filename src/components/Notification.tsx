// export const showNotification = (
//   title: string,
//   options?: NotificationOptions
// ) => {
//   if ("Notification" in window) {
//     if ((window as any).Notification.permission === "granted") {
//       new (window as any).Notification(title, options);
//     } else if ((window as any).Notification.permission !== "denied") {
//       (window as any).Notification.requestPermission().then(
//         (permission: any) => {
//           if (permission === "granted") {
//             new (window as any).Notification(title, options);
//           }
//         }
//       );
//     }
//   }
// };
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Notification = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};
