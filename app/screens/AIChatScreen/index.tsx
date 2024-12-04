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

const ChatScreen = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'system',
      message:
        'Bạn là Kennen Assistant, một người chuyên về lập trình Android. Người dùng có thể hỏi bạn bất thì điều gì',
    },
    { id: 2, sender: 'assistant', message: 'Hi, how can I assist you today?' },
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
      <Text style={styles.header}>My Kennen Assistant Lite Demo</Text>
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
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  sender: {
    fontWeight: 'bold',
  },
  messageBubble: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default ChatScreen;
