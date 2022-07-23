import Form from "./components/Form/index";
import { apiUrl } from "./components/api/constant";
import { useEffect, useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [click, setClick] = useState(false);

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
  }, [click]);

  const handleClick = () => {
    setClick(!click);
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
