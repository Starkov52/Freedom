import React from "react";
const StickerMenu = ({
     setInputValue,
     userIsDarkTheme,
     userThemeColorScheme
}: {
     setInputValue: React.Dispatch<React.SetStateAction<string>>;
     userIsDarkTheme: boolean;
     userThemeColorScheme: { dark: string[]; light: string[] };
}) => {
     const stickers: string[] = [
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "😊",
          "😇",
          "🙂",
          "🙃",
          "😉",
          "😌",
          "😍",
          "🥰",
          "😘",
          "😗",
          "😙",
          "😚",
          "😋",
          "😛",
          "😝",
          "😜",
          "🤪",
          "🤨",
          "🧐",
          "🤓",
          "😎",
          "🥳",
          "😏",
          "😒",
          "😞",
          "😔",
          "😟",
          "😕",
          "🙁",
          "☹️",
          "😣",
          "😖",
          "😫",
          "😩",
          "🥺",
          "😢",
          "😭",
          "😤",
          "😠",
          "😡",
          "🤬",
          "🤯",
          "🤗",
          "🤔",
          "🤭",
          "🤫",
          "🤥",
          "😶",
          "😐",
          "😑",
          "😬",
          "🙄",
          "😯",
          "😦",
          "😧",
          "😮",
          "😲",
          "🥱",
          "😴",
          "🤤",
          "😪",
          "😵",
          "🤐",
          "🥴",
          "🤢",
          "🤮",
          "🤧",
          "😷",
          "🤒",
          "🤕",
          "🤑",
          "😈",
          "👿",
          "👹",
          "👺",
          "🤡",
          "💩",
          "👻",
          "💀",
          "☠️",
          "👽",
          "👾",
          "🙍‍♂️",
          "🙎‍♀️",
          "🙅‍♂️",
          "🙆‍♀️",
          "💁‍♂️",
          "🙋‍♀️",
          "🧏‍♂️",
          "🙇‍♀️",
          "🤦‍♂️",
          "🤷‍♀️",
          "👨‍⚕️",
          "👩‍🏫",
          "👨‍🍳",
          "👩‍🌾",
          "👨‍🎓",
          "👩‍💼",
          "👨‍🔧",
          "👩‍🚀",
          "🕵️‍♂️",
          "👮‍♀️",
          "🐶",
          "🐱",
          "🐭",
          "🐹",
          "🐰",
          "🦊",
          "🐻",
          "🐼",
          "🐨",
          "🐯",
          "🦁",
          "🐮",
          "🐷",
          "🐸",
          "🐵",
          "🐔",
          "🐧",
          "🐦",
          "🦆",
          "🦅",
          "🦉",
          "🦇",
          "🐺",
          "🐗",
          "🐴",
          "🦄",
          "🐝",
          "🦋",
          "🐌",
          "🍏",
          "🍎",
          "🍐",
          "🍊",
          "🍋",
          "🍌",
          "🍉",
          "🍇",
          "🍓",

          "🍒",
          "🍑",
          "🥭",
          "🍍",
          "🥥",
          "🥝",
          "🍅",
          "🍆",
          "🥑",
          "🥦",
          "🥬",
          "🥒",
          "🌶️",

          "❤️",
          "🧡",
          "💛",
          "💚",
          "💙",
          "💜",
          "🖤",
          "🤍",
          "🤎",
          "💔",
          "🍦",
          "🍧",
          "🍨",
          "🍩",
          "🍪",
          "🎂",
          "🍰",
          "🧁",
          "🥧",
          "🍫",
          "🍬",
          "🍭",
          "🍮",
          "🍯",
          "🍼",
          "🥛",
          "☕",
          "🍵",
          "🧃",
          "🌭",
          "🍔",
          "🍟",
          "🍕",
          "🥪",
          "🥙",
          "🧆",
          "🌮",
          "🌯",
          "🫔",
          "🥗",
          "🍝",
          "🍜",
          "🍲",
          "🍛",
          "🍣",
          "🍱",
          "🥟",
          "🦪",
          "🍤",
          "🌽",
          "🥕",
          "🧄",
          "🧅",
          "🥔",
          "🍠",
          "🥐",
          "🥯",
          "🍞",
          "🥖",
          "🥨",
          "🧀",
          "🥚",
          "🍳",
          "🥞",
          "🧇",
          "🥓",
          "🥩",
          "🍗",
          "🍖",
          "🦉",
          "🦇",
          "🐺",
          "🐗",
          "🐴",
          "🦄",
          "🐝",
          "🪱",
          "🦋",
          "🐌",
          "🐞",
          "🐜",
          "🦂",
          "🕷️",
          "🕸️",
          "🐢",
          "🐍",
          "🦎",
          "🦖",
          "🦕",
          "🎉",
          "🎊",
          "🎈",
          "🎂",
          "🎁",
          "🎀",
          "🎄",
          "🎃",
          "🧨",
          "🎇",
          "🎆",
          "🪅",
          "🪩",
          "🕯️",
          "🛍️",
          "🎎",
          "🎐",
          "🎏",
          "🎠",
          "🎡",
          "🧸",
          "🧩",
          "🃏",
          "🎲",
          "♟️",
          "🎮",
          "🎰",
          "🕹️",
          "🎯",
          "🚗",
          "🚕",
          "🚙",
          "🚌",
          "🚎",
          "🏎️",
          "🚓",
          "🚑",
          "🚒",
          "🚐",
          "🚚",
          "🚛",
          "🚜",
          "🛻",
          "🚲",
          "🛴",
          "🛵",
          "🏍️",
          "🛺",
          "🚨",
          "✈️",
          "🛫",
          "🛬",
          "🪂",
          "🚀",
          "🛸",
          "🛰️",
          "🚁",
          "🛶",
          "🚤",
          "☀️",
          "🌤️",
          "⛅",
          "🌥️",
          "☁️",
          "🌦️",
          "🌧️",
          "⛈️",
          "🌩️",
          "🌨️",
          "❄️",
          "🌬️",
          "💨",
          "💧",
          "💦",
          "🌊",
          "🌪️"
     ];
     const handleAddSticker = (event: React.MouseEvent<HTMLSpanElement>) => {
          const sticker = event.target as HTMLElement;
          if (sticker.closest(".chatBox__stickerMenuItem")) {
               setInputValue((pre: string) => pre + sticker.textContent);
          }
     };
     return (
          <div
               style={{
                    background: userIsDarkTheme
                         ? userThemeColorScheme.dark[10]
                         : userThemeColorScheme.light[10]
               }}
               onClick={(event) => handleAddSticker(event)}
               className="chatBox__stickerMenu"
          >
               {stickers.map((item: string, index: number) => {
                    return (
                         <span className="chatBox__stickerMenuItem" key={index}>
                              {item}
                         </span>
                    );
               })}
          </div>
     );
};
export default StickerMenu;
