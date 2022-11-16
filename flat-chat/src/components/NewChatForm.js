import React, {useState} from "react";

function NewChatForm({ onAddChat }) {
  const [phase, setPhase] = useState("")
  const [topic, setTopic] = useState("")
  const [location, setLocation] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    fetch("",{
    method: "POST",
    headers:{"Content-Type": "application/json",},
    body: JSON.stringify({
      phase: phase,
      topic: topic,
      location: location,
    }),
    })
    .then((r) => r.json())
    .then((newChat) => onAddChat(newChat));
  }

  return (
    <div className="new-chat-form">
      <h2>Send a Chat!</h2>
      <form onSubmit= {handleSubmit}>
        <input type="text" name="phase" placeholder="What phase is this for?" value= {phase} onChange= {(e)=> setPhase(e.target.value)}/>
        <input type="text" name="topic" placeholder="What's this about?" value= {topic} onChange= {(e)=> setTopic(e.target.value)}/>
        <input type="number" name="location" placeholder="Where are you located?" value= {location} onChange= {(e) => setLocation(e.target.value)}/>
        <button className= "add-chat" type="submit">Send Chat!</button>
      </form>
    </div>
  );
}

export default NewChatForm;