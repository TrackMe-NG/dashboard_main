const Notification = () => {
  return (
    <section className="notification_sec">
      <div className="notification_inner">
        {/* SETTINGS HEADER */}
        <div className="settings_header">
          <div className="settings_header_inner">
            <div className="settings_header_left">
              <h4>account settings</h4>
              <p>Adjust whichever setting you want here</p>
            </div>
            <div className="settings_header_right">
              <button className="hover_animation small"> cancel </button>
              <button className="hover_animation small">save changes</button>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <h4>Notification</h4>
      </div>
    </section>
  );
};

export default Notification;
