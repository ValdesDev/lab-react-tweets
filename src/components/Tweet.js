import ProfileImage from "../components/ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={user}/>

          <Timestamp time={timestamp}/>
        </div>

        <Message message={message} />

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
