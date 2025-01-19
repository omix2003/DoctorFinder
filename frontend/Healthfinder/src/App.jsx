import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HealthcarePage from './components/HealthcarePage';
import axios from 'axios';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <HealthcarePage />
      </div>
    </Router>
  );
}

function HealthcarePage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Make an API request to your backend
    axios.get('http://localhost:5000/api/doctors') // Adjust the URL to your backend
      .then(response => {
        setDoctors(response.data); // Assuming the backend returns the list of doctors
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>Doctors List</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
}