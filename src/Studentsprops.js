import Proptypes from 'prop-types'
function Studentsprops(props) {
    return (
        <div className="student">
            <p>Name= {props.name}</p>
            <p>Age= {props.age}</p>
            <p>Student= {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Studentsprops.propTypes = {
    name: Proptypes.string,
    age: Proptypes.number,
    isStudent: Proptypes.bool,
}

Studentsprops.defaultProps = {
    name: "Guest",
    age: 20,
    isStudent: false
}

export default Studentsprops;