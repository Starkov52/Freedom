"use client";
import "../style/_mainPage.scss";
import "../style/_chat.scss";
import "../style/_headerChatBox.scss";
import "../style/_chatBox.scss";
import "../style/_headerMessageMenu.scss";
import "../style/_messageMenu.scss";
import "../style/_settings.scss";
import "../style/_profile.scss";
import "../style/_createNewWindow.scss";
import "../style/_bigChat.scss";
import ChatBox from "@/components/chat";
import { Provider } from "react-redux";
import store from "../StateManagment/store";
import { RootState } from "../StateManagment/store";
import { useSelector } from "react-redux";

export default function Main() {
     return (
          <Provider store={store}>
               <ChatBox fullfield={false}></ChatBox>;
          </Provider>
     );
}
