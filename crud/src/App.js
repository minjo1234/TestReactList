import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route exact path="/day/:day" element={<Day />} />
          <Route exact path="/create_word" element={<CreateWord />} />
          <Route exact path="/create_day" element={<CreateDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// 이걸 해석하면 app이라는 component안에 Hello , welocome component가 있고 Hello component안에 World Component가 존재하는것이다 .
