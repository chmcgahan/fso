const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ content }) => {
  
  const contentElements = [];

  for (let i = 0; i < content.length; i++){
    contentElements.push(
      <p key={i}>
        {content[i].name} - {content[i].exercises} exercises
      </p>
    )
  };

  return <div>{contentElements}</div>
}

const Total = ({ content }) => {

  var total = 0;

  for (let i = 0; i < content.length; i++){
    total = total + content[i].exercises;
  }

  return <div>
    <p>Number of exercises {total} </p>
  </div>

}

const App = () => {
  const course = 'Half Stack application development'
  
  const content_array = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ];
  return (
    <div>
      <Header course={course}/>
      <Content content={content_array}/>
      <Total content={content_array}/>
    </div>
  )
}

export default App