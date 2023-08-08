import KeyManager from '@/components/GenerateKeys/KeyManager';
import Options from '@/components/OthersWallet/Options';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <main className="main">
      <div className="main__wallets">
        <h1 className="main__h1">Conectar con una billetera</h1>
        <Options />
      </div>
      <KeyManager />
      <ToastContainer />
    </main>
  );
}
