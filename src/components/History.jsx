import { useEffect, useState } from 'react';
import styles from '../styles/History.module.css';

function History(refreshTrigger) {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchHistory = async () => {

    try {

      const response = await fetch('http://localhost:3001/history');

      if (!response.ok) {
        throw new Error('Ошибка загрузки истории');
      }

      const data = await response.json();

      setHistory(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  const clearHistory = async () => {

    try {

        await fetch('http://localhost:3001/history', {
        method: 'DELETE'
        });

        setHistory([]);

    } catch (err) {

        setError(err.message);

    }
    };

  useEffect(() => {
    fetchHistory();
  }, [refreshTrigger]);

  

  return (
    <div className={styles.historyContainer}>

      <h2>История поиска</h2>

      {loading && <p>Загрузка...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && history.length === 0 && (
        <p>История пока пустая</p>
      )}

      <ul className={styles.historyList}>
        {history.map((item) => (
          <li key={item.id} className={styles.historyItem}>

            <span>{item.city}</span>

            <small>
              {new Date(item.createdAt).toLocaleString()}
            </small>

          </li>
        ))}
      </ul>

      <button onClick={clearHistory}>
        Очистить историю
      </button>

    </div>
  );
}

export default History;