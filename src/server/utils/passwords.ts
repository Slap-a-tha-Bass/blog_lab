import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

export const compareHash = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
};

// console.log(generateHash('password123'));
// $2b$12$azWUtsgcakDK21EbLZr5oOUO2SdNmGdUDVso1pUb47ZMrZcFF7PVC