import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from '@expo-google-fonts/inter';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Header from './src/Header.js';
import TodoList from './src/TodoList.js';
import api from './src/utils/api.js';
import 'react-native-get-random-values';
import uuid from 'node-uuid';

function App() {

	let [fontsLoaded] = useFonts({
		Inter_100Thin,
		Inter_200ExtraLight,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
		Inter_900Black,
	});

	const [restTodos, setRestTodos] = React.useState([]);

	const addRestTodo = async (text) => {
		try {
			await api.addRestTodo({
				id: uuid.v1(),
				completed: false,
				text: text,
				key: 'rest',
			});
			getRestTodos();
		} catch (error) {
			console.log(error)
		}
	};

	const deleteRestTodo = async (id) => {
		try {
			await api.deleteRestTodo(id);
			getRestTodos();
		} catch (error) {
			console.log(error)
		}
	};

	const completeRestTodo = async (id, text, completed) => {
		try {
			await api.updateRestTodo({
				id,
				text,
				completed: !completed,
			});
			getRestTodos();
		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		getRestTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
	}, [restTodos]);

	const getRestTodos = async () => {
		// Reload the todo list from the database to see the latest changes
		api.getRestTodos().then((restTodos) => setRestTodos(restTodos));
	};

	const clearRestCompleted = async () => {
		let docTodos = api.getRestTodos();
		docTodos.forEach((todo) => {
			completeRestTodo(todo.id, todo.text, true);
		});
	};

	const actions = {
		addRestTodo: addRestTodo,
		completeRestTodo: completeRestTodo,
		clearRestCompleted: clearRestCompleted,
		getRestTodos: getRestTodos,
		deleteRestTodo: deleteRestTodo,
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.todos}>
					<Header title="To-Do List" addTodo={actions.addRestTodo} type="rest" />
					<TodoList type="rest" todos={restTodos} actions={actions} />
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	statusBar: {
		backgroundColor: '#e8f4f8',
		//backgroundColor: '#F5F5F5',
	},
	todos: {
		flex: 1,
		backgroundColor: '#e8f4f8',
		//backgroundColor: '#F5F5F5',
	},
});

export default App;
