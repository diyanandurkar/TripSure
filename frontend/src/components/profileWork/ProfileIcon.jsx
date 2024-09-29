import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function ProfileIcon() {
    const { loginWithRedirect , isAuthenticated , logout} = useAuth0();
    return (
        <>

            <div>


                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">

                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow">

                        <li><p>Hello Jash Mistry</p></li>
                        <li><a href='/yourtrip'>Your trips</a></li>
                        <li><a href='/editprofile'>Edit your profile</a></li>
                        <li><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</a></li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default ProfileIcon