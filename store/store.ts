import { create } from 'zustand';

export type ChatMessage = {
  id: number;
  message: string;
  createdAt: string;
  chatType: 'sender' | 'receiver';
};

type ChatStore = {
  chatData: ChatMessage[];
  setChatData: (chatData: ChatMessage[]) => void;
  addChatData: (chat: ChatMessage) => void;
  removeChatData: (id: number) => void;
  updateChatData: (id: number, chat: ChatMessage) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  chatData: [],
  setChatData: (chatData) => set({ chatData }),
  addChatData: (chat) =>
    set((state) => ({ chatData: [...state.chatData, chat] })),
  removeChatData: (id) =>
    set((state) => ({
      chatData: state.chatData.filter((c) => c.id !== id),
    })),
  updateChatData: (id, chat) =>
    set((state) => ({
      chatData: state.chatData.map((c) => (c.id === id ? chat : c)),
    })),
}));
