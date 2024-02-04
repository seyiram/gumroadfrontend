import "./ActivityCardStyles.css";

const ActivityCard = () => {
  return (
    <div className="activity-container">
      <h2 className="activity-title">Activity</h2>
      <div className="activity-content">
        <div className="activity-description">
          Followers and sales will show up here as they come in. For now,&nbsp;
          <a href="/create-product" className="activity-link">
            create a product
          </a>
          &nbsp;or&nbsp;
          <a href="/customize-profile" className="activity-link">
            customize your profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
