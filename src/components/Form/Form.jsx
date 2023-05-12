import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from './Form.module.css';

export const Form = ({saveClick, form, setForm}) => {
  return <div className={Styles.container}>
    <h1 className={Styles.title}>Введите данные</h1>
    <TextField 
      label="idInstance" 
      variant="outlined" 
      value={form.idInstance}
      onChange={e => setForm((prevState) => ({...prevState, idInstance: e.target.value}))}
    />
    <TextField 
      label="apiTokenInstance" 
      variant="outlined" 
      value={form.apiTokenInstance}
      onChange={e => setForm((prevState) => ({...prevState, apiTokenInstance: e.target.value}))}
    />
    <TextField 
      label="Номер" 
      variant="outlined" 
      value={form.phone}
      inputProps={{ maxLength: 11 }}
      onChange={e => setForm((prevState) => ({...prevState, phone: e.target.value}))}
    />
    <Button 
      variant="outlined"
      onClick={saveClick}
      disabled={!form.apiTokenInstance.length || !form.idInstance.length || !form.phone.length}
    >
      СОХРАНИТЬ
    </Button>
  </div>
}