function Mailbox(props)
{
    const unreadMessages=props.unreadMessages;
    return(
        <div>
            <h1>Hello</h1>
            {
                unreadMessages>0 && <h1>You have {unreadMessages} unread message</h1>
            }
        </div>
    )
}
export default Mailbox;