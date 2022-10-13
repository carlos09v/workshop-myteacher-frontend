import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'
// tsx = TypeScript + jsx

//1 - Componentes tradicionais - React
/*
function Botao(props) {
  return <a href='#'>{props.titulo}</a>
}
*/

//2 - Componentes Estilizados - Material UI > React UI tools

const Home: NextPage = () => {
  // <Botao titulo='Click' />
  // Destructuring
  const { listaProfessores, nome, setNome, email, setEmail, professorSelecionado, setProfessorSelecionado, marcarAula, mensagem, setMensagem } = useIndex()

  return (
    // < Importando Componentes >
    // </> - elemento raiz
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
        professores={listaProfessores}
        onSelect={(professor => setProfessorSelecionado(professor))}
        ></Lista>
      </Box>

      {/* Material UI - Dialog(modal) */}
      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado !== null} fullWidth PaperProps={{sx: {p: 5}}}>
        {/* Material UI - Grid */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label='Digite o nome'
              type='text'
              fullWidth
              onChange={e => setNome(e.target.value)}
              value={nome}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label='Digite o email'
              type='email'
              fullWidth
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar message={mensagem} open={mensagem.length > 0} autoHideDuration={2500} onClose={() => setMensagem('')} />
    </div>

  )
}

export default Home
