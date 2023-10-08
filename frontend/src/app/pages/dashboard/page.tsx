import Table from "@/app/components/Table";
import Navbar from "@/app/components/navbar";
import Map from "@/app/components/Map";


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
  