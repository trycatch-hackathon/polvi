import Table from "@/app/components/table";
import Navbar from "@/app/components/navbar";
import Map from "@/app/components/Map";


export default function Example() {
    return (
      <div className="bg-white">
        <Navbar />  
          <div className="flex mt-2" >
            <Map />
            <Table/>  
          </div>
      </div>
    )
  }
  