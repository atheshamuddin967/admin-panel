import { MessageType, ChatList, Input, Button } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
import { createRef } from "react";
import Images from "../../images/Images";
import "../Messages/Messages.scss";
function Chats() {
  const messages: MessageType[] = [
    {
      id: 1,
      position: "right",
      type: "text",
      text: "Hello, how are you?",
      date: new Date(),
      title: "Jhon",
      focus: false,
      titleColor: "#000",
      forwarded: false,
      replyButton: false,
      removeButton: false,
      status: "read",
      notch: false, // Add these properties to match the expected type
      retracted: false,
    },
    {
      id: 2,
      position: "left",
      type: "text",
      text: "Hello, i am fine?",
      date: new Date(),
      title: "stark",
      focus: false,
      titleColor: "#000",
      forwarded: false,
      replyButton: false,
      removeButton: false,
      status: "read",
      notch: false, // Add these properties to match the expected type
      retracted: false,
    },
    {
      id: 3,
      position: "right",
      type: "text",
      text: "where are you?",
      date: new Date(),
      title: "Jhon",
      focus: false,
      titleColor: "#000",
      forwarded: false,
      replyButton: false,
      removeButton: false,
      status: "read",
      notch: false, // Add these properties to match the expected type
      retracted: false,
    },
  ];

  const chatItems = [
    {
      id: 1,
      avatar: Images.profile,
      alt: "Reactjs",
      title: "Petter",
      subtitle: "Where are you?",
      date: new Date(),
      unread: 2,
    },
    {
      id: 2,
      avatar: Images.profile2,
      alt: "Reactjs",
      title: "Smith",
      subtitle: "Reached?",
      date: new Date(),
      unread: 1,
    },
    {
      id: 3,
      avatar: Images.profile,
      alt: "Reactjs",
      title: "harry",
      subtitle: "can you connect ?",
      date: new Date(),
      unread: 0,
    },
    {
      id: 4,
      avatar: Images.profile2,
      alt: "Reactjs",
      title: "Stark",
      subtitle: "Open camera",
      date: new Date(),
      unread: 0,
    },
    // Add more chat items as needed
  ];

  const messageListRef = createRef();
  const inputReferance = createRef();

  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <div className="chats">
            <ChatList
              id={1}
              className="chat-list"
              dataSource={chatItems}
              lazyLoadingImage=""
            />
          </div>
        </div>
        <div className="col-sm-8">
          {" "}
          <MessageList
            referance={messageListRef}
            dataSource={messages}
            className="message-list"
            toBottomHeight={"100%"}
            lockable={true}
          />
          <Input
            referance={inputReferance}
            placeholder="Type here..."
            multiline={true}
            // value={inputValue}
            maxHeight={200}
            rightButtons={
              <Button color="white" backgroundColor="black" text="Send" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Chats;
