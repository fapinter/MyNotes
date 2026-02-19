import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home';
import './App.css'
import Settings from '../components/settings/Settings';
import Workspace from '../components/workspace/Workspace';
import Dashboard from '../components/dashboard/Dashboard';
import NotesEditor from '../components/note/NotesEditor';
import CalendarDisplay from '../components/calendar/Calendar';
import FileDisplay from '../components/file/Files';
import TodoList from '../components/todo/todo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="" element={<Dashboard/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/workspace" element={<Workspace/>}/>
                    <Route path="/calendar" element={<CalendarDisplay/>}/>
                    <Route path="/note" element={<NotesEditor/>}/>
                    <Route path="/file" element={<FileDisplay/>}/>
                    <Route path="/todo" element={<TodoList/>}/>
                    
                    

                </Route>  
            </Routes>
        </BrowserRouter>
    )
}

export default App
