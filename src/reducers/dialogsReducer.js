const initialStore = {
  dialogs: [
    {
      id: "1",
      contact: "Alice Freeman",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6ymzVmwGRhyOWVjfsI7JCCIXloiZhR2--QQ&usqp=CAU",
      messages: [
        {
          author: "contact",
          text: "You are the worst",
          date: "Jun 12, 2017",
          time: "4:00 AM",
        },
        {
          author: "me",
          text:
            "I`m having breackfast right now, can`t you wait for 10 minutes?",
          date: "Jun 12, 2017",
          time: "4:05 AM",
        },
      ],
    },
    {
      id: "2",
      contact: "Alice",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6ymzVmwGRhyOWVjfsI7JCCIXloiZhR2--QQ&usqp=CAU",
      messages: [
        {
          author: "contact",
          text: "You are the best",
          date: "Jun 12, 2017",
          time: "4:00 AM",
        },
      ],
    },
    {
      id: "3",
      contact: "Freeman",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6ymzVmwGRhyOWVjfsI7JCCIXloiZhR2--QQ&usqp=CAU",
      messages: [
        {
          author: "contact",
          text: "We are the champions",
          date: "Jun 12, 2017",
          time: "4:00 AM",
        },
      ],
    },
  ],
  myAvatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR4uQSf4pHUcTnhnAfADvWGFGq7tXiZw94dw&usqp=CAU",
  messages: [
    {
      author: "contact",
      text: "You are the worst",
      date: "Jun 12, 2017",
      time: "4:00 AM",
    },
    {
      author: "me",
      text: "I`m having breackfast right now, can`t you wait for 10 minutes?",
      date: "Jun 12, 2017",
      time: "4:05 AM",
    },
  ],
};

const dialogsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "ADD_NEW_MESSAGE": {
      const dialog = store.dialogs.filter(
        (dialog) => dialog.id === action.dialogId
      )[0];
      const unChangedDialogs = store.dialogs.filter(
        (dialog) => dialog.id !== action.dialogId
      );
      dialog.messages = [action.newMessage, ...dialog.messages];
      return {
        ...store,
        dialogs: [dialog, ...unChangedDialogs],
      };
    }

    default:
      return store;
  }
};

export default dialogsReducer;
