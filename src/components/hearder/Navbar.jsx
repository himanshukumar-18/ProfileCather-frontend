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
                <a href="/github">
                  <div>
                    <img className="h-[40px] all-icon" src="https://img.icons8.com/?size=100&id=80462&format=png&color=000000" alt="github" />
                  </div>
                </a>
              </li>
              <li>
                <a href="/linkdin">
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