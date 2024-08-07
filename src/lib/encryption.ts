const bcrypt = require('bcrypt');

export function generateVerifyToken(userId: number) {
    return bcrypt.hash(userId.toString(), 10).then(function(hashedToken: string) {
        return hashedToken;
    });
}

export function hashPassword(unHashedPassword: string) {
    return bcrypt.hash(unHashedPassword, 10).then(function(hash: string) {
        return hash;    
    });
} 

export function comparePassword(unHashedPassword: string, hashedPassword: string) {
    return bcrypt.compare(unHashedPassword, hashedPassword).then(function(result: boolean) {
        return result;
    });
}