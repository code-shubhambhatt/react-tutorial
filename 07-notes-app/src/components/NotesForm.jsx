import { useState } from "react";

const NotesForm = () => {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!heading.trim() || !detail.trim()) return;

    const copyTask = [...task];
    copyTask.push({ heading, detail });
    setTask(copyTask);

    setHeading("");
    setDetail("");
  };
  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask )
    console.log('Note Deleted')
  }
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* LEFT SIDE UI */}
      <div className="w-1/2 border-r border-gray-700 p-10">
        <h1 className="text-4xl font-bold mb-8">Add Notes</h1>

        <form
          className="flex flex-col items-center gap-6"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-4/5 bg-black border-2 border-gray-400 text-xl rounded-lg p-4 outline-none placeholder-gray-500"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />

          <textarea
            placeholder="Write Details here"
            className="w-4/5 h-40 bg-black border-2 border-gray-400 text-xl rounded-lg p-4 outline-none placeholder-gray-500"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <button
            type="submit"
            className="w-4/5 bg-white text-black text-xl py-4 rounded-lg font-medium hover:bg-gray-200"
          >
            Add Note
          </button>
        </form>
      </div>

      {/* RIGHT SIDE — RECENT NOTES */}
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-6 mt-6">

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="h-60 w-44 bg-[#faf7d3] rounded-xl shadow-md p-4 text-black relative"
            >
              <h3 className="text-lg font-bold leading-tight">{elem.heading}</h3>

              <p className="mt-2 leading-snug text-gray-700">{elem.detail}</p>

              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-red-500 text-white font-semibold py-1 px-4 rounded"
              onClick={deleteNote} >
                Delete
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default NotesForm;
