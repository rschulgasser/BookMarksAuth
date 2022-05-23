import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomeRow from '../Components/HomeRow';
import { useAuthContext } from '../AuthContext';

const Home = () => {
    const history = useHistory();
    const {user} = useAuthContext();
    const [top5BookMarks, setTop5BookMarks]=useState([]);

    useEffect(() => {
        const getBookMarks = async () => {
            const { data } = await axios.get('/api/BookMarks/gettopfive');
            setTop5BookMarks(data);
           
        }

        getBookMarks();
       
    }, []);
 
    return <div id="root">
        <div>
      <div className="container">
          <div>
              <h1>Welcome to the React Bookmark Application.</h1>
              <h3>Top 5 most bookmarked links</h3>
              <table className="table table-hover table-striped table-bordered">
                  <thead>
                    <tr>
                        <th>Url</th>
                        <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                      {top5BookMarks && top5BookMarks.map((m,i)=>
                        <HomeRow
                            k={i}
                            BookMark={m}
                        />)}
                     </tbody>
                </table>
            </div>
        </div>
    </div>
        </div>
}

export default Home;