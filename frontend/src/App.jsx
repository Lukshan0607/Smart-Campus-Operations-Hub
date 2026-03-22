import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/api/test")
      .then(res => {
        console.log(res.data);
        setMessage(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold text-purple-600">Frontend Connected ✅</h1>
      <h2 className="mt-4 text-2xl text-gray-700">{message}</h2>
    </div>
  );
}

export default App;