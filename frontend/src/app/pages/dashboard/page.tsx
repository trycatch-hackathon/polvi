import Table from "../../components/Table";
import Navbar from "../../components/navbar";
import Map from "../../components/Map";


export default function Example() {
    return (
      <div className="flex bg-white">
            <div className="w-[60%]">
              <Map />
            </div>
            <div className="w-[40%]">
              <Navbar/>
              <Table/>  
            </div>
      </div>
    )
  }
  