import "./ChatBoard.component.css";
import "react-toastify/dist/ReactToastify.css";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { getReply } from "../services/Chatboard.service";
import { PacmanLoader } from "react-spinners";
import { SiOpenai } from "react-icons/si";
import { toast } from "react-toastify";

const ChatBoard = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(null);
  const [answer, setAnswer] = useState("");

  const submitHandler = (event, iconTrigger = false) => {
    if (iconTrigger === false) {
      event.preventDefault();
    }
    setLoading(true);
    getReply({
      message: query,
    })
      .then((res) => {
        setAnswer(res.data.choices[0].text.replace(/\n/g, "\n"));
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="full-page-div">
        <div style={{ marginRight: "10px" }}>
          <SiOpenai size={"50px"} />
        </div>
        <h1>OpenAI API</h1>
      </div>

      {isLoading === null ? null : isLoading ? (
        <div className="mid-div">
          <div className="mid-div-inner">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PacmanLoader />
            </div>
          </div>
        </div>
      ) : isLoading === false ? (
        <div className="mid-div">
          <div className="mid-div-inner">
            <div style={{ textAlign: "left", padding: "10px" }}>
              {answer.split("\n").map((data, i) => (
                <div key={i}>{data}</div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <form onSubmit={submitHandler} className="input">
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <div style={{ cursor: "pointer" }}>
            <MdSend type="submit" onClick={() => submitHandler(null, true)} />
          </div>
        </div>
      </form>
    </>
  );
};

export default ChatBoard;
