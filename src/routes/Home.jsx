import NavBar from "../components/NavBar"
import Stats from "../components/Stats"
import Notifications from "../components/Notifications"
import { useEffect, useState } from "react"
import axios from "axios"
const Home = () => {
  const [messages, setMessages] = useState(0);
  const [users, setUsers] = useState(0);
  const [newUser, setNewUser] = useState('');
  const [unreadMessages, setUnreadMessages] = useState(0);
  useEffect(() => {
    function fetchStats() {

      axios.get(import.meta.env.VITE_BACKEND_URL + "/admin/stats")
        .then(res => {
          const data = res.data
          setUsers(data[0].total_users);
          setMessages(data[1].total_messages);

        })
        .catch(err => {
          console.log("Error fetching stats");

        })
    }
    function fetchNotifications() {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/admin/recent")
        .then(res => {
          const data = res.data
          // console.log(data);
          setNewUser(data[0].recent);
          setUnreadMessages(data[1].total_messages);

        })
        .catch(err => {
          console.log("Error fetching recent info");

        })
    }

    // fetch stats every 5 seconds
    const stats_interval = setInterval(fetchStats, 5000);
    const notifications_interval = setInterval(fetchNotifications, 5000);

    // initialize
    fetchStats()
    fetchNotifications()

    // clear interval on unmount
    return () => {
      clearInterval(stats_interval)
      clearInterval(notifications_interval)
    };
  }, [])
  return (
    <>
      <NavBar />
      <Stats users={users} messages={messages} />
      <Notifications newUser={newUser} unread={unreadMessages} />
    </>
  )
}

export default Home
