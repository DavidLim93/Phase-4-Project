import React, {useState} from "react";

function AddGame({onAddGame}) {
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
      });

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
    
        const newGame = {
            ...formData,
            average_score: 0,
          };
      
    
        fetch("/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGame),
        })
          .then((r) => r.json())
          .then((newGame) => {
            setFormData({
              name: "",
              image_url: ""
            });
            onAddGame(newGame);
          });
      }
    

return (
    <div>
         <div className="container">
      <form onSubmit={handleSubmit} className="add-game-form">
        <h3>Add a game!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter game's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image_url"
          onChange={handleChange}
          value={formData.image_url}
          placeholder="Enter game's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          className="submit"
        />
      </form>
    </div>

    </div>
)
}

export default AddGame;