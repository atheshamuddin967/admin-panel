import Input from "../../components/Input";
import MonitorItem from "../../components/MonitorItem";
import "../Monitoring/Monitoring.scss";
import Items from "../../Data/ItemData";
import { useState } from "react";
function Monitoring() {
  const [filteredItems, setFilteredItems] = useState(Items);

  const handleSearch = (searchTerm: string) => {
    const filtered =
      searchTerm.trim() !== ""
        ? Items.filter((item) =>
            item.id.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : Items;

    setFilteredItems(filtered);
  };

  return (
    <div>
      <div className="inp">
        <Input />
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {filteredItems.map((item) => (
            <div className="col-sm-3">
              <div className="monitor-item">
                <MonitorItem
                  key={item.id}
                  item={item}
                  // onViewImageClick={handleViewImageClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
