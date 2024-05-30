import { useState } from "react";
import "./App.css";
import MainData from "./components/MainData";

function App() {
  const [formData, setFormData] = useState({
    projectName: "",
    title: "",
    hours: 0,
    minutes: 0,
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataArray = [];
    dataArray.push(formData);
    setData([...data, formData]);
  };
  // console.log(data);
  return (
    <div className="App">
      <h1 className="text-2xl underline text-gray-200 mx-auto">
        Count Your working time
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <aside className="col-span-1  w-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Project Name:</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="hover border-red-400"
              />
            </div>
            <div>
              <label>Hours:</label>
              <input
                type="number"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Minutes:</label>
              <input
                type="number"
                name="minutes"
                value={formData.minutes}
                onChange={handleChange}
                required
              />
            </div>
            <button className="bg-red-400" type="submit">
              Submit
            </button>
          </form>
        </aside>
        {/* +============================================= */}
        {/* +===================== main section ======================== */}
        {/* +============================================= */}
        <main className="col-span-1">
          {data?.map((d, index) => {
            return <MainData key={index} d={d} />;
          })}
          {data?.length > 0 && (
            <button className="bg-red-400 " onClick={() => setData([])}>
              clear data
            </button>
          )}
        </main>
        <aside className="col-span-1 ">
          <h1 className="text-3xl">Grand Total</h1>
          <h1 className="text-2xl">
            project {data?.length}, worked for three times!
          </h1>
        </aside>
      </section>
    </div>
  );
}

export default App;
