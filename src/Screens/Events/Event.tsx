import EventHeader from "../../components/EventsHeader";
import EventTable from "../../components/eventTable";
import { useApi } from "../../context/Api";
import { useState } from "react";
import Images from "../../images/Images";
function Events() {
  // const emergencyAlarms = Items.filter((item) => item.alert === "emergency");
  const { eventData, deleteEvent, searchEvents } = useApi();
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");
  const [searchValue, setSearchValue] = useState("");

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

  const handleDeviceChange = (deviceCode: string | null) => {
    setSelectedDeviceId(deviceCode);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const defaultEventType: any = eventData;
    searchEvents(value, defaultEventType);
  };
  return (
    <div className="container">
      <div className="shead">
        <EventHeader
          search={handleSearch}
          onSelectEventType={handleSelectEventType}
          data={filteredEvents}
          onDeviceChange={handleDeviceChange}
        />
      </div>
      <div className="alarmlist">
        <EventTable
          eventData={filteredEvents}
          icon={Images.events}
          bg={"#DBEAFC"}
          deleteEvent={deleteEvent}
          selectedDeviceId={selectedDeviceId}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default Events;
