import './App.css';
import { Typography, Button, FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export default function App() {
  return (
    <div className="App">
      <Box 
        sx={{ width: '100%', maxWidth: 500 }}
        >
        <div className="box">
          <Typography style={{ fontSize: 30 }}>BeachyJ</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Enter your username and password
          </Typography>
          <div className="width-100 text-field">
            <FormControl className="block">
                <InputLabel htmlFor="component-outlined">Username or Email</InputLabel>
                <OutlinedInput
                id="component-outlined"
                // value={}
                // onChange={}
                label="Username or email"
                />
            </FormControl>
          </div>
          <div className="width-100 text-field">
            <FormControl className="block">
                <InputLabel htmlFor="component-outlined">Password</InputLabel>
                <OutlinedInput
                id="component-outlined"
                // value={}
                // onChange={}
                label="Password"
                />
            </FormControl>
          </div>
          <div className="width-100">
            <Button
              variant="contained"
              style={{ width: 230, marginBottom: 10, height: 23, borderRadius: 25 }}
            >
              Login
            </Button>
          </div>
          <Link className="block" href="#" underline="hover" style={{ color: "black" }}>
            No account? Register here!
          </Link>
        </div>
      </Box>
    </div>
  );
}
