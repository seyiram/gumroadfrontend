import "./ChecklistCardStyles.css";

const ChecklistCard = () => {
  return (
    <div className="checklist-card">
      <h2 className="checklist-title">Getting started</h2>
      <div className="checklist-grid">
        <div className="checklist-item completed">
          <span className="checklist-custom-checkbox">&#10003;</span>
          <span className="checklist-item-text">Customize your profile</span>
        </div>
        <div className="checklist-item">
          <span className="checklist-custom-checkbox"></span>
          <span className="checklist-item-text">Get your first follower</span>
        </div>
        <div className="checklist-item">
          <span className="checklist-custom-checkbox"></span>
          <span className="checklist-item-text">Get your first payout</span>
        </div>
        <div className="checklist-item">
          <span className="checklist-custom-checkbox"></span>
          <span className="checklist-item-text">Create your first product</span>
        </div>
        <div className="checklist-item">
          <span className="checklist-custom-checkbox"></span>
          <span className="checklist-item-text">Make your first sale</span>
        </div>
        <div className="checklist-item">
          <span className="checklist-custom-checkbox"></span>
          <span className="checklist-item-text">
            Send out your first email blast
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCard;
