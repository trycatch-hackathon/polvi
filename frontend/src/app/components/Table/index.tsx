import Icon from "../shared/icon"

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
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div>
                            <div className="font-medium text-gray-900">{person.name}</div>
                            <div className="mt-1 text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                        <div className="mt-1 text-gray-500">{person.department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-green-600/20">
                        {person.user}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500" ><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {person.role}
                        </span></td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                       
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                       <Icon name="eye" className=" text-orange-600 hover:text-orange-400" /> <span className="sr-only"> {person.name}</span>
                        </a>
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