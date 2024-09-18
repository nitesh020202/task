// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function EditClient() {
//     const { clientId } = useParams(); // Get clientId from URL
//     const navigate = useNavigate();
//     const [client, setClient] = useState({
//         clientId: '',
//         clientName: '',
//         contactInfo: '',
//         receivedDate: '',
//         inventoryReceived: '',
//         reportIssue: '',
//         clientNotes: '',
//         assignedTechnician: '',
//         estimatedAmount: '',
//         deadline: '',
//         status: ''
//     });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get(`http://localhost:8086/clients/${clientId}`)
//             .then(response => setClient(response.data))
//             .catch(error => {
//                 console.error('Error fetching client details:', error);
//                 setError('Failed to load client details');
//             });
//     }, [clientId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setClient(prevClient => ({
//             ...prevClient,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8086/clients/${clientId}`, client)
//             .then(() => navigate('/'))
//             .catch(error => {
//                 console.error('Error updating client:', error);
//                 setError('Failed to update client');
//             });
//     };

//     const handleCancel = () => {
//         navigate('/'); // Navigate back to the home page or previous page
//     };

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
//             <form onSubmit={handleSubmit} style={{ 
//                 marginBottom: '20px', 
//                 padding: '20px', 
//                 backgroundColor: 'white', 
//                 borderRadius: '8px',
//                 maxWidth: '600px',
//                 margin: 'auto'
//             }}>
//                 <h2 style={{
//                     backgroundColor: 'darkblue',
//                     textAlign: 'center',
//                     color: 'white'
//                 }}>
//                    Edit Job Sheet
//                 </h2>
//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="clientName">Client Name</label>
//                     <input
//                         type="text"
//                         id="clientName"
//                         name="clientName"
//                         placeholder="Client Name"
//                         value={client.clientName}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="contactInfo">Contact Info</label>
//                     <input
//                         type="text"
//                         id="contactInfo"
//                         name="contactInfo"
//                         placeholder="Contact Info"
//                         value={client.contactInfo}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="receivedDate">Received Date</label>
//                     <input
//                         type="date"
//                         id="receivedDate"
//                         name="receivedDate"
//                         placeholder="Received Date"
//                         value={client.receivedDate}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="inventoryReceived">Inventory Received</label>
//                     <input
//                         type="text"
//                         id="inventoryReceived"
//                         name="inventoryReceived"
//                         placeholder="Inventory Received"
//                         value={client.inventoryReceived}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="reportIssue">Report Issue</label>
//                     <input
//                         type="text"
//                         id="reportIssue"
//                         name="reportIssue"
//                         placeholder="Report Issue"
//                         value={client.reportIssue}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="clientNotes">Client Notes</label>
//                     <textarea
//                         id="clientNotes"
//                         name="clientNotes"
//                         placeholder="Client Notes"
//                         value={client.clientNotes}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px', height: '100px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="assignedTechnician">Assigned Technician</label>
//                     <input
//                         type="text"
//                         id="assignedTechnician"
//                         name="assignedTechnician"
//                         placeholder="Assigned Technician"
//                         value={client.assignedTechnician}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="estimatedAmount">Estimated Amount</label>
//                     <input
//                         type="number"
//                         id="estimatedAmount"
//                         name="estimatedAmount"
//                         placeholder="Estimated Amount"
//                         value={client.estimatedAmount}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="deadline">Deadline</label>
//                     <input
//                         type="date"
//                         id="deadline"
//                         name="deadline"
//                         placeholder="Deadline"
//                         value={client.deadline}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="status">Status</label>
//                     <input
//                         type="text"
//                         id="status"
//                         name="status"
//                         placeholder="Status"
//                         value={client.status}
//                         onChange={handleChange}
//                         style={{ width: '97%', padding: '10px', marginTop: '5px' }}
//                     />
//                 </div>

//                 <div style={{ display: 'flex', justifyContent: 'space-between',  width:'100%'}}>
                    

//                     <button 
//                         type="submit" 
//                         style={{ 
//                             backgroundColor: 'darkblue', 
//                             color: 'white', 
//                             padding: '10px 20px', 
//                             border: 'none', 
//                             cursor: 'pointer', 
//                             borderRadius: '5px',
//                             width: '100%' 
//                         }}
//                     >
//                         Save Changes
//                     </button>
//                 </div>
//             </form>
//             <div style={{ 
//                     marginTop: '20px',
//                     textAlign: 'center'
//                 }}>
//                     <button 
//                         onClick={handleCancel} 
//                         style={{
//                             padding: '10px 20px',
//                             backgroundColor: 'darkblue',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '5px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//         </div>
//     );
// }

// export default EditClient;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditClient() {
    const { clientId } = useParams(); // Get clientId from URL
    const navigate = useNavigate();
    const [client, setClient] = useState({
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
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8086/clients/${clientId}`)
            .then(response => setClient(response.data))
            .catch(error => {
                console.error('Error fetching client details:', error);
                setError('Failed to load client details');
            });
    }, [clientId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prevClient => ({
            ...prevClient,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8086/clients/${clientId}`, client)
            .then(() => navigate('/'))
            .catch(error => {
                console.error('Error updating client:', error);
                setError('Failed to update client');
            });
    };

    const handleCancel = () => {
        navigate('/'); // Navigate back to the home page or previous page
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
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
                   Edit Job Sheet
                </h2>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientName">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        placeholder="Client Name"
                        value={client.clientName}
                        onChange={handleChange}
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
                        value={client.contactInfo}
                        onChange={handleChange}
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
                        value={client.receivedDate}
                        onChange={handleChange}
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
                        value={client.inventoryReceived}
                        onChange={handleChange}
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
                        value={client.reportIssue}
                        onChange={handleChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clientNotes">Client Notes</label>
                    <textarea
                        id="clientNotes"
                        name="clientNotes"
                        placeholder="Client Notes"
                        value={client.clientNotes}
                        onChange={handleChange}
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
                        value={client.assignedTechnician}
                        onChange={handleChange}
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
                        value={client.estimatedAmount}
                        onChange={handleChange}
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
                        value={client.deadline}
                        onChange={handleChange}
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
                        value={client.status}
                        onChange={handleChange}
                        style={{ width: '97%', padding: '10px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
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
                        }}
                    >
                        Save Changes
                    </button>
                    
                    
                </div>
                <div 
                        style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
                <button 
                        type="button" 
                        onClick={handleCancel} 
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'transparent',
                            color: 'blue',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            width: '100%'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditClient;
