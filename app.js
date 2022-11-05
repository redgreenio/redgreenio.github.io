'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [{ 'StoryPost': 19 }];

    return (
      <div>
        <table className='panel'>
          <thead>
            <tr><th className='panel-title' colSpan='2'>Types</th></tr>
          </thead>
          <tbody>
            {items.map((item) => Row(item))}
          </tbody>
        </table>
      </div>
    );
  };
}

function Row(props) {
  const token = Object.keys(props)[0];
  return <tr key='token'><td>{token}</td><td>{props[token]}</td></tr>
}

const app = document.getElementById('app');
console.log(app);
const root = ReactDOM.createRoot(app);
root.render(e(LikeButton));
