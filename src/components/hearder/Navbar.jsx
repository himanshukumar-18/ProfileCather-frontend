const Navbar = () => {
  return (
    <>
      <div className="nav-container all-x-p bg-[#0F172A] h-[10vh] w-full px-[20rem] flex items-center">
        <nav className="w-full flex justify-between">
          <div className="logo flex items-center">
            <h1 className="text-[#E5E7EB] text-[26px] font-bold all-heading">
              ProfileCatcher
            </h1>
          </div>

          <div className="social-links">
            <ul className="flex gap-5 text-[#E5E7EB]">
              <li>
                <a href="https://github.com/himanshukumar-18" target="_blank">
                  <div>
                    <img className="h-[40px] all-icon" src="https://img.icons8.com/?size=100&id=80462&format=png&color=000000" alt="github" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/himanshu-kumar-8b5845313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <div>
                    <img className="h-[40px] all-icon" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="linkdin" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar