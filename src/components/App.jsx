import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const [createnew, setnew] = React.useState([]);

  function addValue(items) {
    setnew((preValue) => {
      props.func(items);
      return [...preValue, items]
    });
  }

  

  function deleteValue(id) {
    setnew(createnew.filter((value, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea func={addValue} />
      {createnew.map((values, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={values.title}
            content={values.content}
            func={deleteValue}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
