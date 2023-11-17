<ul>
  {messages.map((message, index) => (
    <li
      key={index}
      className={message.sender === currentUser ? 'sent' : 'received'}
    >
      {message.text}
    </li>
  ))}
</ul>


// use the following CSS
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li.sent {
  text-align: right;
  background-color: #007bff;
  color: white;
  margin: 0.2rem 0.5rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
}

li.received {
  text-align: left;
  background-color: #f2f2f2;
  color: #333;
  margin: 0.2rem 0.5rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
}
