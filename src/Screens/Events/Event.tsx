import EventHeader from "../../components/EventsHeader";
import EventTable from "../../components/eventTable";
import { useApi } from "../../context/Api";
import { useState } from "react";
import Images from "../../images/Images";
function Events() {
  // const emergencyAlarms = Items.filter((item) => item.alert === "emergency");
  const { eventData, deleteEvent } = useApi();
  const [filteredEvents, setFilteredEvents] = useState(eventData);
  const eventDatas: any = eventData;
  const handleSelectEventType = (selectedType: string) => {
    if (selectedType === "All") {
      setFilteredEvents(eventData);
    } else {
      const filtered = eventDatas?.filter(
        (event: any) => event?.eventType === selectedType
      );
      setFilteredEvents(filtered);
    }
  };
  return (
    <div className="container">
      <div className="shead">
        <EventHeader onSelectEventType={handleSelectEventType} />
      </div>
      <div className="alarmlist">
        <EventTable
          eventData={filteredEvents}
          icon={Images.events}
          bg={"#DBEAFC"}
          deleteEvent={deleteEvent}
        />
      </div>
    </div>
  );
}

export default Events;
