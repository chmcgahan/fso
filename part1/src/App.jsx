const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({ part }) => {
  return <p>{part.name} - {part.exercises} exercises</p>
}

const Content = ({ content }) => {
  
  const contentElements = [];
  for (let i = 0; i < content.length; i++){
    contentElements.push(
      <div key={i}>
        <Part part = {content[i]}/>
      </div>
    )
  };

  return <div>{contentElements}</div>
}

const Total = ({ content }) => {

  let total = 0;

  for (let i = 0; i < content.length; i++){
    total = total + content[i].exercises;
  }

  return <div>
    <p>Number of exercises {total} </p>
  </div>

}

// const App = () => {
//   const course = 'Half Stack application development'
  
//   const content_array = [
//     { name: "Fundamentals of React", exercises: 10 },
//     { name: "Using props to pass data", exercises: 7 },
//     { name: "State of a component", exercises: 14 }
//   ];
//   return (
//     <div>
//       <Header course={course}/>
//       <Content content={content_array}/>
//       <Total content={content_array}/>
//     </div>
//   )
// }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header name={ course.name }/>
      <Content content={ course.parts }/>
      <Total content={ course["parts"] }/>
    </div>
  )
}

export default App