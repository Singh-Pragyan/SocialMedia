import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const SuggestedUser = () => {
    const { suggestedUsers } = useSelector(store => store.auth);

    return (
        <div className='my-10'>
            <div className='flex items-center justify-between text-sm'>
                <h1 className='font-semibold text-gray-600 '>Suggested for you</h1>
                <span className='font-medium cursor-pointer '>See All</span>
            </div>
            {suggestedUsers && suggestedUsers.length > 0 ? (
                suggestedUsers.map((user) => {
                    return (
                        <div key={user._id}>
                            <div className='flex items-center justify-between my-5'>
                                <div className='flex items-center gap-2'>
                                    <Link to={`/profile/${user._id}`} >
                                        <Avatar>
                                            <AvatarImage src={user.profilePicture} alt="Post Image"></AvatarImage>
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Link>
                                    <div>
                                        <h1 className='font-semibold text-sm'>
                                            <Link to={`/profile/${user._id}`} >{user.username}</Link>
                                        </h1>
                                        <span className='text-gray-600 text-sm'>{user.bio || "bio here..."}</span>
                                    </div>
                                </div>
                                <span className='text-[#3BADF8] text-xs font-bold cursor-pointer hover:text-[#3495d6]'>Follow</span>
                            </div>
                        </div>
                    )
                })
            ) : (
                <div>No suggested users found.</div>
            )}
        </div>
    )
}

export default SuggestedUser;
