import { useState } from "react";
// import "./App.css";

function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [gender,setGender] = useState("")
  const [subjects, setSubjects] = useState({
    english:false,
    maths:false,
    physics:false
  })
  const [selectedOption,setSelectedOption] = useState('')
  const [paragraph,setParagraph] = useState('')

 
  const handleSelectedOption = () => {
      setSelectedOption(document.getElementById('cars').value)
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(firstname,lastname,email,contact,gender,subjects,selectedOption,paragraph);

  }
  const handleSubject = (e) => {
      
      console.log("e.tagret : ",e.target);
      const {id ,value } = e.target;
     if (subjects[id] = value) {
      setSubjects((prev) => {return {
        ...prev,value : !value
      }})
     } 


  }

  const handleReset = () => {
    setfirstname('')
    setlastname('')
    setEmail('')
    setContact('')
    setGender('')
    setSubjects({
       english:false,
       maths:false,
       physics:false
    })
    setSelectedOption('')
    setParagraph('')
  }

  


  return (
    <>
      <div className="bg-gray-800">
      <div className="  border-4 rounded-3xl border-gray-600 p-8 max-w-lg mx-auto  text-white font-sans">
        <h1 className=" text-3xl  text-green-500">REACT-FORM</h1>
        <div className="mb-4 mt-10">
          <form action="#" onSubmit={handleSubmit} >
            <label className="" htmlFor="firstname">
              First Name
            </label>
            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded  "
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value) }
              />
            </div>

            <label htmlFor="lastname">Last Name</label>
            <div className="mb-4">
              <input
                type="text"
                id="lastname"
                value={lastname}
                className="w-full p-2 border border-gray-300 rounded text-black"
                onChange={(e)=> setlastname(e.target.value) }
              />
            </div>

            <label htmlFor="email">Email</label>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                className="w-full p-2 border border-gray-300 rounded text-black"
                onChange={(e) =>  setEmail(e.target.value)} 
              />
            </div>

            <label htmlFor="contact">Contact Number</label>
            <div className="mb-4">
              <input
                type="tel"
                id="contact"
                value={contact}
                className="w-full p-2 border border-gray-300 rounded text-black"
                onChange={(e) =>  setContact(e.target.value)}
              />
            </div>

            <label htmlFor="gender" className="block text-white font-bold  mb-2">
              Gender:
            </label>
            <div id="gender" className="mb-4 ">
              <label htmlFor="male" className="ml-12">
                Male
              </label>
              <input type="radio" name="gender" id="male" defaultChecked value='male' onChange={() => setGender('male')}/>
              <label htmlFor="female" className="ml-4">
                Female
              </label>
              <input type="radio" name="gender" id="female" value="female"onChange={() => setGender('female')} />
              <label htmlFor="other" className="ml-4">
                Other
              </label>
              <input type="radio" name="gender" id="other" value='other' onChange={() => setGender('other')} />
            </div>

            <label
              htmlFor="subjects"
              className="block text-white font-bold mb-2"
            >
              Your best subjects:
            </label>
            <div className="mb-4">
              <label
                htmlFor="english"
                className="inline-flex items-center mr-4 ml-12 "
              >
                English
              </label>
              <input
                type="checkbox"
                name="subjects"
                id="english"
                className="mr-2"
                value='true'
                onChange={handleSubject}
              />
              <label htmlFor="maths" className="inline-flex items-center mr-4">
                Maths
              </label>
              <input
                type="checkbox"
                name="subjects"
                id="maths"
                value="true"
                className="mr-2"
                onChange={handleSubject}
              />
              <label
                htmlFor="physics"
                className="inline-flex items-center mr-4"
              >
                Physics
              </label>
              <input
                type="checkbox"
                name="subjects"
                id="physics"
                value='true'
                className="mr-2"
                onChange={handleSubject}
              />
            </div>

            <label htmlFor="cars" className="block text-white font-bold mb-2">
              Select Cars:
            </label>
            <select
              name="cars"
              id="cars"
              className="w-full text-black p-2 border border-gray-300 rounded"
              onChange={handleSelectedOption}
            >
              <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="koenigsegg">Koenigsegg</option>
              </optgroup>
              <optgroup label="German Cars ">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </optgroup>
            </select>

            <div className="mb-4">
              <label
                htmlFor="about"
                className="block text-white font-bold mb-2"
              >
                About:
              </label>
              <div className="mb-4">
                <textarea
                  id="about"
                  rows="4"
                  cols="50"
                  className="text-black outline outline-offset-4 outline-2 outline-cyan-800 rounded-lg p-2"
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 shadow-lg shadow-blue-500/40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button
                type="reset"
                value="reset"
                className="bg-gray-500 shadow-lg shadow-gray-500/50 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>

  );
}

export default App;
