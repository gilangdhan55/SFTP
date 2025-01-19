import bcyrpt from "bcrypt";
const saltRound = 10;

const encript = (password) => {
    return bcyrpt.hashSync(password, saltRound);
}

const compare = (password, hash) => {
    return bcyrpt.compare(password, hash);
}

export {encript, compare};
