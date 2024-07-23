import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://img.odcdn.com.br/wp-content/uploads/2022/03/insanely-accurate-batmobile-replica-based-on-1976-cadillac-eldorado-wants-to-be-yours_6.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
