// function Nav(){
//     return(
//         <>
//         <h1
//         style={{ 
//             backgroundColor: 'darkblue', 
//             color: 'white', 
//             textAlign: 'center', 
//             padding: '10px' ,
//             borderRadius:'5px 5px 0 0'
//         }}
//         >
//             HARDIK TRADERS - CLIENT MANAGEMENT DASHBOARD
//         </h1>
//         <div class="search-container">
//             <input 
//                 style={{ width: '90vw',
//                     padding:'5px'

//                  }}
//                 type="text" 
//                 placeholder="Search by client ID" 
//                 class="search-box"
//   />
//   <button 
//     style={{ width: '7vw',
//         margin:'0 0 0 0.5vw',
//         padding:'5px',
//         backgroundColor:'darkblue',
//         borderRadius:'5px',
//         color: 'white', 
//         borderStyle:'none',
//         fontSize:'17.5px'
//      }}
  
//     type="submit" 
//     class="search-button">Search</button>
// </div>   
//         </>
//     );

// }

// export default Nav;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store input
    const navigate = useNavigate(); // To navigate to the client detail page

    const handleSearch = () => {
        if (searchQuery) {
            navigate(`/client/${searchQuery}`); // Navigate to Client Detail page using clientId from search box
        
        }
    };

    return (
        <>
            <h1
                style={{ 
                    backgroundColor: 'darkblue', 
                    color: 'white', 
                    textAlign: 'center', 
                    padding: '10px',
                    borderRadius: '5px 5px 0 0'
                }}
            >
                HARDIK TRADERS - CLIENT MANAGEMENT DASHBOARD
            </h1>

            <div className="search-container">
                <input 
                    style={{ width: '90vw', padding: '5px' }}
                    type="text" 
                    placeholder="Search by client ID" 
                    value={searchQuery} // Controlled input
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
                    className="search-box"
                />
                <button 
                    style={{ 
                        width: '7vw',
                        margin: '0 0 0 0.5vw',
                        padding: '5px',
                        backgroundColor: 'darkblue',
                        borderRadius: '5px',
                        color: 'white', 
                        borderStyle: 'none',
                        fontSize: '17.5px'
                    }}
                    type="submit"
                    className="search-button"
                    onClick={handleSearch} // Search button handler
                >
                    Search
                </button>
            </div>
        </>
    );
}

export default Nav;
