export const Star = ({ selected = false }) => (
    <span className={`${selected ? "red" : "grey"}`}>{"★"}</span>
    );
