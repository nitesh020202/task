
import React, { useState } from 'react';
import axios from 'axios';

function Dataform() {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState(null);
    const [newClient, setNewClient] = useState({
        clientId: '',
        clientName: '',
        contactInfo: '',
        receivedDate: '',
        inventoryReceived: '',
        reportIssue: '',
        clientNotes: '',
        assignedTechnician: '',
        estimatedAmount: '',
        deadline: '',
        status: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8086/clients', newClient)
            .then(response => {
                setClients([...clients, response.data]);
                setNewClient({
                    clientId: '',
                    clientName: '',
                    contactInfo: '',
                    receivedDate: '',
                    inventoryReceived: '',
                    reportIssue: '',
                    clientNotes: '',
                    assignedTechnician: '',
                    estimatedAmount: '',
                    deadline: '',
                    status: ''
                });
                setError(null); // Clear error if submission is successful
            })
            .catch(error => {
                console.error('Error adding client:', error);
                setError('Failed to add client');
            });
    };

    return (
        <div style={{
            backgroundColor: 'lightblue',
            padding: '30px'
        }}>
            {error && <div style={{ color: 'red', marginBottom: '20px' }}>Error: {error}</div>}
            <form onSubmit={handleSubmit} style={{
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
                    color: 'white'
                }}>
                   Create New Job Sheet
                </h2>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientId">Client Id</label>
                    <input
                        type="text"
                        id="clientId"
                        name="clientId"
                        placeholder="Client Id"
                        value={newClient.clientId}
                        onChange={handleInputChange}
                        required
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientName">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        placeholder="Client Name"
                        value={newClient.clientName}
                        onChange={handleInputChange}
                        required
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="contactInfo">Contact Info</label>
                    <input
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        placeholder="Contact Info"
                        value={newClient.contactInfo}
                        onChange={handleInputChange}
                        required
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="receivedDate">Received Date</label>
                    <input
                        type="date"
                        id="receivedDate"
                        name="receivedDate"
                        placeholder="Received Date"
                        value={newClient.receivedDate}
                        onChange={handleInputChange}
                        required
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="inventoryReceived">Inventory Received</label>
                    <input
                        type="text"
                        id="inventoryReceived"
                        name="inventoryReceived"
                        placeholder="Inventory Received"
                        value={newClient.inventoryReceived}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="reportIssue">Report Issue</label>
                    <input
                        type="text"
                        id="reportIssue"
                        name="reportIssue"
                        placeholder="Report Issue"
                        value={newClient.reportIssue}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientNotes">Client Notes</label>
                    <textarea
                        id="clientNotes"
                        name="clientNotes"
                        placeholder="Client Notes"
                        value={newClient.clientNotes}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px', height: '100px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="assignedTechnician">Assigned Technician</label>
                    <input
                        type="text"
                        id="assignedTechnician"
                        name="assignedTechnician"
                        placeholder="Assigned Technician"
                        value={newClient.assignedTechnician}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="estimatedAmount">Estimated Amount</label>
                    <input
                        type="number"
                        id="estimatedAmount"
                        name="estimatedAmount"
                        placeholder="Estimated Amount"
                        value={newClient.estimatedAmount}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="deadline">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        placeholder="Deadline"
                        value={newClient.deadline}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="status">Status</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        placeholder="Status"
                        value={newClient.status}
                        onChange={handleInputChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <button 
                    type="submit" 
                    style={{ 
                        backgroundColor: 'darkblue', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        cursor: 'pointer', 
                        borderRadius: '5px', 
                        width: '100%' 
                    }}>
                    Save Job Sheet
                </button>
            </form>
        </div>
    );
}

export default Dataform;
