import fetch from 'isomorphic-unfetch'

const StarWarsCast = items => {
  <div className="container">
    {
      items.results.map(item => {
        <div className="tile" key={item.name + 'key'}>
          <p>Name: {item.name}</p>
          <p>Height: {item.height}</p>
          <p>Mass: {item.mass}</p>
          <p>Birth year: {item.birth_year}</p>
          <p>Gender: {item.gender}</p>
        </div>
      })
    }
    <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
        }
        .tile {
          margin: 5px;
          padding: 5px;
          width: 200px;
          heigth: 150px;
          background:beige; 
        }
      `}
    </style>
  </div>
}

StarWarsCast.getInitialProps = async () => {
  const res = await fetch('https://swapi.co/api/people');
  const data = await res.json();
  return data;
}

export default StarWarsCast