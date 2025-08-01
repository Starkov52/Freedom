"use client";
import React from "react";
import ChatWindow from "./chatWindow";
import HeaderChatBox from "./headerChatBox";
import ChatBox from "./chatBox";
import MessageMenu from "./messageMenu";
import Settings from "./settings";
import Profile from "./profile";
import { useDispatch } from "react-redux";
import type { RootDispatch } from "../StateManagment/store";
import { fetchUserData } from "@/StateManagment/appSlice";
import CreateNewWindow from "./createNewWindow";
import { UserInterface } from "@/StateManagment/appSlice";
import { RootState } from "../StateManagment/store";
import { shallowEqual, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type typeChatBox = { user?: UserInterface; fullfield: boolean; language: string };
const Chat: React.FC<typeChatBox> = ({ fullfield, language }) => {
     const navigator = useRouter();
     const [isOpen, setIsOpen] = React.useState<boolean>(false);
     const [isSign, setIsSign] = React.useState<boolean>(false);
     const user = useSelector((store: RootState) => store.User, shallowEqual) as UserInterface;
     React.useEffect(() => {
          const handleClose = (event: any) => {
               const element = event.target as HTMLElement;
               console.log(element);
               if (
                    !element.closest(".settings") &&
                    !element.closest(".headerMessageMenu__burgerMenu") &&
                    !element.closest(".profile")
               ) {
                    setIsOpen(false);
               }
          };
          document.addEventListener("click", handleClose);
          return () => document.removeEventListener("click", handleClose);
     }, []);
     const dispatch: RootDispatch = useDispatch();
     React.useEffect(() => {
          const name: string | null = localStorage.getItem("USERNAME");
          if (user.userName !== name) {
               dispatch(fetchUserData()).then((response: any) => {
                    console.log(response, "OPOPPOP");
                    if (!response.payload) {
                         navigator.push("/autorization");
                    }
               });
          }
     }, []);

     return (
          <div
               style={{
                    color: user.userIsDarkTheme
                         ? user.userThemeColorShceme.dark[2]
                         : user.userThemeColorShceme.light[2]
               }}
               className="chatMain"
          >
               <ChatWindow
                    userIsDarkTheme={user.userIsDarkTheme}
                    userThemeColorScheme={user.userThemeColorShceme}
                    key={user?.userChats.length}
                    fullfield={fullfield}
                    user={user}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    language={user.userLanguage}
               ></ChatWindow>

               {!isOpen ? (
                    <MessageMenu
                         userIsDarkTheme={user.userIsDarkTheme}
                         userThemeColorScheme={user.userThemeColorShceme}
                         isOpen={isOpen}
                         setIsOpen={setIsOpen}
                         language={user.userLanguage}
                    ></MessageMenu>
               ) : (
                    <Settings
                         userIsDarkTheme={user.userIsDarkTheme}
                         userThemeColorScheme={user.userThemeColorShceme}
                         language={user.userLanguage}
                    ></Settings>
               )}
          </div>
     );
};
export default Chat;
