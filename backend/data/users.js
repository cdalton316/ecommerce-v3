import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'Heru',
        email:'heru@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name:'Het Heru',
        email:'hetheru@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    }
]
export default users