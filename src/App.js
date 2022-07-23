import Form from "./components/Form/index";
import { apiUrl } from "./components/api/constant";
import { useEffect, useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setContent(result.content);
          setAuthor(result.author);
        },
        (err) => {
          console.log(err);
        }
      );
  }, [isClick]);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="App">
      <Form
        title="Quote of the day"
        content={content}
        author={author}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
