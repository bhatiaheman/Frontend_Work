import axios from 'axios';

const apiClient = axios.create({

    withCredentials: true,
    timeout: 120000,
})

apiClient.interceptors.request.use(
    function (config) {

        const token = localStorage.getItem('token');

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },

    function (error) {
        return Promise.reject(error);
    }
)

const loginUser = (data: { username: string; password: string }) => {
    return apiClient.post("/users/login", data);
};

const registerUser = (data: {
    email: string;
    password: string;
    username: string;
    }) => {
    return apiClient.post("/users/register", data);
};

const logoutUser = () => {
    return apiClient.post("/users/logout");
};

const getAvailableUsers = () => {
    return apiClient.get("/chat-app/chats/users");
};


const getUserChats = () => {
    return apiClient.get(`/chat-app/chats`);
};
  
const createUserChat = (receiverId: string) => {
    return apiClient.post(`/chat-app/chats/c/${receiverId}`);
};
  
const createGroupChat = (data: { name: string; participants: string[] }) => {
    return apiClient.post(`/chat-app/chats/group`, data);
};
  
const getGroupInfo = (chatId: string) => {
    return apiClient.get(`/chat-app/chats/group/${chatId}`);
};
  
const updateGroupName = (chatId: string, name: string) => {
    return apiClient.patch(`/chat-app/chats/group/${chatId}`, { name });
};
  
const deleteGroup = (chatId: string) => {
    return apiClient.delete(`/chat-app/chats/group/${chatId}`);
};
  
const deleteOneOnOneChat = (chatId: string) => {
    return apiClient.delete(`/chat-app/chats/remove/${chatId}`);
};
  
const addParticipantToGroup = (chatId: string, participantId: string) => {
    return apiClient.post(`/chat-app/chats/group/${chatId}/${participantId}`);
};
  
const removeParticipantFromGroup = (chatId: string, participantId: string) => {
    return apiClient.delete(`/chat-app/chats/group/${chatId}/${participantId}`);
};
  
const getChatMessages = (chatId: string) => {
    return apiClient.get(`/chat-app/messages/${chatId}`);
};
  
const sendMessage = (chatId: string, content: string, attachments: File[]) => {
    const formData = new FormData();
    if (content) {
        formData.append("content", content);
    }
    attachments?.map((file) => {
        formData.append("attachments", file);
    });
    return apiClient.post(`/chat-app/messages/${chatId}`, formData);
};





export {
    loginUser,
    registerUser,
    logoutUser,
    getAvailableUsers,
    getUserChats,
    createUserChat,
    createGroupChat,
    getGroupInfo,
    updateGroupName,
    deleteGroup,
    deleteOneOnOneChat,
    addParticipantToGroup,
    removeParticipantFromGroup,
    getChatMessages,
    sendMessage,


}