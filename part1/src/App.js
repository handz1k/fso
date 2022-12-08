const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = (part) => {
  return (
    <p>
      {part.name} {part.exercise}
    </p>
  );
};
const Content = (content) => {
  return (
    <div>
      <Part content name="Fundamentals of React" exercise={10} />
      <Part content name="Using props to pass data" exercise={7} />
      <Part content name="State of a component" exercise={14} />
    </div>
  );
};

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises {total.one + total.two + total.three}</p>
    </div>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course name={course} />
      <Content />
      <Total total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  );
};
export default App;
