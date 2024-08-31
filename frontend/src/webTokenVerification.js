import{jwtDecode} from 'jwt-decode';
const checkTokenValidity=(webToken)=>{
    try{
        const decodeWT=jwtDecode(webToken);
        const currentTime=Date.now()/1000;
        return decodeWT.exp>currentTime;
    }
    catch(error){
        return false;
    }
};
export const isWebTokenValid=()=>{
    const token=JSON.parse(localStorage.getItem('webToke'));
    return checkTokenValidity(token);
}