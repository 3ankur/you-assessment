import { GoogleLogin } from 'react-google-login';

const SignUpIn = () => {

    const failResponseGoogle = (error: any) => {
        console.log(error);
    }

    const successResponseGoogle = (res: any) => {
        console.log(res)
    }

    return (
        <div>
            
            <GoogleLogin
                clientId="506697149710-4g07enb005b84mctn5cg5iecdr8ca6th.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={successResponseGoogle}
                onFailure={failResponseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>
    )
}
export default SignUpIn;