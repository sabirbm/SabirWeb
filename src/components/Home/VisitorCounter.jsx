import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const countApiKey = 'https://sabirbm.github.io/SabirWeb/'; // Replace with your GitHub Pages domain
    const countApiNamespace = 'visit-counter';

    fetch(`https://api.countapi.xyz/hit/${countApiNamespace}/${countApiKey}`)
      .then(response => response.json())
      .then(data => setCount(data.value))
      .catch(error => {
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
