

const heading = React.createElement('div', {}, [
  React.createElement('h1', {id: 'heading'}, 'Hello!'), 
  React.createElement('h1', {id: 'heading'}, 'Hello!')
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)
