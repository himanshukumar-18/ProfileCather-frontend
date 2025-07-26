import { useState } from 'react';
import './App.css';
import { Navbar, Footer, DisplayResult, axios, Loader } from "./index";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoader(true)
      const { data } = await axios.post("/github", { username });
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false)
    }
  };

  return (
    <>
      <Navbar />
      <main className='min-h-[85vh] max-h-fit'>
        <div className='flex h-full px-[20rem] items-center all-x-p'>
          <div className='result-container py-[50px] w-full flex flex-col items-center'>
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
                  className='all-btn bg-[#22D3EE] text-[#0F172A] text-[18px] py-[15px] px-[20px] ml-2 cursor-pointer'
                >
                  Search
                </button>
              </div>
            </div>

            {/* loader */}
            {loader && (
              <Loader />
            )}

            {/* bottom: Display Result */}
            {userData && (

              <div className='flex w-fit flex-col items-center bg-[#22D3EE] p-[10px]'>
                <div className="all-image-box h-[300px] w-[300px]">
                  <img
                    className="h-full w-full object-cover"
                    src={userData.avatar_url}
                    alt="user_avatar"
                  />
                </div>

                <div className='display-gap flex flex-col gap-[15px] mt-[30px]'>
                  <DisplayResult lable={"NAME"} displayText={userData.name} />
                  <DisplayResult lable={"USERNAME"} displayText={userData.login} />
                  <DisplayResult lable={"BIO"} displayText={userData.bio} />
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
