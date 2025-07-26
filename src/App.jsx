import { useState } from 'react';
import './App.css';
import { Navbar, Footer, DisplayResult } from "./index";
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("/api/github", { username });
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className='min-h-[85vh] max-h-fit'>
        <div className='flex h-full px-[20rem] items-center all-x-p'>
          <div className='result-container py-[50px] w-full '>
            {/* top: input */}
            <div className='w-full flex justify-center'>
              <div className='input-container flex items-center mb-[50px]'>
                <input
                  className="all-input outline-0 bg-[#E5E7EB] px-[15px] py-[15px] text-[18px] placeholder:text-[#0F172A] text-[#0F172A] w-[300px]"
                  type="text"
                  placeholder="Search GitHub profile"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  name="srch"
                />
                <button
                  onClick={handleSubmit}
                  className='all-btn bg-[#22D3EE] text-[#0F172A] text-[18px] py-[15px] px-[20px] ml-2'
                >
                  Search
                </button>
              </div>
            </div>

            {/* bottom: Display Result */}
            {userData && (
              <div className='flex flex-col items-center'>
                <div className="outline-5 all-image-box h-[400px] w-[400px] outline-[#22D3EE]">
                  <img
                    className="h-full w-full object-cover"
                    src={userData.avatar_url}
                    alt="user_avatar"
                  />
                </div>

                <div className='display-gap flex flex-col gap-[30px] mt-[50px]'>
                  <DisplayResult displayText={userData.name} />
                  <DisplayResult displayText={userData.login} />
                  <DisplayResult displayText={userData.bio} />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
