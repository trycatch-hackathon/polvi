import Icon from "../shared/icon"
import Ocorrencia from "../Modal"

const people = [
    {
      name: 'Kauan Vieira',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Kauan',
      role: 'Concluido',
    },
    {
      name: 'Matheus',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Dudu',
      role: 'Pendente',
    },
    {
      name: 'Dudu',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Satu',
      role: 'Agendado',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Pedro',
      role: 'Concluido',
    },
    {
      name: 'Kauan Vieira',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Kauan',
      role: 'Concluido',

    },
    {
      name: 'Matheus',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Dudu',
      role: 'Pendente',
    },
    {
      name: 'Dudu',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Satu',
      role: 'Agendado',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Pedro',
      role: 'Concluido',
    },
    {
      name: 'Kauan Vieira',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Kauan',
      role: 'Concluido',

    },
    {
      name: 'Matheus',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Dudu',
      role: 'Pendente',
    },
    {
      name: 'Dudu',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Satu',
      role: 'Agendado',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      user: 'Pedro',
      role: 'Concluido',
    },

  ]

    const ocurrencies = [{
        status: 'Concluido',
        id: "73b17f5a-af21-4cd8-ab25-cb188b27bbf2",
        type: "Buraco",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgUrl: "https://scontent-gru1-1.xx.fbcdn.net/v/t31.18172-8/10010159_632945340116644_3477860609265010127_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=gmmPAptFS88AX9_Ronf&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdL9E8Ws3zwH_EG4igFcEHoDqu92v4UmtaOZFtb46Vgw&oe=65494E4A",
        lat: 22.49,
        lng: -23.48,
        author:     {
          name: 'Kauan Vieira',
          title: 'Front-end Developer',
          department: 'Optimization',
          email: 'lindsay.walton@example.com',
          user: 'Kauan',
          role: 'Concluido',
        },
        createdAt: "2023-10-08T01:22:51.211Z",
        updatedAt: "2023-10-08T01:22:51.211Z"
      },
      {
        status: 'Concluido',
        id: "73b17f5a-af21-4cd8-ab25-cb188b27bbf2",
        type: "Buraco",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgUrl: "https://scontent-gru1-1.xx.fbcdn.net/v/t31.18172-8/10010159_632945340116644_3477860609265010127_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=gmmPAptFS88AX9_Ronf&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdL9E8Ws3zwH_EG4igFcEHoDqu92v4UmtaOZFtb46Vgw&oe=65494E4A",
        lat: 22.49,
        lng: -23.48,
        author:{
          name: 'Matheus',
          title: 'Front-end Developer',
          department: 'Optimization',
          email: 'lindsay.walton@example.com',
          user: 'Dudu',
          role: 'Pendente',
        },
        createdAt: "2023-10-08T01:22:51.211Z",
        updatedAt: "2023-10-08T01:22:51.211Z"
      },
      {
        status: 'Concluido',
        id: "73b17f5a-af21-4cd8-ab25-cb188b27bbf2",
        type: "Buraco",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgUrl: "https://scontent-gru1-1.xx.fbcdn.net/v/t31.18172-8/10010159_632945340116644_3477860609265010127_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=gmmPAptFS88AX9_Ronf&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdL9E8Ws3zwH_EG4igFcEHoDqu92v4UmtaOZFtb46Vgw&oe=65494E4A",
        lat: 22.49,
        lng: -23.48,
        author:    {
          name: 'Dudu',
          title: 'Front-end Developer',
          department: 'Optimization',
          email: 'lindsay.walton@example.com',
          user: 'Satu',
          role: 'Agendado',
        },
        createdAt: "2023-10-08T01:22:51.211Z",
        updatedAt: "2023-10-08T01:22:51.211Z"
      },
      {
        status: 'Concluido',
        id: "73b17f5a-af21-4cd8-ab25-cb188b27bbf2",
        type: "Poste",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgUrl: "https://scontent-gru1-1.xx.fbcdn.net/v/t31.18172-8/10010159_632945340116644_3477860609265010127_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=gmmPAptFS88AX9_Ronf&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdL9E8Ws3zwH_EG4igFcEHoDqu92v4UmtaOZFtb46Vgw&oe=65494E4A",
        lat: 22.49,
        lng: -23.48,
        author:    {
          name: 'Dudu',
          title: 'Front-end Developer',
          department: 'Optimization',
          email: 'lindsay.walton@example.com',
          user: 'Satu',
          role: 'Agendado',
        },
        createdAt: "2023-10-08T01:22:51.211Z",
        updatedAt: "2023-10-08T01:22:51.211Z"
      },]
  
  export default function Table() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 overflow-auto h-screen-nav-table">
        <div className="sm:flex sm:items-center">
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8 mt-">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="pb-3.5 pl-4 pr-3 text-left text-sm font-semibold text-orange-600 sm:pl-0">
                      Ocorrência
                    </th>
                    <th scope="col" className="px-3 pb-3.5 text-left text-sm font-semibold text-orange-600">
                      Usuário
                    </th>
                    <th scope="col" className="px-3 pb-3.5 text-left text-sm font-semibold text-orange-600">
                     Tipo
                    </th>
                    <th scope="col" className="px-3 pb-3.5 text-left text-sm font-semibold text-orange-600">
                      Status
                    </th>
                    <th scope="col" className="relative pb-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Olho</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {ocurrencies.map((ocurrency, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0  w-32">
                            <div className="font-medium text-gray-900">Lorem Ipsum...</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{ocurrency.author.name}</div>
                        <div className="text-gray-500">{ocurrency.author.email}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-green-600/20">
                        {ocurrency.type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500" ><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {ocurrency.status}
                        </span></td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                       
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Icon name="eye" className=" text-orange-600 hover:text-orange-400" /> <span className="sr-only"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }