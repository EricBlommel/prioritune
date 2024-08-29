interface Props {
    children: React.ReactNode;
}

function Chip(props: Props) {
    return (
        <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-100 text-gray-800 size-min flex-nowrap">
            {props.children}
        </span>
    );
}

export default Chip;