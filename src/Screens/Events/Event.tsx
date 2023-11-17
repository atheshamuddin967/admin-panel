import EventHeader from "../../components/EventsHeader";
import EventTable from "../../components/eventTable";

import Items from "../../Data/ItemData";
import Images from "../../images/Images";
function Events() {
  const emergencyAlarms = Items.filter((item) => item.alert === "emergency");

  return (
    <div className="container">
      <EventHeader />
      <div className="alarmlist">
        <EventTable
          data={emergencyAlarms}
          icon={Images.events}
          bg={"#DBEAFC"}
        />
      </div>
    </div>
  );
}

export default Events;
