"use client";

const DarkLight = () => {
  function toggleDarkMode() {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div
      className="bg-black dark:bg-white w-10 h-10 rounded-full fixed bottom-5 right-5 cursor-pointer"
      onClick={toggleDarkMode}
    ></div>
  );
};

export default DarkLight;
