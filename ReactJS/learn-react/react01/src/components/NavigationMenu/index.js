function NavigationMenu() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  };
  const handleFocus = (e) => {
    e.target.classList.add("input--active");
    console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="box">
        NAVIGATIONMENU
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          <button onClick={handleClick}>Click Me</button>
        </form>
      </div>
    </>
  );
}
export default NavigationMenu;
