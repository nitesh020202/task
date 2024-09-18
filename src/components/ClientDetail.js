// src/components/ClientDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function ClientDetail() {


    const [clients, setClients] = useState([]);
    const [error, setError] = useState(null);

    const { clientId } = useParams(); // Extract clientId from URL
    const [client, setClient] = useState(null);
    const navigate = useNavigate(); // Hook to handle navigation

    useEffect(() => {
        axios.get(`http://localhost:8086/clients/${clientId}`)
            .then(response => setClient(response.data))
            .catch(error => {
                console.error('Error fetching client data:', error);
                setError('Failed to load client data');
            });
    }, [clientId]);

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

    const handleCancel = () => {
        navigate(-1); // Navigate back to the previous page
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!client) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ 
            backgroundColor: 'lightblue', 
            padding: '30px'
        }}>
            <div style={{ 
                marginBottom: '20px', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                maxWidth: '600px',
                margin: 'auto'
            }}>
                <h2 style={{
                    backgroundColor: 'darkblue',
                    textAlign: 'center',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px'
                }}>
                   View Job Sheets
                </h2>

                <div style={{ 
                    margin: '20px 0',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid lightgray'
                }}>
                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Client ID:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.clientId}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Client Name:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.clientName}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Contact Info:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.contactInfo}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Received Date:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {new Date(client.receivedDate).toLocaleDateString()}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Inventory Received:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.inventoryReceived}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Report Issue:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.reportIssue}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Client Notes:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.clientNotes}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Assigned Technician:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.assignedTechnician}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Estimated Amount:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.estimatedAmount}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Deadline:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {new Date(client.deadline).toLocaleDateString()}
                        </div>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '10px',
                        alignItems: 'center',
                        marginTop: '10px'
                    }}>
                        <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                            <strong>Status:</strong>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                            {client.status}
                        </div>
                    </div>
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientNotes">Add or Update Note</label>
                    <textarea
                        id="clientNotes"
                        name="clientNotes"
                        placeholder="Write your notes here ..."
                        style={{ width: '97%', padding: '10px', marginTop: '5px', height: '50px' }}
                    />
                    <div style={{
                        backgroundColor:'darkblue',
                        textAlign:'center',
                        padding:'10px',
                        color:'white',
                        fontWeight:'bold',
                        borderRadius:'5px',
                        width:'98%'
                    }}>
                        Save Notes
                    </div>
                </div>
                <div style={{ 
                    marginTop: '20px',
                   
                }}>
                    <Link 
                        to={`/edit/${client.clientId}`}
                            style={{ textDecoration: 'none' }}
                    >
                        <button 
                        style={{ 
                            padding: '10px 5px',
                            backgroundColor: 'white',
                            color: 'darkblue',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                         }}
                        >
                            Edit
                        </button>
                    </Link>
                    <button 
                        onClick={handleDelete} 
                        style={{
                            padding: '10px 5px',
                            backgroundColor: 'white',
                            color: 'darkblue',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Delete
                    </button>
                </div>
                <div style={{ 
                    marginTop: '20px',
                    textAlign: 'center'
                }}>
                    <button 
                        onClick={handleCancel} 
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'white',
                            color: 'darkblue',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClientDetail;



