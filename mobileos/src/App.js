import logo from './logo.svg';
import './App.css';

function App() {
  let datas = [
    {
      heading: "Mobile Operating System",
      types: ["android", "iphone", "blackberry", "windows phone"]
    },
    {
      heading: "Mobile Manufactrures",
      types: ["samsung", "HTC", "apple", "micromax"]
    },
  ];
  return (
    <div>
      {datas.map((e) => {
        return <Mob data={e} ></Mob>
      })};
    </div>
  );
};

function Mob(props) {
  return (
    <div>
      <h1>{props.data.heading}</h1>
      <ul>
        {props.data.types.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
