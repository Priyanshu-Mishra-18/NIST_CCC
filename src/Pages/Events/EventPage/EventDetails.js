import React, {  useState } from 'react'
import { useLocation } from 'react-router'
import { eventDetails } from '../../../Component/Data/eventDetails';


const EventDetails = () => {
  const loc = useLocation();
  const [state] = useState(eventDetails);


  var filterData = [];
  if (loc.pathname === '/events-all') {
    filterData = state
  }
  if (loc.pathname === '/events-upcoming') {
    filterData = state.filter((item) => item.event_type.toLowerCase() === 'upcoming');
  }
  if (loc.pathname === '/events-previous') {
    filterData = state.filter((item) => item.event_type.toLowerCase() === 'previous');
  }




  return <section className="event--details--section">
    {
      filterData && filterData.length > 0
        ? filterData.map((item,i) => {
          const { event_type, name, describe, date } = item;
          return <div key={i} className="event--card card shadow-lg">
            <p className="badge bg-warning"><i className="fas fa-atom"></i> {event_type}</p>
            <main className="p-0">
              <img width="250" className="p-0" height="180"
                src="https://cdn.datafloq.com/cache/blog_pictures/878x531/7-reasons-serverless-computing-revolution-cloud.jpg" alt=""
              />
            </main>
            <main className="event--text">
              <h3>{name}</h3>
              <p>
                {describe}
              </p>
              <h6>Date: {date} </h6>
              <button className="btn btn-primary">
                Check Details <i className="fas fa-long-arrow-alt-right p-1"></i>
              </button>
            </main>
          </div>
        })
        : <div className="event--card shadow">
          <article className="no--data">
            <i className="fas fa-frown-open fa-4x"></i>
            <p>Oops! No Event Data</p>
          </article>
        </div>
    }
  </section>
}

export default EventDetails
