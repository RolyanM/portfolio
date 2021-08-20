import React, {useEffect, useState} from 'react'
import ProjectList from '../ProjectList/ProjectList';
import "./Projects.scss"
import {javascriptPortfolio, reactPortfolio, websitePortfolio, javaPortfolio} from "../../data"

const Projects = () => {

  const [selected, setSelected] = useState("javascript");
  const [data, setData] = useState([]);

const list = [ 
{
  id: "javascript",
  title: "Javascript",
},
{
  id: "react",
  title: "React",
},
{
  id: "website",
  title: "Web Design",
}, 
{
id: "java",
title: "Java",
},];




useEffect(() => {

  switch(selected){
    case "javascript":
      setData(javascriptPortfolio);
      break;
      case "react":
        setData(reactPortfolio);
        break;
        case "website":
          setData(websitePortfolio);
          break;
          case "java":
            setData(javaPortfolio);
            break;
        default:
          setData(javascriptPortfolio)
  }

}, [selected])


  return (
    <div className="Projects" id="projects">
      <h1>Portfolio</h1>
      <ul>
       {list.map(item=>(
         <ProjectList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} onClick={item.URL} />
       ))}
      </ul>
      <div className="container">

       

        {data.map((d) => (
          <div className="item">
            {console.log(d)}

             <img src={d.img} alt="calc" border="0" link={d.URL} onClick={d.URL} ></img>
          <h3 > <a href={d.URL}>{d.title} </a> </h3>
          </div> 
        ))}
        

      

      </div>
    </div>
  )
}

export default Projects
