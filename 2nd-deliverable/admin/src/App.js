import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import List from "./pages/list/List.js";
import New from "./pages/new/New.js";
import Single from "./pages/single/Single.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {userInputs, employeeInputs, hotelInputs, roomInputs} from "./formSource.js";
import Signup from "./pages/signup/Signup.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="users"> 
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />}/>
          </Route>
          <Route path="employees"> 
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />}/>
            <Route path="new" element={<New inputs={employeeInputs} title="Add New Employee"/>}/>
          </Route>
          <Route path="hotels"> 
            <Route index element={<List />}/>
            <Route path=":hotelId" element={<Single />}/>
            <Route path="new" element={<New inputs={hotelInputs} title="Add New Hotel"/>}/>
          </Route>
          <Route path="rooms"> 
            <Route index element={<List />}/>
            <Route path=":hotelId" element={<Single />}/>
            <Route path="new" element={<New inputs={roomInputs} title="Add New Hotel"/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
