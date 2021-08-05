const CtaButton = (props) => {
    return (
        <a className={`${props.background || "bg-primary"} rounded px-6 py-2 text-dark font-semibold ${props.hoverBg || "bg-primary"}`}
            href={props.link || "/"}>
            {props.text || "Apply some text"}
        </a>
    );
}

export default CtaButton;