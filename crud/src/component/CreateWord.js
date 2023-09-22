import { useRef, useState } from "react";
import useFetch from "../\bhooks/useFetch";
import { useNavigate } from "react-router";

export default function CreateWord() {
  const days = useFetch("http://localhost:3020/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      fetch(`http://localhost:3020/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          navigate(`/day/${dayRef.current.value}`);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <select ref={dayRef}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}{" "}
      </button>
    </form>
  );
}
