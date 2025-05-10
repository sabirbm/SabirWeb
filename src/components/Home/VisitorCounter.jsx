import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const namespace = 'https://sabirbm.github.io/SabirWeb/'; // use a custom, unique namespace
    const key = 'homepage';

    const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log('Visit count response:', data);
        setCount(data.value);
      })
      .catch((error) => {
        console.error('Error fetching visit count:', error);
        setCount('N/A');
      });
  }, []);

  return (
    <div style={styles.container}>
      {count !== null ? `Visits: ${count}` : 'Loading...'}
    </div>
  );
};

const styles = {
  container: {
    fontWeight: 'bold',
    color: '#333',
  },
};

export default VisitorCounter;
