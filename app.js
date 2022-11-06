'use strict';

const e = React.createElement;

function VocabularyRow(props) {
  const token = Object.keys(props)[0];
  return (
    <tr key={token}>
      <td className='property'>{token}</td>
      <td className='value-number'>{props[token]}</td>
    </tr>
  );
}

function VocabularyPanel(props) {
  const { title, items } = props;
  const rows = [];
  for (const key in items) {
    rows.push({ [key]: items[key] })
  }

  return (
    <div>
      <table className='panel'>
        <thead>
          <tr><th className='panel-title' colSpan='2'>{title}</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => VocabularyRow(row))}
        </tbody>
      </table>
    </div>
  );
}

function TypesAndWords(props) {
  const { types, words } = props;
  const typesProps = { title: 'Types', items: types };
  const wordsProps = { title: 'Words', items: words };

  return (
    <div>
      {VocabularyPanel(typesProps)}
      {VocabularyPanel(wordsProps)}
    </div>
  );
}

function updateVocabularyPanels(props) {
  const app = document.getElementById('app');
  const root = ReactDOM.createRoot(app);
  root.render(e(TypesAndWords, props));
}
