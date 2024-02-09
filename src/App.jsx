import { useEffect, useState } from "react"
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from "./data"
import TabButton from "./Components/TabButton"
import { EXAMPLES } from "./data"
 
const getDes = ["Fundamental", "Crucel", "Core"]
const getRandom = () => {
  const rndm = Math.floor(Math.random() * 3)
  return rndm
}
const CoreConcepts = (props) => {
  return <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}
const Header = () => {
  const [k, setK] = useState("")
  useEffect(() => {
    setTimeout(() => {
      const term = getDes[getRandom()]
      setK(term)
    }, 10000)
  }, [])
  return <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {k} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
}

function App() {
  const [tabContent,setTabContent ] = useState("Components")
  const onHandleSelect = (selectedBtn) => {
    // console.log(selectedBtn)
    setTabContent(selectedBtn)
    // switch (selectedBtn) {
    //   case 'Components':
    //     setTabContent("Components")
    //     break;
    //   case 'JSX':
    //     setTabContent('JSX')
    //     break;
    //   case 'Props':
    //     setTabContent("Props")
    //     break;
    //   case 'State':
    //     setTabContent("State")
    //     break;
    //   default:
    //     setTabContent("Components")
    // }
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map(item => {
              return <CoreConcepts
                key={item?.title}
              title={item?.title} 
              description={item?.description}
              image={item?.image}
              />
          }) }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent == "Components"}  onSelect={()=>{onHandleSelect("Components")}}>Components</TabButton>
            <TabButton isSelected={tabContent == "JSX"} onSelect={()=>{onHandleSelect("JSX")}}>JSX</TabButton>
            <TabButton isSelected={tabContent == "Props"} onSelect={()=>{onHandleSelect("Props")}}>Props</TabButton>
            <TabButton isSelected={tabContent == "State"} onSelect={()=>{onHandleSelect("State")}}>State</TabButton>
          </menu>
        </section>
        <div id='tab-content'>
        <h3>{EXAMPLES[tabContent]?.title}</h3>
        <p>{EXAMPLES[tabContent]?.description}</p>
        <pre>
          <code>
            {EXAMPLES[tabContent]?.code}
          </code>
        </pre>
      </div>
      </main>
     
    </div>
  );
}

export default App;
