import React, {useState, KeyboardEvent, MouseEvent, useEffect, ChangeEvent, useRef} from "react";
import classes from "./Chat.module.css";


type MessageData = {
	message: string
	photo: string | undefined
	userId: number
	userName: string
}

export const Chat = () => {

	const [textareaValue, setTextarea] = useState<string>('')
	const [messages, setMessages] = useState<Array<MessageData>>([])
	const [ws, setWs] = useState<WebSocket | null>(null)
	const messagesBlockRef = useRef<any>(null)

	useEffect(() => {
		// create webSocket object и прокладываем адресс (канал должны создать только один раз)
		let localWs = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
		// subscribe to the event (when we'll get a message, arrow function will be run)
		localWs.onmessage = (messageEvent: MessageEvent) => {
				let newMessages = JSON.parse(messageEvent.data);
				// React будет сам брать messages из-за замыкания и кидать их в setMessages
				setMessages((messages) => [...messages, ...newMessages])
				// auto scroll to the end of the page
				messagesBlockRef.current.scrollTo(0, messagesBlockRef.current.scrollHeight)
			}
		setWs(localWs)
	}, [])


	const sendMessage = () => {
		ws?.send(textareaValue)
		setTextarea('')
	}
	const sendMessageKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.ctrlKey && e.charCode === 13) {
			// send our message to the server
			sendMessage()
		}
	}
	const sendMessageClick = (e: MouseEvent<HTMLButtonElement>) => {
			// send our message to the server
		sendMessage()
	}
	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTextarea(e.currentTarget.value)
	}

	const message = messages.map((u, i) => {
		return (
			<div className={classes.message} key={i}>
				<div className={classes.img}>
					<img src={u.photo} alt=""/>
				</div>
				<div className={classes.name}>
					<b>{u.userName}</b>
					<span>{u.message}</span>
				</div>
			</div>
		)
	})

	return (
		<div className={classes.chat}>
			<div className={classes.title}>
				<h2>Chat</h2>
				<h3>Offline</h3>
			</div>
			<div className={classes.messages} ref={messagesBlockRef}>
				{message}
			</div>
			<div className={classes.footer}>
				<textarea onChange={onMessageChange} onKeyPress={sendMessageKey} value={textareaValue}/>
				<button onClick={sendMessageClick}>Send</button>
			</div>
		</div>
	)
}