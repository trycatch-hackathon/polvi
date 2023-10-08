export default function RowUsuario(props) {
    return (
        <div className="bg-white rounded-lg p-6">
            <img src={props.person.image} className="h-16 w-16 rounded-full mx-auto" />
            <div>
                <h2>{props.person.name}</h2>
                <h2>{props.person.email}</h2>
                <h2>{props.person.phone}</h2>
            </div>
        </div>
    )
}