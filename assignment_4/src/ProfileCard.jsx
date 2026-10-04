function ProfileCard(props) {
    return (
        <div className="profile-card">

            <img
                src={props.image}
                alt={props.name}
                className="profile-image"
            />

            <div className="profile-content">
                <h2>{props.name}</h2>

                <p>{props.description}</p>

                <button>View Profile</button>
            </div>

        </div>
    );
}

export default ProfileCard;