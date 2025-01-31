import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListOfStudents from './ListOfStudents';
import FavouriteStudent from './FavouriteStudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    const [studentlist, setstudentlist] = useState([
        { id: 1, Studentname: 'vidhya',disable:false },
        { id: 2, Studentname: 'Balaji',disable:false },
        { id: 3, Studentname: 'Emi nina',disable:false },
        { id: 4, Studentname: 'Avira nina',disable:false },
        { id: 5, Studentname: 'Marvan Ori',disable:false },
        { id: 6, Studentname: 'Viyan Varman',disable:false },
        { id: 7, Studentname: 'Anjana' ,disable:false},]);
    const [favstudent, setfavstudent] = useState([]);
    const [disableprop, setdisableprop] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListOfStudents studentlist={studentlist} setstudentlist={setstudentlist} disableprop={disableprop} setdisableprop={setdisableprop}favstudent={favstudent} setfavstudent={setfavstudent} />}></Route>
                    <Route path='/favouritestudent' element={<FavouriteStudent favstudent={favstudent} setfavstudent={setfavstudent} studentlist={studentlist} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>);
}

root.render(
    <div>
        <App></App>
    </div>
);

