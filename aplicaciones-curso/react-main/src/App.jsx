import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
 
  return (
    <main className="">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
