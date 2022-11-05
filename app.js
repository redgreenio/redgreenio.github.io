'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    const item = { token: 'StoryPost', frequency: 19 };

    return (
      <div>
        <table className='panel'>
          <thead>
            <tr><th className='panel-title' colSpan='2'>Types</th></tr>
          </thead>
          <tbody>
            {Row(item)}
          </tbody>
        </table>
        <button onClick={() => this.setState({ liked: true })}>
          Like JSX
        </button>
      </div>
    );
  };
}

function Row(props) {
  return <tr><td>{props.token}</td><td>{props.frequency}</td></tr>
}

const app = document.getElementById('app');
console.log(app);
const root = ReactDOM.createRoot(app);
root.render(e(LikeButton));
