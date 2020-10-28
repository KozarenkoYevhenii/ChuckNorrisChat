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
          text: "You are the worst",
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
          text: "You are the worst",
          date: "Jun 12, 2017",
          time: "4:00 AM",
        },
      ],
    },
  ],
};

const dialogsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "ADD_NEW_MESSAGE": {
      const dialog = store.dialogs.filter(
        (dialog) => dialog.contact === action.contact
      );
      return {
        ...store,
        dialogs: [action.newMessage, ...store.dialogs],
      };
    }
    default:
      return store;
  }
};

export default dialogsReducer;
