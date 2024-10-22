function ProfilePic()
{
    const HandleClick = (e) =>
    {
        e.target.style.display ='none'
    }
    const imageUrl="./assets/Pic.jpg" 
    return (
    <>
    <img onClick={(e) => HandleClick(e)} src={imageUrl} alt="ProfilePicture " width={200} height={200} />
    </>
    
)
}
export default ProfilePic