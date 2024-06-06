import { useEffect,useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const [submit,setsubmit]=useState(false);

  const navigate = useNavigate();

  useEffect(()=>{

    if(submit){
           var data={
             name:name,
             email:email,
             pass_code:pass
           };
           send(data);
           setsubmit(!submit);
        }
  },[submit]);

  async function send(data)
  {
    console.log(data);
    try {
            const response = await fetch('http://localhost:5000/endpoint', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
        
          if (response.ok) {
              const jsonResponse = await response.json();
              console.log('Response from server:', jsonResponse);
              navigate('/success');
            } else {
              console.error('Server error:', response.statusText);
          }
    } catch (error) {
            console.error('Fetch error:', error);
      }
  }
  return (
    <div className="login">
          <img src={`${process.env.PUBLIC_URL}/cart.gif`} alt="Description of my image" className='image'/>

        <div id="form">
          <div className='input'>
          <h1>LOG-IN</h1>
          </div>

          <div className='input'>
          <h3>Name:</h3>
          <input type="text" name="name" placeholder='enter your name' onChange={(e)=>setname(e.target.value)}></input>
          </div>

          <div className='input'>
          <h3>Email:</h3>
          <input type="text" name="name" placeholder='enter your Email' onChange={(e)=>setemail(e.target.value)}>

          </input>
          </div>

          <div className='input'>
          <h3>Password:</h3>
          <input type="text" name="name" placeholder='enter your Password' onChange={(e)=>setpass(e.target.value)}>

          </input>
          </div>

        <button onClick={(e)=>setsubmit(!submit)}>submit</button>

        </div>
    </div>
  );
}

export default App;
