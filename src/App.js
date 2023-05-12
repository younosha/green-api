import { Form } from './components/Form/Form'
import { Chat } from './components/Chat/Chat'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [form, setForm] = useState({
    idInstance: '1101818494',
    apiTokenInstance: 'd3e84812f1fb4bb7af08f480c963b04c8128c1709f6946fa9e',
    phone: '79897154276',
  });

  return (
    <div style={{padding: '20px'}}>
      {page ? <Chat form={form}/> : <Form form={form} setForm={setForm} saveClick={() => setPage(1)}/>}
    </div>
  );
}

export default App;
