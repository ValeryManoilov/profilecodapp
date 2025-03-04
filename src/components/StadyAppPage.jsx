const StadyAppPage = (props) => 
{
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