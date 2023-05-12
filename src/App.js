import { Form } from './components/Form/Form'
import { Chat } from './components/Chat/Chat'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [form, setForm] = useState({
    idInstance: '',
    apiTokenInstance: '',
    phone: '',
  });

  return (
    <div style={{padding: '20px'}}>
      {page ? <Chat form={form}/> : <Form form={form} setForm={setForm} saveClick={() => setPage(1)}/>}
    </div>
  );
}

export default App;
