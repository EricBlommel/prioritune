interface Props {
    children: React.ReactNode;
}

function Card(props: Props) {
    return (
        <div className={"p-8 border rounded-2xl bg-white shadow flex-col"} {...props}/>
    );
}

export default Card;