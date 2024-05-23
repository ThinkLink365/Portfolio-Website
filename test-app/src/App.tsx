// import ListGroup from "./components/ListGroup";
// import Message from "./Message";
import { useState } from "react";
import Alert from "./components/alert";
// import Button from "./components/Button";
import AlertButton from "./components/alertButton";

function App() {
  // let items = ["New York", "Cork", "Dublin", "Galway", "Kerry"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVis, setAlertVis] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Message></Message> */}
      {alertVis && (
        <Alert onClose={() => setAlertVis(false)}>Magic alert!</Alert>
      )}
      {/* <Button onClick={() => console.log("clicked")}>CLick here!</Button> */}
      <AlertButton onClick={() => setAlertVis(true)}>
        Click here for alert
      </AlertButton>
    </div>
  );
}

export default App;
