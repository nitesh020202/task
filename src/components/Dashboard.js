import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Dashboard.css';

function Dashboard() {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8086/clients')
            .then(response => setClients(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load data');
            });
    }, []);

    const handleDelete = (clientId) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            axios.delete(`http://localhost:8086/clients/${clientId}`)
                .then(() => {
                    // Remove the client from the state
                    setClients(clients.filter(client => client.clientId !== clientId));
                })
                .catch(error => {
                    console.error('Error deleting client:', error);
                    setError('Failed to delete client');
                });
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Link to="/dataform" style={{ textDecoration: 'none' }}>
                <h1
                    style={{
                        backgroundColor: 'darkblue',
                        margin: '20px 35vw',
                        padding: '10px 0',
                        textAlign: 'center',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Add Job Sheets
                </h1>
            </Link>
            <div style={{ overflowX: 'auto' }}> {/* Container for horizontal scrolling */}
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr
                            style={{
                                backgroundColor: 'darkblue',
                                color: 'white',
                                textAlign: 'left'
                            }}
                        >
                            <th>Sr_no</th>
                            <th>Client Id</th>
                            <th>Client Name</th>
                            <th>Contact Info</th>
                            <th>Received Date</th>
                            <th>Inventory Received</th>
                            <th>Report Issue</th>
                            <th>Client Notes</th>
                            <th>Assigned Technician</th>
                            <th>Estimated Amount</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.length === 0 ? (
                            <tr>
                                <td colSpan="13" style={{ textAlign: 'center' }}>No clients available</td>
                            </tr>
                        ) : (
                            clients.map(client => (
                                <tr key={client.clientId}>
                                    <td>{client.id}</td>
                                    <td>{client.clientId}</td>
                                    <td>{client.clientName}</td>
                                    <td>{client.contactInfo}</td>
                                    <td>{new Date(client.receivedDate).toLocaleDateString()}</td>
                                    <td>{client.inventoryReceived}</td>
                                    <td>{client.reportIssue}</td>
                                    <td>{client.clientNotes}</td>
                                    <td>{client.assignedTechnician}</td>
                                    <td>{client.estimatedAmount}</td>
                                    <td>{new Date(client.deadline).toLocaleDateString()}</td>
                                    <td>{client.status}</td>
                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
                                            <Link 
                                                to={`/client/${client.clientId}`}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <button 
                                                    style={{ backgroundColor: 'darkblue', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px', color: 'white' }}
                                                >
                                                    View
                                                </button>
                                            </Link>
                                            <Link 
                                                to={`/edit/${client.clientId}`}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <button 
                                                    style={{ backgroundColor: 'orange', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px', color: 'white' }}
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(client.clientId)}
                                                style={{ backgroundColor: 'red', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px', color: 'white' }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;

