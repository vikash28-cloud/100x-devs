const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);


function signJwt(username, password) {
    const emailRes = emailSchema.safeParse(username);
    const passRes = passwordSchema.safeParse(password);

    if (!emailRes.success || !passRes.success) {
        return null;
    }

    const token = jwt.sign(username, jwtPassword);
    verifyJwt(token);
    decodeJwt(token);

}



function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    }
    catch(e){
        console.log("error");
        ans=  false;

    }

    console.log(ans);


}


function decodeJwt(token) {
    const decode = jwt.decode(token);
    if (decode) {
        console.log(decode);
    }
    else {
        console.log("error");
    }
}

signJwt("expertvikash@gmail.com", "111111111");

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};