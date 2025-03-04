const StadyAppPage = (props) => 
{
    console.log("Stady:", props.stady);
    return(
        <div>
            {
                props.stady == "Wait"
                ?
                <p>Wait</p>
                :
                <p>Reject</p>
            }
        </div>
    )
}

export default StadyAppPage;