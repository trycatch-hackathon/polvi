// type,content, imgUrl, lat, lng, data criação, author
import RowUsuario from './rowUsuario'

export default function Ocorrencia() {
    const person = {
        image: 'https://avatars.githubusercontent.com/u/65795649?v=4',
        name: 'Paulo Guedes',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'paulo.guedes@dale.com',
        user: 'Kauan',
        role: 'Admin',
        phone: '(21) 99999-2222'
    }
    
    const ocurrency = {
        status: 'Concluido',
        id: "73b17f5a-af21-4cd8-ab25-cb188b27bbf2",
        type: "Buraco",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgUrl: "https://scontent-gru1-1.xx.fbcdn.net/v/t31.18172-8/10010159_632945340116644_3477860609265010127_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=gmmPAptFS88AX9_Ronf&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdL9E8Ws3zwH_EG4igFcEHoDqu92v4UmtaOZFtb46Vgw&oe=65494E4A",
        lat: 22.49,
        lng: -23.48,
        authorId: "34253515-602b-4276-b52a-886966b58814",
        createdAt: "2023-10-08T01:22:51.211Z",
        updatedAt: "2023-10-08T01:22:51.211Z"
    }

    var criacao = new Date(ocurrency.createdAt); 
    var edicao = new Date(ocurrency.updatedAt); 

    return (
        // <div className='max-w-[25%]'>
            
        // </div>
        <div className="p-10">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://images.unsplash.com/photo-1556888335-95371827d5fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Ocorrência</div>
                    <p className="text-gray-700 text-base">
                    {ocurrency.content}
                    </p>

                    <label><b>Criado em:</b></label>
                    <p className="text-gray-700 text-base">
                    {criacao.toLocaleString()}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <label><b>Tipo&nbsp;</b></label>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ocurrency.type}</span>
                <label><b>Status&nbsp;</b></label>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ocurrency.status}</span>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Usuário solicitante</div>
                    <RowUsuario person={person}/>
                </div>
            </div>
        </div>
    )
}