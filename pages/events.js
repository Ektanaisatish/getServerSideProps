// import axios from 'axios'

import { useState } from "react";
import { useRouter } from "next/router";
function Eventlist({ eventList }) {
  const [events, setevents] = useState(eventList);
  const router = useRouter();
  const fetchSportEvent = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setevents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportEvent}>Sports Event</button>
      <h1>Event list</h1>
      {eventList.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date}|{event.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}
export default Eventlist;
export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()
  return {
    props: {
      eventList: data,
    },
  };
}
//  Using axios api data fetching
// export async function getServerSideProps() {
//     try {
//         const response = await axios.get('http://localhost:4000/events');
//         const data = response.data;
//         return {
//             props: {
//                 eventList: data,
//             },
//         };
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//         throw error;
//     }
// }
