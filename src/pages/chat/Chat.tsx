import React from "react";
import { User } from "../../lib/services/User";
import { io } from "socket.io-client";
import { decrement, increment } from "../../redux/reducers/countReducer";
import { useAppDispatch, useAppSelector } from "../../features/hooks/redux";

interface user {
  id: string;
  name: string;
  avata: string;
  email: string;
  phone: string;
}
const Chat: React.FC = () => {
  const [list, setList] = React.useState<user[]>([]);
  React.useEffect(() => {
    getList();
    const socket = io(`http://localhost:8000`);
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("user_update", (value) => {
      setList(value);
    });
  }, []);
  const getList = () => {
    User.getUser()
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.log(error));
  };
  const count = useAppSelector((state) => state.count.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
export default Chat;
