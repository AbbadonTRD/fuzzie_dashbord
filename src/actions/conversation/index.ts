'use server'

import { pusherServer } from '@/lib/utils';

// Dummy Data for Chat Rooms and Messages
const chatRooms = [
  { id: '1', live: false, messages: [] },
  { id: '2', live: true, messages: [] },
];

let messages = [
  { id: '1', chatRoomId: '1', role: 'user', message: 'Hello!', createdAt: new Date(), seen: false },
  { id: '2', chatRoomId: '1', role: 'assistant', message: 'Hi, how can I help?', createdAt: new Date(), seen: false },
];

// Toggle Realtime for a Chat Room
export const onToggleRealtime = async (id: string, state: boolean) => {
  try {
    const chatRoom = chatRooms.find(room => room.id === id);
    if (chatRoom) {
      chatRoom.live = state;
      return {
        status: 200,
        message: chatRoom.live ? 'Realtime mode enabled' : 'Realtime mode disabled',
        chatRoom: { id: chatRoom.id, live: chatRoom.live }
      };
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Conversation Mode (Live or Not)
export const onGetConversationMode = async (id: string) => {
  try {
    const chatRoom = chatRooms.find(room => room.id === id);
    if (chatRoom) {
      return { live: chatRoom.live };
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Domain Chat Rooms with Customer Email and Messages
export const onGetDomainChatRooms = async () => {
  try {
    const customerData = {
      email: 'customer@example.com',
      chatRoom: chatRooms.map(room => ({
        id: room.id,
        createdAt: new Date(),
        message: room.messages.slice(-1)
      })),
    };

    return { customer: customerData };
  } catch (error) {
    console.log(error);
  }
};

// Get Chat Messages for a Room
export const onGetChatMessages = async (id: string) => {
  try {
    const chatRoomMessages = messages.filter(message => message.chatRoomId === id);
    return chatRoomMessages;
  } catch (error) {
    console.log(error);
  }
};

// Mark All Messages as Seen in a Room
export const onViewUnReadMessages = async (id: string) => {
  try {
    messages = messages.map(message => 
      message.chatRoomId === id ? { ...message, seen: true } : message
    );
  } catch (error) {
    console.log(error);
  }
};

// Send Real-Time Chat Messages (via Pusher)
export const onRealTimeChat = async (
  chatroomId: string,
  message: string,
  id: string,
  role: 'assistant' | 'user'
) => {
  pusherServer.trigger(chatroomId, 'realtime-mode', {
    chat: {
      message,
      id,
      role,
    },
  });
};

// Owner Send Message to a Chat Room
export const onOwnerSendMessage = async (
  chatroom: string,
  message: string,
  role: 'assistant' | 'user'
) => {
  try {
    const newMessage = {
      id: `${messages.length + 1}`,
      chatRoomId: chatroom,
      role,
      message,
      createdAt: new Date(),
      seen: false
    };

    messages.push(newMessage);
    
    const chatRoom = chatRooms.find(room => room.id === chatroom);
    if (chatRoom) {
    //   chatRoom.messages.push(newMessage);
    }

    return { message: [newMessage] };
  } catch (error) {
    console.log(error);
  }
};
