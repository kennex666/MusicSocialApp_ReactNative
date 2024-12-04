import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { API_KEY, API_URL } from './config';
import { COLORS } from '../../constants/color';

const ChatScreen = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'system',
      message:
        "Bạn là một chuyên gia âm nhạc và một công cụ tìm kiếm âm nhạc thông minh. Nhiệm vụ của bạn là: \n" +
        "Giúp người dùng khám phá nhạc mới dựa trên sở thích, tâm trạng, hoặc hoạt động của họ.\n" +
        "Tìm kiếm và gợi ý bài hát, album, hoặc nghệ sĩ dựa trên từ khóa, phong cách nhạc, hoặc cảm hứng từ nội dung cung cấp.\n" +
        "Hỗ trợ tạo danh sách phát cá nhân hóa dựa trên các yếu tố như thể loại, thời gian, hoặc năng lượng của nhạc.\n" +
        "Cung cấp thông tin chi tiết về bài hát, bao gồm lời nhạc, ý nghĩa, bối cảnh sáng tác, hoặc thông tin về nghệ sĩ.\n" +
        "Kết nối người dùng với các nền tảng phát nhạc trực tuyến hoặc các tài nguyên liên quan.\n" +
        "Hãy trả lời một cách nhanh chóng, chính xác và sáng tạo, đồng thời cung cấp giá trị cao nhất để giúp người dùng tận hưởng âm nhạc theo cách họ yêu thích.",
    },
    { id: 2, sender: 'assistant', message: 'Xin chào bạn. Tôi có thể giúp gì cho bạn?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // setOpenai(
    //   new OpenAI({
    //     apiKey: OPEN_AI_KEY,
    //     dangerouslyAllowBrowser: true,
    //   })
    // );
  }, []);

  const getResponse = async (chatComple, input) => {
    let res = '';
    try {
      const objRequest = chatComple.map((value) => {
        return { role: value.sender, content: value.message };
      });

    const textRequest = JSON.stringify(objRequest);
    console.log(textRequest);

    const endpoint = `${API_URL}?key=${API_KEY}`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: textRequest,
                        },
                    ],
                },
            ],
        }),
    });
    const data = await response.json();
    console.log(data);

    res = data.candidates[0].content.parts[0].text;
    console.log(res);
    } catch (e) {
      res = e.message;
    } finally {
      setChatMessages((chatMessages) => [
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          sender: 'assistant',
          message: res,
        },
      ]);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: inputMessage,
      };
      setChatMessages((preMessage) => {
        getResponse([...chatMessages, newMessage], inputMessage);
        return [...chatMessages, newMessage];
      });
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with AI</Text>
      <ScrollView style={styles.chatContainer}>
        {chatMessages.map((msg) => (
          <View key={msg.id} style={styles.messageContainer}>
            <Text style={styles.sender}>{msg.sender}:</Text>
            <View style={styles.messageBubble}>
              <Text>{msg.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type something to chat"
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholderTextColor={COLORS.secondary.text}
        />
        <Button title=">" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#333",
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.secondary.text,
  },
  chatContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  sender: {
    fontWeight: 'bold',
    color: COLORS.secondary.text,
  },
  messageBubble: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#222',
    borderRadius: 10,
    color: COLORS.primary.text,
  },
});

export default ChatScreen;
